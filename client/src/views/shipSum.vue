<template>
    <div>
        <navbar/>
        <h1 style=" margin-left:100px; font-weight:600">SUCCESSFUL TRANSACTION</h1>
        <h3 style=" margin-left:140px; margin-top:60px; margin-bottom:30px">Order Information</h3>

        <div style="margin-bottom:15px">
        <p style="color:gray; margin-left:140px; display:inline">Order date</p>
        <p style="position:absolute; left:350px; display:inline;">{{infoShipping.orderdate}}</p>
        </div>

        <div style="margin-bottom:15px">
        <p style="color:gray; margin-left:140px; display:inline">Payment Type</p>
        <p style="position:absolute; left:350px; display:inline">{{infoShipping.paymentType}}</p>
        </div>

        <div style="margin-bottom:15px">
        <p style="color:gray; margin-left:140px; display:inline">Customer Phone</p>
        <p style="position:absolute; left:350px; display:inline">{{customer_phonenumber}}</p>
        </div>
        <h3 style=" margin-left:140px; margin-top:30px; margin-bottom:30px">Shiping Detail</h3>


        <p style="margin-left:140px; display:inline">{{customer_firstname}} </p>
        <p style="display:inline">{{customer_lastname}}</p>
        <p style="margin-left:140px;">{{infoShipping.customer_address}}, {{infoShipping.customer_district}}, {{infoShipping.customer_province}}, {{infoShipping.customer_zipcode}} </p>
        <p style="margin-left:140px;">call : {{customer_phonenumber}}</p>
        

        <h3 style=" margin-left:140px; margin-top:60px">Purchased Items</h3>
        <sui-table style="width:1200px; margin-left:140px; margin-top:30px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body v-if="checkPage.check==false ">
                <sui-table-row>
                    <sui-table-cell><img :src="summary.product_image" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{summary.product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{type.total_amount}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{summary.quantity}}</p>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>

            <!-- summary of cart -->
            <sui-table-body style="width:1200px; margin-left:140px; margin-top:30px" v-if="checkPage.check==true ">
                <sui-table-row v-for="(key,index) in cartList" :key="index">
                    <sui-table-cell><img :src="cartList[index].product_image" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{cartList[index].product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{cartList[index].product_unit_price}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{cartList[index].quantity}}</p>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        <p id="successWord1">Plase transfer money within 7 days. <br> If overdue,your order will be cancled.</p>
        <button id="buttonUplaod" @click="gotoUploadSlip">PAY AND UPLOAD SLIP</button>
        
    </div>
</template>
<script>
import navbar from "../components/navbar"
import {mapGetters} from "vuex"
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
    data() {
        return {
            customer_phonenumber : "",
            customer_firstname : "",
            customer_lastname : ""
        }
    },
    components : {
        navbar
    },
    methods: {
        gotoUploadSlip(){
            this.$router.replace('/uploadSlip')
        }
    },
    computed: {
        ...mapGetters({
            infoShipping : "getInfoShipping",
            summary : "getSummaryPage",
            type : "getReceivingType",
            checkPage : "getStateIscart",
            cartList : "cartItemList"
        })

    },
    mounted() {
        firebase.ref("user/" + auth.currentUser.uid).on('value', snapshot => {
            console.log(snapshot.val());
            this.customer_phonenumber = snapshot.val().customer_phonenumber
            this.customer_firstname = snapshot.val().customer_firstname
            this.customer_lastname = snapshot.val().customer_lastname
         })
        
    },
}
</script>
<style scoped>
#successWord1{
    font-size: 20px;
    margin-top: 70px;
    text-align: center;
}
#buttonUplaod{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    margin-top: 60px;
    margin-left: 650px;
}
    
</style>