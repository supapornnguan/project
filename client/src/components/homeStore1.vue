<template>
    <div>
           <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>
      <div>
  <b-dropdown
    split
    split-variant="outline-secondary"
    variant="secondary"
    :text="this.idStore"
    class="m-2"
  >
    <b-dropdown-item href="#" @click="goto('CENTRAL PLAZA PINKLAO','PU01')">CENTRAL PLAZA PINKLAO</b-dropdown-item>
    <b-dropdown-item href="#" @click="goto('SIAM PARAGON','PU02')">SIAM PARAGON</b-dropdown-item>
    <b-dropdown-item href="#" @click="goto('CENTRAL RAMA3','PU03')">CENTRAL RAMA3</b-dropdown-item>
    <b-dropdown-item href="#" @click="goto('CENTRAL LARDPRAO','PU04')">CENTRAL LARDPRAO</b-dropdown-item>
    <b-dropdown-item href="#" @click="goto('EMQUARTIER','PU05')">EMQUARTIER</b-dropdown-item>
  </b-dropdown>
</div>

    <b-modal ref="my-modal" hide-footer :title="name_store">
      <div class="d-block">
        <h5>Password</h5>
        <b-form-input type="password" v-model="id_store"></b-form-input>
        <!-- <p>{{id_store}}</p> -->
        <button @click="gotoHomeStore" style="background-color:	#E8E8E8; border-radius:10px; border:solid gray 1px; padding:6px; margin-left:200px; margin-top:30px">Enter</button>
      </div>
    </b-modal>


    <b-modal ref="my-modal1" hide-footer title="Incorrect Password">
      <div class="d-block text-center">
        <p>The password you entered is incorrect.</p>
        <p>Please ry again</p>
        <button @click="again" style="background-color:	white; border-radius:10px; border:solid gray 1px; padding:5px; margin-top:10px">Try again</button>
      </div>
    </b-modal>



    </div>

</template>
<script>
export default {
    data() {
        return {
            idStore : "CHOOSE STORE PICK-UP",
            name_store : "",
            id_store : "",
            id_store_press : ""
            
        }
    },methods: {
    // goto(idstore,id){
    //   this.idStore = idstore
    //   this.$router.push({name:'homeStore',params:{idStore:id}})
    // }
    goto(name,id){
      this.name_store = name 
      this.id_store_press = id.toString()

       
      this.$refs['my-modal'].show()
    },
    again(){
      this.$refs['my-modal1'].hide()
    },
    gotoHomeStore(){
      
       if(this.id_store == this.id_store_press){
         this.$router.push({name:'homeStore',params:{idStore:this.id_store}})
          console.log("match")
        }else{
          this.$refs['my-modal1'].show()
        }
    }
    },
    beforeCreate() {
      console.log("before Create")
    },
    created() {
      console.log("create")
    },
    mounted() {
      console.log("mounted")
    },
    beforeRouteEnter(to, from, next) {  
    console.log(`I'm called before entering the route!`)  
    next(); 
    }
    
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
}
    
</style>