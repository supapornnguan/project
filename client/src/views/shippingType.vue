<template>
    <div>
        <navbar/>
        <div v-if="add==1">
            <h3 style="width:400px; color:black; font-weight:1000; margin-left:200px">SHIPPING</h3>
            <h5 style="width:800px; color:black; margin-top:60px; margin-left:400px;">Choose your address</h5>

            <input type="radio" id="yes" :value="address_customer" v-model="picked" style="margin-left:400px;">
            <label for="yes" style="margin-left:10px; margin-top:10px">
            <div id="infoaddress">
                <p>{{customer_address}} 
                    ,
                    {{customer_district}}
                    ,
                    {{customer_province}}
                    ,
                    {{customer_zipcode}}
                    </p>
                <!-- <p>{{address_customer[0].customer_address}}</p> -->
            </div>
            </label>
            <img src="../assets/edit.png" :width="25" id="imgEdit">
            <img src="../assets/delete.png" :width="25" id="imgDelete" @click="deleteAddress">
         <hr style="width:700px">

         <img src="../assets/add.png" :width="14" style="margin-left:-650px;" @click="newAddress">
         <p id="addAddress">ADD A NEW ADDRESS</p>
        </div>

        <div id="buttonposition">
           <button id="selectLocation" style="margin-left:630px" @click="shipSum">SELECT THIS LOCATION</button>
        <br>
        <button id="selectLocation"  style="margin-left:600px" @click="changeType">CHANGE YOUR RECEIVING TYPE</button> 
        </div>
        

        <!-- Add new address -->
        <addNewAddress v-if="add==2"/>

    </div>
</template>
<script>
import navbar from "../components/navbar"
import addNewAddress from "../components/addAddress"
import {auth} from "../firebase"
import firebase from "../firebase"
import {mapGetters} from "vuex"
import {dateToString} from '../utils/utils';
import store from "../store"
export default {
    data() {
        return {
            add:1,
            picked : "",
            userid : "",
            status : "ordered",
            // paymentType: "Bank Transfer",
            quantity_product : "",
            date_time_to_order : "",
            address_customer : [],
            customer_address : "",
            customer_district : "",
            customer_province: "",
            customer_zipcode : "",
            sellerUid_uni : [],
            order_group_by_sellerUid : [],
            number_of_product : 0,
            total_amount : 0,
             
            key_order_mail : {},
            key_order_mail_list : [],
            order_id : "",
            product_description : [],
        

        }
    },
    components:{
        navbar,
        addNewAddress
    },
    methods: {
        newAddress(){
            this.add = 2
        },
        deleteAddress(){
            this.add = 3
        },
        async shipSum(){
            this.date_time_to_order = Date.now();
            if(this.checkPage.check == false){
                this.total_amount = this.summary.quantity * this.summary.product_unit_price
                this.number_of_product = this.summary.quantity
                let description = [{
                    keysProduct : this.key,
                    sellerUid : this.summary.sellerUid,

                    product_image : this.summary.product_image,
                    product_name : this.summary.product_name,
                    product_unit_price : this.summary.product_unit_price,
                    quantity : this.summary.quantity,
                    product_detail : this.summary.product_detail,
                    seller_name_shop : this.summary.seller_name_shop
                }]
                let time_check = {
                    date_time_to_order : dateToString(this.date_time_to_order),
                    check_status : true
                }
                let status_check = {
                    unpaid : time_check,
                    payment : {check_status : false},
                    slip_verified : {check_status : false},
                    packing : {check_status : false},
                    delivery : {check_status : false},
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
                    customer_address : this.picked,
                    // paymentType : this.paymentType,
                    status : status_check,
                    product_description : description,
            }
            //add order to shipping_order
            firebase.ref("shipping_order").push(newOrder)

//send email
             firebase.ref("shipping_order").limitToLast(1).on("value" , snapshot => {
                 console.log(snapshot.val())
                 this.key_order_mail = snapshot.val()
                 this.key_order_mail_list = Object.keys(snapshot.val())
                 for(var i = 0 ; i< this.key_order_mail_list.length ; i++){
                     var k = this.key_order_mail_list[i]
                     this.order_id = k
                    this.product_description = this.key_order_mail[k].product_description
                 }
                
                 for(var j = 0 ; j< this.product_description.length ; j++){
                     console.log(this.product_description[j])
                     console.log(this.product_description[j].keysProduct)

                 }

                 console.log(this.order_id)

             })
              const detail_email = {
                email : auth.currentUser.email,
                order_id : this.order_id.substring(1,100),
                product : this.product_description,
                address_customer : this.customer_address + ',' + this.customer_district+ ',' + this.customer_province+ ',' + this.customer_zipcode
                }
                const url = 'https://us-central1-shopaholic-2385d.cloudfunctions.net/orderedShipping';
                const {email, order_id, product, address_customer} = detail_email;
                const payload = {email, order_id, product, address_customer};

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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
            
            // await firebase.ref("shipping_order").push(newOrder)
            }else{


                // for(var a = 0 ; a < this.sellerUid_uni.length ; a ++ ){
                // for(var b = 0; b < this.summaryCart.length ; b++){
                //     if(this.sellerUid_uni[a] == this.summaryCart[b].sellerUid){
                //         this.order_group_by_sellerUid[b] = this.summaryCart[b]
                //     }
                // } 
                // let newOrder = {
                // userid : auth.currentUser.uid,
                // date_time_to_order : dateToString(this.date_time_to_order),
                // branch_selected : this.picked,
                // product_description : this.order_group_by_sellerUid.filter(val => (val!==undefined) && val!==null),
                // }
                for(var a = 0; a < this.sellerUid_uni.length ; a ++ ){
                    for(var b = 0 ;b < this.summaryCart.length ; b++){
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
                    unpaid : time_check,
                    payment : {check_status : false},
                    slip_verified : {check_status : false},
                    packing : {check_status : false},
                    delivery : {check_status : false},
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
                    customer_address : this.picked,
                    // paymentType : this.paymentType,
                    status : status_check,
                    product_description : this.order_group_by_sellerUid.filter(val => (val!==undefined) && val!==null),
                }

                await firebase.ref("shipping_order").push(newOrder)
                this.order_group_by_sellerUid = []
                }
            // await firebase.ref("shipping_order/").push(newOrder)

                firebase.ref("shipping_order").limitToLast(1).on("value" , snapshot => {
                // console.log(hello)
                 console.log(snapshot.val())
                 this.key_order_mail = snapshot.val()
                 this.key_order_mail_list = Object.keys(snapshot.val())
                 for(var i = 0 ; i< this.key_order_mail_list.length ; i++){
                     var k = this.key_order_mail_list[i]
                     this.order_id = k
                    this.product_description = this.key_order_mail[k].product_description
                   
                 }
                
                 for(var j = 0 ; j< this.product_description.length ; j++){
                     console.log(this.product_description[j])
                     console.log(this.product_description[j].keysProduct)

                 }
                console.log(this.product_description)
                const detail_email = {
                email : auth.currentUser.email,
                order_id : this.order_id.substring(1,100),
                address_customer : this.customer_address + ',' + this.customer_district+ ',' + this.customer_province+ ',' + this.customer_zipcode,
                product : this.product_description
                }

                const url = 'http://localhost:5001/shopaholic-2385d/us-central1/orderedShipping';
                const {email, order_id,address_customer, product} = detail_email;
                const payload = {email, order_id,address_customer, product};

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
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


            }

            //get product_quantity from product collection
            await firebase.ref("product/" + this.key).on('value', snapshot => {
                this.quantity_product = snapshot.val().product_quantity
            })

            //update product_quantity
            await firebase.ref("product/" + this.key).update({ 
                product_quantity : this.quantity_product = this.quantity_product-this.summary.quantity
            })

            store.commit("SET_INFO_SHIPPING", {
                orderdate : dateToString(this.date_time_to_order),
                paymentType : this.paymentType,
                customer_address : this.customer_address,
                customer_district : this.customer_district,
                customer_province : this.customer_province,
                customer_zipcode : this.customer_zipcode
            })
        
            this.$router.replace('/shipSum')
            

        },
        changeType(){
            this.$router.replace('/summary')
        }
    },
    computed: {
        ...mapGetters({
            key : "getProductId",
            summary : "getSummaryPage",
            type : "getReceivingType",
            checkPage : "getStateIscart",
            cartValue : "cartValue",
            cartList : "cartItemList",
            summaryCart : "getSummaryCart",
            summaryCartValue : "getSummaryCartValue"
        })
    },
    mounted() {
        console.log(auth.currentUser.uid)
        firebase.ref('user/' + auth.currentUser.uid).on('value', snapshot =>{
            console.log(snapshot.val())
            this.address_customer = snapshot.val().address
            console.log(this.address_customer[0])
            this.customer_address = this.address_customer[0].customer_address
            this.customer_district = this.address_customer[0].customer_district
            this.customer_province = this.address_customer[0].customer_province
            this.customer_zipcode = this.address_customer[0].customer_zipcode
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
#infoaddress{
    text-align: left;
    margin-top: 30px;
}
#imgEdit{
    position: relative;
    left: 350px;
}
#imgDelete{
    position: relative;
    left: 400px;
}
#addAddress{
    margin-top: -18px;
    margin-left: -460px;
}
#selectLocation{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    margin-top: 20px;
    padding: 5px;
}
#buttonposition{
    margin-top: 70px;
}
</style>