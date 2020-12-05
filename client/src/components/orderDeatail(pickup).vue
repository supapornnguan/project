<template>
    <div>
        <br>
        <h4>Order ID: {{keyPickup}}</h4>
       
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "../firebase"
export default {

    computed: {
        ...mapGetters({
            keyPickup : "getKeyPickup"
        })
    },
    mounted() {
        firebase.ref('pickup_order/' + this.keyPickup).on('value', snapshot => {
            console.log(snapshot.val())
        })
    },
}
</script>

<style scoped>
    
</style>