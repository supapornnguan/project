<template>
    <div>
        <div v-if="showInfoStore==1">
        <br>
            <search/>
            <div style="margin-left:70px; margin-top:50px">
                <p style="display:inline; font-weight:670; font-size:20px">No.</p>
                <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Store Pick-up name</p>
            </div>
            <sui-segment id="storeSeg" @click="gotoDetailStore">

            </sui-segment>
        </div>

        <infoStore v-if="showInfoStore==2"/>

    </div>
</template>
<script>
import search from "../components/searchPickupStore"
import infoStore from "../components/infoStore"
export default {
    data() {
        return {
            showInfoStore : 1
        }
    },
    components:{
        search,
        infoStore
    },
    methods: {
        gotoDetailStore(){
            this.showInfoStore = 2
        }
    },
}
</script>
<style scoped>
#storeSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>