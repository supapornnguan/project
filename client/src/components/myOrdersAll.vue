<template>
  <div>
    <div v-if="show==1">
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Order Date</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Type</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Status</sui-table-header-cell>


      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="(key,index) in keyPickupOrder1" :key="index">
        <sui-table-cell style="text-align:center"><a href="#" @click="detailPickup(key,type_pickup)">{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell style="text-align:center">{{filterDate[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{type_pickup}}</sui-table-cell>
        <sui-table-cell style="text-align:center">
            <sui-label horizontal v-if="status2[index] === 'ordered'" style="width:100px">
              ordered
            </sui-label>
            <sui-label color="orange" horizontal v-if="status2[index] === 'packing'" style="width:100px">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status2[index] === 'delivery'" style="width:100px">
              delivery
            </sui-label>
            <sui-label color="blue" horizontal v-if="status2[index] === 'atstore'" style="width:100px">
              atstore
            </sui-label>
            <sui-label color="green" horizontal v-if="status2[index] === 'complete'" style="width:100px">
              complete
            </sui-label>
            <sui-label color="red" horizontal v-if="status2[index] === 'return'" style="width:100px">
              return
            </sui-label>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>

    <!-- shipping -->
    <sui-table-body>
      <sui-table-row v-for="(key,index) in key_order" :key="index">
        <sui-table-cell style="text-align:center"><a href="#" @click="detailPickup(key,type_shipping)">{{key.substring(1,100 )}}</a></sui-table-cell>
        <sui-table-cell style="text-align:center">{{filterDate_ship[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{type_shipping}}</sui-table-cell>
        <sui-table-cell style="text-align:center">
            <sui-label horizontal v-if="status1[index] === 'verified'" style="width:100px">
              verified
            </sui-label>
            <sui-label color="orange" horizontal v-if="status1[index] === 'packing'" style="width:100px">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status1[index] === 'delivery'" style="width:100px">
              delivery
            </sui-label>
            <sui-label color="green" horizontal v-if="status1[index] === 'complete'" style="width:100px">
              complete
            </sui-label>
        </sui-table-cell>
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
      keyPickupOrder1 : [],
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
        filterDate : [],
   

      //info shipping
      infoShipping : {},
      keyShippingOrder : [],
      keyShippingOrder1 : [],
      orderDate_shipping : [],
      totalPrice_shipping : [],
      numberOfProduct_shipping : [],
      type_shipping : "SHIPPING",
      infoDescript_ship : [],
       show : 1,
       status_ship : [],
       filterDate_ship : [],
       status1 : [],
       status2 : [],


      check_verify : [],
      key_order : []
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

  created() {


      //pick-up
      firebase.ref("pickup_order/").orderByChild("sellerUid")
                                    .equalTo(auth.currentUser.uid).on('value',snapshot => {
        // console.log(snapshot.val())
        this.infoPickup = snapshot.val()
        this.keyPickupOrder = Object.keys(this.infoPickup)
        // console.log(this.keyPickupOrder)
        for(var i=0; i < this.keyPickupOrder.length ; i++){
          var k = this.keyPickupOrder[i]

          var date_time_to_order = this.infoPickup[k].status.ordered.date_time_to_order
          var descript = this.infoPickup[k].product_description
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
          this.orderDate_pickup[i] = date_time_to_order
          this.status[i] = status
        }

        //sort date
        for(var q = 0 ; q < this.orderDate_pickup.length ; q++){
          this.filterDate[q] = this.orderDate_pickup[q]
        }
        this.filterDate.reverse()
        for(var a = 0 ;a < this.filterDate.length ; a++){
          for(var b = 0 ; b < this.orderDate_pickup.length ; b++){
            if(this.filterDate[a] == this.orderDate_pickup[b]){
              this.keyPickupOrder1[a] = this.keyPickupOrder[b]
              this.status2[a] = this.status[b]
            }
          }
        }
        console.log(this.keyPickupOrder1)
        console.log(this.filterDate)

        // console.log(this.status)

         for(var j=0; j < descript.length ; j++){
            // console.log(descript[j])
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
          }
          // this.orderDate_pickup.reverse()
      })

      
      //shipping
        firebase.ref("shipping_order/").orderByChild("sellerUid")
                                    .equalTo(auth.currentUser.uid).on('value',snapshot => {
        console.log(snapshot.val())     //shipping_order all (object)
        this.infoShipping = snapshot.val()    //object
        this.keyShippingOrder = Object.keys(this.infoShipping)   //array
        console.log(this.keyShippingOrder)
        for(var i=0; i < this.keyShippingOrder.length ; i++){
          var k = this.keyShippingOrder[i]

          this.check_verify[i] = this.infoShipping[k].status.slip_verified.check_status
          var descript = this.infoShipping[k].product_description
          var status_ship

          if(this.check_verify[i] == true){
          var date_time_to_order = this.infoShipping[k].status.unpaid.date_time_to_order
          this.key_order.push(k) 
          if(this.infoShipping[k].status.packing.check_status == false ){
            status_ship = "verified"
          }else if(this.infoShipping[k].status.delivery.check_status == false ){
            status_ship = "packing"
          }else if(this.infoShipping[k].status.complete.check_status == false ){
            status_ship = "delivery"
          }else if(this.infoShipping[k].status.return.check_status == false ){
            status_ship = "complete"
          }

          if(date_time_to_order !== undefined){
            this.orderDate_shipping.push(date_time_to_order)
            this.status_ship.push(status_ship)
          }
        
        for(var q = 0 ; q < this.orderDate_shipping.length ; q++){
          this.filterDate_ship[q] = this.orderDate_shipping[q]
        }
        this.filterDate_ship.reverse()
        for(var a = 0 ;a < this.filterDate_ship.length ; a++){
          for(var b = 0 ; b < this.orderDate_shipping.length ; b++){
            if(this.filterDate_ship[a] == this.orderDate_shipping[b]){
              this.keyShippingOrder1[a] = this.key_order[b]
              this.status1[a] = this.status_ship[b]
            }
          }
        }
      }        
        // this.infoDescript = Object.keys(descript)



          console.log("hahah")
          console.log(descript)

          for(var j=0; j < descript.length ; j++){
            console.log(descript[j])
            this.infoDescript_ship[j] = descript[j]
          }
          console.log("hello des")
          console.log(this.infoDescript_ship)    
          console.log(this.check_verify)
          console.log(this.key_order)
          console.log(this.filterDate_ship)
          console.log(this.keyShippingOrder1)
          console.log(this.status1)
        }
      })
  },
}
</script>