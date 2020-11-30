<template>
<div>
  <navbar/>
   <search/>
   <div v-if="show==1">
  <h2 id="leftReview">REVIEW THE PRODUCT</h2>
    <sui-container inline>
      Star score
      <sui-rating icon="star" :rating="value" :max-rating="5" @rate="handleRate" />
    </sui-container>

    <sui-container >
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
  margin-left: 210px;
  width: 700px;
}
#rightReview{
  margin-top: 20px;
  margin-left: 1085px;
}
#textreview{
  margin-top: 10px;
  margin-left: 220px;
  width: 1000px;
}
.desleftreview{
  margin-left: 250px;
}
</style>>

<script>
import search from "../components/search"
import reviewSuccess from "../components/reviewSuccess"
import navbar from "../components/navbar"
export default {
  data () {
    return {
      show : 1,
      value: 1,
      payload: {},
    }
  },
  computed: {
    formattedPayload() {
      return JSON.stringify(this.payload, null, 2);
    },
  },
  components:{
      reviewSuccess,
      search,
      navbar
  },
   methods: {
        gotoSuccess(){
          this.show = 2
        },
        handleRate(evt, props) {
        this.value = props.rating;
        this.payload = props;
    },
   },
}
</script>