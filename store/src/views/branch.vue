<template>
    <div>
    <div style="margin-left:100px;">
    <sui-dropdown
    placeholder="Store"
    selection
    :options="options"
    v-model="current"
    @click="checkName(current)"
  />
  </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {

        current : 'PU01',
          options: [
        {
          text: 'CENTRAL PLAZA PINKLAO',
          value: 'PU01',
        },
        {
          text: 'SIAM PARAGON',
          value: 'PU02',
        },
        {
          text: 'CENTRAL RAMA3',
          value: 'PU03',
        },
        {
          text: 'CENTRAL LARDPRAO',
          value: 'PU04',
        },
        {
          text: 'EMQUARTIER',
          value: 'PU05',
        },
      ],
        }
    },
    
}
</script>
<style scoped>
    
</style>