<template>
    <div>
        <navbar/>
        <login/>
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