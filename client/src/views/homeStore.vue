<template>
  <div>
    <div style="background-color:#542e71; height:80px;">
    <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>
    <h4 style="margin-left:50px; margin-top:50px">Branch : {{this.$route.params.idStore}}</h4>
    
    <!-- :to="{ name: 'user', params: { userId: 123 }}" -->
    <!-- <router-link :to="{name : 'detaildeliStore' , params : {idStoreDeli : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black" @click="check_atstore('DURINGSHIP')">DURING SHIPMENT</router-link>
    <br>
    <br>
    <router-link :to="{name : 'atstore' , params : {idStore : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black" @click="check_atstore('ATSTORE')">AT STORE</router-link>
    <br>
    <br> 
    <router-link :to="{name : 'returnStore' , params : {idStore : this.$route.params.idStore}}" style="margin-left:100px; font-size:17px; color:black">RETURN</router-link>
    <br>
    <br>
    <router-link to="/" style="margin-left:100px; font-size:17px; color:black">FINANCE</router-link> -->
    

    <div align=center>
    <h3 id="todo" style="margin-left: 50px; margin-right: 50px" align=center is="sui-header" block>TO-DO-LIST</h3>
    <div>
      <sui-grid :columns="3">
        <sui-grid-row style="margin-left: 50px; margin-right: 50px" align=center stretched>
          <sui-grid-column >
            <sui-segment raised>
              <!-- <img src="../assets/verifyStore.png" :width="60" id="img1"> -->
              <h3 id="menu">
                <router-link style="color:black" :to="{name : 'detaildeliStore' , params : {idStoreDeli : this.$route.params.idStore}}"  @click="check_atstore('DURINGSHIP')">DURING SHIPMENT</router-link></h3>
              <h2 id="number">{{delivery_no}}</h2>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment raised>
              <!-- <img src="../assets/verifySlip.png" :width="60" id="img1"> -->
              <h3 id="menu">
                <router-link :to="{name : 'atstore' , params : {idStore : this.$route.params.idStore}}" style="color:black" @click="check_atstore('ATSTORE')">AT STORE</router-link></h3>
              <h2 id="number">{{atstore_no}}</h2>
            </sui-segment>
          </sui-grid-column>
          <sui-grid-column>
            <sui-segment raised>
              <!-- <img src="../assets/banking.png" :width="60" id="img1"> -->
              <h3 id="menu"> 
                <router-link :to="{name : 'returnStore' , params : {idStore : this.$route.params.idStore}}" style="color:black">RETURN</router-link></h3>
              <h2 id="number">{{key_order.length}}</h2>
            </sui-segment>
          </sui-grid-column>
        </sui-grid-row>
      </sui-grid>
    <router-view></router-view>

    </div>
  </div>



  </div>
</template>
<script>
import store from "../store"
import firebase from "../firebase"
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      infoPickup : {},
      infoPickup_list : [],
      delivery_no : 0,
      atstore_no : 0,
      return_no : 0,
      branch_selected : [],
      product_description : [],
      key_order : [],
      tracking_no : []
      
    }
  },
  computed : {
    ...mapGetters([
        'getNumReturn'
      ])
    },
  methods: {
    check_atstore(check){
      store.commit("CHECK_ATSTORE" , {
        check_atstore : check
      })
    }

  },
  mounted() {
    store.commit("SET_NAME_STORE", {
      idStore : this.$route.params.idStore
    })
  },
      beforeCreate() {
      console.log("before Create")
    },
    created() {
      firebase.ref("pickup_order/").orderByChild("branch_selected").equalTo(this.$route.params.idStore).on("value" , snapshot => {
        console.log(snapshot.val())
        this.infoPickup = snapshot.val()
        this.infoPickup_list = Object.keys(snapshot.val())
        var count = 0
        var count1 = 0
        for(var i =0 ; i< this.infoPickup_list.length ; i++){
          var k = this.infoPickup_list[i]
          var status = this.infoPickup[k].status.delivery.check_status
          var status1 = this.infoPickup[k].status.atstore.check_status
          var status2 = this.infoPickup[k].status.complete.check_status
          if(status == true && status1 == false){
            this.tracking_no.push(this.infoPickup[k].tracking_no.tracking_no)
            count = count + 1
          }
          if(status1 == true && status2 == false ){
            count1 = count1 + 1 
          }
        var branch_selected = this.infoPickup[k].branch_selected
        this.branch_selected[i] = branch_selected
        if(this.branch_selected[i] == this.$route.params.idStore){
            this.product_description.push(this.infoPickup[k].product_description)
        }
        }
        this.tracking_no = [ ...new Set(this.tracking_no) ]
        console.log(this.tracking_no)
        this.delivery_no = this.tracking_no.length
        this.atstore_no = count1
        for(var a = 0 ; a< this.product_description.length ; a++){
          for(var b = 0 ; b < this.product_description[a].length ; b++){
            // console.log(this.product_description[a][b])
            if(this.product_description[a][b].status.return_product.check_status == true){
              console.log(this.product_description[a][b])
              this.key_order.push(this.infoPickup_list[a])
              this.key_order = [ ...new Set(this.key_order) ] //filter duplicate key_order
            }
          }
        }

        





      })
    },


}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
#number{
  text-align:center; 
  margin-top:15px; 
  margin-bottom:15px; 
  font-size:70px
}
#menu{
  text-align:center; 
  margin-top:25px; 
  font-weight:600
}
#todo{
  font-weight:600; 
  font-size:35px; 
  margin-bottom:20px; 
  margin-top:50px
}
</style>