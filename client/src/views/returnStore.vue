<template>
    <div>
        <div style="background-color:#542e71; height:80px;">
        <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
        </div>
        <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">RETURN</p>
        <hr>

        <div style="width:400px; margin-left:550px; margin-bottom:30px">
    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
  </div>


  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Order Id</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Return Date</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Total Price</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Number Of Product</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center">Seller Name</p></sui-table-header-cell>

      </sui-table-row>
    </sui-table-header>


    <sui-table-body >
      <sui-table-row v-for="(key,index) in resultQuery" :key="index">
        <sui-table-cell style="text-align:center"> <a href="#" @click="detailProduct(resultQuery[index].key_order1)">{{resultQuery[index].key_order1.substring(1,100)}}</a> </sui-table-cell>
        <sui-table-cell style="text-align:center">{{resultQuery[index].filterDate1}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{resultQuery[index].total_amount1}}.00 THB</sui-table-cell>
        <sui-table-cell style="text-align:center">{{resultQuery[index].number_of_product1}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{resultQuery[index].seller_firstname1}}</sui-table-cell>

      </sui-table-row>
    </sui-table-body>
  </sui-table>

      <b-modal ref="my-modal" size="xl" hide-footer :title=" 'ORDER ID : '+ orderid_modal">
      <div class="d-block text-center">

      <sui-table celled >
     <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell></sui-table-header-cell>
        <sui-table-header-cell>Product Name</sui-table-header-cell>
        <sui-table-header-cell>Unit Price</sui-table-header-cell>
        <sui-table-header-cell>Quantity</sui-table-header-cell>
        <sui-table-header-cell>Name Shop</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row v-for="(key,index) in product_name_modal" :key="index">
        <sui-table-cell><img :src="product_image_modal[index]" :width="150"></sui-table-cell>
        <sui-table-cell>{{product_name_modal[index]}}</sui-table-cell>
        <sui-table-cell>{{product_unit_price_modal[index]}}</sui-table-cell>
        <sui-table-cell>{{quantity_modal[index]}}</sui-table-cell>
        <sui-table-cell>{{seller_name_shop_modal[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>   
  <p style="color:red; font-size:20px; margin-left:20px" > Total Amount : {{total_amount_modal}}.00 THB</p>
    </div>
  </b-modal>
  <br>
  <br>
        
    </div>
</template>
<script>
import firebase from "../firebase"
export default {
    data() {
      return {
        info_pickup : {},
        info_pickup_list : [],
        
        keysProduct : [],
        product_name : [],
        product_unit_price : [],
        quantity : [],

        seller_name_shop : [],
        product_image : [],
        branch_selected : [],

        orderId : [],

        total_amount : [],
        return_date : [],
        product_description : [],


        info_pickup1 : {},
        info_pickup_list1 : [],
        product_description1 : [],
        key_order : [],
        product_des : [],
        number_of_product : [],
        sellerUid : [],

        orderid_modal : "",
        product_description_modal : [],
        product_image_modal : [],
        product_name_modal : [],
        product_unit_price_modal : [],
        quantity_modal : [],
        seller_name_shop_modal : [],
        total_amount_modal : "",
        seller_email: [], 
        seller_firstname: [],
        seller_lastname: [],
        seller_phonenumber : [],

        searchQuery : null,
        detail : [],
        filterDate : [],
        key_order1 : [],
        seller_firstname1 : [],
        number_of_product1 : [],
        total_amount1 :[]
        

        
      }
    },
    methods: {

      detailProduct(orderid){
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
            if(status == true){
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
    computed : {
      resultQuery() {
        if(this.searchQuery){
          return this.detail.filter((item)=>{
          return item.key_order1.toLowerCase().includes(this.searchQuery.toLowerCase());
        })
        }else{
          return this.detail;
        }
      }

    },
    created() {

      firebase.ref("pickup_order/").on("value" , snapshot => {
        console.log(snapshot.val())
        this.info_pickup = snapshot.val()
        this.info_pickup_list = Object.keys(snapshot.val())
        var list_key_order = []
        for(var j =0 ; j< this.info_pickup_list.length ; j++){
          var k = this.info_pickup_list[j]
          var branch_selected = this.info_pickup[k].branch_selected
          this.branch_selected[j] = branch_selected
          if(this.branch_selected[j] == this.$route.params.idStore){
            this.product_description.push(this.info_pickup[k].product_description)
            list_key_order.push(k)
            
          }
        }
        console.log(this.product_description)
        console.log(list_key_order)

        for(var a = 0 ; a< this.product_description.length ; a++){
          for(var b = 0 ; b < this.product_description[a].length ; b++){
            console.log(this.product_description[a][b])
            if(this.product_description[a][b].status.return_product.check_status == true){
              console.log(this.product_description[a][b])
              // this.return_date.push(this.product_description[a][b].status.return_product.return_date)
              this.key_order.push(list_key_order[a])
              this.key_order = [ ...new Set(this.key_order) ] //filter duplicate key_order
            }
          }
        }
        console.log(this.key_order)
        for(var w = 0 ; w < this.info_pickup_list.length ; w++){
          var e = this.info_pickup_list[w]
          console.log(e)
          for(var t = 0 ;t < this.key_order.length ; t++){
            if(this.info_pickup_list[w] == this.key_order[t]){
              console.log(this.info_pickup_list[w])
              this.product_des[t] = this.info_pickup[e].product_description
              var count = 0
              var total = 0
              for(var y = 0 ; y < this.product_des[t].length ; y++){
                var status = this.product_des[t][y].status.return_product.check_status
                console.log(status)
                if(status == true){
                  // this.number_of_product.push(this.product_des[t][y].length)
                  console.log(this.product_des[t][y])
                  this.return_date.push(this.product_des[t][y].status.return_product.return_date)
                  var price = this.product_des[t][y].product_unit_price
                  var qty = this.product_des[t][y].quantity
                  var sellerUid = this.product_des[t][y].sellerUid

                  firebase.ref("seller/" + sellerUid).on("value" , snapshot => {
                  this.seller_firstname.push(snapshot.val().seller_firstname) 
                  this.seller_lastname.push(snapshot.val().seller_lastname)
                  this.seller_email.push(snapshot.val().seller_email)
                  this.seller_phonenumber.push(snapshot.val().seller_phonenumber)
                })

                  this.sellerUid.push(sellerUid)

                  console.log(price)
                  console.log(qty)
                  console.log(this.sellerUid)
                  console.log(this.product_des[t][y])
                  count = count+1
                  total += price * qty                  
                }
              }
              this.return_date = [ ...new Set(this.return_date) ]
              console.log(count)
              this.number_of_product.push(count)
              this.total_amount.push(total)
              console.log(this.product_des[t])
            }
          }
        }
        // this.sellerUid = [ ...new Set(this.sellerUid)]
        // this.sellerUid = this.sellerUid.filter(val => (val!==undefined) && val!==null)
        // console.log(this.sellerUid)
        // firebase.ref("seller/" + this.sellerUid[0]).on("value" , snapshot => {
        //   this.seller_firstname = snapshot.val().seller_firstname
        //   this.seller_lastname = snapshot.val().seller_lastname
        //   this.seller_email = snapshot.val().seller_email
        //   this.seller_phonenumber = snapshot.val().seller_phonenumber
        // })
        // console.log(this.sellerUid)
        console.log(this.seller_firstname)
        console.log(this.return_date)
        console.log(this.key_order)

        for(var q = 0 ; q< this.return_date.length ; q++){
          this.filterDate[q] = this.return_date[q]
        }
        this.filterDate.reverse()
        console.log(this.filterDate)

        for(var z = 0 ; z < this.filterDate.length ; z++){
          for(var x = 0 ; x < this.return_date.length ; x++){
            if(this.filterDate[z] == this.return_date[x] ){
              this.key_order1[z] = this.key_order[x]
              this.seller_firstname1[z] = this.seller_firstname[x]
              this.number_of_product1[z] = this.number_of_product[x]
              this.total_amount1[z] = this.total_amount[x]
            }
          }
        }
        console.log(this.seller_firstname1)

        for(var n = 0 ; n< this.key_order1.length ; n++){
          var detailKey = {
            key_order1 : this.key_order1[n],
            seller_firstname1 : this.seller_firstname1[n],
            number_of_product1 : this.number_of_product1[n],
            filterDate1 : this.filterDate[n],
            total_amount1 : this.total_amount1[n]
          }
            this.detail.push(detailKey)
        }


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