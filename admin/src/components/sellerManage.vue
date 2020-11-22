<template>
    <div>
        <br>
        <search/>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">SellerID</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Seller name</p>
        </div>

        <sui-segment id="SellerSeg">
        <!-- read from database -->


        
        </sui-segment>
    </div>
</template>
<script>
// import firebase from "../firebase"
import search from "../components/searchStore"
// const db = firebase.ref("seller")
export default {
    data() {
        return {
            firstname : "",
            // requestDate : ""
        }
    },
    name : "sellerManage",
    components:{
        search
    },



}
</script>
<style scoped>
#SellerSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>