<template>
<div>
    <navbar/>

    <div style="text-align:center">
        <p style="font-size:50px; margin-top:200px; margin-bottom:50px;">Register Successful!</p>
        <h1>Please wait for verify by SHOPAHOLIC.</h1>
        <button id="gotoHomePage" style="margin-top:30px" @click="goHomePage1">BACK TO MAIL PAGE</button>
    </div>
    </div>
</template>

<script>
import navbar from "../components/navbarSeller"
export default {
    methods: {
        goHomePage1(){
            this.$router.replace('/')
        }
    },
    components : {
        navbar
    }
}
</script>

<style scoped>
#gotoHomePage{
    background-color: white;
    border-radius: 5px;
    border : 1px solid black;
    padding:10px
}
/* #veri{
    width: 450px;
    text-align: center;
    margin-left: -50px;
    
} */
</style>