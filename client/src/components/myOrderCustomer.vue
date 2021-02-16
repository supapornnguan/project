<template>
  <div>
    <h1 style="margin-bottom:40px; font-weight:670;">MY ORDER</h1>

    <button id="button_pickup">PICK-UP</button>
    <button id="button_shipping">SHIPPING</button>
    <div v-if="pickup_show==2" style="margin-top:20px">
        <a href="#" @click="back">Back</a>
        </div>

     <div v-if="pickup_show==1">
         <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">Order ID</p>
           <p style="display:inline; margin-left:190px; font-weight:670; font-size:20px">Date</p>
           <p style="display:inline; margin-left:190px; font-weight:670; font-size:20px">Store Pick-up</p>
           <p style="display:inline; margin-left:130px; font-weight:670; font-size:20px">Status</p>
        </div>

        <sui-segment v-for="(key,index) in  order" :key="index" id="orderSeg" @click="gotoOrderDetail(key,pickup_type)">
               <p style="display:inline; position:absolute; left:35px; top:20px; font-weight:670; ">{{key.substring(1,100)}}</p>
               <p style="display:inline; position:absolute; left:260px; top:20px;">{{date_time_to_order[index]}}</p>
               <p style="display:inline; position:absolute; left:590px; top:20px;">{{store_pickup[index]}}</p>
               <p style="display:inline; position:absolute; left:800px; top:20px;">{{status}}</p>
        </sui-segment>
        </div>

        <div v-if="pickup_show==2">
<pickupAllCustomer/>
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
            status : "ordered",
            store_pickup : [],
            pickup_type : "PICK-UP",
        

            //store address
            address : [],
            name_store_pickup : [],
            phone : [],
            pick_up_hours : []
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
        }
  },
  
      mounted() {
        firebase.ref("pickup_order/").orderByChild("userid").equalTo(auth.currentUser.uid).on("value", snapshot => {
            console.log(snapshot.val())
            this.infoOrder = snapshot.val()
            this.order = Object.keys(this.infoOrder)
            console.log(this.order)

            for(var i=0;i<this.order.length;i++){
                var k = this.order[i]

                var date_time_to_order = this.infoOrder[k].status.ordered.date_time_to_order
                var store_pickup = this.infoOrder[k].branch_selected
         
            
                this.date_time_to_order[i] = date_time_to_order
                this.store_pickup[i] = store_pickup
           
            }
            // console.log(this.store_pickup)
            // for(var j=0; j<this.store_pickup.length; j++){
            //     firebase.ref("Store/" + this.store_pickup[j]).on("value", snapshot => {
            //         console.log(snapshot.val())
            //         this.address[j] = snapshot.val().address
            //         this.name_store_pickup[j] = snapshot.val().name_store_pickup
            //         this.phone[j] = snapshot.val().phone
            //         this.pick_up_hours[j] = snapshot.val().pick_up_hours
            //     })
            // }
      
        })
    },
}

</script>

<style scoped>

#button_pickup{
  background-color: white;
  border: 2px solid black;
  width: 100px;
  height: 40px;
  margin-left: -2px;
}
#button_shipping{
  background-color: white;
  border: 2px solid black;
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
  
</style>
