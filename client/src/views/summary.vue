<template>
    <div >
        <navbar/>
        <div>
        <h3 style="text-align:left; color:black; margin-left:100px; font-weight:1000">My Order</h3>
      

        <sui-table style="width:1200px; margin-left:140px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Select</sui-table-header-cell>
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell><input type="checkbox"></sui-table-cell>
                    <sui-table-cell><img :src="infoSummary.product_image" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{infoSummary.product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{infoSummary.product_unit_price}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{infoSummary.quantity}}</p>
                      
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        <p style="text-align:left; margin-left:1000px; margin-top:30px; font-size:20px">Total: {{parseInt(infoSummary.product_unit_price) * parseInt(infoSummary.quantity)}}.00 THB</p>
      

        <h3 style="text-align:left; color:black; margin-left:100px; margin-bottom:50px; font-weight:1000">Select Your Receiving Types</h3>
            <div style="margin-left:500px">
               <img src="../assets/pickup.png" :width="100"  >
                <img src="../assets/delivery.png" :width="100" style="margin-left:250px"> 
                <br>

                <input type="radio" id="yes" value="pickUp" v-model="picked" style="margin-top:30px">
                <label for="yes" style="margin-left:10px">Pick-up in store</label>

                <input type="radio" id="no" value="shipping" v-model="picked" style="margin-left:250px; margin-top:30px">
                <label for="no" style="margin-left:10px">Shipping</label>
            </div>
        </div>
        <sui-button basic secondary style="margin-top:70px; margin-left:690px" @click="gotoreceiving">Place Order</sui-button>
    </div>
</template>

<script>
import navbar from "../components/navbar"
import {mapGetters} from "vuex"
import store from "../store"
export default {
    data() {
        return {
            picked:null
        }
    },
    components:{
        navbar,
  
    },
    methods: {
        gotoreceiving(){
            if(this.picked == "pickUp"){
                this.$router.replace('/pickupType')
                store.commit("SET_RECEIVING_TYPE" , {
                    type1 : this.picked,
                    total_amount : parseInt(this.infoSummary.product_unit_price) * parseInt(this.infoSummary.quantity)
                })
            }
            else if(this.picked == "shipping"){
                this.$router.replace('/shippingType')
                store.commit("SET_RECEIVING_TYPE" , {
                    type1 : this.picked,
                    total_amount : parseInt(this.infoSummary.product_unit_price) * parseInt(this.infoSummary.quantity)
                })
            }
        }
    },
    computed: {
        ...mapGetters({
            infoSummary : "getSummaryPage"
        })
    },


    
}
</script>
<style>
.summaryContainer{
    width: 1000px;
    margin-left: 100px;
}

</style>