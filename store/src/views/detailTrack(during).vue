<template>
    <div id="detailTrackDuring">
        <h2 style="font-weight:600; margin-top:30px; margin-bottom:30px">THE PRODUCT IS COMING</h2>

    <h3 style="display:inline; font-weight:600">Tracking No.</h3> 
    <h3 style="display:inline; margin-left:50px">39018903</h3> 

    <h3 style="display:inline; margin-left:50px; font-weight:600">Store name</h3> 
    <h3 style="display:inline; margin-left:50px;">awrwrw</h3>

    <search style="margin-top:50px"/>

    <div style="margin-left:70px; margin-top:50px">
        <p style="display:inline; font-weight:670; font-size:20px">Order ID.</p>
        <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Customer ID</p>
        <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Customer Name</p>
    </div>
    <sui-segment id="detailTrack" @click="gotodetailOrder">
          
    </sui-segment>

    </div>
</template>
 

<script>
import search from "../components/search"
export default {
    data() {
        return {
             open: false 
        }
    },
    components : {
        search
    },
    methods: {
        gotodetailOrder(){
            this.$router.replace('detailOrder')
        }
    },
    
}
</script>

<style scoped>
#detailTrackDuring{
    position: relative;
    left: 400px;
    top: -990px;
}
#detailTrack{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>