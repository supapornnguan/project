<template>
    <div>
        <navbar/>
        <userRegis/>
    </div>
</template>

<script>
import userRegis from "../components/regisUser"
import navbar from "../components/navbar"
export default {
    name:"userHome",
    components:{
        userRegis,
        navbar
    }
}
</script>