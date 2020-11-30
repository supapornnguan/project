<template>
<div>
  <navbar/>
    <search/>
    
    <sui-grid :columns="2">
    <sui-grid-row>
      <sui-grid-column id="headconfirmleft">
        <h1>Did you receive the product?</h1>
        <img src="../assets/nikonAAAA-2.jpg" width="300px" height="300px" />
      </sui-grid-column>
      <sui-grid-column :width="6">
        <sui-grid-column>
        <h3 id="descenter">Nikon AAAAA Kit + Lens AF-P DX18-55 VR</h3>
        <sui-item-description>
          <p id="desconfirmleft1">
            Price : THB 19,999
          </p>
          <p id="desconfirmleft2">
            Quantity :  1
          </p>
          <p id="desconfirmleft3">
            Tracking NO. : OR123456789TH
          </p>
        </sui-item-description>
        </sui-grid-column>
    </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
  <sui-button basic color="black" size="large" floated="center" id="centerbutton" @click="review">CONFIRM</sui-button>
</div>
</template>

<style>
.lefthead{
    margin-left: 0px;
}

#descenter{
    width: 500px;
    margin-top: 100px;
}

#centerbutton{
    width: 400px;
    margin-top: 50px;
    margin-left: 500px;
}

#textleft{
  widows: 50px;
  margin-left: 5px;
}
#headconfirmleft{
  margin-left: 200px;
  width: 500px;
}
#desconfirmleft1{
  margin-top: 40px;
  width: 160px;
}
#desconfirmleft2{
  width: 110px;
}
#desconfirmleft3{
  width: 245px;
}
</style>

<script>
import search from "../components/search"
import navbar from "../components/navbar"
export default {
  components:{
      search,
      navbar
  },
  methods: {
    review () {
      this.$router.replace('review')
    }
  },
};
</script>