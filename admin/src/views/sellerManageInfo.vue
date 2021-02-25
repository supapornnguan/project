<template>
    <div id="sellerManageInfoPosition">
        <h3 style="font-weight:600">SELLER INFORMATION</h3>

        <br>
        <div>
            <p style="display:inline; font-size:15px">Email :</p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{seller_email}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Name Store : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{seller_name_shop}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">First Name : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{seller_firstname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Last Name : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{seller_lastname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Address : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{address}}, {{seller_district}}, {{seller_sub_district}}, {{seller_province}} {{seller_zipcode}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Phone Number : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{seller_phonenumber}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Date Time Register : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{timstamp}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Verify Status : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{verify_seller}}</p>
        </div>
        
        <br>
        <br>
        <br>
        <h3 style="font-weight:600">SELLER BANK ACCOUNT</h3>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Account Name : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{bank_account_name}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Account Number : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{bank_account_number}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Bank Name : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{bank_name}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:15px">Bank Branch Name : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px">{{bank_branch_name}}</p>
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
            <h3 style="font-weight:600">SELLER STATISTIC</h3>
        </div>
    </div>
</template>

<script>
// import {mapGetters} from "vuex"
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
        }
    },
    methods: {
        verifySuccess(){
            console.log("click verify")
            firebase.ref("seller/" + this.$route.params.sellerId).update({
                    verify_seller : true
            })
            this.$refs['my-modal'].hide()
        },
        showModal() {
        this.$refs['my-modal'].show()
        },
        hideModal() {
        this.$refs['my-modal'].hide()
        },
    },
    
    mounted() {

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
  },
}
</script>
<style scoped>
#sellerManageInfoPosition{
    position: relative;
    left: 400px;
    top: -990px;
}
#bottonConfirm{
    margin-left: 10px;
    margin-top: 50px;
}
#bottonCancel{
    margin-top: 50px;
}
</style>