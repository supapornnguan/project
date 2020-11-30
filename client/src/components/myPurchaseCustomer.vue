<template>
<div>
  <sui-item-group divided>
    <sui-item>
      <img src="../assets/nikonAAAA-2.jpg" width="150px" height="150px" />
      <sui-item-content>
        <sui-item-header id="headleft">Canon AAAAA Kit + Lens AF-P 1234455 VR</sui-item-header>
        <sui-item-meta id="desleft">
          <span>x 1</span>
        </sui-item-meta>
        <sui-item-description>
          <p id="desleft">
            Picked up at Central Pinklao
          </p>
          <p id="desleft">
            Date: 10 April 2020 Time: 15:45
          </p>
        </sui-item-description>
        <sui-item id="desright"> 
          Price: THB 19,999
        </sui-item>
      </sui-item-content>
    </sui-item>
    <sui-item>
      <img src="../assets/nikonAAAA-2.jpg" width="150px" height="150px" />
      <sui-item-content>
        <sui-item-header id="headleft">Canon AAAAA Kit + Lens AF-P 1234455 VR</sui-item-header>
        <sui-item-meta id="desleft">
          <span>x 1</span>
        </sui-item-meta>
        <sui-item-description >
          <p id="desleft">
            Picked up at Central Pinklao
          </p>
          <p id="desleft" >
            Date: 10 April 2020 Time: 15:45
          </p>
        </sui-item-description>
        <sui-item id="desright">
          Price: THB 19,999
        </sui-item>
      </sui-item-content>
    </sui-item>
  </sui-item-group>
</div>
</template>

<style>
#headleft{
  margin-left: 50px;
  width: 800px;
}

#desleft{
  margin-left: 50px;
  width: 500px;
}

#desright{
  margin-left: 570px;
}

</style>

<script>
export default {
  name: 'ItemGroupExample',
};
</script>