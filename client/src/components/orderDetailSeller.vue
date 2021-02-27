<template>
    <div>
        <div v-if="this.orderDetail.type == 'PICK-UP' ">
        <h1 style="margin:20px">Order ID : {{this.orderDetail.keysOrder.substring(1,100)}}</h1>
            <sui-table >
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell></sui-table-header-cell>
                        <sui-table-header-cell style="width:400px;" >Product</sui-table-header-cell>
                        <sui-table-header-cell style="text-align:center">Price (THB)</sui-table-header-cell>
                        <sui-table-header-cell style="text-align:center">Quantity</sui-table-header-cell>
                        <sui-table-header-cell style="text-align:center">Sub Total (THB)</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
            <sui-table-body>
            <sui-table-row v-for="(key,index) in this.infoDetail.product_description" :key="index">
                <sui-table-cell><img :src="product_image[index]" :width="150"></sui-table-cell>
                <sui-table-cell > {{product_name[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{product_unit_price[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index] * product_unit_price[index]}}</sui-table-cell>
            </sui-table-row>
            </sui-table-body>
            </sui-table>

            <h4 style="margin-left:700px; font-weight:600" >Total Amount:  {{total_amount}}.00 THB</h4>
            <h2>Customer Infomation</h2>
            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Name : </p> 
                <p style="display:inline">{{customer_firstname}} {{customer_lastname}}</p>
            </div>

            <div style="margin-bottom:10px">
            <p style="display:inline; color:#808080">Email : </p>
            <p style="display:inline">{{customer_email}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Phone Number : </p>
                <p style="display:inline">{{customer_phonenumber}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Date/Time to order : </p>
                <p style="display:inline">{{date_time_to_order}}</p>
            </div>
            <hr>
            <h2>Store Pick-up Infomation</h2>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Store : </p> 
                <p style="display:inline">{{name_store_pickup}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Address : </p> 
                <p style="display:inline">{{address_store}}</p>
            </div>

            <div style="margin-bottom:10px">
            <p style="display:inline; color:#808080">Phone : </p> 
            <p style="display:inline">{{phone_store}}</p>
            </div>
        </div>

        <div v-if="this.orderDetail.type == 'SHIPPING' ">
            <h1 style="margin:20px">Order ID : {{this.orderDetail.keysOrder.substring(1,100)}}</h1>
            <sui-table >
                <sui-table-header>
                    <sui-table-row>
                        <sui-table-header-cell></sui-table-header-cell>
                        <sui-table-header-cell style="width:400px;" >Product</sui-table-header-cell>
                        <sui-table-header-cell style="text-align:center">Price (THB)</sui-table-header-cell>
                        <sui-table-header-cell style="text-align:center">Quantity</sui-table-header-cell>
                        <sui-table-header-cell style="text-align:center">Sub Total (THB)</sui-table-header-cell>
                    </sui-table-row>
                </sui-table-header>
            <sui-table-body>
            <sui-table-row v-for="(key,index) in this.infoDetail.product_description" :key="index">
                <sui-table-cell><img :src="product_image[index]" :width="150"></sui-table-cell>
                <sui-table-cell > {{product_name[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{product_unit_price[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index] * product_unit_price[index]}}</sui-table-cell>
            </sui-table-row>
            </sui-table-body>
            </sui-table>

            <h4 style="margin-left:700px; font-weight:600" >Total Amount:  {{total_amount}}.00 THB</h4>
            <h2>Customer Infomation</h2>
            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Name : </p> 
                <p style="display:inline">{{customer_firstname}} {{customer_lastname}}</p>
            </div>

            <div style="margin-bottom:10px">
            <p style="display:inline; color:#808080">Email : </p>
            <p style="display:inline">{{customer_email}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Phone Number : </p>
                <p style="display:inline">{{customer_phonenumber}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Address : </p>
                <p style="display:inline">{{address}},{{customer_district}} , {{customer_province}}, {{customer_zipcode}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; color:#808080">Date/Time to order : </p>
                <p style="display:inline">{{date_time_to_order}}</p>
            </div>            
        </div>
        <b-button id="show-btn" variant="secondary" style="margin-left:400px" :disabled="status_order"  @click="showModal">CONFIRM ALL ORDER</b-button>
        <!-- <button id="confirmButton" style="margin-left:400px"  @click="confirmOrder(orderDetail.keysOrder,orderDetail.type)">CONFIRM ALL ORDER</button> -->
        <p>{{orderDetail.type}}</p>

        <b-modal ref="my-modal" hide-footer title="CONFIRMATION">
      <div class="d-block text-center">
        <h3>Confirm Order?</h3>
      </div>
     
      <b-button  variant="secondary" style="margin-left:300px; margin-top:40px" @click="hideModal">Cancle</b-button>
      <b-button  variant="secondary" style="margin-left:10px; margin-top:40px" @click="confirmOrder(orderDetail.keysOrder,orderDetail.type)">Confirm</b-button>

    </b-modal>

    </div>

</template>
<script>
import {mapGetters} from "vuex"
import firebase from "../firebase"
import {dateToString} from '../utils/utils';
// import {auth} from "../firebase"
export default {
    data() {
        return {
            infoDetail : {},
            keysProduct: [],
            productDescription : [],
            product_name : [],
            product_unit_price : [],
            quantity : [],
            product_image : [],
            total_amount: 0,
            date_time_to_order : [],
            status_order : true,

            //store info
            address_store : "",
            name_store_pickup : "",
            phone_store : "",
            pick_up_hours : "",

            //user info
            customer_email : "",
            customer_firstname : "",
            customer_lastname : "",
            customer_phonenumber : "",
            customer_address : "",
                address : "",
                customer_district : "",
                customer_province : "",
                customer_zipcode : "",


        }
    },
    methods: {
        async confirmOrder(key,type) {
            if(type == "PICK-UP"){
                
                await firebase.ref("pickup_order/"+ key +"/status"+ "/packing").update({
                    check_status : true,
                    date_time_to_order : dateToString(Date.now())
                })
                // await firebase.ref("pickup_order/"+ key + "/status" + "/packing").set(newStatus)
            }else if(type == "SHIPPING"){
                
                await firebase.ref("shipping_order/"+ key + "/status" + "/packing").update({
                    check_status : true,
                    date_time_to_order : dateToString(Date.now())
                })
            }
            this.$refs['my-modal'].hide()
   
        },
        showModal() {
        this.$refs['my-modal'].show()
      },
           hideModal() {
        this.$refs['my-modal'].hide()
      },
    },
    mounted() {

        if(this.orderDetail.type == "PICK-UP"){
            firebase.ref("pickup_order/" + this.orderDetail.keysOrder).on('value' , snapshot=>{
                this.infoDetail = snapshot.val()
                console.log(snapshot.val())
                this.date_time_to_order = this.infoDetail.status.ordered.date_time_to_order
                this.status_order = this.infoDetail.status.packing.check_status

            })

            firebase.ref("Store/"+ this.infoDetail.branch_selected).on("value" , snapshot => {
            // console.log(snapshot.val())
            this.address_store = snapshot.val().address
            this.name_store_pickup = snapshot.val().name_store_pickup
            this.phone_store = snapshot.val().phone
            this.pick_up_hours = snapshot.val().pick_up_hours.split(',')
        })

        for(var i=0;i<this.infoDetail.product_description.length;i++){
            // console.log(this.infoDetail.product_description[i].keysProduct)
            this.keysProduct[i] = this.infoDetail.product_description[i].keysProduct
            this.productDescription[i] = this.infoDetail.product_description[i].product_detail
            this.product_name[i] = this.infoDetail.product_description[i].product_name
            this.product_unit_price[i] = this.infoDetail.product_description[i].product_unit_price
            this.quantity[i] = this.infoDetail.product_description[i].quantity
            this.product_image[i] = this.infoDetail.product_description[i].product_image
            
            this.total_amount += (this.quantity[i] * parseInt(this.product_unit_price[i]))
            // console.log(typeof parseInt(this.product_unit_price[i]) )
            // console.log(this.total_amount)
        }
        }
        else if(this.orderDetail.type == "SHIPPING")
        {
            firebase.ref("shipping_order/" + this.orderDetail.keysOrder).on('value' , snapshot => {
                console.log(snapshot.val())
                this.infoDetail = snapshot.val()
                this.date_time_to_order = this.infoDetail.status.unpaid.date_time_to_order
                this.customer_address = this.infoDetail.customer_address
                this.status_order = this.infoDetail.status.packing.check_status
                
            })

            for(var z =0 ;z< this.customer_address.length ;z++){
                this.address = this.customer_address[z].customer_address
                this.customer_district = this.customer_address[z].customer_district
                this.customer_province = this.customer_address[z].customer_province
                this.customer_zipcode = this.customer_address[z].customer_zipcode
            }
   
            for(var j=0;j<this.infoDetail.product_description.length;j++){
            // console.log(this.infoDetail.product_description[i].keysProduct)
            this.keysProduct[j] = this.infoDetail.product_description[j].keysProduct
            this.productDescription[j] = this.infoDetail.product_description[j].product_detail
            this.product_name[j] = this.infoDetail.product_description[j].product_name
            this.product_unit_price[j] = this.infoDetail.product_description[j].product_unit_price
            this.quantity[j] = this.infoDetail.product_description[j].quantity
            this.product_image[j] = this.infoDetail.product_description[j].product_image
            
            this.total_amount += (this.quantity[j] * parseInt(this.product_unit_price[j]))
            // console.log(typeof parseInt(this.product_unit_price[i]) )
            // console.log(this.total_amount)
        }
        }
        firebase.ref("user/" + this.infoDetail.userid).on("value", snapshot => {
                console.log(snapshot.val())
                this.customer_email = snapshot.val().customer_email
                this.customer_firstname = snapshot.val().customer_firstname
                this.customer_lastname = snapshot.val().customer_lastname
                this.customer_phonenumber = snapshot.val().customer_phonenumber
                this.customer_address = snapshot.val().address
        })
    },
     computed:{
    ...mapGetters({
      orderDetail : "keyProductDetail"
    })
    },
 filters : {
    shortName(value1) {
      if(value1 && value1.length > 100){
        return value1.substring(0, 10) + '...';
      }
      else{
        return value1;
      }
    }
  },
}
</script>
<style scoped>

#confirmButton{
    background-color: white;
    border: solid black 1px;
    padding: 10px;
    border-radius: 10px;
}
</style>
