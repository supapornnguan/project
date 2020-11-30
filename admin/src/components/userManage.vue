<template>
    <div>
        <br>
        <search/>

        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">userID</p>
        </div>
        <sui-segment id="UserSeg" @click="gotoInfoUser">
    
        </sui-segment>

    </div>
</template>
<script>
import search from "../components/searchUser"
export default {
    components:{
        search
    },
    methods: {
        gotoInfoUser(){
            this.$router.replace('InfoUser')
        }
    },
}
</script>
<style scoped>
#UserSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>