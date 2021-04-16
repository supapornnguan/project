<template>
    <div>
        <navbar/>
        <h1 id="successWord">SUCCESSFUL TRANSACTION</h1>
        <sui-table style="width:1200px; margin-left:140px; margin-top:50px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body v-if="checkPage.check==false ">
                <sui-table-row>
                    <sui-table-cell><img :src="summary.product_image" :width="150" style="margin-left:90px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{summary.product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{type.total_amount}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{summary.quantity}}</p>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
<!-- summary of cart -->
            <sui-table-body v-if="checkPage.check==true ">
                <sui-table-row v-for="(key,index) in summaryCart" :key="index">
                    <sui-table-cell><img :src="summaryCart[index].product_image" :width="150" style="margin-left:90px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{summaryCart[index].product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{summaryCart[index].product_unit_price}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{summaryCart[index].quantity}}</p>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>

        </sui-table>

        <br>
        <p style="font-weight:600; margin-left:150px;">Pick up at :</p>
        <p style="margin-left:150px;">{{name_store_pickup}}</p>
        <p style="font-weight:600; margin-left:150px">Address :</p>
        <p style="margin-left:150px">{{address}}</p>
        <p style="font-weight:600; margin-left:150px">Hours :</p>
        <p style="margin-left:150px" v-for="item in hours" :key="item.message">{{item}}</p>
        <br>
        <br>
        <!-- <p style="text-align:center">Receive the product 3 days later from the date of purchase.Please pick up the product by April 18, 2020.</p> -->
        <button id="buttonBack" @click="gotoHome">BACK TO MAIN PAGE</button>
        
    </div>
</template>
<script>
import navbar from "../components/navbar"
import {mapGetters ,mapActions} from "vuex"
import firebase from "../firebase"
// import {auth} from "../firebase"
export default {
    data() {
        return {
            name_store_pickup : "",
            address : "",
            hours : "",
            hours1 : "",
            tell : "",
            key_product_clear : [],
            key_order_mail : {},
            key_order_mail_list : [],
            product_description : [],
            order_id : ""

        }
    },
    name: "pickupSum",
    components:{
        navbar
    },
    methods: {
        ...mapActions(['clearCart','removeItemInCart']),
        gotoHome(){
            this.$router.replace('/')
            if(this.checkPage.check==true){
                for(var i = 0 ; i< this.summaryCart.length ; i++){
                this.removeItemInCart({
                    keysProduct : this.summaryCart[i].keysProduct
                })
            }
            }
            
            // this.clearCart()
        }
    },
    computed: {
        ...mapGetters({
            summary : "getSummaryPage",
            type : "getReceivingType",
            branch : "getBranch",
            checkPage : "getStateIscart",
            cartList : "cartItemList",
            summaryCart : "getSummaryCart",
        })
    },
    // mounted() {
    //     firebase.ref('Store/' + this.branch).on('value', snapshot => {
    //         this.name_store_pickup = snapshot.val().name_store_pickup
    //         this.address = snapshot.val().address
    //         this.hours = snapshot.val().pick_up_hours.split(',')
    //         // console.log(snapshot.val())
    //     })
    // },
    beforeMount() {

        firebase.ref('Store/' + this.branch).on('value', snapshot => {
            this.name_store_pickup = snapshot.val().name_store_pickup
            this.address = snapshot.val().address
            this.hours = snapshot.val().pick_up_hours.split(',')
            this.hours1 = snapshot.val().pick_up_hours
            this.tell = snapshot.val().phone
            console.log(this.tell)
            // console.log(snapshot.val())
        })


        //  firebase.ref("pickup_order/").limitToLast(1).on("value", snapshot => {
        //          console.log(snapshot.ref.key)
        //          console.log("hello")
        //          console.log(snapshot.val())
        //          this.key_order_mail = snapshot.val()
        //          this.key_order_mail_list = Object.keys(snapshot.val())
        //          console.log(this.key_order_mail)
        //          console.log(this.key_order_mail_list)
        //          for(var i = 0 ; i< this.key_order_mail_list.length ; i++){
        //              var k = this.key_order_mail_list[i]
        //              this.order_id = k
        //             this.product_description = this.key_order_mail[k].product_description
        //          }
        //          console.log(this.product_description)
        //          for(var j = 0 ; j< this.product_description.length ; j++){
        //              console.log(this.product_description[j])
        //              console.log(this.product_description[j].keysProduct)

        //          }
        //          console.log(auth.currentUser.email)
        //          console.log(this.product_description)

        //          })

        //           const detail_email = {
        //         email : auth.currentUser.email,
        //         order_id : this.order_id,
        //         address : this.address,
        //         tell : this.tell,
        //         hours : this.hours1,
        //         product : this.product_description
        //         }

        //         const url = 'http://localhost:5001/shopaholic-2385d/us-central1/ordered';
        //         const {email, order_id, address, tell, hours, product} = detail_email;
        //         const payload = {email, order_id, address, tell, hours, product};

        //         fetch(url, {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(payload)
        //         })
        //             .then(() => {
        //                 this.success = true;
        //                 console.log("success")
        //                 console.log(payload)
                
        //             })
        //             .catch(() => {
        //                 this.error = true;
        //                 console.log("fail")
        //             })

    },

}
</script>
<style scoped>

#successWord{
    color: black;
    font-weight: 600;
    margin-top: 80px;
    margin-left: 140px;
}
#buttonBack{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 30px;
    margin-left: 630px;

}
    
</style>