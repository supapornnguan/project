<template>
<div>
<div v-if="show==1">
      <sui-table selectable celled>
         <sui-table fixed>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order No.</sui-table-header-cell>
        <sui-table-header-cell>Date</sui-table-header-cell>
        <sui-table-header-cell>Quantity</sui-table-header-cell>
        <sui-table-header-cell>Total</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell selectable>
        <a href="#" @click="shippingTransaction">0987654321</a>
        </sui-table-cell>
        <sui-table-cell>28 Sep 2020</sui-table-cell>
        <sui-table-cell>1</sui-table-cell>
        <sui-table-cell>19,999.00</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell selectable>
        <a href="#" @click="shippingTransaction">0987654321</a>
        </sui-table-cell>
        <sui-table-cell>28 Sep 2020</sui-table-cell>
        <sui-table-cell>1</sui-table-cell>
        <sui-table-cell>19,999.00</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </sui-table>
 </div>
  <shippingTransaction  v-if="show!=1"/>  
  </div>
</template>

<script>
import shippingTransaction from "../components/shippingTransaction"
export default {
    data () {
    return {
      show : 1,
    }
},
 components:{
      shippingTransaction,
  },
     methods: {
        shippingTransaction(){
          this.show = 2
        },
    },
}
</script>>
