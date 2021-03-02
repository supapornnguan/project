<template>
  <div>
    <h1 style="margin-bottom:40px; font-weight:670;">MY ORDER</h1>

    <button @click="gotoPickup" 
            v-bind:class="[isActive ? 'backgroundgray' : 'backgroundWhite']" 
            >PICK-UP</button>
    <button @click="gotoShipping" 
            v-bind:class="[isActive ? 'backgroundWhite' : 'backgroundgray']"
           >SHIPPING</button>
    <div v-if="pickup_show==2" style="margin-top:20px">
        <a href="#" @click="back">Back</a>
        </div>


<!-- pick up -->
     <div v-if="pickup_show==1" >
        <div style="margin-left:70px; margin-top:50px">
          <p style="display:inline;  font-weight:670; font-size:20px; margin-left:50px">Date</p>
          <p style="display:inline; font-weight:670; font-size:20px; margin-left:200px; ">Order ID</p>
          <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Store Pick-up</p>
          <p style="display:inline; margin-left:120px; font-weight:670; font-size:20px">Status</p>
        </div>

        <sui-segment v-for="(key,index) in  order1" :key="index" id="orderSeg" @click="gotoOrderDetail(key,pickup_type)">
           <p style="display:inline; position:absolute; left: 35px; top:20px;">{{filterDate[index]}}</p>
          <p style="display:inline; position:absolute; left:310px; top:20px; font-weight:670; ">{{key.substring(1,100)}}</p>
         
          <p style="display:inline; position:absolute; left:590px; top:20px;">{{ store_pickup1[index]}}</p>
          <p style="display:inline; position:absolute; left:800px; top:20px;">
            <sui-label horizontal v-if="status1[index] === 'ordered'" style="width:100px; text-align:center">
              ordered
            </sui-label>
            <sui-label color="orange" horizontal v-if="status1[index] === 'packing'" style="width:100px; text-align:center">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status1[index] === 'delively'" style="width:100px; text-align:center">
              ordered
            </sui-label>
            <sui-label color="blue" horizontal v-if="status1[index] === 'atstore'" style="width:100px; text-align:center">
              atstore
            </sui-label>
            <sui-label color="green" horizontal v-if="status1[index] === 'complete'" style="width:100px; text-align:center">
              complete
            </sui-label>
            <sui-label color="red" horizontal v-if="status1[index] === 'return'" style="width:100px; text-align:center">
              return
            </sui-label>
            </p>
        </sui-segment>
        </div>

        <div v-if="pickup_show==2">
          <pickupAllCustomer/>
        </div>

        <!-- shipping -->
        <div v-if="pickup_show==3" >
         <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; margin-left:40px; font-weight:670; font-size:20px">Date</p>
           <p style="display:inline; margin-left:250px; font-weight:670; font-size:20px">Order ID</p>
           <p style="display:inline; margin-left:260px; font-weight:670; font-size:20px">Status</p>
        </div>

        <sui-segment v-for="(key,index) in  orderShip1" :key="index" id="orderSeg" @click="gotoOrderDetail(key,shipping_type)">
          <p style="display:inline; position:absolute; left:35px; top:20px;">{{filterDate1[index]}}</p>
          <p style="display:inline; position:absolute; left:340px; top:20px; font-weight:670; ">{{key.substring(1,100)}}</p>
          <p style="display:inline; position:absolute; left:710px; top:20px;">
            <sui-label color="red" horizontal v-if="status_ship[index] === 'unpaid'" style="width:100px; text-align:center">
              unpaid
            </sui-label>
            <sui-label color="purple" horizontal v-if="status_ship[index] === 'paid'" style="width:100px; text-align:center">
              paid
            </sui-label>
            <sui-label horizontal v-if="status_ship[index] === 'verifyslip'" style="width:100px; text-align:center">
              verifyslip
            </sui-label>
            <sui-label color="orange" horizontal v-if="status_ship[index] === 'packing'" style="width:100px; text-align:center">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status_ship[index] === 'delivery'" style="width:100px; text-align:center">
              delivery
            </sui-label>
            <sui-label color="green" horizontal v-if="status_ship[index] === 'complete'" style="width:100px; text-align:center">
              complete
            </sui-label>
            </p>
        </sui-segment>
        </div>
  </div>
</template>

<script>
import pickupAllCustomer from "../components/pickupAllCustomer1"
// import shippingAllCustomer from "../components/shippingAllCustomer"
// import allOrderCustomer from "../components/allOrderCustomer"
// import myOrderPickupCus from "../components/myOrderPickupCus"
import firebase from "../firebase"
import {auth} from "../firebase"
import store from "../store"
export default {
  data () {
    return {
      pickup_show : 1 ,
        infoOrder : {},
            order : [],
            date_time_to_order : [],
            status : [],
            store_pickup : [],
            pickup_type : "PICK-UP",
            shipping_type : "SHIPPING",
            isActive: true,
            product_description : [],
          
   
        

            //store address
            address : [],
            name_store_pickup : [],
            phone : [],
            pick_up_hours : [],
          
        //shipping
        infoShipping : {},
        orderShip : [],
        date_time_to_order_ship : [],
        status_ship : [],



        filterDate : [],
        order1 : [],
        store_pickup1 : [],
        status1 : [],

        filterDate1 : [],
        orderShip1 : [],
        




        
    }
  },
  components:{
      pickupAllCustomer,
      // shippingAllCustomer,
      // allOrderCustomer,
      // myOrderPickupCus
  },
  methods: {
    gotoOrderDetail(key,type){
            store.commit("SET_KEY_ORDER_DETAIL_USER",{
                keysOrder : key,
                type : type
            })
            this.pickup_show = ''
            this.pickup_show = 2
            console.log(this.pickup_show)
        },
         back(){
            this.pickup_show = ''
            this.pickup_show = 1
        },
        gotoShipping(key,type){
          this.isActive = false
          store.commit("SET_KEY_ORDER_DETAIL_USER",{
                keysOrder : key,
                type : type
            })
          this.pickup_show = ''
          this.pickup_show = 3
        },
        gotoPickup(){
          this.isActive= true,
          this.pickup_show = ''
          this.pickup_show = 1
        }
  },
  
      created(){
        firebase.ref("pickup_order/").orderByChild("userid").equalTo(auth.currentUser.uid).on("value", snapshot => {
            // console.log(snapshot.val())
            this.infoOrder = snapshot.val()
            this.order = Object.keys(this.infoOrder)
            // console.log(this.order)

            for(var i=0;i<this.order.length;i++){
                var k = this.order[i]

                var date_time_to_order = this.infoOrder[k].status.ordered.date_time_to_order
                var store_pickup = this.infoOrder[k].branch_selected
                var product_description = this.infoOrder[k].product_description
                

                var status 

                if(this.infoOrder[k].status.packing.check_status == false ){
                  status = "ordered"
                }else if(this.infoOrder[k].status.delivery.check_status == false ){
                  status = "packing"
                }else if(this.infoOrder[k].status.atstore.check_status == false ){
                  status = "delivery"
                }else if(this.infoOrder[k].status.complete.check_status == false ){
                  status = "atstore"
                }else if(this.infoOrder[k].status.return.check_status == false ){
                  status = "complete"
                }else if(this.infoOrder[k].status.return.check_status == true ){
                  status = "return"
                }
         
                this.status[i] = status
                this.date_time_to_order[i] = date_time_to_order
                this.store_pickup[i] = store_pickup
                this.product_description[i] = product_description
                console.log(this.product_description)

                for(var q = 0 ; q < this.date_time_to_order.length ; q++){
                this.filterDate[q] = this.date_time_to_order[q]
              }
                this.filterDate.reverse()
                for(var a = 0 ;a < this.filterDate.length ; a++){
                  for(var b = 0 ; b < this.date_time_to_order.length ; b++){
                    if(this.filterDate[a] == this.date_time_to_order[b]){
                      this.order1[a] = this.order[b]
                      this.store_pickup1[a] = this.store_pickup[b]
                      this.status1[a] = this.status[b]
               }
              }
            }
          }
        }),

        //shiping
        firebase.ref("shipping_order/").orderByChild("userid").equalTo(auth.currentUser.uid).on("value",snapshot => {
          console.log(snapshot.val())
          this.infoShipping = snapshot.val()
          this.orderShip = Object.keys(this.infoShipping)

          for(var j=0;j<this.orderShip.length;j++){
            var m = this.orderShip[j]

            var date_time_to_order_ship = this.infoShipping[m].status.unpaid.date_time_to_order

            this.date_time_to_order_ship[j] = date_time_to_order_ship


            for(var q = 0 ; q < this.date_time_to_order_ship.length ; q++){
                this.filterDate1[q] = this.date_time_to_order_ship[q]
            }
                this.filterDate1.reverse()
            for(var a = 0 ;a < this.filterDate1.length ; a++){
              for(var b = 0 ; b < this.date_time_to_order_ship.length ; b++){
                if(this.filterDate1[a] == this.date_time_to_order_ship[b]){
                  this.orderShip1[a] = this.orderShip[b]
               }
              }
            }
            
            var status_ship 
              if(this.infoShipping[m].status.payment.check_status == false ){
                status_ship = "unpaid"
              }else if(this.infoShipping[m].status.slip_verified.check_status == false ){
                status_ship = "paid"
              }else if(this.infoShipping[m].status.packing.check_status == false ){
                status_ship = "verifyslip"
              }else if(this.infoShipping[m].status.delivery.check_status == false ){
                status_ship = "packing"
              }else if(this.infoShipping[m].status.complete.check_status == false ){
                status_ship = "delivery"
              }else if(this.infoShipping[m].status.return.check_status == false ){
                status_ship = "complete"
              }
            this.status_ship[j] = status_ship
          }

        })
    },
}

</script>

<style scoped>

#button_pickup{
  background-color: white;
  border: 2px solid 	#A0A0A0;
  width: 100px;
  height: 40px;
  margin-left: -2px;
}
#button_shipping{

  border: 2px solid 	#A0A0A0;
  width: 100px;
  height: 40px;
  margin-left: -2px;
}
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
.backgroundgray{
  background-color: #B8B8B8;
   border: 2px solid 	#A0A0A0;
  width: 100px;
  height: 40px;
  margin-left: -2px;
}
.backgroundWhite{

   border: 2px solid 	#A0A0A0;
  width: 100px;
  height: 40px;
  margin-left: -2px;
}
</style>
