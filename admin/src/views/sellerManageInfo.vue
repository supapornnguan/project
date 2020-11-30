<template>
    <div id="sellerManageInfoPosition">
        <h3 style="font-weight:600">INFORMATION FOR VERIFY THE SELLER</h3>
        <hr style="width:600px; border: 3px solid #D0D0D0; margin-left:0px">

        <div>
            <p style="display:inline; font-size:20px">Email :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{seller_email}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:20px">Name Store : </p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{seller_name_shop}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:20px">Firstname : </p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{seller_firstname}}</p>
        </div> 
        <br>
        <div>
            <p style="display:inline; font-size:20px">Lastname : </p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{seller_lastname}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:20px">Phone Number :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{seller_phonenumber}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:20px">Warehouse Address :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">jfdksoa</p>
        </div>

        <h3 style="font-weight:600; margin-top:80px">BANK ACCOUNT</h3>
        <hr style="width:600px; border: 3px solid #D0D0D0; margin-left:0px">

        <div>
            <p style="display:inline; font-size:20px">Name Account :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{bank_account_name}}</p>
        </div>
        <br>
         <div>
            <p style="display:inline; font-size:20px">Account number :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{bank_account_number}}</p>
        </div>
        <br>
         <div>
            <p style="display:inline; font-size:20px">Bank Name :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{bank_name}}</p>
        </div>
        <br>
        <div>
            <p style="display:inline; font-size:20px">Branch’s name :</p>
            <p style="display:inline; position:absolute; left:250px; font-size:20px">{{bank_branch_name}}</p>
        </div>
        <button class="buttonVerify" @click="verifySuccess">VERIFY STORE</button>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import firebase from "../firebase"

export default {
    data() {
        return {
            seller_email : "",
            seller_firstname : "",
            seller_lastname : "",
            seller_name_shop : "",
            seller_phonenumber : "",
            seller_timestamp : "",
            bank_name : "",
            bank_branch_name : "",
            bank_account_number : "",
            bank_account_name : "",
            verify_seller : ""
        }
    },
    methods: {
        verifySuccess(){
            firebase.ref('seller/' + this.key).update({
                verify_seller : "true"
            })
            console.log("successss")
        }
    },
     computed: {
    ...mapGetters({
      key : "getInfoSeller"
    })
  },
  mounted() {
    firebase.ref('seller/'+ this.key).on('value',(snapshot)=>{
    console.log(snapshot.val());
    this.seller_email = snapshot.val().seller_email
    this.seller_firstname = snapshot.val().seller_firstname
    this.seller_lastname = snapshot.val().seller_lastname
    this.seller_name_shop = snapshot.val().seller_name_shop
    this.seller_phonenumber = snapshot.val().seller_phonenumber
    this.bank_name = snapshot.val().bank_name
    this.bank_branch_name = snapshot.val().bank_branch_name
    this.bank_account_number = snapshot.val().bank_account_number
})
  },
}
</script>
<style scoped>
#sellerManageInfoPosition{
    position: relative;
    left: 400px;
    top: -950px;
}
.buttonVerify{
    background: white;
    border-radius: 5px;
    border: 1px solid black;
    font-size: 15px;
    padding: 7px;
    margin-left: 400px;
    margin-top: 70px;

}
</style>