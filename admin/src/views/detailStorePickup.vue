<template>
    <div id="sellerManagePosition">
        <br>
        <div>
            <button id="buttonStore" @click="click1('duringShip')">During Shipment</button>
            <button id="buttonStore" @click="click1('orderAtStore')" style="margin-left:-1px">Order At Store</button>
            <button id="buttonStore"  @click="click1('orderReturn')" style="margin-left:-1px">Order Return</button>
        </div>
        <search style="margin-top:50px"/>
        <duringShip v-if="page=='duringShip'"/>
        <orderAtStore v-if="page=='orderAtStore'"/>


    </div>
</template>

<script>
import search from "../components/searchTracking"
import duringShip from "../components/duringShip"
import orderAtStore from "../components/orderAtStore"
export default {
    data() {
        return {
            page : 'duringShip'
        }
    },
    components : {
        search,
        duringShip,
        orderAtStore
    },
    methods: {
        click1(value){
            this.page = value
        }
    },
}
</script>

<style scoped>
#sellerManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
#buttonStore{
    background-color: white;
    border: 1px solid;
    padding: 10px;
    width: 200px;
}
</style>