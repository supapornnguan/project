<template>
    <div>

       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>

        <div style="background-color:#0F4C81; height:80px;">
        <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
        </div>
    <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">ORDER AT STORE</p>
    <hr>
<div v-if="isLoading == false">
  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Tracking No.</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Received Date</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Name shop</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body v-for="(key,index) in tracking_no" :key="index">
      <sui-table-row v-if="check_status[index] == false && check_status_return[index] ==false " >
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'DetailOrderatstore', params : {idTrackAtstore : tracking_no[index]} }">{{tracking_no[index]}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center">{{date_received[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{seller_name_shop[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </div>
    </div>
</template>
<script>
    // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import firebase from "../firebase"
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      isLoading : true,
      info_pickup_order : {},
      info_pickup_order_list : [],
      status : [],
      branch_selected : [],
      tracking_no : [],
      sellerUid : [],
      seller_name_shop : [],
      date_received : [],
      check_status : [],
      check_status_return : []
      
      
    }
  },
  components : {
    Loading
  },
      computed : {
        ...mapGetters({
            getAtstore : 'getAtstore'
        })
    },
  beforeCreate() {
    this.isLoading = true
    console.log(this.$route.params.idStore)
//check status atstore == true and check branch_selected 
    firebase.ref("pickup_order/").orderByChild("tracking_no/check_track").equalTo(true).on("value" , snapshot => {
      console.log(snapshot.val())
      this.info_pickup_order = snapshot.val()
      this.info_pickup_order_list = Object.keys(snapshot.val())

      for(var j =0 ; j< this.info_pickup_order_list.length ;j++){
        var k = this.info_pickup_order_list[j]
        var status = this.info_pickup_order[k].status.atstore.check_status
        var branch_selected = this.info_pickup_order[k].branch_selected
        var check_status = this.info_pickup_order[k].status.complete.check_status
        var check_status_return = this.info_pickup_order[k].status.return.check_status
        this.check_status.push(check_status)
        this.check_status_return.push(check_status_return)
        console.log(this.check_status[j])
        this.status.push(status)
        this.branch_selected.push(branch_selected)
        if(this.status[j] == true && this.branch_selected[j] == this.$route.params.idStore ){
          console.log(this.status[j])
          console.log(this.branch_selected[j])
          var tracking_no = this.info_pickup_order[k].tracking_no.tracking_no
          this.tracking_no.push(tracking_no)

          var sellerUid = this.info_pickup_order[k].sellerUid
          this.sellerUid.push(sellerUid)

          var date_received = this.info_pickup_order[k].status.atstore.date_time_to_order
          this.date_received.push(date_received)
        }
      }
      for(var i =0; i < this.sellerUid.length ; i++){
        firebase.ref("seller/" + this.sellerUid[i]).on("value" , snapshot => {
          console.log(snapshot.val())
          var seller_name_shop = snapshot.val().seller_name_shop
          this.seller_name_shop.push(seller_name_shop)
        })
      }
      console.log(this.tracking_no)
      console.log(this.sellerUid)
      console.log(this.seller_name_shop)
      this.isLoading = false
    })
  },
    
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
</style>