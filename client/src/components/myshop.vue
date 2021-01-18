<template>
    <div>
        <h1>jdsfljjjds</h1>
        
    </div>
</template>

<script>
import {auth} from "../firebase"
import firebase from "../firebase"
export default {

    mounted() {
        firebase.ref("seller/" + auth.currentUser.uid).on('value', snapshot => {
            console.log(snapshot.val())
        })
    },
    
}
</script>

<style scoped>
    
</style>