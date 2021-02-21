<template>
    <div id="userManagePosition">
        <h3 style="font-weight:600">USER MANAGEMENT</h3>
        <br>
        <!-- search -->
        <!-- <b-input-group style="width:1000px" size="lg" :aria-hidden="busy ? 'true' : null">
        <b-form-input placeholder="Enter user email" v-model="value" :disabled="busy"></b-form-input>
        <b-input-group-append>
          <b-button ref="button" :disabled="busy" variant="primary"  @click="onClick">
            Find
          </b-button>
        </b-input-group-append>
        </b-input-group> -->
        <!-- table -->
        <sui-table celled style="width:1000px">
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
#userManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
    
</style>