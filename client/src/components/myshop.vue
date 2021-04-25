<template>
    <div>
        <div v-if="this.edit == '1' ">
        <h1 style="margin-bottom:40px">MY PERSONAL</h1>

       <div style="margin-bottom:10px">
            <p style="display:inline; color:gray">EMAIL : </p> 
            <p style="display:inline; position:absolute; left:160px">{{seller_email}}</p>
       </div>
           
        <div style="margin-bottom:10px">
            <p style="display:inline; color:gray">FIRSTNAME : </p>
            <p style="display:inline; position:absolute; left:160px">{{seller_firstname}}</p>
        </div>

        <div style="margin-bottom:10px">
            <p style="display:inline; color:gray">LASTNAME : </p>
            <p style="display:inline; position:absolute; left:160px">{{seller_lastname}}</p>
        </div>
        
        <div style="margin-bottom:10px">
            <p style="display:inline; color:gray">NAME SHOP : </p>
            <p style="display:inline; position:absolute; left:160px">{{seller_name_shop}}</p> 
        </div>
        
        <div style="margin-bottom:10px">
            <p style="display:inline; color:gray">PHONE NUMBER : </p>
            <p style="display:inline; position:absolute; left:160px">{{seller_phonenumber}}</p>
        </div>
        
        <h1 style="margin-bottom:40px; margin-top:40px">MY PRODUCT</h1>

        <sui-card-group :items-per-row="3" >
            <sui-card v-for="(key,index) in keysProduct" :key="index" style="height:490px;  box-shadow: 0px 0px 20px 10px #D5D8DC;">
                <sui-card-content >
                    <img :src="product_image[index]" id="img1" :width="280" :height="230">
                    <p style="position:absolute; top:270px; font-weight:900">{{product_name[index]}}</p>
                    <p style="position:absolute; top:315px">{{product_detail[index] | shortDescription}}</p>
                    <p style="position:absolute; top:380px">{{product_unit_price[index]}}  THB</p>
                <sui-rating :rating="value" :max-rating="5" style="position:absolute; top:410px; left:10px" />
                <button class= "buttonEdit" style="position:absolute; top:440px;" @click="gotoeditInfoproduct">EDIT</button>
                </sui-card-content>
            </sui-card>
        </sui-card-group>
        </div>
        <div v-if="this.edit!='1' ">
            <infoEditProduct>
            </infoEditProduct>
        </div>
    </div>
</template>

<script>
import {auth} from "../firebase"
import firebase from "../firebase"
import infoEditProduct from "../components/infoEditProduct"
export default {
    data() {
        return {
            seller_email : "",
            seller_firstname: "",
            seller_lastname: "",
            seller_name_shop: "",
            seller_password: "",
            seller_phonenumber: "",
            value: 1,

            products : {},
            keysProduct : [],
            product_name : [],
            product_image : [],
            product_quantity : [],
            product_unit_price: [],
            product_detail : [],

            edit : "1"
        }
    },
    components:{
        infoEditProduct
    },
    filters : {
    shortDescription(value) {
      if(value && value.length > 100){
        return value.substring(0, 100) + '...';
      }
      else{
        return value;
      }
    }
  },
 methods: {
     gotoeditInfoproduct(){
         this.edit++
     }
 },
    mounted() {
        firebase.ref("seller/" + auth.currentUser.uid).on('value', snapshot => {
            console.log(snapshot.val())
            var seller_email = snapshot.val().seller_email
            var seller_firstname = snapshot.val().seller_firstname
            var seller_lastname =  snapshot.val().seller_lastname
            var seller_name_shop = snapshot.val().seller_name_shop
            var seller_password  = snapshot.val().seller_password
            var seller_phonenumber = snapshot.val().seller_phonenumber

            this.seller_email = seller_email
            this.seller_firstname = seller_firstname
            this.seller_lastname =  seller_lastname
            this.seller_name_shop = seller_name_shop
            this.seller_password  = seller_password
            this.seller_phonenumber = seller_phonenumber
        })

        firebase.ref("product/").orderByChild('sellerUid').equalTo(auth.currentUser.uid).on('value', (snapshot) => {
            this.products = snapshot.val()
            this.keysProduct = Object.keys(snapshot.val())
            console.log(this.keysProduct)

            for(var i=0 ; i<this.keysProduct.length;i++){
                var k = this.keysProduct[i];
                var product_name = this.products[k].product_name
                var product_quantity = this.products[k].product_quantity
                var product_image = this.products[k].product_image
                var product_unit_price = this.products[k].product_unit_price
                var product_detail = this.products[k].product_detail

                this.product_name[i] = product_name
                this.product_quantity[i] = product_quantity
                this.product_image[i] = product_image
                this.product_unit_price[i] = product_unit_price
                this.product_detail[i] = product_detail
            }
        })
    },
}
</script>

<style scoped>
#img1{
  border: none;
  width: 250px;
}
.buttonEdit{
    background-color: white;
    border-radius: 10px;
    border: solid black 1px;
    width: 170px;
    padding: 5px;
    position: absolute;
    top: 350px;
    left: 70px;
}
</style>