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
                    <sui-table-cell><img src="../assets/nikonAAAA-2.jpg" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell>
                        <h3 class="info">D5600 DX-Format Digital SLR w/AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR</h3>
                        <p style="font-size:15px; margin-top:20px;">Price: 19,999.00 THB</p>
                        <p style="font-size:15px">Quantity : 1</p>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        <br>
        <p>Pick up at Central Pinklao </p>
        <p>Receive the product 3 days later from the date of purchase.Please pick up the product by April 18, 2020.</p>
        <button id="buttonBack" @click="gotoHome">BACK TO MAIN PAGE</button>
        
    </div>
</template>
<script>
import navbar from "../components/navbar"
export default {
    name: "pickupSum",
    components:{
        navbar
    },
    methods: {
        gotoHome(){
            this.$router.replace('/')
        }
    },
}
</script>
<style scoped>

#successWord{
    color: black;
    font-weight: 600;
    margin-top: 80px;
}
#buttonBack{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 30px;

}
    
</style>