<template>
  <div>
    <h3 id="spaceLeftRight" is="sui-header" align=center block>
    TO DO
    </h3>
    <sui-grid :columns="3">
      <sui-grid-row id="spaceLeftRight" stretched>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example" align=center>
              <sui-statistic>
                <sui-statistic-label>TOTAL ORDERS</sui-statistic-label>
                <sui-statistic-value>{{numInfo_pickup.length + numInfo_shipping.length}}</sui-statistic-value>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example" align=center>
              <sui-statistic>
                <sui-statistic-label>PICKUP ORDERS</sui-statistic-label>
                <sui-statistic-value>{{numInfo_pickup.length}}</sui-statistic-value>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example" align=center>
              <sui-statistic>
                <sui-statistic-label>SHIPPING ORDERS</sui-statistic-label>
                <sui-statistic-value>{{numInfo_shipping.length}}</sui-statistic-value>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <h3 id="spaceLeftRight" is="sui-header" align=center block>
    STATISTICS
    </h3>
    <sui-grid :columns="3">
      <sui-grid-row id="spaceLeftRight" stretched>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example" align=center>
              <sui-statistic>
                <sui-statistic-label>RATING</sui-statistic-label>
                <sui-statistic-value>4.5</sui-statistic-value>
                <sui-statistic-label>(+4%)</sui-statistic-label>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example" align=center>
              <sui-statistic>
                <sui-statistic-label>ORDERS SUCCESSFUL</sui-statistic-label>
                <sui-statistic-value>200</sui-statistic-value>
                <sui-statistic-label>(+12%)</sui-statistic-label>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example" align=center>
              <sui-statistic>
                <sui-statistic-label>TOTAL SALES</sui-statistic-label>
                <sui-statistic-value>120,000฿</sui-statistic-value>
                <sui-statistic-label>(+25%)</sui-statistic-label>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
  data() {
    return {
      infoProduct_pickup : {},
      numInfo_pickup : [],
      infoProduct_shipping : {},
      numInfo_shipping : [],
      total_order : 0
    }
  },

 
  mounted() {
    firebase.ref("seller/" + auth.currentUser.uid + "/pickup_order_seller").on("value", snapshot => {
      console.log(snapshot.val())
      this.infoProduct_pickup = snapshot.val()
      this.numInfo_pickup = Object.keys(this.infoProduct_pickup)
      console.log(this.numInfo_pickup)
    })

    firebase.ref("seller/" + auth.currentUser.uid + "/shipping_order_seller").on("value", snapshot =>{
      this.infoProduct_shipping = snapshot.val()
      this.numInfo_shipping = Object.keys(this.infoProduct_shipping)
    })

    // this.total_order = this.numInfo_pickup.length + this.infoProduct_shipping.length
    
  },
  
}
</script>

<style>
#spaceLeftRight{
    margin-left: 10px;
    margin-Right: 10px;   
}
</style>