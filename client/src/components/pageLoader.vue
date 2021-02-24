<template>

  <div  v-if="isloaded">
<b-spinner label="Loading..."></b-spinner>
  </div> 
</template>
<script>
  export default {
    data: () => {
      return {
        isloaded: true
      }
    },
    methods: {
      showload(){
        setTimeout(()=> {
          this.isloaded =false
        },10000)
      }
    },
    mounted() {
     this.showload()
    },
  }
</script>

