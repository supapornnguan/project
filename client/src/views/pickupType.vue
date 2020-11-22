<template>
    <div>
        <navbar/>
        <h3 style="width:400px; color:black; font-weight:1000; margin-left:200px; margin-top:30px">STORE PICK-UP</h3>
        <!-- <search/> -->
        <h5 style="width:800px; color:black; margin-left:400px; margin-top:20px">Choose the store pick-up</h5>
        <br>
            <div id="branch">
                <input type="radio" id="yes" value="1" v-model="picked">
                <label for="yes" style="margin-left:10px" >CENTRAL PINKLAO</label>
                <!-- <img src="../assets/location.png" :width="50" id="imgBranch" /> -->
            </div>
            
            <hr style="width:700px">


            <div id="branch">
                <input type="radio" id="yes" value="2" v-model="picked" >
                <label for="yes" style="margin-left:10px" >CENTRAL LARDPRAO</label>
            </div>
            <!-- <img src="../assets/location.png" :width="60" id="imgBranch" style="margin-left:400px"/> -->
            <hr style="width:700px">
       
            <div id="branch">
                <input type="radio" id="yes" value="3" v-model="picked" >
                <label for="yes" style="margin-left:10px;">PARAGON</label>
            </div>
            <!-- <img src="../assets/location.png" :width="60" id="imgBranch" style="margin-left:400px"/> -->
            <hr style="width:700px">

            <div id="branch">
                <input type="radio" id="yes" value="4" v-model="picked" >
                <label for="yes" style="margin-left:10px;">THE MALL BANGKAE</label>
            </div>
            <!-- <img src="../assets/location.png" :width="60" id="imgBranch" style="margin-left:400px"/> -->
            <hr style="width:700px">
         
        <button id="buttonChoose" @click="chooseStore">CHOOSE THIS STORE</button>
        <br>
        <button id="buttonChoose" @click="changeType">CHANGE YOUR RECEIVING TYPE</button>
    </div>
</template>
<script>
import navbar from "../components/navbar"
// import search from "../components/searchStore"

export default {
    data() {
        return {
            picked : ""
            
        }
    },
    components:{
        navbar,
        // search
    },
    methods: {
        chooseStore(){
            this.$router.replace('/productAll/infoProduct/summary/pickupType/pickupSum')
        },
        changeType(){
            this.$router.replace('/productAll/infoProductsummary')
        }
    },
}
</script>
<style>
#buttonChoose{
    margin-top: 20px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
    padding: 7px;
    margin-left: 600px;
}
#branch{
    width: 300px;
    position: relative;
    left: 400px;
    top: 10px;
    text-align: left;
}

</style>