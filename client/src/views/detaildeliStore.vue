<template>
    <div class="vld-parent">
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
       
        :is-full-page="true"></loading>

      <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive; " id="headerbar">STORE PICK-UP</h1>
      </div>
      <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">DURING SHIPMENT</p>
      <hr>

  <div style="width:400px; margin-left:550px; margin-bottom:30px">
    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
  </div>
  
      <div v-if="isLoading==false">
  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Tracking No.</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Delivery Date</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>



    
    <sui-table-body v-for="(key,index) in resultQuery" :key="index">
      <sui-table-row >
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'detailTrackStore', params : {idTrack : resultQuery[index].tracking_number} }" >{{resultQuery[index].tracking_number}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center">{{resultQuery[index].delivery_date}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </div>



  <router-view></router-view>

    </div>
</template>
<script>
import firebase from "../firebase"
// import store from "../store"
import {mapGetters} from "vuex"
  // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
 import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  data() {
    return {
      key_track : {},
      track_list :[],
      
      

      userid1 : "",
      tracking_no : [],
      delivery_date : [],
      sellerUid : [],
      seller_name_shop : [],
      check_status_atstore : [],

      isLoading: true,
      fullPage: true,

      //get data from tracking_no
      order_id : [],
      userid : [],
      customer_firstname : [],
      customer_lastname : [],


      info_pickup_order : {},
      info_pickup_order_list : [],
      branch_selected : [],
      tracking_no1 : [],
      delivery_date1 :[],

      check_status : [],
      searchQuery: null,
      detail : [],
      check_show : true
      

    }
  },
  computed : {
    ...mapGetters({
      getNameStore :'getNameStore',
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
  created() {
    this.doAjax()
  },
  components: {
            Loading
  },
  methods: {
    doAjax() {
      this.isLoading = true
      console.log(this.$route.params.idStoreDeli)


      firebase.ref("pickup_order/").orderByChild("tracking_no/check_track").equalTo(true).on("value" , snapshot => {
        console.log(snapshot.val())
        this.info_pickup_order = snapshot.val()
        this.info_pickup_order_list = Object.keys(snapshot.val())

        for(var i =0 ; i< this.info_pickup_order_list.length ; i++){
          var k = this.info_pickup_order_list[i]

          var branch_selected = this.info_pickup_order[k].branch_selected
          this.branch_selected[i] = branch_selected

          
          console.log(this.check_status[i])

          if(this.branch_selected[i] === this.$route.params.idStoreDeli){
            console.log("kkkk")
            
            var tracking_no1 = this.info_pickup_order[k].tracking_no.tracking_no
            var delivery_date1 = this.info_pickup_order[k].status.delivery.date_time_to_order
            var check_status = this.info_pickup_order[k].status.atstore.check_status

            // this.check_status.push(check_status)
            if(check_status == false){
              this.tracking_no1.push(tracking_no1) 
              this.delivery_date1.push(delivery_date1)
            }
            
          }
        }
        console.log(this.tracking_no1)
        console.log(this.delivery_date1)
          this.tracking_no1 = [...new Set(this.tracking_no1)]
          console.log(this.tracking_no1)
          this.isLoading = false
          for(var a = 0 ; a< this.tracking_no1.length ; a++){
            var detailtrack = {
              tracking_number : this.tracking_no1[a],
              delivery_date : this.delivery_date1[a]
            }
            this.detail.push(detailtrack)
          }
          console.log(this.tracking_no1)
          console.log(this.detail)
          // console.log(this.check_status)
      })

   

  


    },

  },
 

}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
}
#trackSeg{
  width: 960px;
  height: 60px;
  margin-left: 230px;
  border-radius: 15px;
  margin-top: 20px;
}
</style>