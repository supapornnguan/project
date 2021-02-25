<template>
    <div id="userManageInfoPosition">
        <h3 style="font-weight:600">CUSTOMER INFORMATION</h3>
        
        <br>
        <div>
            <p style="display:inline; font-size:15px">Email :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_email}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">First Name :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_firstname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Last Name :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_lastname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Phone Number :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{customer_phonenumber}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Date Time Register :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{timestamp}}</p>
        </div>
        <br>
        <br>

        <h3 style="font-weight:600">ORDER HISTORY</h3>
        <br>

    <div style="width:1000px">
    <sui-tab :menu="{ attached: false, tabular: false }">
      <sui-tab-pane title="Pickup" :attached="false">
        <!-- table pickup -->
        <sui-table celled style="width:970px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Date Time</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Number of Product</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Total Amount</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Store</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Status</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in info_order_list" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell>{{key.substring(1,100)}}</sui-table-cell>
            <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{number_of_product[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{total_amount[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{branch_selected[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{status[index]}}</sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
      </sui-tab-pane>
      <sui-tab-pane title="Shipping" :attached="false">
        <!-- table shipping -->
        <sui-table celled style="width:970px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Date Time</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Number of Product</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Total Amount</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Status</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in info_order_list_ship" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell>{{key.substring(1,100)}}</sui-table-cell>
            <sui-table-cell>{{date_time_to_order_ship[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{number_of_product_ship[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{total_amount_ship[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center">{{status_ship[index]}}</sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
      </sui-tab-pane>
    </sui-tab>
    </div>


        
    </div>
</template>

<script>
import firebase from "../firebase"

export default {
    data() {
        return {
            customer_email : "",
            customer_firstname : "",
            customer_lastname : "",
            customer_phonenumber : "",
            timestamp : "",

            // pickup
            info_order : {},
            info_order_list : [],
            date_time_to_order : [],
            number_of_product : [],
            total_amount : [],
            branch_selected : [],
            status : [],

            // shipping
            info_order_ship : {},
            info_order_list_ship : [],
            date_time_to_order_ship : [],
            number_of_product_ship : [],
            total_amount_ship : [],
            status_ship : [],


        }
    },

    mounted() {

        firebase.ref('user/' + this.$route.params.userId).on('value',(snapshot)=>{
        console.log(snapshot.val());
        this.customer_email = snapshot.val().customer_email
        this.customer_firstname = snapshot.val().customer_firstname
        this.customer_lastname = snapshot.val().customer_lastname
        this.customer_phonenumber = snapshot.val().customer_phonenumber
        this.timestamp = snapshot.val().timestamp
        })
        console.log(this.$route.params.userId)
        firebase.ref("pickup_order/").orderByChild("userid").equalTo(this.$route.params.userId).on("value", snapshot => {
            console.log(snapshot.val());
            this.info_order = snapshot.val()
            this.info_order_list = Object.keys(snapshot.val())
            console.log(this.info_order_list)

            for(var i = 0 ;i< this.info_order_list.length ;i++){
                var k = this.info_order_list[i]

                var date_time_to_order = this.info_order[k].status.ordered.date_time_to_order
                this.date_time_to_order[i] = date_time_to_order

                var number_of_product = this.info_order[k].number_of_product
                this.number_of_product[i] = number_of_product

                var total_amount = this.info_order[k].total_amount
                this.total_amount[i] = total_amount

                var branch_selected = this.info_order[k].branch_selected
                this.branch_selected[i] = branch_selected
              
                var status
                if(this.info_order[k].status.complete.check_status == true){
                    status = "complete"
                    this.status[i] = status
                }else if(this.info_order[k].status.atstore.check_status == true){
                    status = "atstore"
                    this.status[i] = status
                }else if(this.info_order[k].status.delivery.check_status == true){
                    status = "delivery"
                    this.status[i] = status
                }else if(this.info_order[k].status.packing.check_status == true){
                    status = "packing"
                    this.status[i] = status
                }else if(this.info_order[k].status.ordered.check_status == true){
                    status = "ordered"
                    this.status[i] = status
                }
            }
        })
        
        firebase.ref("shipping_order/").orderByChild("userid").equalTo(this.$route.params.userId).on("value", snapshot => {
            console.log(snapshot.val());
            this.info_order_ship = snapshot.val()
            this.info_order_list_ship = Object.keys(snapshot.val())
            console.log(this.info_order_list_ship)
            for(var i = 0 ;i< this.info_order_list.length ;i++){
                var k = this.info_order_list[i]

                var date_time_to_order_ship = this.info_order[k].status.ordered.date_time_to_order
                this.date_time_to_order_ship[i] = date_time_to_order_ship

                var number_of_product_ship = this.info_order[k].number_of_product
                this.number_of_product_ship[i] = number_of_product_ship

                var total_amount_ship = this.info_order[k].total_amount
                this.total_amount_ship[i] = total_amount_ship

                var status_ship
                if(this.info_order[k].status.complete.check_status == true){
                    status_ship = "complete"
                    this.status_ship[i] = status_ship
                }else if(this.info_order[k].status.delivery.check_status == true){
                    status_ship = "delivery"
                    this.status_ship[i] = status_ship
                }else if(this.info_order[k].status.packing.check_status == true){
                    status_ship = "packing"
                    this.status_ship[i] = status_ship
                }else if(this.info_order[k].status.payment.check_status == true){
                    status_ship = "paid"
                    this.status_ship[i] = status_ship
                }else if(this.info_order[k].status.unpaid.check_status == true){
                    status_ship = "unpaid"
                    this.status_ship[i] = status_ship
                }
            }

        })
  }
}
</script>

<style scoped>
#userManageInfoPosition{
    position: relative;
    left: 400px;
    top: -990px;
}
</style>