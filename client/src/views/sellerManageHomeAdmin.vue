<template>

<div>
  <div >
    <h1 style="font-weight:600; cursor:pointer " @click="gotoHome">ADMIN SHOPAHOLIC</h1>
    </div>

    <div id="sellerManagePosition">
      
        <h3 style="font-weight:600; margin-left:130px; margin-top:30px">SELLER MANAGEMENT</h3>
        <br>
        
        <!-- search -->
        <!-- <div style="width:1000px">
          <input type="text" v-model="search" placeholder="Enter seller email" class="form-control" />
        </div> -->
        
        <!-- table -->
        <sui-table celled style="width:1200px; margin-left:130px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Shop Name</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Seller Email</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Date Time</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Verify Status</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in keys" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell>{{seller_name_shop[index]}}</sui-table-cell>
            <sui-table-cell>{{seller_email[index]}}</sui-table-cell>
            <sui-table-cell>{{timstamp[index]}}</sui-table-cell>
            <sui-table-cell  style="text-align:center" v-if="verify_seller[index] == false">
              <sui-label color="red" horizontal>
                no
              </sui-label>
            </sui-table-cell>
            <sui-table-cell  style="text-align:center" v-if="verify_seller[index] == true">
              <sui-label color="green" horizontal>
                yes
              </sui-label>
            </sui-table-cell>
            <sui-table-cell style="text-align:center" @click="gotoSellerInfo(key)"><b-button variant="outline-primary">More</b-button></sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
        <!-- <sellerManage/> -->
    </div>
    </div>
</template>

<script>
import firebase from "../firebase"
// import sellerManage from "../components/sellerManage"
const db = firebase.ref("/seller");
export default {
    // name : "sellerManageHome",
    // components : {
    //    sellerManage : sellerManage
    // }
    data() {
        return {
            Seller : {},
            keys : [],
            seller_name_shop : [],
            seller_email : [],
            timstamp : [],
            verify_seller : [],
        } 
    },
    methods: {
        gotoSellerInfo(key){
          console.log(key)
            this.$router.push({name : "sellerManageInfo" , params : { sellerId : key }})
            },
        
        gotoHome() {
          this.$router.push('HomeAdmin')
        }
    },
    mounted () {
      db.on('value', (snapshot) => {
      console.log(snapshot.val())
      this.Seller = snapshot.val()
      this.keys = Object.keys(snapshot.val())
      console.log(this.Seller) //return object
      console.log(this.keys) //return array
      for (var i=0 ; i< this.keys.length ; i++){
            var k = this.keys[i];
            var seller_name_shop = this.Seller[k].seller_name_shop;
            var seller_email = this.Seller[k].seller_email;
            var timestamp = this.Seller[k].timstamp;
            var verify_seller = this.Seller[k].verify_seller;
       
            this.seller_name_shop[i] = seller_name_shop
            this.seller_email[i] = seller_email
            this.timstamp[i] = timestamp
            this.verify_seller[i] = verify_seller
      }
    })
  },
}
</script>

<style scoped>
/* #sellerManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
} */
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