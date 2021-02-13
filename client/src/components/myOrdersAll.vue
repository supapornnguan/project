<template>
  <div>
    <div v-if="show==1">
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Type</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="(key,index) in keyPickupOrder" :key="index">
        <sui-table-cell v-if="status[index] == true" style="text-align:center"><a href="#" @click="detailPickup(key,type_pickup)">{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell v-if="status[index] == true" style="text-align:center">{{orderDate_pickup[index]}}</sui-table-cell>
        <sui-table-cell v-if="status[index] == true" style="text-align:center">{{type_pickup}}</sui-table-cell>
      
      </sui-table-row>
    </sui-table-body>

    <sui-table-body>
      <sui-table-row v-for="(key,index) in keyShippingOrder" :key="index">
        <sui-table-cell v-if="status[index] == true" style="text-align:center"><a href="#" @click="detailPickup(key,type_shipping)">{{key.substring(1,100 )}}</a></sui-table-cell>
        <sui-table-cell v-if="status[index] == true" style="text-align:center">{{orderDate_shipping[index]}}</sui-table-cell>
        <sui-table-cell v-if="status[index] == true" style="text-align:center">{{type_shipping}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
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
import orderDetailSeller from "../components/orderDetailSeller"
import store from "../store"
export default {
  data() {
    return {
      //info pickup
      infoPickup : {},
      keyPickupOrder : [],
      orderDate_pickup : [],
      totalPrice_pickup : [],
      numberOfProduct_pickup : [],
      type_pickup : "PICK-UP",
      infoDescript : [],
        keysProduct_pickup : [],
        product_detail_pickup : [],
        product_image_pickup : [],
        product_name_pickup : [],
        product_unit_price_pickup : [],
        quantity_pickup : [],
        sellerUid_pickup : [],
        seller_name_shop_pickup : [],
        status : [],
   

      //info shipping
      infoShipping : {},
      keyShippingOrder : [],
      orderDate_shipping : [],
      totalPrice_shipping : [],
      numberOfProduct_shipping : [],
      type_shipping : "SHIPPING",
      infoDescript_ship : [],
       show : 1,
       status_ship : []
    }
  },
  components : {
    orderDetailSeller
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

  mounted() {


      //pick-up
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
          var status = this.infoPickup[k].status.ordered.check_status
          
          this.orderDate_pickup[i] = date_time_to_order
          this.status[i] = status
        }
        console.log(this.status)

         for(var j=0; j < descript.length ; j++){
            console.log(descript[j])
            this.infoDescript[j] = descript[j]
          }
          for(var z=0;z <this.infoDescript.length ; z++){
            this.keysProduct_pickup[z] = this.infoDescript[z].keysProduct
            this.product_detail_pickup[z] = this.infoDescript[z].product_detail
            this.product_image_pickup[z] = this.infoDescript[z].product_image
            this.product_name_pickup[z] = this.infoDescript[z].product_name
            this.product_unit_price_pickup[z] = this.infoDescript[z].product_unit_price
            this.quantity_pickup[z] = this.infoDescript[z].quantity
            this.sellerUid_pickup[z] = this.infoDescript[z].sellerUid
            this.seller_name_shop_pickup[z] = this.infoDescript[z].seller_name_shop
          

            console.log("hello keyy")

            console.log(this.product_detail_pickup[z])
          }
      })

      
      //shipping
        firebase.ref("shipping_order/").orderByChild("sellerUid")
                                    .equalTo(auth.currentUser.uid).on('value',snapshot => {
        console.log(snapshot.val())
        this.infoShipping = snapshot.val()
        this.keyShippingOrder = Object.keys(this.infoShipping)
        console.log(this.keyShippingOrder)
        for(var i=0; i < this.keyShippingOrder.length ; i++){
          var k = this.keyShippingOrder[i]

          var date_time_to_order = this.infoShipping[k].status.ordered.date_time_to_order
          var descript = this.infoShipping[k].product_description
          var status = this.infoShipping[k].status.ordered.check_status
          
          this.orderDate_shipping[i] = date_time_to_order
          this.status_ship = status
          // this.infoDescript = Object.keys(descript)

          console.log("hahah")
          console.log(descript)

          for(var j=0; j < descript.length ; j++){
            console.log(descript[j])
            this.infoDescript_ship[j] = descript[j]
          }
          console.log("hello des")
          console.log(this.infoDescript_ship)    
        }
      })
  },
}
</script>