<template>
    <div>
        <navbar/>
        <br>
        <br>
        <div style="border-radius: 10px; width: 600px; height: 1850px; margin: 0 auto; background-color: #a799b7; box-shadow: 0px 0px 20px 10px #D5D8DC;">
        <regisSeller/>
        </div>
        <br>
        <br>
    </div>
</template>

<script>
import navbar from "../components/navbarSeller"
import regisSeller from "../components/regisSeller"
export default {
    components : {
        regisSeller,
        navbar
    }
}
</script>

