<template>
    <div >
         <div >
    <h1 style="font-weight:600; background-color:#542e71;" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
    </div>

    <div style="margin-left:130px; margin-top:30px">
    
        <h3 style="font-weight:600">STORE INFORMATION</h3>
        
        <br>
        <div>
            <p style="display:inline; font-size:15px">Stroe Code :</p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{this.$route.params.storeId}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Stroe Name :</p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{name_store_pickup}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Address :</p>
            <p style="display:inline; position:absolute; width:700px; left:300px; font-size:15px">{{address}}</p>
        </div>
        <br>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Phone Number :</p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{phone}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Service Time :</p>
            <p style="display:inline; position:absolute; width:700px; left:300px; font-size:15px">{{pick_up_hours}}</p>
        </div>
</div>
    </div>
</template>

<script>
// import {mapGetters} from "vuex"
import firebase from "../firebase"

export default {
    data() {
        return {
            key : "",
            name_store_pickup : "",
            address : "",
            phone : "",
            pick_up_hours : "",
        }
    },
    methods: {
          gotoHome() {
          this.$router.push('/HomeAdmin')
        }
    },

    mounted() {

    firebase.ref('Store/' + this.$route.params.storeId).on('value',(snapshot)=>{
    console.log(snapshot.val());
    this.key = snapshot.val().key
    this.name_store_pickup = snapshot.val().name_store_pickup
    this.address = snapshot.val().address
    this.phone = snapshot.val().phone
    this.pick_up_hours = snapshot.val().pick_up_hours
})
  },
}
</script>

<style scoped>
h1{
  text-align: center;
  background-color: 	#0F4C81;
  color:#FFFF;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
}
</style>