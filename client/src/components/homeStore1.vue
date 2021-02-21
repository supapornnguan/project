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
    </div>
</template>
<script>
export default {
    data() {
        return {
            idStore : "CHOOSE STORE PICK-UP",
        }
    },methods: {
    goto(idstore,id){
      this.idStore = idstore
      this.$router.push({name:'homeStore',params:{idStore:id}})
    }
    },
    
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
}
    
</style>