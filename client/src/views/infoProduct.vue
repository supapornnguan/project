<template>
    <div>
        <navbar/>
        <div class="container1" style="margin-top:90px">
        <sui-grid :columns="2">
            <sui-grid-row stretched>
                <sui-grid-column>
                        <img :src="product_image" :width="350" :height="350"/>
                </sui-grid-column>
                <sui-grid-column>
               
                    <h3 class="info">{{product_name}}</h3>
                    <router-link to="/acSeller" id="linkShop">{{seller_name_shop}}</router-link>
                    <StarRating v-bind:star-size="20"
                                v-bind:max-rating="5"
                                inactive-color="#BEBEBE"
                                active-color="#FFCC33"
                                v-bind:read-only="true"
                                v-bind:show-rating="false"
                                v-bind:rating="1"
                                style="margin-top:-20px; margin-bottom:15px">
                    </StarRating>
                
                    <p class="info">{{product_unit_price}} THB</p>
                    
                    <div id="addQTY">
                        <p class="info">Quantity</p>
                        <button id="buttonAdd" @click="miniQuantity">-</button>
                        <input type="text" id="inputQTY" v-model="quantity">
                        <button id="buttonAdd" @click="addQuantity">+</button>
                        <p style="margin-left:50px; color:gray;">{{product_quantity}} pice available</p>
                    </div>

                    <div style="margin-left:50px">
                        <sui-button basic secondary @click="gotoSummary" style="width:150px; margin-top:20px">BUY NOW</sui-button>
                        <sui-button basic secondary @click="addItem" style="width:150px; margin-left:20px">ADD TO CART</sui-button>
                    </div>
                 
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
        </div>
  
        <h2 class="H2" >Reviews</h2>
   
        <div>
           <p  style="display:inline; margin-left:20px">Overall: </p> 
           <StarRating v-bind:star-size="20"
                                v-bind:max-rating="5"
                                inactive-color="#BEBEBE"
                                active-color="#FFCC33"
                                v-bind:read-only="true"
                                v-bind:show-rating="false"
                                v-bind:rating="1"
                                style="position:absolute; top:618px; left:80px">
                    </StarRating>
        </div>
        
        <b-progress :value="90" variant="danger" class="mt-2" id="progressStar"></b-progress> 
        <b-progress :value="40" variant="danger" class="mt-2" id="progressStar"></b-progress>
        <b-progress :value="30" variant="danger" class="mt-2" id="progressStar"></b-progress>
        <b-progress :value="20" variant="danger" class="mt-2" id="progressStar"></b-progress>
        <b-progress :value="10" variant="danger" class="mt-2" id="progressStar"></b-progress>
        <h2 class="H2">Detail Product</h2>

        <br>
        <ul id="example-1" style="margin-bottom:100px">
            <li v-for="item in product_detail" :key="item.message">
                {{ item }}
            </li>
        </ul>

        <b-modal ref="my-modal" hide-footer hide-header  no-close-on-esc no-close-on-backdrop hide-header-close>
      <div class="d-block text-center">
        <p style="margin-top:20px; margin-bottom:40px">Please Login to continue.</p>
          <router-link to="/userlogin" class="ui item"  style="color:#FFFFFF; margin-right:20px" > <b-button>Login</b-button></router-link>
          <b-button @click="hideModal()">Cancle</b-button>
            
        <p></p>
      </div>
    </b-modal>
 
        
    </div>
</template>
<script>
import navbar from "../components/navbar"
import {mapActions , mapGetters} from "vuex"
import store from "../store"
import firebase from "../firebase"
import StarRating from 'vue-star-rating'

export default {
    data() {
        return {
             value : 1,
             product_quantity : "",
             product_name : "",
             sellerUid : "",
             seller_name_shop : "",
             product_unit_price : "",
             product_detail : "",
             product_detail_non_split : "",
             product_image : "",
             timeToOrder : "",
             check : false,
             productKey : "",
             keysProduct : "",
             products:{},
             useruid : "",
             quantity : 1,
             status : "ordered",
             product_id : "",
        }
    },
    components : {
        navbar,
         StarRating
    },
    
    methods: {
        addQuantity(){
            if(this.quantity<this.product_quantity)
            return this.quantity++
        },
        miniQuantity(){
            if(this.quantity!=0)
            return this.quantity--
        },
         gotoSummary(){
             if(this.user1 == false){
                 this.$refs['my-modal'].show()
             }else{
                  this.check = false
                store.commit("SET_SUMMARY_PAGE",{
                quantity : this.quantity,
                product_name : this.product_name,
                product_unit_price : this.product_unit_price,
                product_image : this.product_image,
                sellerUid : this.sellerUid,
                product_detail : this.product_detail_non_split,
                seller_name_shop : this.seller_name_shop
            } )
            
            store.commit("SET_CHECK_STATE",{
                check : this.check
            })
            store.commit("SET_PRODUCT_ID" , {
                keysProduct : this.productKey
            })
            this.$router.replace('/summary')
             }
           
        },
        ...mapActions(['updateCart']),
       addItem() {
        const order = {
        keysProduct : this.productKey,
        product_name : this.product_name,
        product_image : this.product_image,
        product_unit_price : this.product_unit_price,
        product_detail : this.product_detail_non_split,
        sellerUid : this.sellerUid,
        status : this.status,
        seller_name_shop : this.seller_name_shop,
        quantity: this.quantity,
        isAdd: true
      };
      console.log(order.quantity)
      this.updateCart(order);
    },
    hideModal(){
        this.$refs['my-modal'].hide()

      },
    },
    computed: {
        // ...mapGetters({
        //     key : "getProductId"
        // })
            ...mapGetters({
      user1 : "getUserloggedIn"
    }),
    },
    created() {
        this.productKey = this.$route.params.productId
        console.log(this.$route.params.category)
        this.getkey = this.$route.params.category
        console.log(this.getkey)
    },
    mounted() {

        //query product collection
      
            firebase.ref('product/'+this.productKey).on('value',(snapshot)=>{
            console.log(snapshot.val());
            this.product_name = snapshot.val().product_name
            this.sellerUid = snapshot.val().sellerUid
            this.product_unit_price = snapshot.val().product_unit_price
            this.product_quantity = snapshot.val().product_quantity
            this.product_detail_non_split = snapshot.val().product_detail
            this.product_detail = snapshot.val().product_detail.split(',')
            this.product_image = snapshot.val().product_image
            
            console.log(this.sellerUid)
            console.log(this.product_name);

        }) 

        //query seller collection
        firebase.ref('seller/'+ this.sellerUid).on('value', (snapshot) =>{
            console.log(snapshot.val())
            this.seller_name_shop = snapshot.val().seller_name_shop
        })

    },
}
</script>
<style>
.container1{
    width: 1000px;
    margin-left: 100px;
}
.info{
    text-align: left;
    margin-bottom: 10px;
    margin-right: 35px;
}
.deco{
    direction: none;
}
.H2{
    text-align: left;
    font-size: 20px;
    font-weight: 800;
    margin-top: 60px;
    margin-left: 20px;
}
#linkShop{
    text-align: left;
}
#came1{
    display: flex;
}
#imgCamera{
    border: 2px solid 	#F5F5F5;
    margin-right: 5px;
}
#rate{
    width: 20px;
}
#addQTY{
    display: flex;
}
#inputQTY{
    border-radius: 4px;
    border: 1px solid black;
    width: 30px;
    height: 25px;
    margin-top: -5px;
    text-align: center;
}
#buttonAdd{
    border: none;
    background-color: white;
    margin-top: -5px;
    margin-right:5px ;
    margin-left: 5px;
    height: 25px;
}
#progressStar{
    width: 300px;
    margin-left: 20px;
}

</style>