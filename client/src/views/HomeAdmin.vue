<template>


  <div>
    <div >
    <h1 style="font-weight:600">ADMIN SHOPAHOLIC</h1>
    </div>

     <div id="menuAdmin">
      <div id="divvv">
        <!-- <img src="./assets/dashboard.png" id="iconimage"> -->
        <router-link to="/HomeAdmin" style="color:black">DASHBOARD</router-link>
      </div>
      <div id="divvv">
        <router-link to="/sellerManageHome" style="color:black">SELLER MANAGEMENT</router-link>
      </div>
      
      <div id="divvv">
        <router-link to="/userManageHome" style="color:black">CUSTOMER MANAGEMENT</router-link>
      </div>
      
      <div id="divvv">
        <router-link to="/storeManageHome" style="color:black">STORE MANAGEMENT</router-link>
      </div>
      
    </div>

    <router-view/>


    <div style="margin-left:380px; margin-top:20px">

    <p style="font-weight:600; font-size:40px">TO DO LIST</p>
    <br>
    <div id="todo1">
      <sui-grid :columns="2" id="todo">
        <sui-grid-row stretched>
          <sui-grid-column>
            <sui-segment @click="gotoVerifyStore" style="box-shadow: 0px 0px 20px 10px #D5D8DC;">
              <div align=center>
              <img src="https://give.thechesedfund.com/dist/redesign/images/varifacy_icon.png" :width="100">
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
            <sui-segment @click="gotoVerifySlip"  style="box-shadow: 0px 0px 20px 10px #D5D8DC;">
              <div align=center>
              <img src="https://www.pinclipart.com/picdir/big/109-1093730_find-the-data-regulatory-compliance-icon-clipart.png" :width="110">
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
#todo{
  width: 900px;
  margin-left: 60px;
  margin-top: 10px;
}
#todo1{
  border-radius: 10px;
  background-color: 	#dee7ee4d;
  width: 1000px;


}
h1{
  text-align: center;
  background-color: 	#0F4C81;
  color:#FFFF;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
}
#divvv{
  text-align: center;
  border: gray solid 1px;
  padding:10px;
  margin-left: 10px;
  margin-bottom: 5px;
  /* border-radius: 10px; */
  cursor:pointer;
  box-shadow: 0px 0px 20px 10px #D5D8DC;
}
#menuAdmin{
  position : absolute;
  width: 350px;
  margin-top: 130px;
}
</style>