<template>
<div>
  <sui-form>
   
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">FIRSTNAME</label>
        <input id="centerbox" type="text" placeholder="First name"  v-model="customer_firstname" />
      </sui-form-field >

      
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">LASTNAME</label>
        <input id="centerbox" type="text" placeholder="Last name" v-model="customer_lastname" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">E-MAIL</label>
        <input id="centerbox" type="text" placeholder="E-Mail" v-model="customer_email" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">PHONE NUMBER</label>
        <input id="centerbox" type="text" placeholder="Phone Number" v-model="customer_phonenumber"/>
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">ADDRESS</label>
        <input id="centerbox" type="text" placeholder="Address" v-model="customer_address" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">DISTRICT</label>
        <input id="centerbox" type="text" placeholder="District" v-model="customer_district" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">PROVINCE</label>
        <input id="centerbox" type="text" placeholder="Province" v-model="customer_province" />
      </sui-form-field >
    </sui-form-fields>
    <sui-form-fields inline id="centertext">
      <sui-form-field width="twelve">
        <label id="textfit">ZIP CODE</label>
        <input id="centerbox" type="text" placeholder="Zip Code" v-model="customer_zipcode" />
      </sui-form-field >
    </sui-form-fields>
  </sui-form>
      <sui-button basic color="black" id="centersave" @click="showModal()">SAVE</sui-button>

  <b-modal ref="my-modal" hide-footer title="Confimation">
    <div class="d-block text-center">
      <p>Are you sure you want to update your profile</p>
    </div>
 
      <b-button  variant="primary" style="margin-top:40px; margin-right:10px; margin-left:270px"  @click="confirmUpdate()">Confirm</b-button>
      <b-button  variant="primary" style="margin-top:40px; margin-right:10px" @click="cancleUpdate()">Cancle</b-button>

    
  </b-modal>
    
</div>
</template>


<script>
import firebase from "../firebase"
// import {auth} from "../firebase"
export default {
  data() {
    return {
      customer_email : "",
      customer_firstname : "",
      customer_lastname : "",
      customer_phonenumber : "",
      address : [],
      customer_address : "",
      customer_district : "",
      customer_province : "",
      customer_zipcode : "",
      userid_params : ""


    }
  },
  methods: {
    confirmUpdate(){
      firebase.ref("user/" + this.userid_params).update({
        customer_firstname : this.customer_firstname,
        customer_lastname : this.customer_lastname,
        customer_phonenumber : this.customer_phonenumber,
      })
     
     firebase.ref("user/" + this.userid_params+ "/address/" + "0").update({
       customer_district : this.customer_district,
        customer_province : this.customer_province,
        customer_zipcode : this.customer_zipcode
     })
      location.reload();
    },
    cancleUpdate(){
      this.$refs['my-modal'].hide()
    },
    showModal(){
      this.$refs['my-modal'].show()
    }

  },
  beforeMount() {
    this.userid_params = this.$route.params.userid
  },
    mounted() {
    firebase.ref("user/" + this.userid_params).on("value", snapshot => {
      console.log(snapshot.val())
      this.customer_email = snapshot.val().customer_email
      this.customer_firstname = snapshot.val().customer_firstname
      this.customer_lastname = snapshot.val().customer_lastname
      this.customer_phonenumber = snapshot.val().customer_phonenumber
      this.address = snapshot.val().address
      console.log(this.address[0])
      this.customer_address = this.address[0].customer_address
      this.customer_district = this.address[0].customer_district
      this.customer_province = this.address[0].customer_province
      this.customer_zipcode = this.address[0].customer_zipcode
 
    })
  }
}
</script>

<style>
.infomation{
  margin-top: 50px;
}

.ChoosePicture{
  margin-left: 5px;
}

#centersave{
  width: 200px;
  margin-top: 30px;
  margin-left: 400px;
}

#centertext{
  margin-left: 100px;
}

#centerbox{
  margin-left: 50px;
}

#textfit{
  width: 150px;
}

#picturesave{
  margin-left: 100px;
}
</style>