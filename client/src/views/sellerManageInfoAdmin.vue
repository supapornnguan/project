<template>
    <div>

      <div >
    <h1 style="font-weight:600" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
    </div>

      <div style=" margin-left:130px; margin-top:30px">

        <h3 style="font-weight:600; ">SELLER INFORMATION</h3>

        <br>
        <div>
            <p style="display:inline; font-size:15px">Email :</p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{seller_email}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Name Store : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{seller_name_shop}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">First Name : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{seller_firstname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Last Name : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{seller_lastname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Address : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{address}}, {{seller_district}}, {{seller_sub_district}}, {{seller_province}} {{seller_zipcode}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Phone Number : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{seller_phonenumber}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Date Time Register : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{timstamp}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Verify Status : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px" v-if="verify_seller == false">no</p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px" v-if="verify_seller == true">yes</p>
        </div>
        
        <br>
        <br>
        <br>
        <h3 style="font-weight:600">SELLER BANK ACCOUNT</h3>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Account Name : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{bank_account_name}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Account Number : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{bank_account_number}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Bank Name : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{bank_name}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Bank Branch Name : </p>
            <p style="display:inline; position:absolute; left:300px; font-size:15px">{{bank_branch_name}}</p>
        </div>
        <br>
        <br>
        <br>
        <div v-if="verify_seller == false">
            <b-button id="show-btn" @click="showModal">VERIFY SELLER</b-button>

            <b-modal ref="my-modal" hide-footer title="VERIFY SELLER">
                
                Are you sure to verify {{seller_name_shop}} ?
            
                <b-button id="bottonConfirm" class="float-right" variant="primary" @click="verifySuccess">Confirm</b-button>
                <b-button id="bottonCancel" class="float-right" variant="secondary" @click="hideModal">Cancle</b-button>
            </b-modal>
        </div>
        <div v-if="verify_seller == true">
            <!-- <h3 style="font-weight:600">SELLER STATISTIC</h3>
            <br>

            <br>
            <br> -->
            <h3 style="font-weight:600">SELLER ORDER</h3>
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
            <sui-table-cell style="text-align:center">
            <sui-label horizontal v-if="status[index] === 'ordered'">
              ordered
            </sui-label>
            <sui-label color="orange" horizontal v-if="status[index] === 'packing'">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status[index] === 'delively'">
              ordered
            </sui-label>
            <sui-label color="blue" horizontal v-if="status[index] === 'atstore'">
              atstore
            </sui-label>
            <sui-label color="green" horizontal v-if="status[index] === 'complete'">
              complete
            </sui-label>
            <sui-label color="red" horizontal v-if="status[index] === 'return'">
              return
            </sui-label>
            </sui-table-cell>
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
            <sui-table-cell style="text-align:center">
            <sui-label color="red" horizontal v-if="status_ship[index] === 'unpaid'">
              unpaid
            </sui-label>
            <sui-label color="purple" horizontal v-if="status_ship[index] === 'paid'">
              paid
            </sui-label>
            <sui-label horizontal v-if="status_ship[index] === 'verifyslip'">
              verifyslip
            </sui-label>
            <sui-label color="orange" horizontal v-if="status_ship[index] === 'packing'">
              packing
            </sui-label>
            <sui-label color="yellow" horizontal v-if="status_ship[index] === 'delivery'">
              delivery
            </sui-label>
            <sui-label color="green" horizontal v-if="status_ship[index] === 'complete'">
              complete
            </sui-label>
            </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
      </sui-tab-pane>
    </sui-tab>
    </div>    
    </div>
    </div>
    </div>
</template>

<script>
import firebase from "../firebase"

export default {
    data() {
        return {
            seller_email : "",
            seller_firstname : "",
            seller_lastname : "",
            seller_name_shop : "",
            seller_phonenumber : "",
            seller_address1 : "",
            timstamp : "",
            bank_name : "",
            bank_branch_name : "",
            bank_account_number : "",
            bank_account_name : "",
            verify_seller : "",

            address : "",
            seller_sub_district : "",
            seller_district : "",
            seller_province : "",
            seller_zipcode : "",

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
            seller_uid_params : ""
        }
    },
    methods: {
        verifySuccess (){

              const detail_email = {
                email : this.seller_email,
                firstname : this.seller_firstname,
                lastname : this.seller_lastname
                }
                const url = 'http://localhost:5001/shopaholic-2385d/us-central1/verifySeller';
                const {email, firstname, lastname} = detail_email;
                const payload = {email, firstname, lastname};

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

      
            firebase.ref("seller/" + this.$route.params.sellerId).update({
                    verify_seller : true
            })
            this.$router.go(-1)
            this.$refs['my-modal'].hide()
        },
          showModal() {
        this.$refs['my-modal'].show()
        },
        hideModal() {
        this.$refs['my-modal'].hide()
        },
         gotoHome() {
          this.$router.replace('/HomeAdmin')
        }
      },
    beforeMount(){
      this.seller_uid_params = this.$route.params.sellerId

    firebase.ref('seller/'+ this.$route.params.sellerId).on('value',(snapshot)=>{
    console.log(snapshot.val());
    this.seller_email = snapshot.val().seller_email
    this.seller_firstname = snapshot.val().seller_firstname
    this.seller_lastname = snapshot.val().seller_lastname
    this.seller_name_shop = snapshot.val().seller_name_shop
    this.seller_phonenumber = snapshot.val().seller_phonenumber
    this.seller_address1 = snapshot.val().seller_address1
    this.address = snapshot.val().seller_address1.address
    this.seller_sub_district = snapshot.val().seller_address1.seller_sub_district
    this.seller_district = snapshot.val().seller_address1.seller_district
    this.seller_province = snapshot.val().seller_address1.seller_province
    this.seller_zipcode = snapshot.val().seller_address1.seller_zipcode
    this.timstamp = snapshot.val().timstamp
    this.verify_seller = snapshot.val().verify_seller
    this.bank_name = snapshot.val().bank_name
    this.bank_branch_name = snapshot.val().bank_branch_name
    this.bank_account_number = snapshot.val().bank_account_number
    this.bank_account_name = snapshot.val().bank_account_name

    console.log(this.seller_address1)
    console.log(this.address)
     
    })
    console.log(this.$route.params.userId)
    firebase.ref("pickup_order/").orderByChild("sellerUid").equalTo(this.seller_uid_params).on("value", snapshot => {
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
                if(this.info_order[k].status.return.check_status == true){
                    status = "return"
                    this.status[i] = status
                }else if(this.info_order[k].status.complete.check_status == true){
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
        
        firebase.ref("shipping_order/").orderByChild("sellerUid").equalTo(this.seller_uid_params).on("value", snapshot => {
            console.log(snapshot.val());
            this.info_order_ship = snapshot.val()
            this.info_order_list_ship = Object.keys(snapshot.val())
            console.log(this.info_order_list_ship)
            for(var i = 0 ;i< this.info_order_list_ship.length ;i++){
                var k = this.info_order_list_ship[i]

                var date_time_to_order_ship = this.info_order_ship[k].status.unpaid.date_time_to_order
                this.date_time_to_order_ship[i] = date_time_to_order_ship

                var number_of_product_ship = this.info_order_ship[k].number_of_product
                this.number_of_product_ship[i] = number_of_product_ship

                var total_amount_ship = this.info_order_ship[k].total_amount
                this.total_amount_ship[i] = total_amount_ship

                var status_ship
                if(this.info_order_ship[k].status.complete.check_status == true){
                    status_ship = "complete"
                    this.status_ship[i] = status_ship
                }else if(this.info_order_ship[k].status.delivery.check_status == true){
                    status_ship = "delivery"
                    this.status_ship[i] = status_ship
                }else if(this.info_order_ship[k].status.packing.check_status == true){
                    status_ship = "packing"
                    this.status_ship[i] = status_ship
                }else if(this.info_order_ship[k].status.slip_verified.check_status == true){
                    status_ship = "verifyslip"
                    this.status_ship[i] = status_ship
                }else if(this.info_order_ship[k].status.payment.check_status == true){
                    status_ship = "paid"
                    this.status_ship[i] = status_ship
                }else if(this.info_order_ship[k].status.unpaid.check_status == true){
                    status_ship = "unpaid"
                    this.status_ship[i] = status_ship
                }
            }

        })
  },
}
</script>
<style scoped>

#bottonConfirm{
    margin-left: 10px;
    margin-top: 50px;
}
#bottonCancel{
    margin-top: 50px;
}
h1{
  text-align: center;
  background-color: 	#0F4C81;
  color:#FFFF;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
}
</style>