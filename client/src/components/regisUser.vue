<template lang="html">
  <div class="regisUser">
    <h1 id="H1">SIGN IN</h1>
    <sui-form>
        <sui-form-field required>
          <label id="labelRegisUser">EMAIL</label>
          <input placeholder="EMAIL" type="text" v-model="Users.emailUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">PASSWORD</label>
          <input placeholder="PASSWORD" type="password" v-model="Users.password" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">REPEAT PASSWORD</label>
          <input placeholder="REPEAT PASSWORD" type="password" v-model="Users.repeatPassword" :rules="[comparePassword]"/>
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">FIRSTNAME</label>
          <input placeholder="FIRSTNAME" type="text" v-model="Users.firstnameUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">LASTNAME</label>
          <input placeholder="LASTNAME" type="text" v-model="Users.lastnameUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">PHONE</label>
          <input placeholder="PHONE" type="text" v-model="Users.phoneUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">ADDRESS</label>
          <textarea placeholder="ADDRESS" type="text" v-model="Users.addressUser" />
        </sui-form-field>

        <div class="ui submit button" @click="addUser">Submit</div>
  </sui-form>
  </div>
</template>
<script>
import firebase from "../firebase"
const db = firebase.ref("user");
export default {
  name: 'regisUser',
  data() {
    return {
      user:{},
      Users : [
        {
          emailUser : "",
          password : "",
          repeatPassword: "",
          firstnameUser : "",
          lastnameUser : "",
          addressUser : "",
          phoneUser : ""
        }
      ]
    }
  },
  computed: {
    comparePassword(){
      return this.password == this.repeatPassword ? "match": "not match"
    }
  },
  methods: {
      addUser(){
        console.log(firebase)
        console.log("okokokokokok")
        let newUser = {
          emailUser : this.Users.emailUser,
          password : this.Users.password,
          firstnameUser : this.Users.firstnameUser,
          lastnameUser : this.Users.lastnameUser,
          addressUser : [this.Users.addressUser],
          phoneUser : this.Users.phoneUser
        }
        db.push(newUser)
      }
  },
};
</script>

<style scoped>
#H1{
  margin-top: 50px;
  margin-bottom: 60px;
}
.boxForm{
  margin-top: 80px;
  margin-left: 500px;
  margin-right: 500px;
}
.textPosition{
  text-align: left;
}
#labelRegisUser{
  text-align: left;
  padding-bottom: 10px;
}
.regisUser{
  width: 400px;
  margin: 0 auto;
}
</style>



    

