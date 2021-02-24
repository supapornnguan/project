<template>
    <div id="DetailVerifySlip">
        <h3 style="font-weight:600">BANK RECEIPT</h3>

        <h3 style="font-weight:600">PRODUCT SUMMARY</h3>
        <sui-table style="width:1000px;">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Order ID</sui-table-header-cell>
                    <sui-table-header-cell>Order Date</sui-table-header-cell>
                    <sui-table-header-cell>Submit Date</sui-table-header-cell>
                    <sui-table-header-cell>Total Price</sui-table-header-cell>
                    <sui-table-header-cell>Store Name</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell>123456789</sui-table-cell>
                    <sui-table-cell>12-05-2030</sui-table-cell>
                    <sui-table-cell>12-05-2030</sui-table-cell>
                    <sui-table-cell>39,998.00</sui-table-cell>
                    <sui-table-cell>shopshopshopshopeiei</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>

        <button id="buttonVerify">VERIFIED SUCCESSFUL</button>
    </div>
</template>
<script>
import firebase from "../firebase"
export default {
    data() {
        return {
            orderid : "",
            date_time_submit : "",
            fourdigits : "",
            slip_image : "",
            total_amount : "",
            userid : ""

        }
    },
    beforeCreate() {
        firebase.ref("slip/" + this.$route.params.idSlip).on("value" , snapshot => {
            console.log(snapshot.val())
        })
        
        
    },
}
</script>
<style scoped>
#DetailVerifySlip{
    position: relative;
    left: 400px;
    top: -990px; 
}
#buttonVerify{
    background-color: white;
    border-radius: 5px;
    border : 1px solid black;
    padding: 6px;
    margin-left: 370px;
    margin-top: 20px;
}
    
</style>