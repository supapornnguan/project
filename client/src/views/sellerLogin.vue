<template>
    <div>
        <navbar/>
        <div style="border-radius: 10px; width: 600px; height: 400px; margin: 0 auto; background-color: #a799b7; box-shadow: 0px 0px 20px 10px #D5D8DC;">
        <loginSeller/>
        </div>
    </div>
</template>
<script>
import navbar from "../components/navbarSeller"
import loginSeller from "../components/loginSeller"
export default {
    components : {
        loginSeller,
        navbar
    }
}
</script>