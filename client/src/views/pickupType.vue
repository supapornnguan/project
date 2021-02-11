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
        <button id="buttonChoose1" @click="chooseStore">CHOOSE THIS STORE</button>
        <br>
        <button id="buttonChoose" @click="changeType">CHANGE YOUR RECEIVING TYPE</button>
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
            total_amount : "",
            sellerUid : "",
            branch : {},
            keyStore : [],
            name_store_pickup : [],
            status : "ordered",
            quantity_product : "",
            sellerUid_uni : [],
            order_group_by_sellerUid : [],

        }
    },
    components:{
        navbar,
    },
    methods: {
        
        async chooseStore(){
            this.date_time_to_order = Date.now();
            store.commit("SET_BRANCH", {
                picked : this.picked
            })
            if(this.checkPage.check == false){
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
                let newOrder = {
                userid : auth.currentUser.uid,
                date_time_to_order : dateToString(this.date_time_to_order),
                branch_selected : this.picked,
                status : this.status,
                product_description : description,
                }

            await firebase.ref("seller/"+ this.summary.sellerUid + "/pickup_order_seller").push(newOrder)
            this.$router.replace('pickupSum')

            }else{

            for(var a = 0 ; a < this.sellerUid_uni.length ; a ++ ){
                for(var b = 0; b < this.summaryCart.length ; b++){
                    if(this.sellerUid_uni[a] == this.summaryCart[b].sellerUid){
                        this.order_group_by_sellerUid[b] = this.summaryCart[b]
                    }
                } 
                let newOrder = {
                userid : auth.currentUser.uid,
                date_time_to_order : dateToString(this.date_time_to_order),
                branch_selected : this.picked,
                status : this.status,
                product_description : this.order_group_by_sellerUid.filter(val => (val!==undefined) && val!==null),
                }
                console.log(this.order_group_by_sellerUid)
                firebase.ref("seller/" + this.sellerUid_uni[a] + "/pickup_order_seller").push(newOrder)
                this.order_group_by_sellerUid = []
            }   
            
            // await firebase.ref("pickup_order/").push(newOrder)
            this.$router.replace('pickupSum')
            }
            await firebase.ref("product/" + this.key).on('value', snapshot => {
                this.quantity_product = snapshot.val().product_quantity
            })

            await firebase.ref("product/" + this.key).update({ 
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
            summaryCartValue : "getSummaryCartValue"
        })
    },
    mounted() {
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