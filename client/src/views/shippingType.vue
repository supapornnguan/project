<template>
    <div>
        <navbar/>
        <div v-if="add==1">
            <h3 style="width:400px; color:black; font-weight:1000;">SHIPPING</h3>
            <h5 style="width:800px; color:black; margin-top:60px">Choose your address</h5>

            <input type="radio" id="yes" value="1" v-model="picked" style="margin-left:-400px;">
            <label for="yes" style="margin-left:10px; margin-top:10px">
            <div id="infoaddress">
                <p>123 MAIN STREET <br>WASHINGTONN ABDC 12345 <br>THAILANDDD</p>
            </div>
            </label>
            <img src="../assets/edit.png" :width="25" id="imgEdit">
            <img src="../assets/delete.png" :width="25" id="imgDelete" @click="deleteAddress">
         <hr style="width:700px">

         <img src="../assets/add.png" :width="14" style="margin-left:-650px;" @click="newAddress">
         <p id="addAddress">ADD A NEW ADDRESS</p>
        </div>

        <div id="buttonposition">
           <button id="selectLocation" @click="shipSum">SELECT THIS LOCATION</button>
        <br>
        <button id="selectLocation" @click="changeType">CHANGE YOUR RECEIVING TYPE</button> 
        </div>
        

        <!-- Add new address -->
        <addNewAddress v-if="add==2"/>

    </div>
</template>
<script>
import navbar from "../components/navbar"
import addNewAddress from "../components/addAddress"
export default {
    data() {
        return {
            add:1
        }
    },
    components:{
        navbar,
        addNewAddress
    },
    methods: {
        newAddress(){
            this.add = 2
        },
        deleteAddress(){
            this.add = 3
        },
        shipSum(){
            this.$router.replace('shipSum')
        },
        changeType(){
            this.$router.replace('summary')
        }
    },
}
</script>
<style>
#infoaddress{
    text-align: left;
    margin-top: 30px;
}
#imgEdit{
    position: relative;
    left: 350px;
}
#imgDelete{
    position: relative;
    left: 400px;
}
#addAddress{
    margin-top: -18px;
    margin-left: -460px;
}
#selectLocation{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    margin-top: 20px;
    padding: 5px;
}
#buttonposition{
    margin-top: 70px;
}
</style>