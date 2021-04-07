<template>
    <div>

  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        CENTRAL PLAZA PINKLAO
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU01' ">
        <sui-table-cell><a href="#" @click="ProductDetail(key)" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{receive_date[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        SIAM PARAGON
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
       <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU02' ">
        <sui-table-cell><a href="#" @click="ProductDetail(key)">{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{receive_date[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        CENTRAL RAMA3
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
       <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU01' ">
        <sui-table-cell><a href="#" @click="ProductDetail(key)">{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{receive_date[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>


      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        CENTRAL LARDPRAO
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU04' ">
        <sui-table-cell><a href="#" @click="ProductDetail(key)" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{receive_date[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>


            <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        EMQUARTIER
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU05' ">
        <sui-table-cell><a href="#" @click="ProductDetail(key)" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{receive_date[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
    </sui-accordion>


          <b-modal ref="my-modal" size="xl" hide-footer :title=" 'ORDER ID : '+ orderid_modal">
      <div class="d-block text-center">

      <sui-table celled >
     <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell></sui-table-header-cell>
        <sui-table-header-cell>Product Name</sui-table-header-cell>
        <sui-table-header-cell>Unit Price</sui-table-header-cell>
        <sui-table-header-cell>Quantity</sui-table-header-cell>
        <!-- <sui-table-header-cell>Name Shop</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row v-for="(key,index) in product_name_modal" :key="index">
        <sui-table-cell><img :src="product_image_modal[index]" :width="150"></sui-table-cell>
        <sui-table-cell>{{product_name_modal[index]}}</sui-table-cell>
        <sui-table-cell>{{product_unit_price_modal[index]}}</sui-table-cell>
        <sui-table-cell>{{quantity_modal[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{seller_name_shop_modal[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>   
  <p style="color:red; font-size:20px; margin-left:20px" > Total Amount : {{total_amount_modal}}.00 THB</p>
    </div>
  </b-modal>


    </div>
</template>
<script>
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
    data() {
        return {
            name_store_pickup : [],
            branch : {},
            keyStore : [],
            infoOrder: {},
            keysOrder : [],
            branch_selected : [],
            order : [],
            status : [],
            status1 : [],
            date_time_to_order : [],
            total_amount : [],
            number_of_product : [],
            tracking_number : [],
            product_description : [],
            status_return : [],
            product_des : [],
            key_order : [],
            receive_date : [],
            check_complete : [],

            //return case
            product_unit_price_return : [],
            quantity_return : [],
            total_amount_1 : [],
            total_amount_2 : [],

            orderid_modal : "",
            product_description_modal : [],
            product_image_modal : [],
            product_name_modal : [],
            product_unit_price_modal : [],
            quantity_modal : [],
            seller_name_shop_modal : [],
            total_amount_modal : []
        }
    },
    methods: {
      ProductDetail(orderid){
        this.product_image_modal = []
        this.product_name_modal= []
        this.product_unit_price_modal= []
        this.quantity_modal= []
        this.seller_name_shop_modal= []

        this.orderid_modal = orderid

        firebase.ref("pickup_order/" + orderid).on("value" , snapshot => {
          console.log(snapshot.val())
          this.product_description_modal = snapshot.val().product_description
          var total = 0
          for(var i = 0 ;i < this.product_description_modal.length ; i++){
            console.log(this.product_description_modal[i])
            var status = this.product_description_modal[i].status.return_product.check_status
            if(status == false){
              this.product_image_modal.push(this.product_description_modal[i].product_image) 
              this.product_name_modal.push(this.product_description_modal[i].product_name) 
              this.product_unit_price_modal.push(this.product_description_modal[i].product_unit_price) 
              this.quantity_modal.push(this.product_description_modal[i].quantity) 
              this.seller_name_shop_modal.push(this.product_description_modal[i].seller_name_shop) 
            }
          }
  
          for(var j = 0; j< this.product_unit_price_modal.length ; j++){
            total += this.product_unit_price_modal[j] * this.quantity_modal[j]
          }

          console.log(total)
          this.total_amount_modal = total
          console.log(this.product_unit_price_modal)
        })

        this.$refs['my-modal'].show()
      }
    },
    created() {
        firebase.ref("pickup_order/").orderByChild("sellerUid").equalTo(auth.currentUser.uid).on("value" , snapshot => {
          console.log(snapshot.val())
          console.log("hello")
          this.infoOrder = snapshot.val()
          this.keysOrder = Object.keys(snapshot.val())
          for(var i =0 ; i< this.keysOrder.length ; i++){
            var  k = this.keysOrder[i]
            var product_description = this.infoOrder[k].product_description
            this.product_description[i] = product_description
            this.check_complete[i] = this.infoOrder[k].status.complete.check_status

          }
          for(var j =0 ; j< this.product_description.length ; j++){
            for(var a = 0 ; a <this.product_description[j].length ; a++){
              console.log(this.product_description[j])
              if(this.product_description[j][a].status.return_product.check_status == false && this.check_complete[j] != false){
                  // this.date_time_return.push(this.product_description[j][a].status.return_product.return_date)
                  
                  this.key_order.push(this.keysOrder[j])
                  this.key_order = [ ...new Set(this.key_order) ]
              }
            }
          }
          for(var q = 0 ; q < this.keysOrder.length ; q++){
            var e = this.keysOrder[q]
            console.log(e)
            for(var t =0 ; t< this.key_order.length ; t++){
              if(this.keysOrder[q] == this.key_order[t]){
                console.log(this.key_order[q])
                this.product_des[t] = this.infoOrder[e].product_description
                this.receive_date[t] = this.infoOrder[e].status.complete.date_time_to_order
                var count = 0 
                var total = 0
                var branch_selected = this.infoOrder[e].branch_selected
                
                for(var y =0  ;y < this.product_des[t].length ; y++){
                  var status = this.product_des[t][y].status.return_product.check_status
                  if(status == false){
                  
                    var price = this.product_des[t][y].product_unit_price
                    var qty = this.product_des[t][y].quantity
                    count = count+qty
                    total += price* qty
                  }

                }
                this.branch_selected.push(branch_selected)
                this.number_of_product.push(count)
                this.total_amount.push(total)
              }
            }
          }
 
          console.log(this.branch_selected)
          console.log(this.product_description)
          console.log(this.number_of_product)
          console.log(this.total_amount)
          console.log(this.receive_date)
        })
    },
    mounted() {

           firebase.ref('Store/').on('value', snapshot => {
           this.branch = snapshot.val() 
           this.keyStore = Object.keys(snapshot.val())
           console.log(this.keyStore)
           for (var i =0 ; i < this.keyStore.length ; i++){
               var k = this.keyStore[i];
               var name_store_pickup = this.branch[k].name_store_pickup
               this.name_store_pickup[i] = name_store_pickup
               console.log(this.keyStore)
           }
        })


    },
    
}
</script>
<style scoped>
    
</style>