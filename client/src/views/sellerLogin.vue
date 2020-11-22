<template>
    <div>
        <navbar/>
        <loginSeller/>
    </div>
</template>
<script>
import navbar from "../components/navbar"
import loginSeller from "../components/loginSeller"
export default {
    components : {
        loginSeller,
        navbar
    }
}
</script>