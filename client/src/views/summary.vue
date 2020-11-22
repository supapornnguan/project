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
                    <sui-table-cell><img src="../assets/nikonAAAA-2.jpg" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">D5600 DX-Format Digital SLR w/AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: 19,999.00 THB</p>
                        <p style="font-size:15px">Quantity : 1</p>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        <p style="text-align:left; margin-left:1000px; margin-top:30px; font-size:20px">Total: 19,999.00 THB</p>
      

        <h3 style="text-align:left; color:black; margin-left:100px; margin-bottom:50px; font-weight:1000">Select Your Receiving Types</h3>
            <div style="margin-left:500px">
               <img src="../assets/pickup.png" :width="100"  >
                <img src="../assets/delivery.png" :width="100" style="margin-left:250px"> 
                <br>

                <input type="radio" id="yes" value="1" v-model="picked" style="margin-top:30px">
                <label for="yes" style="margin-left:10px">Pick-up in store</label>

                <input type="radio" id="no" value="2" v-model="picked" style="margin-left:250px; margin-top:30px">
                <label for="no" style="margin-left:10px">Shipping</label>
            </div>
        </div>
        <sui-button basic secondary style="margin-top:70px; margin-left:690px" @click="gotoreceiving">Place Order</sui-button>
        <p>{{picked}}</p>
    </div>
</template>

<script>
import navbar from "../components/navbar"

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
            if(this.picked == 1){
                this.$router.replace('/productAll/infoProduct/summary/pickupType')
            }
            else if(this.picked == 2){
                this.$router.replace('/productAll/infoProduct/summary/shippingType')
            }
            
        }
    },
    
}
</script>
<style>
.summaryContainer{
    width: 1000px;
    margin-left: 100px;
}

</style>
