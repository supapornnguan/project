<template>
    <div>
        <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
      </div>
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>

<p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">DURING SHIPMENT</p>
        <hr>
        <div v-if="isLoading == false">
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:100px; " >Order ID : {{this.$route.params.idOrder.substring(1,100)}}</p>

       <p style="font-weight:670; font-size:20px; margin-top:30px; margin-left:100px ">Customer Infomation</p>
            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080">Name : </p> 
                <p style="display:inline"></p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
            <p style="display:inline; color:#808080; font-size:15px">Email : </p>
            <p style="display:inline;  "></p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Phone Number : </p>
                <p style="display:inline"></p>
            </div>

            <hr>
            <p style="font-weight:670; font-size:20px; margin-top:20px; margin-left:100px ">Shipped From</p>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name Shop: </p> 
                <p style="display:inline">{{seller_name_shop}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Address: </p> 
                <p style="display:inline">{{address}} {{seller_district}}, {{seller_province}},{{seller_street}}, {{seller_sub_district}}, {{seller_zipcode}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name : </p> 
                <p style="display:inline">{{seller_firstname}} {{seller_lastname}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
            <p style="display:inline; color:#808080; font-size:15px">Email : </p>
            <p style="display:inline">{{seller_email}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Phone Number : </p>
                <p style="display:inline">{{seller_phonenumber}}</p>
            </div>

            <hr>
            </div>





        
    </div>
</template>
<script>
import firebase from "../firebase"
    // Import component
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    data() {
        return {
            isLoading: true,
            fullPage: true,

            //product descript
            product_description : [],
            keysProduct : [],
            product_detail : [],
            product_name : [],
            product_unit_price : [],
            quantity : [],

            //seller
            sellerUid : "",
            seller_firstname : "",
            seller_lastname : "",
            seller_phonenumber : "",
            seller_email : "",
            seller_name_shop : ""



        }
    },
    components : {
        Loading
    },
    beforeCreate() {
        this.isLoading = true
        console.log(this.$route.params.idOrderAtstore)
        firebase.ref("pickup_order/" + this.$route.params.idOrderAtstore).on("value" , snapshot => {
            console.log(snapshot.val())
            this.product_description = snapshot.val().product_description
            this.sellerUid = snapshot.val().sellerUid
            console.log(this.product_description)
            console.log(this.sellerUid)

            firebase.ref("seller/" + this.sellerUid).on("value" , snapshot => {
                console.log(snapshot.val())
                this.seller_firstname = snapshot.val().seller_firstname
                this.seller_lastname = snapshot.val().seller_lastname
                this.seller_phonenumber = snapshot.val().seller_phonenumber
                this.seller_email = snapshot.val().seller_email
                this.seller_name_shop = snapshot.val().seller_name_shop
                this.isLoading = false
                console.log("ok")
            })            
        })
    },
}
</script>
<style scoped>
 #headerbar{
  position: relative;
  top: 20px;
}
</style>