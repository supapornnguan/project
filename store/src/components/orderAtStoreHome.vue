<template>
    <div>
      <div v-if="showDetailOrder == 1">
    <h2 style="font-weight:600; margin-top:30px; margin-bottom:30px">ORDER AT STORE</h2>
    <search/>

    
    <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">Tracking No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Store Name</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Received Date</p>
    </div>
    <sui-segment id="orderAtSeg" @click="gotoComDetailOrder">
          
    </sui-segment>
   
    </div>
     <chooseOrderId v-if="showDetailOrder == 2"/>
  </div>
</template>

<script>
import search from "../components/search"
import chooseOrderId from "../components/chooseOrderId(atStore)"
export default {
    data() {
        return {
            showDetailOrder : 1
        }
    },
    components : {
        search,
        chooseOrderId
    },
    methods: {
        gotoComDetailOrder(){
            this.showDetailOrder = 2
        }
    },
}
</script>

<style scoped>
#orderAtSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>