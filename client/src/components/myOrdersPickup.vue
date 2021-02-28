<template>
  <div>
      <div v-if="show==2">
        <a href="#" @click="back">Back</a>
    </div>
    <div v-if="show==1">
    <b-tabs content-class="mt-3" fill>

    <!-- ORDER -->
    <b-tab title="Order" active >
    <sui-table celled>
      <!-- <h1>{{order_pickup}}</h1> -->
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Order Date</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Store</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Status</sui-table-header-cell>
        <!-- <sui-table-header-cell style="text-align:center"></sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="(key,index) in keyPickupOrder1" :key="index">
          <sui-table-cell  style="text-align:center"><a  href="#"  @click="detailPickup(key,type_pickup)">{{key.substring(1,100)}}</a></sui-table-cell>
          <sui-table-cell  style="text-align:center">{{filterDate[index]}}</sui-table-cell>
          <sui-table-cell  style="text-align:center">{{branch_selected1[index]}}</sui-table-cell>
          <sui-table-cell  style="text-align:center">
            <sui-label horizontal v-if="status1[index] === 'ordered'" style="width:100px">
              ordered
            </sui-label>
            <sui-label color="orange" horizontal v-if="status1[index] === 'packing'" style="width:100px">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status1[index] === 'delivery'" style="width:100px">
              delivery
            </sui-label>
            <sui-label color="blue" horizontal v-if="status1[index] === 'atstore'" style="width:100px">
              atstore
            </sui-label>
            <sui-label color="green" horizontal v-if="status1[index] === 'complete'" style="width:100px">
              complete
            </sui-label>
            <sui-label color="red" horizontal v-if="status1[index] === 'return'" style="width:100px">
              return
            </sui-label>

          </sui-table-cell>
      </sui-table-row>
    </sui-table-body>

  </sui-table>

  
  </b-tab>


  <!-- PACKING -->
  <b-tab title="Packing">
    <packing/>
  </b-tab>

  <!-- DELIVERY -->
  <b-tab title="Delivery">
  <delivery/>
  </b-tab>

  <!-- AT STORE -->
  <b-tab title="At Store">
  <atstore/>
  </b-tab>

  <!-- COMPLETE -->
  <b-tab title="Complete">
  <complete/>
  </b-tab>

  <!-- RETURN -->
  <b-tab title="Return">
  <returnOrder/>
</b-tab>

  </b-tabs>
  </div>
    <orderDetailSeller v-if="show==2"/>

  </div>
</template>

<script>
import firebase from "../firebase"
import {auth} from "../firebase"
import orderDetailSeller from "../components/orderDetailSeller"
import packing from "../components/packing"
import delivery from "../components/delivery"
import atstore from "../components/atstore"
import complete from "../components/complete"
import returnOrder from "../components/return"
import store from "../store"

// import {mapGetters} from "vuex"
export default {
  data() {
    return {
      // infoOrder : {},
      // keyOrder : [],
      branch_selected :[],
      // date_time_to_order : [],
      // product_key : [],
      // sellerUid : [],
      // status : [],
      // total_amount : [],
      // userid : [],
      // quantity :[],

       //info pickup
      infoPickup : {},
      keyPickupOrder : [],
      orderDate_pickup : [],
      totalPrice_pickup : [],
      numberOfProduct_pickup : [],
      type_pickup : "PICK-UP",
      status : [],
      infoDescript : [], 
      value:"",
      open: false,
      show : 1,
      date_time_to_order1 : [],

      filterDate : [],
      keyPickupOrder1 : [],
      // status1 : [],
      branch_selected1 : [],
      status1 : []

    }
  },
  components : {
    orderDetailSeller,
    packing,
    delivery,
    atstore,
    complete,
    returnOrder
  },
  methods: {

        back(){
            this.show = ''
            this.show = 1
        },
    detailPickup(key,type){
            store.commit("SET_KEY_ORDER_DETAIL",{
              keysOrder : key,
              type : type,
            })
            this.show = ''
            this.show = 2
        },
    confirmOrder(key){
      console.log(key)
      // store.commit('SET_ORDER_BY_PICKUP',{
      //   branch_selected : this.branch_selected,
      //   date_time_to_order : this.date_time_to_order,
      //   product_key : this.product_key,
      //   sellerUid : this.sellerUid,
      //   status : "packing",
      //   total_amount : this.total_amount,
      //   userid : this.userid,
      //   quantity : this.quantity
      // })
    },
  },
  created() {
        firebase.ref("pickup_order/").orderByChild("sellerUid")
                                    .equalTo(auth.currentUser.uid).on('value',snapshot => {
        console.log(snapshot.val())
        this.infoPickup = snapshot.val()
        this.keyPickupOrder = Object.keys(this.infoPickup)
        console.log(this.keyPickupOrder)
        for(var i=0; i < this.keyPickupOrder.length ; i++){
          var k = this.keyPickupOrder[i]

          var date_time_to_order = this.infoPickup[k].status.ordered.date_time_to_order
          var descript = this.infoPickup[k].product_description
          var branch_selected = this.infoPickup[k].branch_selected
          var status 

          if(this.infoPickup[k].status.packing.check_status == false ){
            status = "ordered"
          }else if(this.infoPickup[k].status.delivery.check_status == false ){
            status = "packing"
          }else if(this.infoPickup[k].status.atstore.check_status == false ){
            status = "delivery"
          }else if(this.infoPickup[k].status.complete.check_status == false ){
            status = "atstore"
          }else if(this.infoPickup[k].status.return.check_status == false ){
            status = "complete"
          }else if(this.infoPickup[k].status.return.check_status == true ){
            status = "return"
          }

          
        
          this.status[i] = status
          this.orderDate_pickup[i] = date_time_to_order
          this.branch_selected[i] = branch_selected
          // this.status[i] = status

          for(var q = 0 ; q < this.orderDate_pickup.length ; q++){
          this.filterDate[q] = this.orderDate_pickup[q]
        }
        this.filterDate.reverse()
        for(var a = 0 ;a < this.filterDate.length ; a++){
          for(var b = 0 ; b < this.orderDate_pickup.length ; b++){
            if(this.filterDate[a] == this.orderDate_pickup[b]){
              this.keyPickupOrder1[a] = this.keyPickupOrder[b]
              this.status1[a] = this.status[b]
              this.branch_selected1[a] = this.branch_selected[b]
            }
          }
        }
          // this.infoDescript = Object.keys(descript)

          console.log("hahah")
          console.log(status)

          for(var j=0; j < descript.length ; j++){
            console.log(descript[j])
            this.infoDescript[j] = descript[j]
          }
          console.log("hello des")
          console.log(this.infoDescript)    
        }
        console.log(this.keyPickupOrder1)
      })
  },
  // computed:{
  //   ...mapGetters({
  //     infoOrder1 : "getOrderByPickup"
  //   })

  // },
  //    mounted() {
  //     firebase.ref('pickup_order/').orderByChild('sellerUid').equalTo(auth.currentUser.uid).on('value', snapshot => {
  //     this.infoOrder = snapshot.val()
  //     this.keyOrder = Object.keys(snapshot.val())
  //     console.log(this.keyOrder)
  //     for(var i = 0 ; i<this.keyOrder.length ; i++){
  //       var k = this.keyOrder[i];
  //       var branch_selected = this.infoOrder[k].branch_selected;
  //       var date_time_to_order = this.infoOrder[k].date_time_to_order;
  //       var product_key = this.infoOrder[k].product_key;
  //       var sellerUid = this.infoOrder[k].sellerUid;
  //       var status = this.infoOrder[k].status;
  //       var total_amount = this.infoOrder[k].total_amount;
  //       var userid = this.infoOrder[k].userid;
  //       var quantity = this.infoOrder[k].quantity;

  //       this.branch_selected[i] = branch_selected
  //       this.date_time_to_order[i] = date_time_to_order
  //       this.product_key[i] = product_key
  //       this.sellerUid[i] = sellerUid
  //       this.status[i] = status
  //       this.total_amount[i] = total_amount
  //       this.userid[i] = userid
  //       this.quantity[i] = quantity
  //     }
  //   })
  // },

  
}
</script>

<style>
#positionLeft{
    text-align: left;
}  
</style>
