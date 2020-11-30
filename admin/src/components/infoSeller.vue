<template>
  <div id="InfoSellerHome">
      <img src="../assets/store.png" :width="60" style="display:inline">
      <h3 style="display:inline; margin-left:30px;">Name Store</h3>
      <h4 style="margin-left:90px; color:gray">name</h4>
      <h4 style="margin-left:90px; color:gray">seller ID</h4>
    <div id="todo1">
      <sui-grid :columns="3" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment>
              <img src="../assets/rating.png" :width="60" id="img1">
              <h2 style="text-align:center; margin-top:15px">4.5</h2>
              <h3 style="text-align:center; margin-top:20px">Rating & Review </h3>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment>
              <img src="../assets/revenue.png" :width="60" id="img1">
              <h2 style="text-align:center; margin-top:15px">THB 99,999.00</h2>
              <h3 style="text-align:center; margin-top:20px">Total Revenue</h3>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment>
              <img src="../assets/goal.png" :width="60" id="img1">
              <h2 style="text-align:center; margin-top:15px">1000</h2>
              <h3 style="text-align:center; margin-top:20px">Successful Order</h3>
            </sui-segment>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numVerifyStore : '1',
      numVerifySlip : '4',
      numBankTran : '4'
    }
  }
}
</script>

<style scoped>
#InfoSellerHome{
  position: relative;
  left: 400px;
  top: -990px;
}
#todo{
  width: 900px;
  margin-left: 60px;
  margin-top: 10px;
}
#todo1{
  border-radius: 10px;
  background-color: 	#C8C8C8;
  width: 1000px;
}
#img1{
  margin-left: 100px;
}
</style>

