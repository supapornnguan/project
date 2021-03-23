<template>
    <div>
       <div >
    <h1 style="font-weight:600" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
    </div>


      <div>
        <h3 style="font-weight:600;  margin-left:130px; margin-top:30px">CUSTOMER MANAGEMENT</h3>
        <br>
        
        <!-- search -->
        <!-- <div style="width:1000px">
          <input type="text" v-model="search" placeholder="Enter user email" class="form-control" />
        </div> -->
        
        <!-- table -->
        <sui-table celled style="width:1200px; margin-left:130px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Customer Email</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Date Time</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in keys" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell>{{customer_email[index]}}</sui-table-cell>
            <sui-table-cell>{{timestamp[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center" @click="gotoUserInfo(key)"><b-button variant="outline-primary">More</b-button></sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
        <!-- <userManage/> -->
    </div>
    </div>
</template>

<script>
import firebase from "../firebase"
// import userManage from "../components/userManage"
const db = firebase.ref("/user");
export default {
    // components : {
    //     userManage
    // },
    data() {
        return {
            User : {},
            keys : [],
            customer_email : [],
            timestamp : [],
        } 
    },
    methods: {
        gotoUserInfo(key){
          console.log(key)
            this.$router.push({name : "userManageInfo" , params : { userId : key }})
            },
             gotoHome() {
          this.$router.push('/HomeAdmin')
        }
    },
    mounted () {
      db.on('value', (snapshot) => {
      this.User = snapshot.val()
      this.keys = Object.keys(snapshot.val())
      console.log(this.User) //return object
      console.log(this.keys) //return array
      for (var i=0 ; i< this.keys.length ; i++){
            var k = this.keys[i];
            var customer_email = this.User[k].customer_email;
            var timestamp = this.User[k].timestamp;
       
            this.customer_email[i] = customer_email
            this.timestamp[i] = timestamp
      }
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