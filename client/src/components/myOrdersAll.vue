<template>
  <div>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
        <sui-table-header-cell>Type</sui-table-header-cell>
        <sui-table-header-cell>Status</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <!-- <sui-table-body>
      <sui-table-row v-for="(key,index) in keyPickupOrder" :key="index">
        <sui-table-cell style="text-align:center"><a href="#">{{key}}</a></sui-table-cell>
        <sui-table-cell style="text-align:center">{{orderDate_pickup[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{totalPrice_pickup[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{numberOfProduct_pickup[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{type_pickup}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{status[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body> -->
  </sui-table>
  </div>
</template>

<script>
// import firebase from "../firebase"
// import {auth} from "../firebase"
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
      status : [],

      //info shipping
      infoShipping : {},
      keyShippingOrder : [],
      orderDate_shipping : [],
      totalPrice_shipping : [],
      numberOfProduct_shipping : [],
      type_shipping : "SHIPPING",
    }
  },

//   mounted() {
// //pickup
//     firebase.ref('pickup_order/').orderByChild('sellerUid').equalTo(auth.currentUser.uid).on('value', snapshot => {
//       this.infoPickup = snapshot.val()
//       console.log(this.infoPickup)
//       this.keyPickupOrder = Object.keys(snapshot.val())
//       console.log(this.keyPickupOrder)
//       for(var i = 0 ; i<this.keyPickupOrder.length ; i++){
//         var k = this.keyPickupOrder[i];
//         var orderDate_pickup = this.infoPickup[k].date_time_to_order;
//         var totalPrice_pickup = this.infoPickup[k].total_amount;
//         var numberOfProduct_pickup = this.infoPickup[k].quantity;
//         var status = this.infoPickup[k].status;

//         this.orderDate_pickup[i] = orderDate_pickup
//         this.totalPrice_pickup[i] = totalPrice_pickup
//         this.numberOfProduct_pickup[i] = numberOfProduct_pickup
//         this.status[i] = status
//       }
//     })
// //shipping
//       firebase.ref('shipping_order/').orderByChild('sellerUid').equalTo(auth.currentUser.uid).on('value', snapshot =>{
//       this.infoShipping = snapshot.val()
//       this.keyShippingOrder = Object.keys(snapshot.val())
//       console.log(this.keyShippingOrder)
//       for(var i = 0 ; i<this.keyShippingOrder.length ; i++){
//         var k = this.keyShippingOrder[i];
//         var orderDate_shipping = this.infoShipping[k].date_time_to_order;
//         var totalPrice_shipping = this.infoShipping[k].total_amount;
//         var numberOfProduct_shipping = this.infoShipping[k].quantity;
//         var status = this.infoShipping[k].status;

//         this.orderDate_shipping[i] = orderDate_shipping
//         this.totalPrice_shipping[i] = totalPrice_shipping
//         this.numberOfProduct_shipping[i] = numberOfProduct_shipping
//         this.status[i] = status
//       }
//     })
//   },
}
</script>