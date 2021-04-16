<template>
    <div>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
        <sui-table-header-cell></sui-table-header-cell>

      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_filter" :key="index" >
      <sui-table-row v-if="check_packing1[index] == true && check_delivery1[index] == false">
        <sui-table-cell>{{key.substring(1,100)}}</sui-table-cell>
        <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
        <sui-table-cell><b-button variant="primary"  @click="showModal(key_filter[index])">Ship</b-button></sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>

    <b-modal ref="my-modal" hide-footer title="Tracking number">
      <div class="d-block text-center">
        <b-form-input  type="text" v-model="tracking_input"></b-form-input>
        <b-button variant="secondary" style="margin-top:30px" @click="gotoDelivery(tracking_input)">Submit</b-button>
      </div>


 
    </b-modal>


<!-- v-if delivery == true -->
    </div>
</template>
<script>
import firebase from "../firebase"
import {auth} from "../firebase"
import {dateToString} from '../utils/utils';
export default {
    data() {
        return {
            infoShiping : {},
            infoShiping_list : [],
            date_time_to_order : [],
            check_packing : [],
            key_filter : [],
            total_amount : [],
            number_of_product : [],
            check_delivery : [],
            tracking_input : "",
            keyOrder_press : "",
            customer_email : "",
            check_delivery1 : [],
            check_packing1 : []
            
        }
    },
    methods: {
        showModal(keyOrder){
            this.keyOrder_press = keyOrder
            this.$refs['my-modal'].show()
        },
        gotoDelivery (tracking) {
            firebase.ref("shipping_order/" + this.keyOrder_press + "/tracking_no").update({
                check_track : true,
                tracking_number : tracking
            })
            firebase.ref("shipping_order/" + this.keyOrder_press + "/status" + "/delivery/").update({
                check_status : true,
                date_time_to_order : dateToString(Date.now())
            })
            firebase.ref("shipping_order/" + this.keyOrder_press ).on("value", snapshot=>{
                console.log(snapshot.val().userid)
                
                firebase.ref("user/" + snapshot.val().userid).on("value" , snapshot => {
                    console.log(snapshot.val().customer_email)
                    this.customer_email = snapshot.val().customer_email

                             const detail_email = {
                email : this.customer_email,
                order_id : this.keyOrder_press.substring(1,100),
                tracking_no : tracking,
                }
                const url = 'http://localhost:5001/shopaholic-2385d/us-central1/orderdelivered';
                const {email, order_id, tracking_no} = detail_email;
                const payload = {email, order_id, tracking_no};

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                })
                    .then(() => {
                        this.success = true;
                        console.log("success")
                        console.log(payload)
                
                    })
                    .catch(() => {
                        this.error = true;
                        console.log("fail")
                        console.log(payload)
                    })
                })
            })
        this.$refs['my-modal'].hide()
        }
    },
    beforeMount() {
        firebase.ref("shipping_order/").orderByChild("sellerUid").equalTo(auth.currentUser.uid).on("value" , snapshot => {
            console.log(snapshot.val())
            this.infoShiping = snapshot.val()
            this.infoShiping_list = Object.keys(snapshot.val())
            console.log(this.infoShiping)

            for(var i =0 ;i< this.infoShiping_list.length ; i++){
                var k = this.infoShiping_list[i]
                this.check_packing[i] = this.infoShiping[k].status.packing.check_status
                this.check_delivery[i] = this.infoShiping[k].status.delivery.check_status
                if(this.check_packing[i] == true && this.check_delivery[i] == false){
                    this.key_filter.push(k)
                    this.date_time_to_order.push(this.infoShiping[k].status.unpaid.date_time_to_order)
                    this.total_amount.push(this.infoShiping[k].total_amount) 
                    this.number_of_product.push(this.infoShiping[k].number_of_product)
                    this.check_packing1.push(this.check_packing[i])
                    this.check_delivery1.push(this.check_delivery[i])
                    
                }
               
            }
            console.log(this.date_time_to_order)
            console.log(this.check_delivery)

        })
        
    },
    
}
</script>
<style scoped>

    
</style>