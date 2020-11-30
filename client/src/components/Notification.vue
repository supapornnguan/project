<template>
<div>
  <sui-item-group divided>
    <sui-item>
      <img src="../assets/nikonAAAA-2.jpg" width="150px" height="150px" />
      <sui-item-content>
        <sui-item-header id="headleft">Did you receive the product?</sui-item-header>
        <sui-item-meta id="desnotiright">
          <div>Today at 5:42PM</div>
        </sui-item-meta>
        <sui-item-description>
          <p id="desnotileft">
            If received the product. 
          </p>
          <p id="desnotileft">
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
        <sui-item-meta id="desnotiright">
          <div>Today at 5:42PM</div>
        </sui-item-meta>
        <sui-item-description>
          <p id="desnotileft">
            You have successfully purchased a camera.
          </p>
          <p id="desnotileft">
            Receive the product 3 days later from the date of purchase.
          </p>
          <p id="desnotileft">
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
  margin-left: 600px;
}
#desnotileft{
  margin-left: 50px;
  width: 500px;
}
#desnotiright{
  margin-left: 570px;
}
#rightbutton{
  width: 100px;
  margin-left: 570px;
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