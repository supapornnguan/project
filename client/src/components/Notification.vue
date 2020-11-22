<template>
<div>
  <sui-item-group divided>
    <sui-item>
      <img src="../assets/nikonAAAA-2.jpg" width="150px" height="150px" />
      <sui-item-content>
        <sui-item-header id="headleft">Did you receive the product?</sui-item-header>
        <sui-item-meta id="metaleft">
          <div>Today at 5:42PM</div>
        </sui-item-meta>
        <sui-item-description>
          <p id="desnotileft1">
            If received the product. 
          </p>
          <p id="desnotileft2">
            Would you confirm receiving the product?
          </p>
        </sui-item-description>
        <sui-button basic color="black" size="small" id="rightbutton" @click="confirm">CONFIRM</sui-button>
      </sui-item-content>
    </sui-item>
    <sui-item>
      <img src="../assets/nikonAAAA-2.jpg" width="150px" height="150px" />
      <sui-item-content>
        <sui-item-header id="headleft">Successful order</sui-item-header>
        <sui-item-meta id="metaleft">
          <div>Today at 5:42PM</div>
        </sui-item-meta>
        <sui-item-description>
          <p id="dessucleft1">
            You have successfully purchased a camera.
          </p>
          <p id="dessucleft2">
            Receive the product 3 days later from the date of purchase.
          </p>
          <p id="dessucleft3">
            Please pick up the product by May 18, 2020.
          </p>
        </sui-item-description>
        <sui-dropdown
            :options="order"
            v-model="current"
            id="rightbox"
        />
      </sui-item-content>
    </sui-item>
  </sui-item-group>
</div>
</template>

<style>
#rightbox{
  margin-left: 500px;
}
#metaright{
  text-align: right;
  width: 1000px;
}
#desnotileft1{
  width: 290px;
}
#desnotileft2{
  width: 400px;
}
#dessucleft1{
  width: 420px;
}
#dessucleft2{
  width: 520px;
}
#dessucleft3{
  width: 430px;
}
#rightbutton{
  width: 200px;
  margin-left: 500px;
}
</style>

<script>
export default {
  methods: {
    confirm () {
      this.$router.replace('confirmShipping')
    }
  },
};
</script>