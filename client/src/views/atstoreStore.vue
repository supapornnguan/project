<template>
    <div>

       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>

        <div style="background-color:#542e71; height:80px;">
        <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
        </div>
    <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">ORDER AT STORE</p>
    <hr>

     <div style="width:400px; margin-left:550px; margin-bottom:30px">
    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
  </div>
<div v-if="isLoading == false">
  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Tracking No.</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Received Date</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Name shop</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body v-for="(key,index) in resultQuery" :key="index">
      <sui-table-row>
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'DetailOrderatstore', params : {idTrackAtstore : resultQuery[index].tracking_number} }">{{resultQuery[index].tracking_number}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center">{{resultQuery[index].delivery_date}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{seller_name_shop[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  <!-- <p>{{filterDate}}</p> -->
  </div>
  <br>
  <br>
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
      check_status_return : [],

      searchQuery: null,
      detail : [],
      filterDate : [],
      seller_name_shop1 : [],
      tracking_no1 : []
      
      
    }
  },
  components : {
    Loading
  },
      computed : {
        ...mapGetters({
            getAtstore : 'getAtstore'
        }),
        
    resultQuery() {
      if(this.searchQuery){
        return this.detail.filter((item)=>{
        return item.tracking_number.toLowerCase().includes(this.searchQuery.toLowerCase());
      })
      }else{
        return this.detail;
      }
    }
      
    },
  mounted() {
    this.isLoading = true
    console.log(this.$route.params.idStore)
//check status atstore == true and check branch_selected 
    firebase.ref("pickup_order/").orderByChild("tracking_no/check_track").equalTo(true).on("value" , snapshot => {
      console.log(snapshot.val())
      this.info_pickup_order = snapshot.val()
      // console.log(this.info_pickup_order)
      this.info_pickup_order_list = Object.keys(snapshot.val())

      for(var j =0 ; j< this.info_pickup_order_list.length ;j++){
        var k = this.info_pickup_order_list[j]
        var status = this.info_pickup_order[k].status.atstore.check_status
        var branch_selected = this.info_pickup_order[k].branch_selected
        
        var check_status_return = this.info_pickup_order[k].status.return.check_status
        
        this.check_status_return.push(check_status_return)
        // console.log(this.check_status[j])
        this.status.push(status)
        this.branch_selected.push(branch_selected)
        if(this.status[j] == true && this.branch_selected[j] == this.$route.params.idStore ){
          var check_status = this.info_pickup_order[k].status.complete.check_status
          // this.check_status.push(check_status)
          // console.log(this.status[j])
          // console.log(this.branch_selected[j])
          if(check_status == false){
            var tracking_no = this.info_pickup_order[k].tracking_no.tracking_no
          this.tracking_no.push(tracking_no)

          var sellerUid = this.info_pickup_order[k].sellerUid
          firebase.ref("seller/" + sellerUid).on("value" , snapshot => {
          console.log(snapshot.val().seller_name_shop)
          this.seller_name_shop.push(snapshot.val().seller_name_shop)
          console.log(this.seller_name_shop)
        })
          // this.sellerUid.push(sellerUid)

          var date_received = this.info_pickup_order[k].status.atstore.date_time_to_order
          this.date_received.push(date_received)
          }
          
        }
      }
   
      console.log(this.seller_name_shop)
      // console.log(this.seller_name_shop[0])

      for(var q = 0 ; q< this.date_received.length ; q++){
        this.filterDate[q] = this.date_received[q]
      }
      this.filterDate.reverse()
      console.log(this.seller_name_shop)
      console.log(this.date_received.length)
      for(var w = 0 ; w < this.filterDate.length ; w++){
        for(var e = 0 ; e < this.date_received.length ; e++){
          if(this.filterDate[w] == this.date_received[e] ){
            this.tracking_no1[w] = this.tracking_no[e]
            this.seller_name_shop1[w] = this.seller_name_shop[e]
          }
        }
      }
      console.log(this.tracking_no)
      // console.log(this.sellerUid)
      console.log(this.seller_name_shop)
      console.log(this.date_received)
      console.log(this.filterDate)
      console.log(this.tracking_no1)
      console.log(this.seller_name_shop1)

      this.isLoading = false
        for(var a = 0 ; a< this.tracking_no1.length ; a++){
            var detailtrack = {
              tracking_number : this.tracking_no1[a],
              delivery_date : this.filterDate[a],
              seller_name_shop : this.seller_name_shop
            }
            this.detail.push(detailtrack)
          }


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