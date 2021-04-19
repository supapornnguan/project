<template>
    <div>
       <div>
    <h1 style="font-weight:600; cursor:pointer" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
    </div>



      <div>

     
        <h3 style="font-weight:600;  margin-left:130px; margin-top:30px">STORE MANAGEMENT</h3>
        <br>
        
        <!-- search -->
        <!-- <div style="width:1000px">
          <input type="text" v-model="search" placeholder="Enter store name" class="form-control" />
        </div> -->
        
        <!-- table -->
        <sui-table celled style="width:1200px; margin-left:130px">
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
              gotoHome() {
          this.$router.push('HomeAdmin')
        }
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