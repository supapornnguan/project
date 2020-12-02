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
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell><img :src="summary.product_image" :width="150" style="margin-left:90px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{summary.product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{type.total_amount}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{summary.quantity}}</p>
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
        <p style="margin-left:150px">{{hours}}</p>
        <br>
        <br>
        <p style="text-align:center">Receive the product 3 days later from the date of purchase.Please pick up the product by April 18, 2020.</p>
        <button id="buttonBack" @click="gotoHome">BACK TO MAIN PAGE</button>
        
    </div>
</template>
<script>
import navbar from "../components/navbar"
import {mapGetters} from "vuex"
import firebase from "../firebase"
export default {
    data() {
        return {
            name_store_pickup : "",
            address : "",
            hours : ""
        }
    },
    name: "pickupSum",
    components:{
        navbar
    },
    methods: {
        gotoHome(){
            this.$router.replace('/')
        }
    },
    computed: {
        ...mapGetters({
            summary : "getSummaryPage",
            type : "getReceivingType",
            branch : "getBranch"
        })
    },
    mounted() {
        firebase.ref('Store/' + this.branch).on('value', snapshot => {
            this.name_store_pickup = snapshot.val().name_store_pickup
            this.address = snapshot.val().address
            this.hours = snapshot.val().pick_up_hours
            console.log(snapshot.val())
        })
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