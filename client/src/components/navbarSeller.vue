<template>
    <div style="background-color:#0F4C81; height:80px;">
        <h1 is="sui-header" style="color:#FFFFFF; cursor:pointer; " id="logo1" @click="gotohomeSeller">SHOPAHOLIC SELLER CENTER</h1>
        <p v-if="sellers.loggedInSeller" class="ui item"><a @click="logout" id="positionLogout">LOGOUT</a></p>
    </div>
</template>

<script>
import {auth} from  "../firebase";
import { mapGetters } from "vuex";
export default {
      computed: {
    ...mapGetters({
      sellers : "sellers"
    })
  },
  methods: {
      logout(){
      auth.signOut()
          .then(()=>{
            this.$router.replace('/')
          })
    },
    gotohomeSeller(){
        this.$router.replace('sellerHome')
    }
  },
}
</script>
<style scoped>
#logo1{
  position: relative;
  left: 530px;
  top: 20px;
} 
#positionLogout{
    color:#FFFFFF;
    margin-left: 1300px;
}
</style>