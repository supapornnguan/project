<template>
  <div>
  <b-tabs content-class="mt-3" fill>
  
  <!-- ORDER -->
  <b-tab title="Order" active><p>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Order Date</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Total Price</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Quantity</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="(key,index) in keyOrder" :key="index">
        <sui-table-cell style="text-align:center"><a href="#">{{key}}</a></sui-table-cell>
        <sui-table-cell style="text-align:center">{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{total_amount[index]}}.00 THB</sui-table-cell>
        <sui-table-cell style="text-align:center">{{quantity[index]}}</sui-table-cell>
        <sui-table-cell>
          <sui-button>Confirm</sui-button>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </p></b-tab>

  <!-- PACKING -->
  <b-tab title="Packing"><p>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
        <sui-table-header-cell></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>
          <sui-button>Ship</sui-button>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>
          <sui-button>Ship</sui-button>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>
          <sui-button>Ship</sui-button>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </p></b-tab>

  <!-- DELIVERY -->
  <b-tab title="Delivery" ><p>
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
  </p></b-tab>

  <!-- COMPLETE -->
    <b-tab title="Complete" ><p>
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
  </p></b-tab>

  </b-tabs>
  </div>
</template>

<script>
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
  data() {
    return {
      infoOrder : {},
      keyOrder : [],
      date_time_to_order : [],
      product_key : [],
      sellerUid : [],
      status : [],
      total_amount : [],
      userid : [],
      quantity :[],
      value:""
    }
  },
  mounted() {
    
    firebase.ref('shipping_order/').orderByChild('sellerUid').equalTo(auth.currentUser.uid).on('value', snapshot =>{
      this.infoOrder = snapshot.val()
      this.keyOrder = Object.keys(snapshot.val())
      console.log(this.keyOrder)
      for(var i = 0 ; i<this.keyOrder.length ; i++){
        var k = this.keyOrder[i];
        var date_time_to_order = this.infoOrder[k].date_time_to_order;
        var product_key = this.infoOrder[k].product_key;
        var sellerUid = this.infoOrder[k].sellerUid;
        var status = this.infoOrder[k].status;
        var total_amount = this.infoOrder[k].total_amount;
        var userid = this.infoOrder[k].userid;
        var quantity = this.infoOrder[k].quantity;

        this.date_time_to_order[i] = date_time_to_order
        this.product_key[i] = product_key
        this.sellerUid[i] = sellerUid
        this.status[i] = status
        this.total_amount[i] = total_amount
        this.userid[i] = userid
        this.quantity[i] = quantity
      }
    })
  },
  

}
</script>

<style scoped>
  
</style>