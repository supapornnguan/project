<template>
    <div>
        <sui-form>
        <!-- <img :src="product_image" :width="300" :height="400"/> -->
            <sui-form-field>
                <label >Product Name</label >
                <input placeholder="Product Name"  v-model="product_name" />
            </sui-form-field>
            <sui-form-field>
                <label >Product Detail</label>
                <input placeholder="Product Detail" v-model="product_detail" />
            </sui-form-field>
            <sui-form-field>
            <label>category</label>
            <sui-dropdown
                placeholder="category"
                selection
                :options="Category"
                v-model="product_category"
                />
            </sui-form-field>
            <sui-form-field>
                <label >Price(THB)</label>
                <input placeholder="Price" v-model="product_unit_price" />
            </sui-form-field>
            <sui-form-field>
                <label >Available </label>
                <input placeholder="Available" v-model="product_quantity" />

            </sui-form-field>
    </sui-form> 
      <sui-button basic secondary  style="width:150px; margin-top:20px; margin-left:400px" @click="showModal()" >SAVE</sui-button>
      <b-modal ref="my-modal" hide-footer title="Confimation">
    <div class="d-block text-center">
      <p>Are you sure you want to update your shop</p>
    </div>
 
      <b-button  variant="primary" style="margin-top:40px; margin-right:10px; margin-left:270px"  @click="confirmUpdate()">Confirm</b-button>
      <b-button  variant="primary" style="margin-top:40px; margin-right:10px" @click="cancleUpdate()">Cancle</b-button>

    
  </b-modal>

    </div>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "../firebase"
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
      product_category: "",
      product_detail: "",
      product_image: "",
      product_name: "",
      product_quantity: 0,
      product_unit_price : 0
    }
  },
  computed : {
    ...mapGetters({
      getKeyProductEdit : "getKeyProductEdit"
    })
  },
  methods: {
    showModal(){
      this.$refs['my-modal'].show()
    },
    confirmUpdate(){
      firebase.ref("product/" + this.getKeyProductEdit.keysProductEdit).update({
        product_category: this.product_category,
      product_detail: this.product_detail,
      product_name: this.product_name,
      product_quantity : this.product_quantity,
      product_unit_price : this.product_unit_price
      })
      this.$refs['my-modal'].hide()

    },
    cancleUpdate(){
      this.$refs['my-modal'].hide()
    },
  },
  mounted() {
    firebase.ref("product/" + this.getKeyProductEdit.keysProductEdit).on("value", snapshot => {
      console.log(snapshot.val())
      this.product_category = snapshot.val().product_category
      this.product_detail = snapshot.val().product_detail
      this.product_image = snapshot.val().product_image
      this.product_quantity = snapshot.val().product_quantity
      this.product_unit_price = snapshot.val().product_unit_price
      this.product_name = snapshot.val().product_name
      console.log(this.product_name)
    })
  },
}
</script>

<style>

</style>