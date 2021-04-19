<template>
    <div style="background-color:#542e71; height:80px;">
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