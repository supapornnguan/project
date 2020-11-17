<template>
    <div id="storeManagePosition">
        <h3 style="font-weight:600">STORE MANAGEMENT</h3>
        <storeManage/>
    </div>
</template>

<script>
import storeManage from "../components/storeManage"
export default {
    components : {
        storeManage
    }
}
</script>

<style scoped>
#storeManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
    
</style>