<template>
    <div id="verifySlip">
        <h3 style="font-weight:600">VERIFY SLIP</h3>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:170px; font-weight:670; font-size:20px">userID</p>
           <p style="display:inline; margin-left:250px; font-weight:670; font-size:20px">Submission Date</p>
        </div>
        <sui-segment id="VerifySeg" @click="gotoDetailVerify(key)" v-for="(key,index) in infoSlip_list" :key="index" >
            <p style="display:inline; margin-left:30px;">{{index+1}}.</p>
            <p style="margin-left:110px; display:inline">{{userid[index]}}</p>   
            <p style="margin-left:130px; display:inline">{{date_time_submit[index]}}</p>             
        </sui-segment> 
     
        
    </div>
</template>
<script>
import firebase from "../firebase"
export default {
    name:"verifySlip",
    data() {
        return {
            infoSlip : {},
            infoSlip_list : [],
            userid : [],
            date_time_submit : []
        }
    },
    methods: {
        gotoDetailVerify(key){
            this.$router.push({name : "detailVerifySlip" , params : {idSlip :key }})
        }
    },
    created() {
        firebase.ref("slip/").on("value", snapshot => {
            console.log(snapshot.val())
            this.infoSlip = snapshot.val()
            this.infoSlip_list = Object.keys(snapshot.val())

            for(var j =0 ; j< this.infoSlip_list.length ; j++ ){
                var k = this.infoSlip_list[j]

                var userid = this.infoSlip[k].userid
                var date_time_submit = this.infoSlip[k].date_time_submit
                
                console.log(userid)
                this.userid.push(userid)
                this.date_time_submit.push(date_time_submit)

            }
        })
        
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