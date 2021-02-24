<template>
    <div>
        <!-- pickup -->
        <div  style="margin-top:40px" v-if="orderDetail.type=='PICK-UP' ">
            <sui-segment id="stepSegment">
                <div class="circle" style="position:absolute; margin-left:175px "></div>
                <p style="position:absolute; top: 120px;left: 180px;">ordered</p>

                <div style="position:absolute; top:160px;left: 160px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order" :key="item" style="text-align:center">{{item}}</p>
                </div>

                <div class="rectangle" style="position:absolute; margin-left:230px"></div>

                <div class="circle" style="position:absolute; left:210px"></div>
                <div class="rectangle" style="position:absolute; left:220px"></div>
                <p style="position:absolute; top: 120px;left: 320px;">Packing</p>

                <div style="position:absolute; top:160px;left: 300px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order1" :key="item" style="text-align:center">{{item}}</p>
                </div>

                <div class="circle" style="position:absolute; left:360px"></div>
                <div class="rectangle" style="position:absolute; left:365px"></div>
                <p style="position:absolute; top: 120px;left: 470px;">Shipped</p>

                 <div style="position:absolute; top:160px;left: 450px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order2" :key="item" style="text-align:center">{{item}}</p>
                </div>

                <div class="circle" style="position:absolute; left:510px"></div>
                <div class="rectangle" style="position:absolute; left:510px"></div>
                <p style="position:absolute; top: 120px;left: 590px;">Ready for pick-up</p>

                <div style="position:absolute; top:160px;left: 600px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order3" :key="item" style="text-align:center">{{item}}</p>
                </div>


                <div class="circle" style="position:absolute; left:650px"></div>
                <p style="position:absolute; top: 120px;left: 760px;">Complete</p>
            </sui-segment>

            <div style="position:absolute; top:160px;left: 800px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order4" :key="item" style="text-align:center">{{item}}</p>
                </div>


            <h4 style="font-weight:670; margin-bottom:30px">Store Pick-up</h4>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Store Pick-up : </p> 
                <p style="margin-top:10px; margin-bottom:20px">{{name_store_pickup}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670;">Address : </p> 
                <p style="margin-top:10px; margin-bottom:20px">{{address}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670;">Phone : </p> 
                <p style="margin-top:10px; margin-bottom:20px">{{phone}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670;">Pick-up Hours : </p> 
                <p v-for="item in pick_up_hours" :key="item" style="margin-top:10px; margin-bottom:10px">{{item}}</p>
            </div>
            <hr>

            <h4 style="font-weight:670; margin-bottom:30px; margin-top:30px">Seller Infomation</h4>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Name shop : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_name_shop}}</p>
            </div>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Name : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_firstname}} {{seller_lastname}}</p>
            </div>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Email : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_email}}</p>
            </div>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Phone : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_phonenumber}}</p>
            </div>


            <hr>

            <h4 style="font-weight:670; margin-bottom:30px;margin-top:30px">My Product</h4>
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
            <sui-table-row v-for="(key,index) in product_description" :key="index">
                <sui-table-cell><img :src="product_image[index]" :width="150"></sui-table-cell>
                <sui-table-cell > {{product_name[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{product_unit_price[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index] * product_unit_price[index]}}</sui-table-cell>
            </sui-table-row>
            </sui-table-body>
            </sui-table>
            <h4 style="margin-left:700px; font-weight:600; margin-top:30px; margin-bottom:30px" >Total Amount:  {{total_amount}}.00 THB</h4>
        </div>

<!-- shipping -->
        <div v-if="orderDetail.type == 'SHIPPING'">
        <sui-segment id="stepSegment">
                <div class="circle" style="position:absolute"></div>
                <p style="position:absolute; top: 120px;left: 120px;">unpaid</p>

                <div style="position:absolute; top:160px;left: 90px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order" :key="item" style="text-align:center">{{item}}</p>
                </div>

                <div class="rectangle" style="position:absolute"></div>
                

                <div class="circle" style="position:absolute; left:150px"></div>
                <div class="rectangle" style="position:absolute; left:150px"></div>
                <p style="position:absolute; top: 120px;left: 250px;">Payment</p>

                <div style="position:absolute; top:160px;left: 230px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order1" :key="item" style="text-align:center">{{item}}</p>
                </div>

                

                <div class="circle" style="position:absolute; left:300px"></div>
                <div class="rectangle" style="position:absolute; left:300px"></div>
                <p style="position:absolute; top: 120px;left: 390px;">Slip Verified</p>

                

                <div class="circle" style="position:absolute; left:450px"></div>
                <div class="rectangle" style="position:absolute; left:450px"></div>
                <p style="position:absolute; top: 120px;left: 540px;">Seller Confirm</p>

                
                <div class="circle" style="position:absolute; left:600px"></div>
                <div class="rectangle" style="position:absolute; left:600px"></div>
                <p style="position:absolute; top: 120px;left: 710px;">Shipped</p>


                <div class="circle" style="position:absolute; left:750px"></div>
                <p style="position:absolute; top: 120px;left: 850px;">Complete</p>
                
            </sui-segment>
            <h4 style="font-weight:670; margin-bottom:30px">Address</h4>

            <p v-for="(item,index) in customer_address" :key="index">{{customer_address1[index]}},{{customer_district[index]}},{{customer_province[index]}},{{customer_zipcode[index]}}</p>
<hr>
            <h4 style="font-weight:670; margin-bottom:30px; margin-top:30px">Seller Infomation</h4>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Name shop : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_name_shop}}</p>
            </div>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Name : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_firstname}} {{seller_lastname}}</p>
            </div>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Email : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_email}}</p>
            </div>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Phone : </p> 
                <p style="display:inline; margin-top:20px; margin-bottom:20px">{{seller_phonenumber}}</p>
            </div>
            <hr>
            <h4 style="font-weight:670; margin-bottom:30px; margin-top:30px">My Product</h4>
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
            <sui-table-row v-for="(key,index) in product_description" :key="index">
                <sui-table-cell><img :src="product_image[index]" :width="150"></sui-table-cell>
                <sui-table-cell > {{product_name[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{product_unit_price[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index]}}</sui-table-cell>
                <sui-table-cell style="text-align:center">{{quantity[index] * product_unit_price[index]}}</sui-table-cell>
            </sui-table-row>
            </sui-table-body>
            </sui-table>
            <h4 style="margin-left:700px; font-weight:600; margin-top:30px; margin-bottom:30px" >Total Amount:  {{total_amount}}.00 THB</h4>

        </div>
            <b-button variant="secondary" :disabled="check_shipped" style="margin-left:350px">Cancle Order</b-button>
            <b-button variant="secondary" v-if="!check_complete" style="margin-left: 20px;">Confirm Order</b-button>
            <b-button variant="secondary" style="margin-left: 30px;" v-if="orderDetail.type == 'SHIPPING' " :disabled="check_payment" @click="uploadSlip()">Upload Slip</b-button>
            <!-- <p>{{check_shipped}}</p>
            <p>{{check_complete}}</p> -->
            

    </div>
</template>
<script>
import firebase from "../firebase"
// import {auth} from "../firebase"
// import store from "../store"
import {mapGetters} from "vuex"
export default {
    data() {
        return {
            infoOrder : {},
            order : [],
            date_time_to_order : "",
            date_time_to_order1 : "",
            date_time_to_order2 : "",
            date_time_to_order3 : "",
            date_time_to_order4 : "",
            date_time_to_order5 : "",
            date_time_to_order6 : "",
            
            status : "ordered",
            store_pickup : [],
            show : 1,
            check_shipped : false,
            check_complete : true,
            check_payment : false,

            branch_selected : "",
            product_description : [],
            sellerUid : "",
            seller_email : "",
            seller_firstname : "",
            seller_lastname : "",
            seller_phonenumber : "",

            //info product descript
            keysProduct : [],
            product_detail : [],
            product_image :[],
            product_name :[],
            product_unit_price :[],
            quantity :[],
            seller_name_shop :[],

            //store address
            address : "",
            name_store_pickup : "",
            phone : "",
            pick_up_hours : "",

            total_amount : 0,
            customer_address : [],
            customer_address1 : [],
            customer_district : [],
            customer_province : [],
            customer_zipcode : []
        }
    },
    methods: {
        uploadSlip() {
            this.$router.push({name: "uploadSlip" , params: {orderId : this.orderDetail.keysOrder}})
        }
    },
    computed : {
        ...mapGetters({
            orderDetail :"getOrderDetail"
        })
    },
    mounted() {

        if(this.orderDetail.type == "PICK-UP"){
        firebase.ref("pickup_order/" + this.orderDetail.keysOrder).on("value",snapshot => {
            console.log(snapshot.val())
            this.branch_selected = snapshot.val().branch_selected
            this.product_description = snapshot.val().product_description

            if(snapshot.val().status.ordered.check_status == true){
                this.date_time_to_order = snapshot.val().status.ordered.date_time_to_order.split(',')
            }
            if(snapshot.val().status.packing.check_status == true){
                this.date_time_to_order1 = snapshot.val().status.packing.date_time_to_order.split(',')
            }
            if(snapshot.val().status.delivery.check_status == true){
                this.check_shipped = snapshot.val().status.delivery.check_status
                this.date_time_to_order2 = snapshot.val().status.delivery.date_time_to_order.split(',')
            }
            if(snapshot.val().status.atstore.check_status == true){
                this.date_time_to_order3 = snapshot.val().status.atstore.date_time_to_order.split(',')
            }
            if(snapshot.val().status.complete.check_status == true){
                this.check_complete = snapshot.val().status.complete.check_status
                this.date_time_to_order4 = snapshot.val().status.complete.date_time_to_order.split(',')
            }
            if(snapshot.val().status.return.check_status == true){
                this.date_time_to_order5 = snapshot.val().status.return.date_time_to_order.split(',')
            }
            this.sellerUid = snapshot.val().sellerUid
            console.log(snapshot.val().status.ordered.date_time_to_order)
        })
        for(var i=0;i<this.product_description.length;i++){
            this.keysProduct[i] = this.product_description[i].keysProduct
            this.product_detail[i] = this.product_description[i].product_detail
            this.product_image[i] = this.product_description[i].product_image
            this.product_name[i] = this.product_description[i].product_name
            this.product_unit_price[i] = this.product_description[i].product_unit_price
            this.quantity[i] = this.product_description[i].quantity

            this.total_amount += (this.quantity[i] * parseInt(this.product_unit_price[i]))
        }    
        firebase.ref("Store/" + this.branch_selected).on("value", snapshot => {
            console.log(snapshot.val())
            this.address = snapshot.val().address
            this.name_store_pickup = snapshot.val().name_store_pickup
            this.phone = snapshot.val().phone
            this.pick_up_hours = snapshot.val().pick_up_hours.split(",")
            console.log(this.pick_up_hours)
        })        
        }else if(this.orderDetail.type == "SHIPPING"){
            firebase.ref("shipping_order/" + this.orderDetail.keysOrder).on("value",snapshot=>{
                console.log(snapshot.val())
                this.product_description = snapshot.val().product_description
                this.date_time_to_order = snapshot.val().status.unpaid.date_time_to_order.split(',')
                this.customer_address = snapshot.val().customer_address
                this.sellerUid = snapshot.val().sellerUid
                console.log(this.customer_address)
                
            if(snapshot.val().status.unpaid.check_status == true){
                this.date_time_to_order = snapshot.val().status.unpaid.date_time_to_order.split(',')
            }
            if(snapshot.val().status.payment.check_status == true){
                this.check_payment = snapshot.val().status.payment.check_status
                this.date_time_to_order1 = snapshot.val().status.payment.date_time_to_order.split(',')
            }
            if(snapshot.val().status.slip_verified.check_status == true){
                // this.check_shipped = snapshot.val().status.delivery.check_status
                this.date_time_to_order2 = snapshot.val().status.slip_verified.date_time_to_order.split(',')
            }
            if(snapshot.val().status.packing.check_status == true){
                this.date_time_to_order3 = snapshot.val().status.packing.date_time_to_order.split(',')
            }
            if(snapshot.val().status.delivery.check_status == true){
                // this.check_complete = snapshot.val().status.complete.check_status
                this.date_time_to_order4 = snapshot.val().status.delivery.date_time_to_order.split(',')
            }
            if(snapshot.val().status.complete.check_status == true){
                this.date_time_to_order5 = snapshot.val().status.complete.date_time_to_order.split(',')
            }
            if(snapshot.val().status.return.check_status == true){
                this.date_time_to_order6 = snapshot.val().status.return.date_time_to_order.split(',')
            }
            })
        for(var z=0;z<this.product_description.length;z++){
            this.keysProduct[z] = this.product_description[z].keysProduct
            this.product_detail[z] = this.product_description[z].product_detail
            this.product_image[z] = this.product_description[z].product_image
            this.product_name[z] = this.product_description[z].product_name
            this.product_unit_price[z] = this.product_description[z].product_unit_price
            this.quantity[z] = this.product_description[z].quantity

            this.total_amount += (this.quantity[z] * parseInt(this.product_unit_price[z]))
        } 
        for(var q = 0; q<this.customer_address.length;q++){
            this.customer_address1[q] = this.customer_address[q].customer_address
            this.customer_district[q] = this.customer_address[q].customer_district
            this.customer_province[q] = this.customer_address[q].customer_province
            this.customer_zipcode[q] = this.customer_address[q].customer_zipcode
        }
        }
        firebase.ref("seller/"+this.sellerUid).on("value",snapshot => {
            console.log(snapshot.val())
            this.seller_firstname = snapshot.val().seller_firstname
            this.seller_lastname = snapshot.val().seller_lastname
            this.seller_email = snapshot.val().seller_email
            this.seller_phonenumber = snapshot.val().seller_phonenumber
            this.seller_name_shop = snapshot.val().seller_name_shop
        })
    },
}
</script>
<style scoped>
#orderSeg{
    width: 960px;
    height: 60px;
    margin-left: 30px;
    border-radius: 15px;
}
#stepSegment{
    margin-top:20px;
    height: 250px;
    border-radius: 15px;
}
.circle {
  height: 35px;
  width: 35px;
  background-color:#A9A9A9;
  border-radius: 50%;
  margin-top: 50px;
  margin-left: 120px;
}
.rectangle {
  height: 3px;
  width: 70px;
  background-color: #555;
  margin-top: 65px;
  margin-left: 170px;
}
</style>