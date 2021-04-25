<template>
    <div >
        <navbar/>
        <div>
        <p style="text-align:left; color:black; margin-left:100px; font-weight:700; font-size:35px; margin-bottom:50px;">My Order</p>
  
      
<!-- form infoProduct page -->
        <sui-table style="width:1200px; margin-left:140px; box-shadow: 0px 0px 20px 10px #D5D8DC;" v-if="checkPage.check == false">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>

                    <sui-table-cell><img :src="infoSummary.product_image" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{infoSummary.product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{infoSummary.product_unit_price}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{infoSummary.quantity}}</p>
                      
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>

<!-- form cart page -->
        <sui-table style="width:1200px; margin-left:140px"  v-else>
            <sui-table-header>
                <sui-table-row >
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row v-for="(key,index) in summaryCart" :key="index">
                    <sui-table-cell><img :src="summaryCart[index].product_image" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">{{summaryCart[index].product_name}}</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: {{summaryCart[index].product_unit_price}}.00 THB</p>
                        <p style="font-size:15px">Quantity : {{summaryCart[index].quantity}}</p>
                      
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>


        <p style="text-align:left; margin-left:1000px; margin-top:30px; font-size:20px; color:red;" v-if="checkPage.check == false">Total: {{parseInt(infoSummary.product_unit_price) * parseInt(infoSummary.quantity)}}.00 THB</p>
        <p style="text-align:left; margin-left:1000px; margin-top:30px; font-size:20px; color:red;" v-else>Total: {{cartValue}}.00 THB</p>


        <p style="text-align:left; color:black; margin-left:100px; margin-bottom:50px; font-weight:700; font-size:35px;">Select Your Receiving Types</p>
            <div style="margin: auto;
                        width: 60%;
                        border: 3px solid #D5D8DC;
                        padding: 10px;
                        box-shadow: 0px 0px 20px 10px #D5D8DC;">
                        <div style="margin-left:155px">
                            <img src="https://img.icons8.com/pastel-glyph/2x/pickup-point.png" :width="120"   >
                <img src="https://www.pngkit.com/png/full/781-7817952_delivery-icon-transparent-background-shipping-cost-icon.png" :width="140" style="margin-left:250px"> 
                <br>

                <input type="radio" id="yes" value="pickUp" v-model="picked" style="margin-top:30px">
                <label for="yes" style="margin-left:10px">Pick-up in store</label>

                <input type="radio" id="no" value="shipping" v-model="picked" style="margin-left:280px; margin-top:30px">
                <label for="no" style="margin-left:10px">Shipping</label>
                        </div>
               
            </div>
        </div>
        <sui-button basic secondary style=" margin-left:665px; margin-top:50px " @click="gotoreceiving">Place Order</sui-button>
    </div>
</template>

<script>
import navbar from "../components/navbar"
import {mapGetters} from "vuex"
import store from "../store"
// import firebase from "../firebase"
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
            infoSummary : "getSummaryPage",
            checkPage : "getStateIscart",
            summaryCart : "getSummaryCart",
            cartValue : "cartValue"
        })
    },
    mounted() {
       
     
    },


}
</script>
<style>
.summaryContainer{
    width: 1000px;
    margin-left: 100px;
}

</style>