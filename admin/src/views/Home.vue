<template>
  <div id="dashboardAdmin">
    <h3 style="font-weight:600">TO-DO-LIST</h3>
    <br>
    <div id="todo1">
      <sui-grid :columns="3" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment @click="gotoVerifyStore">
              <div align=center>
              <img src="../assets/check.png" :width="50">
              <br>
              <br>
                <sui-statistic>
                  <sui-statistic-value>{{numVerifyStore}}</sui-statistic-value>
                  <br>
                  <sui-statistic-label>Verify Seller</sui-statistic-label>
                </sui-statistic>
              </div>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment @click="gotoVerifySlip">
              <div align=center>
              <img src="../assets/slip.png" :width="50">
              <br>
              <br>
                <sui-statistic>
                  <sui-statistic-value>{{numVerifySlip}}</sui-statistic-value>
                  <br>
                  <sui-statistic-label>Verify Slip</sui-statistic-label>
                </sui-statistic>
              </div>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment>
              <div align=center>
              <img src="../assets/bank.png" :width="50">
              <br>
              <br>
                <sui-statistic>
                  <sui-statistic-value>{{numBankTran}}</sui-statistic-value>
                  <br>
                  <sui-statistic-label>Bank Transfer</sui-statistic-label>
                </sui-statistic>
              </div>
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
  },
  methods: {
    gotoVerifyStore(){
      this.$router.replace('verifyStore')
    },
    gotoVerifySlip(){
      this.$router.replace('verifySlip')
    }
  },
}
</script>

<style scoped>
#dashboardAdmin{
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
    background-color: 	#F4F6F6;
  width: 1000px;
}
</style>