<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>

    <div style="background-color:#0F4C81; height:80px;">
    <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>

    
    <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">DURING SHIPMENT</p>
    <hr>

      <p style="font-weight:600; font-size:20px; margin-top:20px; margin-left:30px" v-if="isLoading==false">Tracking No. : {{this.$route.params.idTrack}}</p>

      <div style="width:400px; margin-left:550px; margin-bottom:30px">
    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search by order ID" />
  </div>
  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row v-if="isLoading==false">
        <sui-table-header-cell><p style="font-size:20px; text-align:center; width:333px">Order Id</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center; width:333px">Customer Name</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center; width:333px">Status</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body v-if="this.isLoading ==  false">
      <sui-table-row v-for="(key,index) in resultQuery" :key="index" >
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'detailOrderStore' , params : {idOrder : key}}">{{resultQuery[index].substring(1,100)}} </router-link></sui-table-cell>
        <sui-table-cell style="text-align:center"  >{{customer_firstname[index] }} {{customer_lastname[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{status1[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>


    </div>

  
</template>
<script > 
import firebase from "../firebase"
    // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
    data() {
        return {
            tracking_no : "",
            order_id : [],
            status_order : [],
            userid : [],
            infoSeller : {},
            check_status_atstore : [],

            isLoading: true,
            fullPage: true,



            key_pickup_order : {},
            key_pickup_order_list : [],
            userid1 : [],
            customer_firstname : [],
            customer_lastname : [],
            status1 : [],
            searchQuery : null

        }
    },
    computed : {

    resultQuery() {
      if(this.searchQuery){
        return this.key_pickup_order_list.filter((item)=>{
        return item.toLowerCase().includes(this.searchQuery.toLowerCase());
      })
      }else{
        return this.key_pickup_order_list;
      }
  }
},
    components: {
      Loading
    },
    mounted (){
      console.log(this.$route.params.idTrack)
      firebase.ref("pickup_order").orderByChild("tracking_no/tracking_no").equalTo(this.$route.params.idTrack).on("value", snapshot => {
        console.log(snapshot.val())
        this.key_pickup_order = snapshot.val()
        this.key_pickup_order_list = Object.keys(snapshot.val())
        console.log(this.key_pickup_order_list)
        for(var i =0 ; i< this.key_pickup_order_list.length ; i++){
          var k = this.key_pickup_order_list[i]
          var userid1 = this.key_pickup_order[k].userid
          if(this.key_pickup_order[k].status.atstore.check_status==true){
            this.status1.push("AT STORE")
          }else{
            this.status1.push("DELIVERY")
          }
          this.userid1[i] = userid1
          console.log(this.userid1)
        }
        console.log(this.userid1.length)
        for(var j =0 ; j< this.userid1.length ;j ++){
        firebase.ref("user/" + this.userid1[j]).on("value" , snapshot => {
          console.log(snapshot.val())
          this.customer_firstname.push(snapshot.val().customer_firstname)
          this.customer_lastname.push(snapshot.val().customer_lastname)
        })
      }
      console.log(this.customer_firstname)
      console.log(this.customer_lastname)
      this.isLoading =  false
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