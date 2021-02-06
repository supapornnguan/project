<template>
<div>
    <div v-if="show==1">
        <div style="margin-left:60px; margin-top:50px">
        <p style="display:inline; font-weight:670; font-size:20px">Order ID</p>
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:140px">Quantity</p>
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:80px">Total amount</p>
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:80px">Receving Types</p>
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:80px">Status</p>

    </div>
        <!-- <sui-segment id="allOrder" v-for="(key,index) in key_pickup " :key="index" > 
            <a href="#" @click="detailPickup(key)" style="position:absolute; top:25px; display:inline">{{key}}</a>
            <p style="position:absolute; top:25px; left:290px; display:inline;">{{quantity[index]}}</p>
            <p style="position:absolute; top:25px; left:400px; display:inline; margin-left:20px">{{total_amount[index]}}.00 THB</p>
            <p style="position:absolute; top:25px; left:380px; display:inline; margin-left:270px">{{receiving_type_pick[index]}}</p>
            <p style="position:absolute; top:25px; left:380px; display:inline; margin-left:465px">{{status_pickup[index]}}</p>
        </sui-segment> -->

        <!-- <sui-segment id="allOrder" v-for="(key,index) in key_shipping" :key="'A'+ index"> 
            <a href="#" @click="detailShipping" style="position:absolute; top:25px; display:inline">{{key}}</a>
            <p style="position:absolute; top:25px; left:290px; display:inline;">{{quantity_ship[index]}}</p>
            <p style="position:absolute; top:25px; left:400px; display:inline; margin-left:20px">{{total_amount_ship[index]}}.00 THB</p>
            <p style="position:absolute; top:25px; left:380px; display:inline; margin-left:270px">{{receiving_type_ship[index]}}</p>
            <p style="position:absolute; top:25px; left:380px; display:inline; margin-left:465px">{{status_ship[index]}}</p>
        </sui-segment> -->
    </div>

    <div v-if="show==2">
        <a href="#" @click="back">Back</a>

        <orderDetailPickup/>
    </div>

    <div v-if="show==3">
        <a href="#" @click="back">Back</a>

    </div>

</div>
</template>

<script>
// import firebase from "../firebase"
// import {auth} from "../firebase"
// import orderDetailPickup from "../components/orderDeatail(pickup)"
import store from "../store"
export default {
    data() {
        return {
            //pickup
            pickup_order : {},
            key_pickup : [],
            quantity : [],
            total_amount : [],
            receiving_type_pick : [],
            status_pickup :[],
            branch_selected : [],
            date_time_to_order : [],
            sellerUid : [],

            //shipping
            key_shipping : [],
            shipping_order : {},
            receiving_type_ship : [],
            quantity_ship : [],
            total_amount_ship : [],
            status_ship : [],
            branch_selected_ship : [],
            date_time_to_order_ship : [],
            sellerUid_ship : [],
            
            show : 1      
        }
    },
    // components : {
    //     orderDetailPickup
    // },
    methods: {
        detailPickup(key){
            store.commit("SET_KEY_PRODUCT",key)
            this.show = ''
            this.show = 2
        },
        detailShipping(){
            this.show = ''
            this.show = 3
        },
        back(){
            this.show = ''
            this.show = 1
        }    
    },
    // mounted() {
    //     firebase.ref("pickup_order/").orderByChild('userid').equalTo(auth.currentUser.uid).on('value', snapshot => {
    //         console.log(snapshot.val())
    //         this.pickup_order = snapshot.val()
    //         this.key_pickup = Object.keys(snapshot.val())
    //         console.log(this.pickup_order)
    //         console.log(this.key_pickup)

    //         for(var i=0; i<this.key_pickup.length ; i++){
    //             var k = this.key_pickup[i];
    //             var quantity = this.pickup_order[k].quantity;
    //             var total_amount = this.pickup_order[k].total_amount;
    //             var status_pickup = this.pickup_order[k].status
    //             var branch_selected = this.pickup_order[k].branch_selected;
    //             var date_time_to_order = this.pickup_order[k].date_time_to_order;
    //             var sellerUid = this.pickup_order[k].sellerUid;

    //             this.quantity[i] = quantity
    //             this.total_amount[i] = total_amount
    //             this.status_pickup[i] = status_pickup
    //             this.branch_selected[i] = branch_selected
    //             this.date_time_to_order[i] = date_time_to_order
    //             this.sellerUid[i] = sellerUid
    //             this.receiving_type_pick[i] = "PICK-UP"
    //         }
    //     }),

    //     firebase.ref("shipping_order/").orderByChild('userid').equalTo(auth.currentUser.uid).on('value', snapshot => {
    //         console.log(snapshot.val())
    //         this.shipping_order = snapshot.val()
    //         this.key_shipping = Object.keys(snapshot.val())
            
    //         for(var i=0 ; i< this.key_shipping.length ; i++){
    //             var k = this.key_shipping[i];
    //             var quantity_ship = this.shipping_order[k].quantity
    //             var total_amount_ship = this.shipping_order[k].total_amount;
    //             var status_ship = this.shipping_order[k].status
    //             var branch_selected_ship = this.shipping_order[k].branch_selected
    //             var date_time_to_order_ship = this.shipping_order[k].date_time_to_order
    //             var sellerUid_ship = this.shipping_order[k].sellerUid

    //             this.quantity_ship[i] = quantity_ship
    //             this.total_amount_ship[i] = total_amount_ship
    //             this.status_ship[i] = status_ship
    //             this.branch_selected_ship = branch_selected_ship
    //             this.date_time_to_order_ship = date_time_to_order_ship
    //             this.sellerUid_ship = sellerUid_ship
    //             this.receiving_type_ship[i] = "SHIPPING"
    //         }

    //     })
        
    // },
    
}
</script>

<style scoped>
#allOrder{
    width: 1000px;
    height: 70px;
    margin-left: 30px;
    border-radius: 15px;
}
</style>