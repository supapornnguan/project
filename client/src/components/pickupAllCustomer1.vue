<template>
    <div>
        <div  style="margin-top:40px">
            <sui-segment id="stepSegment">
                <div class="circle" style="position:absolute"></div>
                <p style="position:absolute; top: 120px;left: 180px;">ordered</p>

                <div style="position:absolute; top:160px;left: 160px; font-size:11px; color:#A9A9A9" >
                    <p v-for="item in date_time_to_order" :key="item" style="text-align:center">{{item}}</p>
                </div>

                <div class="rectangle" style="position:absolute"></div>

                <div class="circle" style="position:absolute; left:150px"></div>
                <div class="rectangle" style="position:absolute; left:150px"></div>
                <p style="position:absolute; top: 120px;left: 320px;">Packing</p>

                <div class="circle" style="position:absolute; left:300px"></div>
                <div class="rectangle" style="position:absolute; left:300px"></div>
                <p style="position:absolute; top: 120px;left: 470px;">Shipped</p>

                <div class="circle" style="position:absolute; left:450px"></div>
                <div class="rectangle" style="position:absolute; left:450px"></div>
                <p style="position:absolute; top: 120px;left: 590px;">Ready for pick-up</p>

                <div class="circle" style="position:absolute; left:600px"></div>
                <p style="position:absolute; top: 120px;left: 760px;">Complete</p>
            </sui-segment>


            <h4 style="font-weight:670; margin-bottom:30px">Store Address</h4>
            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670; ">Store Pick-up : </p> 
                <p style="margin-top:20px; margin-bottom:20px">{{name_store_pickup}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670;">Address : </p> 
                <p style="margin-top:20px; margin-bottom:20px">{{address}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670;">Phone : </p> 
                <p style="margin-top:20px; margin-bottom:20px">{{phone}}</p>
            </div>

            <div style="margin-bottom:10px">
                <p style="display:inline; font-weight:670;">Pick-up Hours : </p> 
                <p v-for="item in pick_up_hours" :key="item" style="margin-top:20px; margin-bottom:20px">{{item}}</p>
            </div>


            <h4 style="font-weight:670; margin-bottom:30px">My Product</h4>
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

            <button id="cancelbutton">CANCEL ORDER</button>
            <button id="confirmbutton">CONFIRM RECEIVED</button>
            

            <!-- <p>{{orderDetail}}</p> -->
        </div>
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
            status : "ordered",
            store_pickup : [],
            show : 1,

            branch_selected : "",
            product_description : [],
            sellerUid : "",

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
            pick_up_hours : ""
        }
    },
    computed : {
        ...mapGetters({
            orderDetail :"getOrderDetail"
        })
    },
  
    mounted() {
        
        firebase.ref("pickup_order/" + this.orderDetail.keysOrder).on("value",snapshot => {
            console.log(snapshot.val())
            this.branch_selected = snapshot.val().branch_selected
            this.product_description = snapshot.val().product_description
            this.date_time_to_order = snapshot.val().status.ordered.date_time_to_order.split(',')
            console.log(snapshot.val().status.ordered.date_time_to_order)
        })
        for(var i=0;i<this.product_description.length;i++){
            this.keysProduct[i] = this.product_description[i].keysProduct
            this.product_detail[i] = this.product_description[i].product_detail
            this.product_image[i] = this.product_description[i].product_image
            this.product_name[i] = this.product_description[i].product_name
            this.product_unit_price[i] = this.product_description[i].product_unit_price
            this.quantity[i] = this.product_description[i].quantity
        }




        firebase.ref("Store/" + this.branch_selected).on("value", snapshot => {
            console.log(snapshot.val())
            this.address = snapshot.val().address
            this.name_store_pickup = snapshot.val().name_store_pickup
            this.phone = snapshot.val().phone
            this.pick_up_hours = snapshot.val().pick_up_hours.split(",")
            console.log(this.pick_up_hours)
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
  height: 50px;
  width: 50px;
  background-color:#A9A9A9;
  border-radius: 50%;
  margin-top: 40px;
  margin-left: 170px;
}
.rectangle {
  height: 3px;
  width: 70px;
  background-color: #555;
  margin-top: 65px;
  margin-left: 230px;
}
#cancelbutton{
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    width: 150px;
    height: 30px;
    margin-left: 350px;
}
#confirmbutton {
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    width: 150px;
    height: 30px;
    margin-left: 20px;
 
}
</style>