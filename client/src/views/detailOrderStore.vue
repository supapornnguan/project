<template>
    <div >
      <div style="background-color:#0F4C81; height:80px;">
      <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
      </div>
       <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>

        
        <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px" v-if="show == 1">DURING SHIPMENT</p>
        <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px" v-if="show == 2">ORDER AT STORE</p>
        
        <hr>
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:100px; ">Order ID : {{this.$route.params.idOrder.substring(1,100)}}</p>

        <p style="font-weight:670; font-size:20px; margin-top:30px; margin-left:100px ">Customer Infomation</p>
            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080">Name : </p> 
                <p style="display:inline">{{customer_firstname}} {{customer_lastname}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
            <p style="display:inline; color:#808080; font-size:15px">Email : </p>
            <p style="display:inline;  ">{{customer_email}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Phone Number : </p>
                <p style="display:inline">{{customer_phonenumber}}</p>
            </div>

            <hr>
            <p style="font-weight:670; font-size:20px; margin-top:20px; margin-left:100px ">Shipped From</p>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name Shop: </p> 
                <p style="display:inline">{{seller_name_shop}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Address: </p> 
                <p style="display:inline">{{address}} {{seller_district}}, {{seller_province}},{{seller_street}}, {{seller_sub_district}}, {{seller_zipcode}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name : </p> 
                <p style="display:inline">{{seller_firstname}} {{seller_lastname}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
            <p style="display:inline; color:#808080; font-size:15px">Email : </p>
            <p style="display:inline">{{seller_email}}</p>
            </div>

            <div style="margin-bottom:20px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Phone Number : </p>
                <p style="display:inline">{{seller_phonenumber}}</p>
            </div>

            <hr>


            <p style="font-weight:670; font-size:20px; margin-top:20px; margin-left:100px ">Products</p>
            <div v-if="status==false">
            <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px; margin-left:250px" >
                <sui-accordion-content >
                    <sui-table celled >
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>Product ID</sui-table-header-cell>
                                <sui-table-header-cell>Name Product</sui-table-header-cell>
                                <sui-table-header-cell>QTY</sui-table-header-cell>
                                <sui-table-header-cell>Unit price</sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                    <sui-table-body >
                            <sui-table-row v-for="(key,index) in product_description " :key="index">
                                <sui-table-cell>{{keysProduct[index].substring(1,100)}}</sui-table-cell>
                                <sui-table-cell>{{product_name[index]}}</sui-table-cell>
                                <sui-table-cell>{{quantity[index]}}</sui-table-cell>
                                <sui-table-cell>{{product_unit_price[index]}}</sui-table-cell>
                            </sui-table-row>
                    </sui-table-body>
                </sui-table>
            </sui-accordion-content>
        </sui-accordion>

        </div>

<!-- if access via atstore page (show will be 2)-->
        <div v-if="status==true">
      
            <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px; margin-left:250px" >
                <sui-accordion-content >
                    <sui-table celled >
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>Product</sui-table-header-cell>
                                <sui-table-header-cell>Product ID</sui-table-header-cell>
                                <sui-table-header-cell>Name Product</sui-table-header-cell>
                                <sui-table-header-cell>QTY</sui-table-header-cell>
                                <sui-table-header-cell>Unit price</sui-table-header-cell>
                                <sui-table-header-cell>Selected</sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                    <sui-table-body >
                            <sui-table-row v-for="(key,index) in product_description " :key="index">
                                <sui-table-cell><img :src="product_image[index]" :width="150"></sui-table-cell>
                                <sui-table-cell>{{keysProduct[index].substring(1,100)}}</sui-table-cell>
                                <sui-table-cell>{{product_name[index]}}</sui-table-cell>
                                <sui-table-cell>{{quantity[index]}}</sui-table-cell>
                                <sui-table-cell>{{product_unit_price[index]}}</sui-table-cell>
                                <sui-table-cell ><sui-checkbox v-model="selected" :value="index.toString()" /></sui-table-cell>
                            </sui-table-row>
                    </sui-table-body>
                </sui-table>
            </sui-accordion-content>
        </sui-accordion>
        <p style="margin-left:1000px; font-size:25px; font-weight:700">Total : {{this.totalOrder()}} .00 THB</p>
        <p>{{selected}}</p>
        </div>


        <b-button variant="secondary" style="margin-left:400px; margin-left:650px; margin-top:40px" @click="showModal1" v-if="status==true">Receive Order</b-button>
        <b-button variant="secondary" style="margin-left:400px; margin-left:650px; margin-top:40px" @click="showModal" v-if="status==false">Receive Order</b-button>
        <b-button variant="secondary" style="margin-left:400px; margin-left:670px; margin-top:40px" @click="returnOrder(orderidParams)" v-if="status==true">Return</b-button>


        <b-modal ref="my-modal" hide-footer title="CONFIRMATION">
            <div class="d-block text-center" style="margin-bottom:50px">
                <p style="margin-top:20px">Are you sure you want to confirm goods received?</p>
            </div>
            <b-button variant="secondary" style="margin-left:290px"  @click="hideModal">Cancel</b-button>
            <b-button variant="secondary" style="margin-left:10px" @click="receiveOrder(orderidParams)">confirm</b-button>
        </b-modal>

        <b-modal ref="my-modal1" hide-footer title="CONFIRMATION">
            <div class="d-block text-center" style="margin-bottom:50px">
                <h3>Confirm receive order</h3>
            </div>
            <b-button variant="secondary" style="margin-left:290px"  @click="hideModal1">Cancel</b-button>
            <b-button variant="secondary" style="margin-left:10px" @click="receiveOrder1(orderidParams)">confirm1188</b-button>
        </b-modal>
        
    </div>
</template>


<script>
import firebase from "../firebase"
    // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import { mapGetters } from 'vuex'


import {dateToString} from '../utils/utils';
// import store from "../store"
export default {
    data() {
        return {
            userid : "",
            sellerUid : "",
            branch_selected : "",
            product_description : [],

            //user
            customer_firstname : "",
            customer_lastname : "",
            customer_phonenumber : "",
            customer_email : "",

            //seller
            seller_firstname : "",
            seller_lastname : "",
            seller_name_shop : "",
            seller_phonenumber : "",
            seller_email : "",
            address : "",
            seller_district : "",
            seller_province : "",
            seller_street : "",
            seller_sub_district : "",
            seller_zipcode : "",

            //product_descript
            keysProduct : [],
            product_name : [],
            product_unit_price : [],
            quantity : [],
            product_image : [],

            //keyOrder
            keyOrder : "",
            check_load : false,
            orderidParams : this.$route.params.idOrder,
            isLoading: true,
            fullPage: true,
            show : 2,
            status : "",
            selected: [],
            number_of_product : ""
            

        }
    },
    components : {
        Loading
    },
    computed : {
        ...mapGetters([
            'getKeyOrder'
        ])
    },
    methods: {
        returnOrder (keyOrder) {
            for(var j =0 ; j< this.keysProduct.length ; j++){
                firebase.ref("pickup_order/"+ keyOrder + "/product_description/" + j + "/status" + "/return_product/").update({
                    check_status : true,
                    return_date : dateToString(Date.now())
                })
                firebase.ref("pickup_order/" + keyOrder + "/status" + "/return").update({
                    check_status : true,
                    date_time_to_order : dateToString(Date.now())
                })
                this.$router.go(-1)
            }
        },
        totalOrder () {
            var total_amount  = 0
            for(var i =0 ; i< this.selected.length ;i++){
                console.log(this.selected.length)
                console.log(this.product_unit_price[parseInt(this.selected[i])]) 
                console.log(this.quantity[parseInt(this.selected[i])])
                
                total_amount  += this.product_unit_price[parseInt(this.selected[i])] * this.quantity[parseInt(this.selected[i])]
                console.log(total_amount)
            }            
            return total_amount
        },
        receiveOrder(keyOrder){
            firebase.ref("pickup_order/" + keyOrder + "/status" + "/atstore").update({
                check_status : true,
                date_time_to_order : dateToString(Date.now())
            })
            this.$router.back()
            console.log("update! pickup order")
            // store.commit("SET_PAGE_RECEIVE_PRODUCT" , {show_detailOrder : false})
        },

        receiveOrder1(keyOrder){

            for(var j = 0 ; j < this.selected.length ; j++){
                for(var i =0 ; i< this.keysProduct.length ; i++){
                    if( this.keysProduct[this.selected[j]] == this.keysProduct[i] ){
                        console.log("match!!")
                        console.log(this.keysProduct[i])
                    }else{
                        console.log("not selected")
                        console.log(this.keysProduct[i])
                        firebase.ref("pickup_order/"+ keyOrder + "/product_description/" + this.selected[j] + "/status" + "/return_product/").update({
                        check_status : true,
                        return_date : dateToString(Date.now())
                    })
                }
            }
        }


        firebase.ref("pickup_order/" + keyOrder + "/status" + "/complete").update({
            check_status : true,
            date_time_to_order : dateToString(Date.now())
                
        })
            console.log("status order!!!!")
            this.$router.go(-1)
        },
        showModal() {
            this.$refs['my-modal'].show()
        },
         showModal1() {
            this.$refs['my-modal1'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
        },
        hideModal1() {
            this.$refs['my-modal1'].hide()
      }
    },
    beforeRouteEnter (to, from, next) {
        console.log(to, 'Component exclusive guard beforeRouteEnter first argument');
        next(vm => {
      //Because the current hook either, component instance has not been created
      //  vm is an example of the current component equivalent above this, so in the next method where you can put this to use as a vm.
      console.log(vm);//Examples of the current component
    });
    },
    beforeCreate(){
        this.keyOrder = this.getKeyOrder
     

        firebase.ref("pickup_order/" + this.$route.params.idOrder).on( "value", snapshot => {
            console.log(snapshot.val())
            this.userid = snapshot.val().userid
            this.sellerUid = snapshot.val().sellerUid
            this.branch_selected = snapshot.val().branch_selected
            this.product_description = snapshot.val().product_description
            this.status = snapshot.val().status.atstore.check_status
            console.log("status")
            console.log(this.status)
        })
    },
    created() { 
      for(var j= 0 ; j<this.product_description.length ; j++){
          this.keysProduct[j] = this.product_description[j].keysProduct
          this.product_name[j] = this.product_description[j].product_name
          this.product_unit_price[j] = this.product_description[j].product_unit_price
          this.quantity[j] = this.product_description[j].quantity
          this.product_image[j] = this.product_description[j].product_image
      }
      console.log(this.keysProduct)
        firebase.ref("pickup_order/" + this.$route.params.idOrder).on("value" , snapshot => {
            console.log(snapshot.val())
            this.userid = snapshot.val().userid
            this.sellerUid = snapshot.val().sellerUid
            this.branch_selected = snapshot.val().branch_selected
            this.product_description = snapshot.val().product_description
            this.status = snapshot.val().status.atstore.check_status
            this.number_of_product = snapshot.val().number_of_product
            console.log("status")
            console.log(this.status)

            for(var i = 0 ;i<this.product_description.length ; i++){
                this.keysProduct[i] = this.product_description[i].keysProduct
                this.product_name[i] = this.product_description[i].product_name
                this.product_unit_price[i] = this.product_description[i].product_unit_price
                this.quantity[i] = this.product_description[i].quantity
                this.product_image[i] = this.product_description[i].product_image
            }
        })
        firebase.ref("user/" + this.userid).on("value" , snapshot => {
            console.log(snapshot.val())
            this.customer_firstname = snapshot.val().customer_firstname
            this.customer_lastname = snapshot.val().customer_lastname
            this.customer_phonenumber = snapshot.val().customer_phonenumber
            this.customer_email = snapshot.val().customer_email
        })
        firebase.ref("seller/" + this.sellerUid).on("value" , snapshot => {
            console.log(snapshot.val())
            this.seller_firstname = snapshot.val().seller_firstname
            this.seller_lastname = snapshot.val().seller_lastname
            this.seller_name_shop = snapshot.val().seller_name_shop
            this.seller_phonenumber = snapshot.val().seller_phonenumber
            this.seller_email = snapshot.val().seller_email
            this.address = snapshot.val().seller_address1.address
            this.seller_district = snapshot.val().seller_address1.seller_district
            this.seller_province = snapshot.val().seller_address1.seller_province
            this.seller_street = snapshot.val().seller_address1.seller_street
            this.seller_sub_district = snapshot.val().seller_address1.seller_sub_district
            this.seller_zipcode = snapshot.val().seller_address1.seller_zipcode
            this.isLoading =false
        })
    },
}
</script>
<style scoped>
 #headerbar{
  position: relative;
  top: 20px;
}
</style>