<template>
    <div id="verifyStore">
        <h2 style="font-weight:600; margin-top:50px">VERIFY STORE</h2>
       
           <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:90px; font-weight:670; font-size:20px">SellerID</p>
           <p style="display:inline; margin-left:170px; font-weight:670; font-size:20px">Request Date Time</p>
        </div>

        <sui-segment id="SellerSeg"  v-for="(key,index) in  keys" :key="index"  @click="gotoSellerInfo(key)">
        <!-- read from database -->
        <p style="display:inline; position:absolute; left:35px; top:20px;  font-weight:600; font-size:20px">{{index+1+"."}}</p>
        <p style="display:inline; position:absolute; left:150px; top:20px; font-size:20px">{{seller_email[index]}}</p>
        <p style="display:inline; position:absolute; left:400px; top:20px; font-size:20px">{{timstamp[index]}}</p>
        </sui-segment>
        <p>{{keys}}</p>
        <p>{{seller_email}}</p>
        <!-- <p>{{seller_address}}</p> -->

    </div>
</template>

<script>
import firebase from "../firebase"
import store from '../store'
const db = firebase.ref("/seller");
export default {
    name: "verifyStore",
    data() {
        return {
            Seller : {},
            keys : [],
            seller_email : [],
            timstamp : [],

        } 
    },
    methods: {
        gotoSellerInfo(key){
            store.commit('SET_INFO_SELLER',key)
            this.$router.replace('sellerManageInfo')
            },
    },
    mounted () {
      db.on('value', (snapshot) => {
      this.Seller = snapshot.val()
      this.keys = Object.keys(snapshot.val())
      console.log(this.Seller) //return object
      console.log(this.keys) //return array
      for (var i=0 ; i< this.keys.length ; i++){
            var k = this.keys[i];
            var seller_email = this.Seller[k].seller_email;
            var timestamp = this.Seller[k].timstamp;
       
            this.seller_email[i] = seller_email
            this.timstamp[i] = timestamp
      }
    })
  },
}
</script>

<style scoped>
#verifyStore{
    position: relative;
    left: 400px;
    top: -990px;
}
#SellerSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>