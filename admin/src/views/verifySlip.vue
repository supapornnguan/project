<template>
    <div id="verifySlip">
        <h3 style="font-weight:600">VERIFY SLIP</h3>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">userID</p>
           <p style="display:inline; margin-left:290px; font-weight:670; font-size:20px">Submission Date</p>
        </div>
        <sui-segment id="VerifySeg" @click="gotoDetailVerify">
            <!-- <docs-wireframe name="short-paragraph" /> -->
        </sui-segment> 
        
    </div>
</template>
<script>
export default {
    name:"verifySlip",
    methods: {
        gotoDetailVerify(){
            this.$router.replace('detailVerifySlip')
        }
    },
}
</script>

<style scoped>
#VerifySeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
#verifySlip{
    position: relative;
    left: 400px;
    top: -990px;
}
</style>