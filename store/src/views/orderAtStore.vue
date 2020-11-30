<template>
    <div id="orderAt">
        <orderAtstore/>
  </div>
</template>

<script>
import orderAtstore from "../components/orderAtStoreHome"
export default {
    components : {
        orderAtstore
    },
}
</script>

<style scoped>
#orderAt{
    position: relative;
    left: 400px;
    top: -990px;
}

</style>