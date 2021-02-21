<template>
    <div>
      <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
      </div>
      <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">DURING SHIPMENT</p>
      <hr>
  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Tracking No.</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Name Shop</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Delivery Date</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row v-for="(key,index) in track_list" :key="index">
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'detailTrackStore', params : {idTrack : key} }">{{tracking_no[index]}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center">{{seller_name_shop[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{delivery_date[index]}}</sui-table-cell>
        
      </sui-table-row>
    </sui-table-body>
  </sui-table>

    </div>
</template>
<script>
import firebase from "../firebase"
// import store from "../store"
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      key_track : {},
      track_list :[],
      order_id : [],
      userid : [],
      customer_firstname : [],
      customer_lastname : [],
      userid1 : "",
      tracking_no : [],
      delivery_date : [],
      sellerUid : [],
      seller_name_shop : [],
    }
  },
  computed : {
    ...mapGetters({
      getNameStore :'getNameStore'
    })
  },
  beforeCreate() {
    console.log(this.$route.params.idStoreDeli)
    console.log(this.getNameStore)
    firebase.ref("tracking_number/").orderByChild("branch_selected").equalTo(this.$route.params.idStoreDeli).on("value", snapshot => {
      console.log(snapshot.val())
      this.key_track = snapshot.val()
      console.log(this.key_track)
      this.track_list = Object.keys(this.key_track)
      console.log(this.track_list)

      for(var i=0;i<this.track_list.length ; i++){
        var k = this.track_list[i]

        var tracking_no = this.key_track[k].tracking_no
        this.tracking_no[i] = tracking_no
        console.log(this.tracking_no)

        var delivery_date = this.key_track[k].delivery_date
        this.delivery_date[i] = delivery_date
        console.log(this.delivery_date)

        var sellerUid = this.key_track[k].sellerUid
        this.sellerUid[i] = sellerUid
        console.log(this.sellerUid)

        var seller_name_shop = this.key_track[k].seller_name_shop
        this.seller_name_shop[i] = seller_name_shop
        console.log(this.seller_name_shop)
      }
    })
  },
  created() {

     
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