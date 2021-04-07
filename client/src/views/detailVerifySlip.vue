<template>
    <div>
        <div>
            <h1 style="font-weight:600" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
        </div>
        <div style="margin-left:130px; margin-top:30px">
        <h3 style="font-weight:600">BANK RECEIPT</h3>
        <br>
        <img :src="slip_image" :width="300" :height="350">

        <br>
        <br>
        <br>

        <h3 style="font-weight:600">ORDER DETAILS</h3>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Order ID :</p>
            <p style="display:inline; position:absolute; left:290px; font-size:15px">{{orderid.substring(1,100)}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">User ID :</p>
            <p style="display:inline; position:absolute; left:290px; font-size:15px">{{userid}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Total Amount :</p>
            <p style="display:inline; position:absolute; left:290px; font-size:15px">{{total_amount_order}} THB</p>
        </div>
        <br>
        <br>

        <h3 style="font-weight:600">PAYMENT SUMMARY</h3>
        <br>

        <div>
            <p style="display:inline; font-size:15px">Submission Date :</p>
            <p style="display:inline; position:absolute; left:290px; font-size:15px">{{date_time_submit}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Last Four Digits :</p>
            <p style="display:inline; position:absolute; left:290px; font-size:15px">{{fourdigits}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Amount Transfers :</p>
            <p style="display:inline; position:absolute; left:290px; font-size:15px">{{total_amount}} THB</p>
        </div>
        <br>
        <br>
        <br>
        <div>
            <b-button id="show-btn" @click="showModal">VERIFY SLIP</b-button>

            <b-modal ref="my-modal" hide-footer title="VERIFY SLIP">
                
                Are you sure to verify slip ?
            
                <b-button id="bottonConfirm" class="float-right" variant="primary" @click="verifySuccess">Confirm</b-button>
                <b-button id="bottonCancel" class="float-right" variant="secondary" @click="hideModal">Cancle</b-button>
            </b-modal>
        </div>
        </div>

    </div>
</template>
<script>
import firebase from "../firebase"
import {dateToString} from "../utils/utils"
export default {
    data() {
        return {
            orderid : "",
            date_time_submit : "",
            fourdigits : "",
            slip_image : "",
            total_amount : "",
            userid : "",
            total_amount_order : "",
            info_ship : {},
            info_ship_list : [],
            customer_email : ""
       
        }
    },
    methods: {
        verifySuccess(){
            console.log("click verify")
            firebase.ref("slip/" + this.$route.params.idSlip).update({
                    verify_slip : true
            })
            firebase.ref("shipping_order/" +this.orderid + "/status" +"/slip_verified/").update({
                check_status : true,
                date_time :  dateToString(Date.now())
            })
            this.$refs['my-modal'].hide()
        },
        showModal() {
        this.$refs['my-modal'].show()
        },
        hideModal() {
        this.$refs['my-modal'].hide()
        },
        gotoHome() {
          this.$router.push('/HomeAdmin')
        }
    },
    mounted() {
        firebase.ref('slip/'+ this.$route.params.idSlip).on('value',(snapshot)=>{
        this.orderid = snapshot.val().orderid
        this.date_time_submit = snapshot.val().date_time_submit
        this.fourdigits = snapshot.val().fourdigits
        this.total_amount = snapshot.val().total_amount
        this.userid = snapshot.val().userid
        this.slip_image = snapshot.val().slip_image
        })

        console.log(this.orderid)
        firebase.ref("shipping_order/" + this.orderid).on("value", snapshot => {
            this.total_amount_order = snapshot.val().total_amount
            console.log(this.total_amount_order)
        })
       
    },
}
</script>
<style scoped>
#buttonVerify{
    background-color: white;
    border-radius: 5px;
    border : 1px solid black;
    padding: 6px;
    margin-left: 370px;
    margin-top: 20px;
}
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