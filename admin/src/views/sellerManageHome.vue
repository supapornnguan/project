<template>
    <div id="sellerManagePosition">
        <h3 style="font-weight:600;">SELLER MANAGEMENT</h3>
        <br>
        <!-- search -->
        <!-- <b-input-group style="width:1000px" size="lg" :aria-hidden="busy ? 'true' : null">
        <b-form-input placeholder="Enter seller email" v-model="value" :disabled="busy"></b-form-input>
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
            <sui-table-header-cell style="text-align:center">Shop Name</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Seller Email</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Date Time</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in keys" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell>{{seller_name_shop[index]}}</sui-table-cell>
            <sui-table-cell>{{seller_email[index]}}</sui-table-cell>
            <sui-table-cell>{{timstamp[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center"><b-button variant="outline-primary">More</b-button></sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
        <!-- <sellerManage/> -->
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
       
            this.seller_name_shop[i] = seller_name_shop
            this.seller_email[i] = seller_email
            this.timstamp[i] = timestamp
      }
    })
  },
}
</script>

<style scoped>
#sellerManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
</style>