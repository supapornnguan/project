<template>
    <div id="userManageInfoPosition">
        <h3 style="font-weight:600">USER INFORMATION</h3>
        <hr style="width:1000px; border: 3px solid #D0D0D0; margin-left:0px">

        <div>
            <p style="display:inline; font-size:20px">Email :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{customer_email}}</p>
        </div>
        <br>
        
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "../firebase"

export default {
    data() {
        return {
            customer_email : "",
            customer_firstname : "",
            customer_lastname : "",
            customer_phonenumber : "",
            timestamp : "",
        }
    },
     computed: {
    ...mapGetters({
      key : "getInfoUser"
    })
  },
  mounted() {
    firebase.ref('user/' + this.key).on('value',(snapshot)=>{
    console.log(snapshot.val());
    this.customer_email = snapshot.val().customer_email
    this.customer_firstname = snapshot.val().customer_firstname
    this.customer_lastname = snapshot.val().customer_lastname
    this.timestamp = snapshot.val().timestamp
})
  },
}
</script>

<style scoped>
#userManageInfoPosition{
    position: relative;
    left: 400px;
    top: -990px;
}
</style>