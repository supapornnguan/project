<template>
  <div id="dashboardAdmin">
    <h3 style="font-weight:600">TODO</h3>
    <div id="todo1">
      <sui-grid :columns="3" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment @click="gotoVerifyStore">
              <img src="../assets/verifyStore.png" :width="60" id="img1">
              <h2 style="text-align:center; margin-top:15px">{{numVerifyStore}}</h2>
              <h3 style="text-align:center; margin-top:20px">Verify Store</h3>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment @click="gotoVerifySlip">
              <img src="../assets/verifySlip.png" :width="60" id="img1">
              <h2 style="text-align:center; margin-top:15px">{{numVerifySlip}}</h2>
              <h3 style="text-align:center; margin-top:20px">Verify Slip</h3>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment>
              <img src="../assets/banking.png" :width="60" id="img1">
              <h2 style="text-align:center; margin-top:15px">{{numBankTran}}</h2>
              <h3 style="text-align:center; margin-top:20px">Bank Transfer</h3>
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
  background-color: 	#C8C8C8;
  width: 1000px;
}
#img1{
  margin-left: 100px;
}
</style>

