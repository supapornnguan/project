<template lang="html">
  <sui-form>
    <!-- Product Name -->
    <sui-form-field required>
      <label id="positionLeft">Product Name</label>
      <input type="text" placeholder="Product Name" />
    </sui-form-field>
    <!-- Product Details -->
    <sui-form-field required>
      <label id="positionLeft">Product Details</label>
      <textarea rows="2" type="text" placeholder="Product Details" />
    </sui-form-field>
    <!-- Product Picture -->
    <sui-form-field required>
      <label id="positionLeft">Product Picture</label> 
    </sui-form-field>
    <sui-form-fields equal-width>
      <sui-form-field required>
        <input type="file" placeholder="Product Picture" />
      </sui-form-field>
      <sui-form-field required>
        <input type="file" placeholder="Product Picture" />
      </sui-form-field>
      <sui-form-field required>
        <input type="file" placeholder="Product Picture" />
      </sui-form-field>
    </sui-form-fields>
    <!-- Category -->
    <sui-form-field required>
      <label id="positionLeft">Category</label>
      <sui-dropdown
        placeholder="Category"
        selection
        :options="Category"
        v-model="currentCategory"
      />
    </sui-form-field>
    <!-- Type -->
    <sui-form-field v-if="currentCategory === null" disabled required>
      <label id="positionLeft">Type</label>
      <sui-dropdown
        placeholder="type"
        selection
        :options="Type"
        v-model="currentType"
      />
    </sui-form-field>
    <sui-form-field v-else-if="currentCategory === 'Camera'" required>
      <label id="positionLeft">Type</label>
      <sui-dropdown
        placeholder="type"
        selection
        :options="Type"
        v-model="currentType"
      />
    </sui-form-field>
    <!-- Price(THB) -->
    <sui-form-field required>
      <label id="positionLeft">Price(THB)</label>
      <input type="number" placeholder="Price(THB)" />
    </sui-form-field>
    <!-- Number of Product -->
    <sui-form-field required>
      <label id="positionLeft">Number of Product</label>
      <input type="number" placeholder="Number of Product" />
    </sui-form-field>
    <!-- Size -->
    <sui-form-field>
      <label id="positionLeft">Size</label>
      <b-form-tags
          input-id="tags-separators"
          v-model="valueSize"
          separator=" "
          placeholder="Type a size and press enter or space"
        ></b-form-tags>
    </sui-form-field>
    <!-- Color -->
    <sui-form-field>
      <label id="positionLeft">Color</label>
      <b-form-tags
          input-id="tags-separators"
          v-model="valueColor"
          separator=" "
          placeholder="Type a color and press enter or space"
        ></b-form-tags>
    </sui-form-field>
    <br>
    <!-- Botton -->
    <sui-button type="submit">Submit</sui-button>
  </sui-form>
</template>

<script>
export default {
  data() {
    return {
      currentCategory: null,
      Category: [
        {
          text: 'Camera',
          value: 1,
        },
        {
          text: 'Bag',
          value: 2,
        },
      ],
      currentType: null,
      Type: [
        {
          text: 'Digital',
          value: 1,
        },
        {
          text: 'Polaroid',
          value: 2,
        },
      ],
      valueSize: [],
      valueColor: []
    };
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
</style>