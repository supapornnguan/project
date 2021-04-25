<template>
  <div id="app">
    <router-view/>
    <footer1/>
  </div>
</template>

<script>
import footer1 from "../src/components/footer"
export default {
  components : {
    footer1
  }
}
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
