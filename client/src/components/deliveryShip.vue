<template>
    <div>
        <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking no.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in keyfilter" :key="index">
      <sui-table-row>
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell> <a href="#" @click="detailOrder">{{keyfilter[index].substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_delivery[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>

        
        <!-- v-if complete == false -->
    </div>
</template>
<script>
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
    data() {
        return {
            infoDelivery : {},
            infoDelivery_list : [],
            check_delivery : [],
            keyfilter : [],
            tracking_number : [],
            date_delivery : [],
            total_amount : [],
            number_of_product : [],
            check_complete : []

            
        }
    },
    methods: {
        detailOrder() {

        }
    },
    created() {
        firebase.ref("shipping_order/").orderByChild("sellerUid").equalTo(auth.currentUser.uid).on("value" , snapshot => {
            console.log(snapshot.val())
            this.infoDelivery = snapshot.val()
            this.infoDelivery_list = Object.keys(snapshot.val())

            for(var i =0 ; i< this.infoDelivery_list.length ; i++){
                var k = this.infoDelivery_list[i]
                this.check_delivery[i] = this.infoDelivery[k].status.delivery.check_status
                this.check_complete[i] = this.infoDelivery[k].status.complete.check_status
                
                if(this.check_delivery[i] == true && this.check_complete[i] == false){
                    this.keyfilter.push(k)
                    this.tracking_number.push(this.infoDelivery[k].tracking_no.tracking_number)
                    this.date_delivery.push(this.infoDelivery[k].status.delivery.date_time_to_order)
                    this.total_amount.push(this.infoDelivery[k].total_amount)
                    this.number_of_product.push(this.infoDelivery[k].number_of_product)
                }
            }
            console.log(this.check_complete)
        })
    },
    
}
</script>
<style scoped>
    
</style>