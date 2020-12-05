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
    <!-- Type -->
    <sui-form-field v-if="products.product_category != null" required>
      <label id="positionLeft">Type</label>
      <sui-dropdown
        placeholder="type"
        selection
        :options="Type"
        v-model="products.product_type"
      />
    </sui-form-field>
    <p>{{products.product_type}}</p>
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
    <!-- Size -->
    <sui-form-field required>
      <label id="positionLeft">Size</label>
      <input type="text" placeholder="Size" v-model="products.product_size" />
    </sui-form-field>
    
    <!-- <sui-form-field>
      <label id="positionLeft">Size</label>
      <b-form-tags
          input-id="tags-separators"
          v-model="products.product_size"
          separator=" "
          placeholder="Type a size and press enter or space"
        ></b-form-tags>
    </sui-form-field> -->

    <!-- Color -->
    <sui-form-field required>
      <label id="positionLeft">Color</label>
      <input type="text" placeholder="Color" v-model="products.product_color" />
    </sui-form-field>

    <!-- <sui-form-field>
      <label id="positionLeft">Color</label>
      <b-form-tags
          input-id="tags-separators"
          v-model="products.product_color"
          separator=" "
          placeholder="Type a color and press enter or space"
        ></b-form-tags>
    </sui-form-field> -->

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
      <sui-form-field required>
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
      </sui-form-field>
    </sui-form-fields>
  </sui-form>
  <button @click="click2" id="chooseImage">Choose Product Image1</button>
  <button @click="create2" id="upload">upload</button>
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
      product_type : '',
      product_image : ""
      }],

      Category: [
        {
          text: 'Camera',
          value: 'Camera',
        },
        {
          text: 'Bag',
          value: 'Bag',
        },
      ],
      Type: [
        {
          text: 'Digital',
          value: 'Digital',
        },
        {
          text: 'Polaroid',
          value: 'Polaroid',
        },
      ],
      image:"",
      uidcurrentSeller : ""
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
      this.image = event.target.files[0]
      console.log(this.image )
      this.onUpload2()
    },

    onUpload2(){
 
      const storageRef = storage.ref(`/product/camera/${this.image.name}`).put(this.image);

      storageRef.on(`state_changed`, snapshot =>{
        console.log(snapshot)
      },error => {
        console.log(error.message)
      }, () => {
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
        product_size : this.products.product_size,
        product_color : this.products.product_color,
        product_unit_price : this.products.product_unit_price,
        product_quantity : this.products.product_quantity,
        product_category : this.products.product_category,
        product_type : this.products.product_type,
        product_image : this.products.product_image,
        sellerUid : auth.currentUser.uid
      }

      productRef.push(newProduct)
      .then((data) =>{
        console.log(data)
      },error => {
        console.log(error.message)
      })

    },
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