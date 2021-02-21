<template>
  <div id="app">
     
    <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Chonburi', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>
  <br>
  <div style="margin-left:100px;">
     <sui-dropdown
    placeholder="Store"
    selection
    :options="options"
    v-model="current"
    @click="checkName(current)"
  />
  </div>
  <p>{{current}}</p>
    <router-view/>
  </div>

</template>

<script>
import store from "./store"
export default {
  data() {
  return {
          current : 'PU01',
          options: [
        {
          text: 'CENTRAL PLAZA PINKLAO',
          value: 'PU01',
        },
        {
          text: 'SIAM PARAGON',
          value: 'PU02',
        },
        {
          text: 'CENTRAL RAMA3',
          value: 'PU03',
        },
        {
          text: 'CENTRAL LARDPRAO',
          value: 'PU04',
        },
        {
          text: 'EMQUARTIER',
          value: 'PU05',
        },
      ],
    };
  },
  methods: {
    checkName(name){
      store.commit("SET_NAME_STORE" , name)
    }
  },

};
</script>

<style scoped>
#headerbar{
  position: relative;
  top: 20px;
}
#menuAdmin{
  background-color: #D0D0D0;
  width: 350px;
  margin-top: -8px;
  position: relative;
}
#menu1{
  margin-left: 45px;
  color: black;
}
#divvv{
  padding-bottom: 35px;
}
#iconimage{
  width: 30px;
  position: relative;
  left: 20px;
}
</style>

