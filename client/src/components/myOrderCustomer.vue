<template>
  <div>
  <div v-if="show==1">
    <sui-tab :menu="{ borderless: true, attached: false, tabular: false }">
    <sui-tab-pane title="Pick-up" :attached="false">
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
        <sui-table-cell>0987654321</sui-table-cell>
        <sui-table-cell>29 Sep 2020</sui-table-cell>
        <sui-table-cell>1</sui-table-cell>
        <sui-table-cell>19,999.00</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>0987654321</sui-table-cell>
        <sui-table-cell>29 Sep 2020</sui-table-cell>
        <sui-table-cell>1</sui-table-cell>
        <sui-table-cell>19,999.00</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>       
      </sui-tab-pane>


      <sui-tab-pane title="Shipping" :attached="false">
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
        <sui-table-cell>0987654321</sui-table-cell>
        <sui-table-cell>28 Sep 2020</sui-table-cell>
        <sui-table-cell>1</sui-table-cell>
        <sui-table-cell>19,999.00</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>0987654321</sui-table-cell>
        <sui-table-cell>28 Sep 2020</sui-table-cell>
        <sui-table-cell>1</sui-table-cell>
        <sui-table-cell>19,999.00</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-tab-pane>
    </sui-tab>

       </div>
    <pickupTransaction v-if="show!=1"/>
  </div>
</template>

<script>
import pickupTransaction from "../components/pickupTransaction"
export default {
    data () {
    return {
      show : 1

    }
  },
  components:{
      pickupTransaction,
  },
   methods: {
        gotoSuccess(){
          this.show = 2
        }
   }
};
</script>
