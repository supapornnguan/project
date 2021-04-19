<template>
    <div>
        <div>
            <h1 style="font-weight:600; cursor:pointer" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
        </div>
        <div style="margin-left:130px; margin-top:30px">
        <h3 style="font-weight:600">VERIFY SLIP</h3>
        <br>
        <!-- table -->
        <sui-table celled style="width:1000px; margin-left:130px; margin-top:30px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Submission Date</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in infoSlip_list" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell >{{orderid[index].substring(1,100)}}</sui-table-cell>
            <sui-table-cell>{{date_time_submit[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center" @click="gotoDetailVerify(key)"><b-button variant="outline-primary">More</b-button></sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table> 
       </div>       
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
            orderid : [],
            date_time_submit : [],
            date_time_submit_filter : []
        }
    },
    methods: {
        gotoDetailVerify(key){
            console.log(key)
            this.$router.push({name : "detailVerifySlip" , params : {idSlip : key }})
        },
        gotoHome() {
          this.$router.push('/HomeAdmin')
        }
    },
    
    created() {
        firebase.ref("slip/").orderByChild("verify_slip").equalTo(false).on("value", snapshot => {
            console.log(snapshot.val())
            this.infoSlip = snapshot.val()
            this.infoSlip_list = Object.keys(snapshot.val())

            for(var j =0 ; j< this.infoSlip_list.length ; j++ ){
                var k = this.infoSlip_list[j]

                var orderid = this.infoSlip[k].orderid
                var date_time_submit = this.infoSlip[k].date_time_submit
                
                console.log(orderid)
                this.orderid.push(orderid)
                this.date_time_submit.push(date_time_submit)

            }

            //sort date
            // for(var i = 0 ; i < this.date_time_submit.length ; i++){
            //   this.date_time_submit_filter[i] = this.date_time_submit[i]
            // }
            // this.date_time_submit_filter.reverse()
            // for(var a = 0 ; a < this.date_time_submit_filter.length ; a ++){
            //   for(var b = 0 ; b < this.orderid)
            // }

        })
    },
}
</script>

<style scoped>
h1{
  text-align: center;
  background-color: 	#0F4C81;
  color:#FFFF;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
}

</style>