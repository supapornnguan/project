<template>
    <div>
        <navbar/>
        <h3 style="width:400px; color:black; font-weight:1000; margin-left:200px; margin-top:80px">STORE PICK-UP</h3>
        <!-- <search/> -->
        <h5 style="width:800px; color:black; margin-left:400px; margin-top:20px">Choose the store pick-up</h5>
        <br>
            <div id="branch"  v-for="(key,index) in keyStore" :key="index">
                <input type="radio" id="yes" :value="key" v-model="picked">
                <label for="yes" style="margin-left:10px" >{{name_store_pickup[index]}}</label>
                <hr style="width:600px">
            </div>
        <button style=" margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    padding: 7px;
    margin-left: 630px;" @click="showModal(picked)" >CHOOSE THIS STORE</button>

  <!-- <b-modal id="modal-1" title="Store Pick-up">
    <p class="my-4">Hello from modal!</p>
  </b-modal> -->

        <br>
        
        <button id="buttonChoose" @click="changeType">CHANGE YOUR RECEIVING TYPE</button>

         <b-modal ref="my-modal" hide-footer title="CONFIRMATION">
      <div class="d-block text-center" style="margin-bottom:20px">
        <p style="margin-bottom:20px">Store pick-up : {{branch_confirm}}</p>
        <p>Once you submit, you will no longer be able to change your store pick-up.</p>
      </div>
      <b-button class="mt-3" variant="secondary" style="margin-left:290px;" @click="hideModal">CANCLE</b-button>
      <b-button class="mt-3" variant="secondary" style="margin-left:10px;" @click="chooseStore">CONFIRM</b-button>
    </b-modal>

<!-- <p>{{key}}</p> -->

    </div>
</template>
<script>

import navbar from "../components/navbar"
import store from "../store"
import firebase from "../firebase"
import {auth} from "../firebase"
import {dateToString} from '../utils/utils';
import {mapGetters} from "vuex"
export default {
    data() {
        return {
            picked : "",
            date_time_to_order : "",
            userid : "",
            product_key : "",
            total_amount : 0,
            sellerUid : "",
            branch : {},
            keyStore : [],
            name_store_pickup : [],
            status : "ordered",
            quantity_product : "",
            sellerUid_uni : [],
            order_group_by_sellerUid : [],
            showStoreInModal : "",
            number_of_product : 0,
            branch_confirm : "",
            customer_email : "",

            key_order_mail : {},
            key_order_mail_list : [],
            order_id : "",
            product_description : [],
            address : "",
            tell : "",
            hours : "",
            branch_selected : ""


         

        }
    },
    components:{
        navbar,

    },
    methods: {
        showModal(selected) {
        this.$refs['my-modal'].show()
        if(selected == "PU01"){
            this.branch_confirm = "CENTRAL PLAZA PINKLAO"
        }else if(selected == "PU02"){
            this.branch_confirm = "SIAM PARAGON"
        }else if(selected == "PU03"){
            this.branch_confirm = "CENTRAL RAMA3"
        }else if(selected == "PU04"){
            this.branch_confirm = "CENTRAL LARDPRAO"
        }else if(selected == "PU05"){
            this.branch_confirm = "EMQUARTIER"
        }
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
 
        
     chooseStore(){
            this.$refs['my-modal'].hide()
            this.showModal = false
            this.date_time_to_order = Date.now();
            store.commit("SET_BRANCH", {
                picked : this.picked
            })
            //order by 1 product
            if(this.checkPage.check == false){
                let return_product = {
                    return_product : {
                        check_status : false
                    }
                }
                this.total_amount = this.summary.quantity * this.summary.product_unit_price
                this.number_of_product = this.summary.quantity
                let description = [{
                    keysProduct : this.key,
                    // sellerUid : this.summary.sellerUid,
                    
                    product_image : this.summary.product_image,
                    product_name : this.summary.product_name,
                    product_unit_price : this.summary.product_unit_price,
                    quantity : this.summary.quantity,
                    product_detail : this.summary.product_detail,
                    seller_name_shop : this.summary.seller_name_shop,
                    status : return_product
                }]
                let time_check = {
                    date_time_to_order : dateToString(this.date_time_to_order),
                    check_status : true
                }
                let status_check = {
                    ordered : time_check,
                    packing : {check_status : false},
                    delivery : {check_status : false},
                    atstore : {check_status : false},
                    complete : {check_status : false},
                    return : {check_status : false}
                }
                let newOrder = {
                userid : auth.currentUser.uid,
                sellerUid : this.summary.sellerUid,
                total_amount : this.total_amount,
                number_of_product : this.number_of_product,
                tracking_no : {check_track : false},
                // date_time_to_order : dateToString(this.date_time_to_order),
                branch_selected : this.picked,
                status : status_check,
                product_description : description,
                }
             firebase.ref("pickup_order").push(newOrder)
//send email
             firebase.ref("pickup_order").limitToLast(1).on("value" , snapshot => {
                 console.log(snapshot.val())
                 this.key_order_mail = snapshot.val()
                 this.key_order_mail_list = Object.keys(snapshot.val())
                 for(var i = 0 ; i< this.key_order_mail_list.length ; i++){
                     var k = this.key_order_mail_list[i]
                     this.order_id = k
                    this.product_description = this.key_order_mail[k].product_description
                    this.branch_selected = this.key_order_mail[k].branch_selected
                 }
                 firebase.ref("Store/" + this.branch_selected).on("value" , snapshot => {
                     this.address = snapshot.val().address
                     this.tell  = snapshot.val().phone
                     this.hours = snapshot.val().pick_up_hours
                     
                 })
                 for(var j = 0 ; j< this.product_description.length ; j++){
                     console.log(this.product_description[j])
                     console.log(this.product_description[j].keysProduct)

                 }
             })
             var date = new Date();
             date.setDate(date.getDate());

                const detail_email = {
                email : auth.currentUser.email,
                order_id : this.order_id.substring(1,100),
                address : this.address,
                tell : this.tell,
                hours : this.hours,
                product : this.product_description,
                
                }

                const url = 'https://us-central1-shopaholic-2385d.cloudfunctions.net/ordered';
                const {email, order_id, address, tell, hours, product} = detail_email;
                const payload = {email, order_id, address, tell, hours, product};

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods' : 'POST'
                    },
                    body: JSON.stringify(payload)
                })
                    .then(() => {
                        this.success = true;
                        console.log("success")
                        console.log(payload)
                
                    })
                    .catch(() => {
                        this.error = true;
                        console.log("fail")
                    })

            this.$router.replace('pickupSum')

//order from cart

            }else{
            

            for(var a = 0 ; a < this.sellerUid_uni.length ; a ++ ){
                for(var b = 0; b < this.summaryCart.length ; b++){
                    this.number_of_product += this.summaryCart[b].quantity
                    this.total_amount += (this.summaryCart[b].quantity * parseInt(this.summaryCart[b].product_unit_price))
                    if(this.sellerUid_uni[a] == this.summaryCart[b].sellerUid){
                        this.order_group_by_sellerUid[b] = this.summaryCart[b]
                    }
                } 
                let time_check = {
                    date_time_to_order : dateToString(this.date_time_to_order),
                    check_status : true
                }
                let status_check = {
                    ordered : time_check,
                    packing : {check_status : false},
                    delivery : {check_status : false},
                    atstore : {check_status : false},
                    complete : {check_status : false},
                    return : {check_status : false}
                }
                let newOrder = {
                userid : auth.currentUser.uid,
                sellerUid : this.sellerUid_uni[a],
                total_amount : this.total_amount,
                number_of_product : this.number_of_product,
                tracking_no : {check_track : false},
                // date_time_to_order : dateToString(this.date_time_to_order),
                branch_selected : this.picked,
                status : status_check,
                product_description : this.order_group_by_sellerUid.filter(val => (val!==undefined) && val!==null),
                }
                console.log(this.order_group_by_sellerUid)
                firebase.ref("pickup_order").push(newOrder)
                this.order_group_by_sellerUid = []
            }




            firebase.ref("pickup_order").limitToLast(1).on("value" , snapshot => {
 
                 console.log(snapshot.val())
                 this.key_order_mail = snapshot.val()
                 this.key_order_mail_list = Object.keys(snapshot.val())
                 for(var i = 0 ; i< this.key_order_mail_list.length ; i++){
                     var k = this.key_order_mail_list[i]
                     this.order_id = k
                    this.product_description = this.key_order_mail[k].product_description
                    this.branch_selected = this.key_order_mail[k].branch_selected
                 }
                 firebase.ref("Store/" + this.branch_selected).on("value" , snapshot => {
                     this.address = snapshot.val().address
                     this.tell  = snapshot.val().phone
                     this.hours = snapshot.val().pick_up_hours
                     
                 })
                 for(var j = 0 ; j< this.product_description.length ; j++){
                     console.log(this.product_description[j])
                     console.log(this.product_description[j].keysProduct)

                 }
 console.log(this.product_description)
                const detail_email = {
                email : auth.currentUser.email,
                order_id : this.order_id.substring(1,100),
                address : this.address,
                tell : this.tell,
                hours : this.hours,
                product : this.product_description
                }
const url = 'https://us-central1-shopaholic-2385d.cloudfunctions.net/ordered';
                const {email, order_id, address, tell, hours, product} = detail_email;
                const payload = {email, order_id, address, tell, hours, product};

            fetch(url, {
                    method: 'POST',
                    
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(payload)
                })
                    .then(() => {
                        this.success = true;
                        console.log("success")
                        console.log(payload)
                
                    })
                    .catch(() => {
                        this.error = true;
                        console.log("fail")
                        console.log(payload)
                    })



             })
            
            // await firebase.ref("pickup_order/").push(newOrder)
            this.$router.replace('pickupSum')
            }
             firebase.ref("product/" + this.key).on('value', snapshot => {
                this.quantity_product = snapshot.val().product_quantity
            })

             firebase.ref("product/" + this.key).update({ 
                product_quantity : this.quantity_product = this.quantity_product-this.summary.quantity
                })
        },
        changeType(){
            this.$router.replace('/infoProductsummary')
        }
    },
    computed: {
        ...mapGetters({
            summary : "getSummaryPage",
            type : "getReceivingType",
            key : "getProductId",
            checkPage : "getStateIscart",
            cartValue : "cartValue",
            cartList : "cartItemList",
            summaryCart : "getSummaryCart",
            summaryCartValue : "getSummaryCartValue",

        })
    },
    mounted() {
        //get infomation store
        console.log(this.key)
        firebase.ref('Store/').on('value', snapshot => {

           this.branch = snapshot.val() 
           this.keyStore = Object.keys(snapshot.val())

           console.log(this.keyStore)
           for (var i =0 ; i < this.keyStore.length ; i++){
               var k = this.keyStore[i];
               var name_store_pickup = this.branch[k].name_store_pickup
               this.name_store_pickup[i] = name_store_pickup

               console.log(this.keyStore)
           }
        })

        for(var j=0 ; j<this.summaryCart.length;j++){
            this.sellerUid_uni[j] = this.summaryCart[j].sellerUid
        }
        this.sellerUid_uni = [...new Set(this.sellerUid_uni)]
        console.log(this.sellerUid_uni)

        for(var z = 0; z < this.sellerUid_uni.length ; z++){
            for(var q = 0 ;q< this.summaryCart.length ; q++){
                if(this.sellerUid_uni[z] == this.summaryCart[q].sellerUid){
                    console.log(this.sellerUid_uni[z])
                    console.log(this.summaryCart[q].sellerUid)
                    this.order_group_by_sellerUid.push()
                    console.log("match")
                }else{
                    console.log(this.sellerUid_uni[z])
                    console.log(this.summaryCart[q].sellerUid)
                    console.log("not match")
                }
            }
        }
    },
}
</script>
<style>
#buttonChoose{
    margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    padding: 7px;
    margin-left: 600px;
}
#buttonChoose1{
    margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    padding: 7px;
    margin-left: 630px;
}
#branch{
    width: 300px;
    position: relative;
    left: 400px;
    top: 10px;
    text-align: left;
}

</style>