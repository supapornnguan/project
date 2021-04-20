<template>
    <div>
        <navbar/>
        <div style="border-radius: 10px; width: 600px; height: 400px; margin: 0 auto; background-color: #a799b7;">
        <login/>
        </div>
    </div>
</template>
<script>
import login from "../components/loginUser"
import navbar from "../components/navbar"
export default {
    name:"userlogin",
    components :{
        login,
        navbar
    }
}
</script>