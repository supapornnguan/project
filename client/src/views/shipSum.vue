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
        <p id="successWord1">Plase transfer money within 7 days. <br> If overdue,your order will be cancled</p>
        <button id="buttonUplaod" @click="gotoUploadSlip">PAY AND UPLOAD SLIP</button>
        
    </div>
</template>
<script>
import navbar from "../components/navbar"
export default {
    components : {
        navbar
    },
    methods: {
        gotoUploadSlip(){
            this.$router.replace('uploadSlip')
        }
    },
}
</script>
<style scoped>
#successWord1{
    font-size: 20px;
    margin-top: 70px;
}
#buttonUplaod{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 5px;
    margin-top: 60px;
}
    
</style>