<template>
    <div id="userManagePosition">
        <h3 style="font-weight:600">USER MANAGEMENT</h3>
        <userManage/>
    </div>
</template>

<script>
import userManage from "../components/userManage"
export default {
    components : {
        userManage
    }
}
</script>

<style scoped>
#userManagePosition{
    position: relative;
    left: 400px;
    top: -990px;
}
    
</style>