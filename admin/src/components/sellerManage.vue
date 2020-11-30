<template>
    <div>
        <div v-if="showInfo==1">
        <br>
        <search/>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:90px; font-weight:670; font-size:20px">SellerID</p>
           <p style="display:inline; margin-left:170px; font-weight:670; font-size:20px">Request Date Time</p>
        </div>

        <sui-segment id="SellerSeg" @click="gotoInfoSeller" >
        <!-- read from database -->
        </sui-segment>
        </div>
        <infoSeller/>
    </div>
</template>
<script>
import search from "../components/searchStore"
import infoSeller from "../components/infoSeller"
export default {
    name : "sellerManage",
    data() {
        return {
            showInfo : 1
        }
    },
    components:{
        search,
        infoSeller
    },
    methods: {
        gotoInfoSeller(){
            console.log('hello')
            this.showInfo = 2
        }
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