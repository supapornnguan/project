<template>
    <div>
        <br>
        <search/>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Store Pick-up name</p>
        </div>
        <sui-segment id="storeSeg" @click="gotoDetailStore">
            <docs-wireframe name="short-paragraph" />
        </sui-segment>

    </div>
</template>
<script>
import search from "../components/searchPickupStore"
export default {
    components:{
        search
    },
    methods: {
        gotoDetailStore(){
            this.$router.replace('detailStorePickup')
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