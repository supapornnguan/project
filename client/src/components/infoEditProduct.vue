<template>
    <div>
        <sui-form>
        <!-- <img :src="product_image" :width="300" :height="400"/> -->
            <sui-form-field>
                <label >Product Name</label >
                <input placeholder="Product Name" />
            </sui-form-field>
            <sui-form-field>
                <label >Product Detail</label>
                <input placeholder="Product Detail" />
            </sui-form-field>
            <sui-form-field>
            <label>category</label>
            <!-- <sui-dropdown
                placeholder="category"
                selection
                :options="Category"
                v-model="product_category"
                /> -->
            </sui-form-field>
            <sui-form-field>
                <label >Price(THB)</label>
                <input placeholder="Price" />
            </sui-form-field>
            <sui-form-field>
                <label >Available </label>
                <input placeholder="Available" />

            </sui-form-field>
            <sui-button basic secondary  style="width:150px; margin-top:20px; margin-left:400px">SAVE</sui-button>
    </sui-form> 
    <p>{{getKeyProductEdit}}</p>
    <h1>{{getKeyProductEdit}}</h1>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      Category: [
        {
          text: "PET'S ACCESSORIES",
          value: "PET",
        },
        {
          text: "MEN'S FASHION",
          value: "MEN",
        },
        {
          text: "WOMEN'S FASHION",
          value: "WOMEN",
        },
        {
          text: "KID",
          value: "KID",
        },
        {
          text: "ACCESSORIES",
          value: "ACCESSORIES",
        },
        {
          text: "SPORT",
          value: "SPORT",
        },
        {
          text: "HOME & LIFESTYLE",
          value: "HOME & LIFESTYLE",
        },
        {
          text: "CAMERA",
          value: "CAMERA",
        },
        {
          text: "COMPUTERS",
          value: "COMPUTERS",
        },
        {
          text: "HEALTH & BEAUTY",
          value: "HEALTH & BEAUTY",
        },
        {
          text: "ELECTRONIC",
          value: "ELECTRONIC",
        },
        {
          text: "MOBILE & TABLET",
          value: "MOBILE & TABLET",
        },
      ],
    }
  },
  computed : {
    ...mapGetters({
      getKeyProductEdit : "getKeyProductEdit"
    })
  }
}
</script>

<style>

</style>