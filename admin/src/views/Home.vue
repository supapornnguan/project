<template>
  <div id="dashboardAdmin">
    <h3 style="font-weight:600">TO-DO-LIST</h3>
    <br>
    <div id="todo1">
      <sui-grid :columns="2" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment @click="gotoVerifyStore">
              <div align=center>
              <img src="../assets/check.png" :width="50">
              <br>
              <br>
                <sui-statistic>
                  <sui-statistic-value>{{numVerifySeller.length}}</sui-statistic-value>
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
                  <sui-statistic-value>{{numVerifySlip.length}}</sui-statistic-value>
                  <br>
                  <sui-statistic-label>Verify Slip</sui-statistic-label>
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
import firebase from "../firebase"
export default {

  data() {
    return {
      numVerifySeller : [],
      numVerifySlip : [],
      numBankTran : [],
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
  mounted () {
      firebase.ref("seller/").orderByChild("verify_seller").equalTo(false).on("value", snapshot => {
        console.log(snapshot.val())
        this.numVerifySeller = Object.keys(snapshot.val())
        console.log(this.numVerifySeller.length)
      })
      firebase.ref("slip/").orderByChild("verify_slip").equalTo(false).on("value", snapshot => {
        console.log(snapshot.val())
        this.numVerifySlip = Object.keys(snapshot.val())
        console.log(this.numVerifySlip.length)
      })
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