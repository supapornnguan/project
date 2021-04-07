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
    <!-- <h1>{{this.$route.params.sellerid}}</h1> -->
    <!-- <p>kkoko</p> -->
    <!-- <h3 id="spaceLeftRight" is="sui-header" align=center block>
    STATISTICS
    </h3> -->
    <!-- <sui-grid>
      <sui-grid-row id="spaceLeftRight" stretched>
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
    </sui-grid> -->
  </div>
</template>

<script>
import firebase from "../firebase"
// import {auth} from "../firebase"
export default {
  data() {
    return {
      infoProduct_pickup : {},
      numInfo_pickup : [],
      infoProduct_shipping : {},
      numInfo_shipping : [],
      total_order : 0,
      check_status_complete : [],
      product_description : [],
      status_product : [],
      seller_uid : ""


    }
  },
  created(){
    // this.seller_uid = this.$route.params.sellerId
    console.log(this.$route.params.sellerid)
  },

  mounted(){
    // this.seller_uid = auth.currentUser.uid
    console.log(this.$route.params.sellerid)
    firebase.ref("pickup_order/").orderByChild("sellerUid")
                                    .equalTo(this.$route.params.sellerid).on("value", snapshot => {
      console.log(snapshot.val())
      this.infoProduct_pickup = snapshot.val()
      this.numInfo_pickup = Object.keys(this.infoProduct_pickup)
      console.log(this.numInfo_pickup)
      for(var i = 0 ; i < this.numInfo_pickup.length ; i++){
        var  k = this.numInfo_pickup[i]
        this.check_status_complete[i] = this.infoProduct_pickup[k].status.complete.check_status
        if(this.check_status_complete[i] == true){
          this.product_description.push(this.infoProduct_pickup[k].product_description)
      } 
      }
      
console.log(this.check_status_complete)
console.log(this.product_description)
    })

    firebase.ref("shipping_order/").orderByChild("sellerUid")
                                    .equalTo(this.$route.params.sellerid).on("value", snapshot =>{
      this.infoProduct_shipping = snapshot.val()
      this.numInfo_shipping = Object.keys(this.infoProduct_shipping)
    })

    
    
  },
  
}
</script>

<style>
#spaceLeftRight{
    margin-left: 10px;
    margin-Right: 10px;   
}
</style>