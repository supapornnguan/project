<template>
<div>
   <search/>
   <div v-if="show==1">
  <h2 id="leftReview">REVIEW THE PRODUCT</h2>
    <sui-container text-align="left" inline>
      Star score
      <sui-rating :rating="value" :max-rating="5" />
    </sui-container>

    <sui-container text-align="left">
      Your review
    </sui-container>
    <sui-form id="textreview">
      <textarea></textarea>
    </sui-form>
    <button class="ui secondary basic button" floated="center" id="rightReview" @click="gotoSuccess">POST REVIEW</button>
    </div>
    <reviewSuccess v-if="show!=1"/>
</div>
</template>

<style>
#leftReview{
  margin-top: 50px;
  width: 700px;
}
#rightReview{
  margin-top: 20px;
  margin-left: 780px;
}
#textreview{
  margin-top: 10px;
  margin-left: 220px;
  width: 1000px;
}
</style>>

<script>
import search from "../components/search"
import reviewSuccess from "../components/reviewSuccess"
export default {
  data () {
    return {
      show : 1

    }
  },
  components:{
      reviewSuccess,
      search,
  },
   methods: {
        gotoSuccess(){
          this.show = 2
        }
   }
}
</script>