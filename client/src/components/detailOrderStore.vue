<template>
    <div>
        
              <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
      </div>

        <p style="display:inline; font-weight:670; font-size:20px; ">Order ID : {{getKeyOrder.substring(1,100)}}</p>

       <p style="font-weight:670; font-size:20px; margin-top:30px ">Customer Infomation</p>
            <div style="margin-bottom:10px;">
                <p style="display:inline; color:#808080">Name : </p> 
                <p style="display:inline">{{customer_firstname}} {{customer_lastname}}</p>
            </div>

            <div style="margin-bottom:10px">
            <p style="display:inline; color:#808080">Email : </p>
            <p style="display:inline">{{customer_email}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Phone Number : </p>
                <p style="display:inline">{{customer_phonenumber}}</p>
            </div>

            <hr>
            <p style="font-weight:670; font-size:20px; margin-top:20px ">Shipped From</p>

            <div style="margin-bottom:10px;">
                <p style="display:inline; color:#808080">Name Shop: </p> 
                <p style="display:inline">{{seller_name_shop}}</p>
            </div>

            <div style="margin-bottom:10px;">
                <p style="display:inline; color:#808080">Address: </p> 
                <p style="display:inline">{{address}} {{seller_district}},<br> {{seller_province}},{{seller_street}}, {{seller_sub_district}}, {{seller_zipcode}}</p>
            </div>

            <div style="margin-bottom:10px;">
                <p style="display:inline; color:#808080">Name : </p> 
                <p style="display:inline">{{seller_firstname}} {{seller_lastname}}</p>
            </div>

            <div style="margin-bottom:10px">
            <p style="display:inline; color:#808080">Email : </p>
            <p style="display:inline">{{seller_email}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Phone Number : </p>
                <p style="display:inline">{{seller_phonenumber}}</p>
            </div>

            <hr>

   

            <p style="font-weight:670; font-size:20px; margin-top:20px ">Products</p>
            <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
                <sui-accordion-content >
                    <sui-table celled >
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>Product ID</sui-table-header-cell>
                                <sui-table-header-cell>Name Product</sui-table-header-cell>
                                <sui-table-header-cell>QTY</sui-table-header-cell>
                                <sui-table-header-cell>Unit price</sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                    <sui-table-body >
                            <sui-table-row v-for="(key,index) in product_description " :key="index">
                                <sui-table-cell>{{keysProduct[index]}}</sui-table-cell>
                                <sui-table-cell>{{product_name[index]}}</sui-table-cell>
                                <sui-table-cell>{{quantity[index]}}</sui-table-cell>
                                <sui-table-cell>{{product_unit_price[index]}}</sui-table-cell>
                            </sui-table-row>
                    </sui-table-body>
                </sui-table>
            </sui-accordion-content>
        </sui-accordion>
        <b-button variant="secondary" style="margin-left:400px" @click="receieOrder(getKeyOrder)">Receive Order</b-button>
        <!-- <p>{{sellerUid}}</p>
        <p>{{getKeyOrder}}</p> -->
        
    </div>
</template>


<script>
import { mapGetters } from 'vuex'
import firebase from "../firebase"
import {dateToString} from '../utils/utils';
export default {
    data() {
        return {
            userid : "",
            sellerUid : "",
            branch_selected : "",
            product_description : [],

            //user
            customer_firstname : "",
            customer_lastname : "",
            customer_phonenumber : "",
            customer_email : "",

            //seller
            seller_firstname : "",
            seller_lastname : "",
            seller_name_shop : "",
            seller_phonenumber : "",
            seller_email : "",
            address : "",
            seller_district : "",
            seller_province : "",
            seller_street : "",
            seller_sub_district : "",
            seller_zipcode : "",

            //product_descript
            keysProduct : [],
            product_name : [],
            product_unit_price : [],
            quantity : [],

            //keyOrder
            keyOrder : "",
            check_load : false

        }
    },
    computed : {
        ...mapGetters([
            'getKeyOrder'
        ])
    },
    methods: {
        receieOrder(keyOrder){
            firebase.ref("pickup_order/" + keyOrder + "/status" + "/atstore").update({
                check_status : true,
                date_time_to_order : dateToString(Date.now())
            })
        }
    },
    mounted() { 

        console.warn(this.$el)
    
        this.keyOrder = this.getKeyOrder


//get pickup_order
    

const myfunc = () => {
    console.log('a')
    firebase.ref("pickup_order/" + this.keyOrder).on("value" , snapshot => {
            console.log(snapshot.val())
            const value1 = snapshot.val()
            this.userid = value1.userid
            this.sellerUid = value1.sellerUid
            this.branch_selected = value1.branch_selected
            this.product_description = value1.product_description

            for(var i = 0 ;i<this.product_description.length ; i++){
                this.keysProduct[i] = this.product_description[i].keysProduct
                this.product_name[i] = this.product_description[i].product_name
                this.product_unit_price[i] = this.product_description[i].product_unit_price
                this.quantity[i] = this.product_description[i].quantity
            }

            firebase.ref("user/" + this.userid).on("value" , snapshot => {
            console.log(snapshot.val())
            const value2 = snapshot.val()
            this.customer_firstname = value2.customer_firstname
            this.customer_lastname = value2.customer_lastname
            this.customer_phonenumber = value2.customer_phonenumber
            this.customer_email = value2.customer_email

            firebase.ref("seller/" + this.sellerUid).on("value" , snapshot => {
                console.log('c')
                console.log(snapshot.val())

                this.seller_firstname = snapshot.val().seller_firstname
                this.seller_lastname = snapshot.val().seller_lastname
                this.seller_name_shop = snapshot.val().seller_name_shop
                this.seller_phonenumber = snapshot.val().seller_phonenumber
                this.seller_email = snapshot.val().seller_email
                this.address = snapshot.val().seller_address1.address
                this.seller_district = snapshot.val().seller_address1.seller_district
                this.seller_province = snapshot.val().seller_address1.seller_province
                this.seller_street = snapshot.val().seller_address1.seller_street
                this.seller_sub_district = snapshot.val().seller_address1.seller_sub_district
                this.seller_zipcode = snapshot.val().seller_address1.seller_zipcode
            })

            })
        }
    )
}

myfunc();
        // const initValue = function (snapshot) {
        //         console.log('a')
        //         console.log(snapshot.val())
        //         const value1 = snapshot.val()
        //         this.userid = value1.userid
        //         this.sellerUid = value1.sellerUid
        //         this.branch_selected = value1.branch_selected
        //         this.product_description = value1.product_description

        //         for(var i = 0 ;i<this.product_description.length ; i++){
        //             this.keysProduct[i] = this.product_description[i].keysProduct
        //             this.product_name[i] = this.product_description[i].product_name
        //             this.product_unit_price[i] = this.product_description[i].product_unit_price
        //             this.quantity[i] = this.product_description[i].quantity
        //         }
        // }

        // const promise1 = new Promise(() => {
        //     firebase.ref("pickup_order/" + this.keyOrder).on("value" , function(snapshot)
        //     )};

        // promise1.then();

        // const promise2 = new Promise((resolve, reject) => {
        //     firebase.ref("user/" + this.userid).on("value" , snapshot => {
        //         console.log('b')
        //         console.log(snapshot.val())
        //         const value2 = snapshot.val()
        //         this.customer_firstname = value2.customer_firstname
        //         this.customer_lastname = value2.customer_lastname
        //         this.customer_phonenumber = value2.customer_phonenumber
        //         this.customer_email = value2.customer_email

        //         if (value2) resolve();
        //         else reject()
        //     });
        // });

        // const promise3 = new Promise((resolve, reject) => {
        //     firebase.ref("seller/" + this.sellerUid).on("value" , snapshot => {
        //         console.log('c')
        //         console.log(snapshot.val())

        //         this.seller_firstname = snapshot.val().seller_firstname
        //         this.seller_lastname = snapshot.val().seller_lastname
        //         this.seller_name_shop = snapshot.val().seller_name_shop
        //         this.seller_phonenumber = snapshot.val().seller_phonenumber
        //         this.seller_email = snapshot.val().seller_email
        //         this.address = snapshot.val().seller_address1.address
        //         this.seller_district = snapshot.val().seller_address1.seller_district
        //         this.seller_province = snapshot.val().seller_address1.seller_province
        //         this.seller_street = snapshot.val().seller_address1.seller_street
        //         this.seller_sub_district = snapshot.val().seller_address1.seller_sub_district
        //         this.seller_zipcode = snapshot.val().seller_address1.seller_zipcode

        //         if (snapshot.val()) resolve();
        //         else reject()
        //     })
        // });
    },
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
}
    
</style>