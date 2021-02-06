<template>
  <div class="home" id="duringShip">
    <h2 style="font-weight:600; margin-top:30px; margin-bottom:30px">THE PRODUCT IS COMING</h2>
    <search/>

    <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">Tracking No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Store Name</p>
            <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Derivery Date</p>
    </div>
        <!-- <sui-segment id="StoreSeg" @click="gotodetailTrack">
          
        </sui-segment> -->
  </div>
</template>

<script>
// import search from "../components/search"
// import Overlay from 'vuejs-overlay';
export default {
  data() {
    return {
      opened: false,
      visible: false
    }
  },
  components : {
    // search,

  },
    methods: {
      gotodetailTrack(){
        this.$router.replace('detailTrackDuring')
      }
 
  },

}
</script>
<style scoped>
#duringShip{
    position: relative;
    left: 400px;
    top: -990px;
}
#StoreSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>