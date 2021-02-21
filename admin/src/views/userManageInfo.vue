<template>
    <div id="userManageInfoPosition">
        <h3 style="font-weight:600">USER INFORMATION</h3>
        
        <br>
        <div>
            <p style="display:inline; font-size:15px">Email :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_email}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">First Name :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_firstname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Last Name :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_lastname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Phone Number :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_phonenumber}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Date Time Register :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{timestamp}}</p>
        </div>
    </div>
</template>

<script>
// import {mapGetters} from "vuex"
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

    mounted() {

    firebase.ref('user/' + this.$route.params.userId).on('value',(snapshot)=>{
    console.log(snapshot.val());
    this.customer_email = snapshot.val().customer_email
    this.customer_firstname = snapshot.val().customer_firstname
    this.customer_lastname = snapshot.val().customer_lastname
    this.customer_phonenumber = snapshot.val().customer_phonenumber
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