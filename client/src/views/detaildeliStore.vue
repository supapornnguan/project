<template>
    <div class="vld-parent">
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
       
        :is-full-page="true"></loading>

      <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
      </div>
      <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">DURING SHIPMENT</p>
      <hr>

      <div v-if="isLoading==false">
  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Tracking No.</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Delivery Date</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>



    
    <sui-table-body v-for="(key,index) in tracking_no1" :key="index">
      <sui-table-row v-if="check_status[index] == false">
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'detailTrackStore', params : {idTrack : tracking_no1[index]} }">{{tracking_no1[index]}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center">{{delivery_date1[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </div>


<!-- modal -->
    <b-modal ref="my-modal" size="lg" hide-footer title="Using Component Methods">
      <div class="d-block">
        <p style="margin-left:60px; font-weight:900; font-size:20px; display:inline">Order Id:</p>
        <p style="margin-left:170px; font-weight:900; font-size:20px; display:inline">Customer Name : </p>
        <br>
        <br>
        <div v-for="(key,index) in order_id" :key="index">
          <sui-segment color="grey" style="border-radius:15px; height:60px; margin-bottom:20px">
            <p style="display:inline">{{order_id[index].substring(1,100)}}</p>
            <p style="display:inline; margin-left:30px">{{userid[index]}}</p>
          </sui-segment>
        </div>
        
      </div>
    </b-modal>
    <h1>{{getAtstore}}</h1>

    


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

      check_status : []
      

    }
  },
  computed : {
    ...mapGetters({
      getNameStore :'getNameStore',
      getAtstore : 'getAtstore'
    })
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

          var check_status = this.info_pickup_order[k].status.atstore.check_status
          this.check_status[i] = check_status
          console.log(this.check_status[i])

          if(this.branch_selected[i] === this.$route.params.idStoreDeli){
            
            var tracking_no1 = this.info_pickup_order[k].tracking_no.tracking_no
            var delivery_date1 = this.info_pickup_order[k].status.delivery.date_time_to_order
            this.tracking_no1.push(tracking_no1) 
            this.delivery_date1.push(delivery_date1)
          }
        }
           this.tracking_no1 = [...new Set(this.tracking_no1)]

               this.isLoading = false
      })

   

  


    },
    //  showModal(keyTrack) {
 
    //    console.log(keyTrack)
    //    firebase.ref("tracking_number/" + keyTrack).on("value" , snapshot => {
    //      console.log(snapshot.val())
    //      this.order_id = snapshot.val().order_id
    //    })
    //    console.log("order_id")
    //    console.log(this.order_id)

       
    //   for(var i =0; i< this.order_id.length ;i++ ){
    //     firebase.ref("pickup_order/" + this.order_id[i]).on("value" , snapshot => {
    //       console.log(snapshot.val())
    //       console.log(snapshot.val().userid) 
    //       this.userid[i] = snapshot.val().userid
    //       // console.log(this.userid[i])
    //     })
    //   }
    //   console.log(this.userid)
    //   for(var j=0 ; j< this.userid.length ;j++){
    //     console.log("useruid1")
    //   }
    //     this.$refs['my-modal'].show()
    //   },
  },
  // beforeCreate() {
  //   console.log(this.$route.params.idStoreDeli)
  //   console.log(this.getNameStore)
  //   firebase.ref("tracking_number/").orderByChild("branch_selected").equalTo(this.$route.params.idStoreDeli).on("value", snapshot => {
  //     console.log(snapshot.val())
  //     this.key_track = snapshot.val()
  //     console.log(this.key_track)
  //     this.track_list = Object.keys(this.key_track)
  //     console.log(this.track_list)

  //     for(var i=0;i<this.track_list.length ; i++){
  //       var k = this.track_list[i]

  //       var tracking_no = this.key_track[k].tracking_no
  //       this.tracking_no[i] = tracking_no
  //       console.log(this.tracking_no)

  //       var delivery_date = this.key_track[k].delivery_date
  //       this.delivery_date[i] = delivery_date
  //       console.log(this.delivery_date)

  //       var sellerUid = this.key_track[k].sellerUid
  //       this.sellerUid[i] = sellerUid
  //       console.log(this.sellerUid)

  //       var seller_name_shop = this.key_track[k].seller_name_shop
  //       this.seller_name_shop[i] = seller_name_shop
  //       console.log(this.seller_name_shop)
  //     }
  //   })
  // },

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