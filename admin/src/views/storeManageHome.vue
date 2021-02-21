<template>
    <div id="storeManagePosition">
        <h3 style="font-weight:600">STORE MANAGEMENT</h3>
        <br>
        <!-- table -->
        <sui-table celled style="width:1000px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Store ID</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Store Name</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Phone Number</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in keys" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell style="text-align:center">{{key}}</sui-table-cell>
            <sui-table-cell>{{name_store_pickup[index]}}</sui-table-cell>
            <sui-table-cell>{{phone[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center" @click="gotoStoreInfo(key)"><b-button variant="outline-primary">More</b-button></sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
        <!-- <storeManage/> -->
    </div>
</template>

<script>
import firebase from "../firebase"
// import storeManage from "../components/storeManage"
const db = firebase.ref("/Store");
export default {
    // components : {
    //     storeManage
    // }
    data() {
        return {
            Store : {},
            keys : [],
            name_store_pickup : [],
            phone : [],
        } 
    },
    methods: {
        gotoStoreInfo(key){
          console.log(key)
            this.$router.push({name : "storeManageInfo" , params : { storeId : key }})
            },
    },
    mounted () {
      db.on('value', (snapshot) => {
      this.Store = snapshot.val()
      this.keys = Object.keys(snapshot.val())
      console.log(this.Store) //return object
      console.log(this.keys) //return array
      for (var i=0 ; i< this.keys.length ; i++){
            var k = this.keys[i];
            var name_store_pickup = this.Store[k].name_store_pickup;
            var phone = this.Store[k].phone;
       
            this.name_store_pickup[i] = name_store_pickup
            this.phone[i] = phone
      }
    })
  },
}
</script>

<style scoped>
#storeManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
    
</style>