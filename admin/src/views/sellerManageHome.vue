<template>
    <div id="sellerManagePosition">
        <h3 style="font-weight:600">SELLER MANAGEMENT</h3>
        <sellerManage/>
    </div>
</template>

<script>
import sellerManage from "../components/sellerManage"
export default {
    components : {
        sellerManage
    }
}
</script>

<style scoped>
#sellerManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
</style>