<template>
    <div>
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
            <sui-card v-for="(key,index) in keysProduct" :key="index">
                <sui-card-content>
                    <img :src="product_image[index]" id="img1">
                    <p style="position:absolute; top:270px">{{product_name[index]}}</p>
                    <p style="position:absolute; top:300px">{{product_unit_price[index]}}  THB</p>
                <sui-rating :rating="value" :max-rating="5" style="position:absolute; top:330px; left:10px"/>
                </sui-card-content>
            </sui-card>
        </sui-card-group>
    </div>
</template>

<script>
import {auth} from "../firebase"
import firebase from "../firebase"
export default {
    data() {
        return {
            seller_email : "",
            seller_firstname: "",
            seller_lastname: "",
            seller_name_shop: "",
            seller_password: "",
            seller_phonenumber: "",

            products : {},
            keysProduct : [],
            product_name : [],
            product_image : [],
            product_quantity : [],
            product_unit_price: []
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

                this.product_name[i] = product_name
                this.product_quantity[i] = product_quantity
                this.product_image[i] = product_image
                this.product_unit_price[i] = product_unit_price
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
</style>