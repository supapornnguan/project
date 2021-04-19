<template lang="html">
<div>
  <sui-form>
    <!-- Product Name -->
    <sui-form-field required>
      <label id="positionLeft">Product Name</label>
      <input type="text" placeholder="Product Name" v-model="products.product_name" />
    </sui-form-field>
    <!-- Product Details -->
    <sui-form-field required>
      <label id="positionLeft">Product Details</label>
      <textarea rows="2" type="text" placeholder="Product Details" v-model="products.product_detail" />
    </sui-form-field>
    <!-- Category -->
    <sui-form-field required>
      <label id="positionLeft">Category</label>
      <sui-dropdown
        placeholder="Category"
        selection
        :options="Category"
        v-model="products.product_category"
      />
    </sui-form-field>
    <p>{{products.product_category}}</p>
    <!-- Price(THB) -->
    <sui-form-field required>
      <label id="positionLeft">Price(THB)</label>
      <input type="number" placeholder="Price(THB)" v-model="products.product_unit_price"/>
    </sui-form-field>
    <!-- Number of Product -->
    <sui-form-field required>
      <label id="positionLeft">Number of Product</label>
      <input type="number" placeholder="Number of Product" v-model="products.product_quantity"/>
    </sui-form-field>

    <!-- Product Picture -->
    <sui-form-field required>
      <label id="positionLeft">Product Picture</label> 
    </sui-form-field>
    <sui-form-fields equal-width>
      <sui-form-field required>
        <input 
          type="file" 
          placeholder="Product Picture" 
          accept ="image/*"
          ref="inputImage"
          style="display:none"
          @change="previewImage2" />
      </sui-form-field>
      <!-- <sui-form-field required>
        <input 
          type="file" 
          placeholder="Product Picture"
          accept ="image/*"
          ref="inputImage"
          style="display:none"
          @change="previewImage2" />
      </sui-form-field>
      <sui-form-field required>
        <input 
          type="file" 
          placeholder="Product Picture"
          accept ="image/*"
          ref="inputImage"
          style="display:none"
          @change="previewImage2" 
          />
      </sui-form-field> -->
    </sui-form-fields>
  </sui-form>
  <button @click="click2" id="chooseImage">Choose Product Image1</button>
  <button @click="create2" id="upload">upload</button>
  <p>{{image.name}}</p>
  <b-progress :value="uploadvalue" variant="primary" max="100" style="width:300px"></b-progress>
  <br>

  <!-- <button @click="click2">Choose Product Image2</button>
  <button @click="create2">upload</button>

  <button @click="click2">Choose Product Image3</button>
  <button @click="create2">upload</button> -->
   <!-- Botton -->
      <sui-button type="submit" style="margin-left:450px; margin-top:20px" @click="addProduct">Submit</sui-button>

  </div>
</template>


<script>
import {storage} from "../firebase"
import {auth} from "../firebase.js"
import firebase from "../firebase"
const productRef = firebase.ref('product')
export default {
  data() {
    return {
      products :[{
      product_name : '',
      product_detail : '',
      product_size : '',
      product_color : '',
      product_unit_price : '',
      product_quantity : '',
      sellerUid : '',
      product_category : '',
      product_image : "",
      seller_name_shop : ""
      }],

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
      image:"",
      uidcurrentSeller : "",
      uploadvalue : 0
    };
  },
  methods: {
    //click upload
    create2(){
      const product_image1  = this.products.product_image
      console.log(product_image1)
    },
    //choose product
    click2(){
      this.$refs.inputImage.click()
    },
    //listen event when product add
    previewImage2( event ){
      this.uploadvalue = 0
      this.image = event.target.files[0]
      console.log(this.image )
      this.onUpload2()
    },

    onUpload2(){
 
      const storageRef = storage.ref(`/product/camera/${this.image.name}`).put(this.image);

      storageRef.on(`state_changed`, snapshot =>{
        this.uploadvalue = (snapshot.bytesTransferred.snapshot.totalBytes)*100;
        console.log(snapshot)
      },error => {
        console.log(error.message)
      }, () => {
        this.uploadvalue = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          this.products.product_image  = url
          console.log(this.products.product_image)
        })
      })
    
    },
    async addProduct(){
      let newProduct = {
        product_name : this.products.product_name,
        product_detail : this.products.product_detail,
        product_unit_price : this.products.product_unit_price,
        product_quantity : this.products.product_quantity,
        product_category : this.products.product_category,
        product_image : this.products.product_image,
        sellerUid : auth.currentUser.uid,
        seller_name_shop : this.products.seller_name_shop
      }

      productRef.push(newProduct)
      .then((data) =>{
        console.log(data)
      },error => {
        console.log(error.message)
      })

      location.reload();

      

    },
  },
  mounted() {
    firebase.ref('seller/'+auth.currentUser.uid).on('value', snapshot =>{
      console.log(snapshot.val())
      this.products.seller_name_shop = snapshot.val().seller_name_shop
      console.log(this.products.seller_name_shop)
    })
  },

};
</script>

<style>
#positionLeft{
    text-align: left;
}
#spaceLeft{
    margin-left: 10px;
} 
#chooseImage{
  background-color: white;
  border: 1px black solid;
  border-radius: 5px;
  padding:5px
}  
#upload{
  background-color: white;
  border: black solid 1px;
  border-radius: 5px;
  padding:5px;
  margin-left:10px

}
</style>