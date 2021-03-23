<template>
  <div>
    <div v-if="show==1">
  <b-tabs content-class="mt-3" fill>
  
  <!-- ORDER -->
  <b-tab title="Order" active>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Order Date</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Status</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_filter" :key="index" >
      <sui-table-row >
        <sui-table-cell  style="text-align:center"><a href="#" @click="detailPickup(key,type_shipping)">{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell  style="text-align:center">{{orderDate_shipping[index]}}</sui-table-cell>
         <sui-table-cell style="text-align:center; ">
            <sui-label horizontal v-if="status[index] === 'verifyslip'" style="width:100px">
              verified
            </sui-label>
            <sui-label color="orange" horizontal v-if="status[index] === 'packing'" style="width:100px">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status[index] === 'delivery'" style="width:100px">
              delivery
            </sui-label>
            <sui-label color="green" horizontal v-if="status[index] === 'complete'" style="width:100px">
              complete
            </sui-label>
         </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>


  </b-tab>

  <!-- PACKING -->
  <b-tab title="Packing"><p>
   <packingShip/>
  </p></b-tab>

  <!-- DELIVERY -->
  <b-tab title="Delivery" ><p>
    <deliveryShip/>
  </p></b-tab>

  <!-- COMPLETE -->
    <!-- <b-tab title="Complete" ><p>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </p></b-tab> -->

  </b-tabs>
</div>

  <div v-if="show==2">
        <a href="#" @click="back">Back</a>
    </div>
 <orderDetailSeller v-if="show==2"/>

  </div>
</template>

<script>
import firebase from "../firebase"
import {auth} from "../firebase"
import store from "../store"
import orderDetailSeller from "../components/orderDetailSeller" 
import packingShip from "../components/packingShip"
import deliveryShip from "../components/deliveryShip"
export default {
  data() {
    return {
      // infoOrder : {},
      // keyOrder : [],
      // date_time_to_order : [],
      // product_key : [],
      // sellerUid : [],
      // status : [],
      // total_amount : [],
      // userid : [],
      // quantity :[],
      value:"",
       //info shipping
      infoShipping : {},
      keyShippingOrder : [],
      orderDate_shipping : [],
      totalPrice_shipping : [],
      numberOfProduct_shipping : [],
      type_shipping : "SHIPPING",
      infoDescript_ship : [],
      show : 1,
      status : [],
      check_verify : [],
      key_filter : []
    }
  },
  components : {
    orderDetailSeller,
    packingShip,
    deliveryShip
  },
  created() {
    firebase.ref("shipping_order/").orderByChild("sellerUid").equalTo(auth.currentUser.uid).on("value" , snapshot => {
      console.log(snapshot.val())
      this.infoShipping = snapshot.val()
      this.keyShippingOrder = Object.keys(snapshot.val())

      for(var i =0 ; i< this.keyShippingOrder.length ; i++){
        var k = this.keyShippingOrder[i]

        this.check_verify[i] = this.infoShipping[k].status.slip_verified.check_status
        // this.orderDate_shipping[i] = this.infoShipping[k].status.unpaid.date_time_to_order

        if(this.check_verify[i] == true){
          this.key_filter.push(k)
          this.orderDate_shipping.push(this.infoShipping[k].status.unpaid.date_time_to_order) 
          var status
          if(this.infoShipping[k].status.packing.check_status == false){
            status = "verified"
          }else if(this.infoShipping[k].status.delivery.check_status == false){
            status = "packing"
          }else if(this.infoShipping[k].status.complete.check_status == false){
            status = "delivery"
          }else if(this.infoShipping[k].status.return.check_status == false){
            status = "complete"
          }
          this.status.push(status)
          



        }
      }
    })
    console.log(this.check_verify)
    console.log(this.orderDate_shipping)
    console.log(this.key_filter)
  },
  mounted() {
    
    // firebase.ref('shipping_order/').orderByChild('sellerUid').equalTo(auth.currentUser.uid).on('value', snapshot =>{
    //   this.infoOrder = snapshot.val()
    //   this.keyOrder = Object.keys(snapshot.val())
    //   console.log(this.keyOrder)
    //   for(var i = 0 ; i<this.keyOrder.length ; i++){
    //     var k = this.keyOrder[i];
    //     var date_time_to_order = this.infoOrder[k].date_time_to_order;
    //     var product_key = this.infoOrder[k].product_key;
    //     var sellerUid = this.infoOrder[k].sellerUid;
    //     var status = this.infoOrder[k].status;
    //     var total_amount = this.infoOrder[k].total_amount;
    //     var userid = this.infoOrder[k].userid;
    //     var quantity = this.infoOrder[k].quantity;

    //     this.date_time_to_order[i] = date_time_to_order
    //     this.product_key[i] = product_key
    //     this.sellerUid[i] = sellerUid
    //     this.status[i] = status
    //     this.total_amount[i] = total_amount
    //     this.userid[i] = userid
    //     this.quantity[i] = quantity
    //   }
    // })

    //  firebase.ref("shipping_order/").orderByChild("sellerUid")
    //                                 .equalTo(auth.currentUser.uid).on('value',snapshot => {
    //     console.log(snapshot.val())
    //     this.infoShipping = snapshot.val()
    //     this.keyShippingOrder = Object.keys(this.infoShipping)
    //     console.log(this.keyShippingOrder)
    //     for(var i=0; i < this.keyShippingOrder.length ; i++){
    //       var k = this.keyShippingOrder[i]

    //       var date_time_to_order = this.infoShipping[k].status.ordered.date_time_to_order
    //       var descript = this.infoShipping[k].product_description
    //       var status = this.infoShipping[k].status.ordered.check_status
          
    //       this.orderDate_shipping[i] = date_time_to_order
    //       this.status[i] = status
    //       // this.infoDescript = Object.keys(descript)

    //       console.log("hahah")
    //       console.log(descript)

    //       for(var j=0; j < descript.length ; j++){
    //         console.log(descript[j])
    //         this.infoDescript_ship[j] = descript[j]
    //       }
    //       console.log("hello des")
    //       console.log(this.infoDescript_ship)    
    //     }
    //   })
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
        }
  },
  

}
</script>

<style scoped>
  
</style>