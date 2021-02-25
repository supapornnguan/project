<template lang="html">
<div> 
    <navbar/>
    <div class="regisSeller">
       
        <h1 class="openshop" v-if="step!=4">OPEN SHOP</h1>

    <!-- form1-->
    <sui-form v-if="step==1">
        <sui-form-field required >
            <label class="labelRegisSeller" >EMAIL</label>
            <input 
                type="email" 
                class="inputRegisSeller" 
                placeholder="EMAIL" 
                v-model="Seller.seller_email"/>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">NAME STORE</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="NAME STORE" 
                v-model="Seller.seller_name_shop" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">PASSWORD</label>
            <input 
                type="password" 
                id="inputRegisSeller" 
                placeholder="PASSWORD" 
                v-model="Seller.seller_password" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">REPEAT PASSWORD</label>
            <input 
                type="password" 
                class="inputRegisSeller" 
                placeholder="REPEAT PASSWORD" 
                v-model="Seller.repassword" />
        </sui-form-field>
    </sui-form>

    <!-- form2 -->
     <sui-form v-if="step==2">
        <sui-form-field required class="box1">
            <label class="labelRegisSeller">FIRSTNAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="FIRSTNAME" 
                v-model="Seller.seller_firstname"/>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">LASTNAME</label>
            <input type="text" class="inputRegisSeller" placeholder="LASTNAME" v-model="Seller.seller_lastname" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">PHONE NUMBER</label>
            <input 
                type="number" 
                class="inputRegisSeller" 
                placeholder="PHONE NUMBER" 
                v-model="Seller.seller_phonenumber" />
        </sui-form-field>

         <sui-form-field required>
            <label class="labelRegisSeller">ADDRESS</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ADDRESS" 
                v-model="seller_address.address" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">STREET</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="STREET" 
                v-model="seller_address.seller_street" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">DISTRICT</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="DISTRICT" 
                v-model="seller_address.seller_district" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">SUB DISTRICT</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="SUB DISTRICT" 
                v-model="seller_address.seller_sub_district" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">PROVINCE</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="PROVINCE" 
                v-model="seller_address.seller_province" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">ZIP CODE</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ZIP CODE" 
                v-model="seller_address.seller_zipcode" />
        </sui-form-field>


    </sui-form>


    <!-- form3 -->
        <sui-form v-if="step==3">
        <sui-form-field required id="box1">
            <label class="labelRegisSeller">ACCOUNT HOLDER NAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ACCOUNT HOLDER NAME" 
                v-model="Seller.bank_account_name"/>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">ACCOUNT NUMBER</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ACCOUNT NUMBER" 
                v-model="Seller.bank_account_number" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">BANK NAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="BANK NAME" 
                v-model="Seller.bank_name" />
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">BRANCH’S NAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="BRANCH’S NAME" 
                v-model="Seller.bank_branch_name" />
        </sui-form-field>

        <div>
        <sui-form-field required>
            <label class="labelRegisSeller">BOOKBANK PICTURE</label>
            <input 
                type="file" 
                id="inputRegisSeller" 
                placeholder="BOOKBANK PICTURE" 
                accept ="image/*"
                ref="input1"
                style="display:none"
                @change="previewImage1"/>
        </sui-form-field>
         </div>
        <!-- <button 
        @click="onUpload">upload</button> -->
    </sui-form>
    <button @click="click1" v-if="step==3" id="buttonChoose">choose Image</button>
    <button @click="create" v-if="step==3" id="buttonupload">upload</button>

    <!-- button -->
 
    <div class="ui button" id="buttonNext" v-on:click="next" v-if="step==1 || step==2">Next</div>
    <div class="ui submit button" v-if="step==3" v-on:click="next" @click="addSeller();" style="margin-top:50px">Submit</div>

    <waitVerify v-if="step==4" />
    </div>
</div>
</template>

<script>
import {dateToString} from '../utils/utils';
import firebase from "../firebase";
import {storage} from "../firebase"
import {auth} from  "../firebase";
// const { isNavigationFailure, NavigationFailureType } = VueRouter
// import router from "../router/index"
// import VueRouter from 'vue-router'

import waitVerify from "../components/waitingVerify"
// import axios from "axios";
import navbar from "../components/navbarSeller"
export default {
    name : "regisSeller",
    data() {
        return {
            step: 1,
            image:null,
            Seller :[{
                seller_email : "",
                seller_name_shop : "",
                seller_password : "",
                seller_firstname : "",
                seller_lastname : "",
                seller_phonenumber : "",
                bank_account_name : "",
                bank_account_number : "",
                bank_name : "",
                bank_branch_name : "",
                bank_book_picture : "",
                verify_seller : "",
                timstamp: "",
                seller_address1 : []
            }],
            seller_address :[{
                address : "",
                seller_street : "",
                seller_district : "",
                seller_sub_district : "",
                seller_province : "",
                seller_zipcode : ""
            }]
            }
         },
         components:{
             navbar,
             waitVerify
         },
    methods: {  
        create() {
             const bank_book_picture1 = this.Seller.bank_book_picture
             console.log(bank_book_picture1)
        },
        click1(){
            this.$refs.input1.click()
        },
        previewImage1(event){
            this.image = event.target.files[0];
            this.onUpload1()
        },
        onUpload1(){
            const storageRef = storage.ref(`/bookbank/${this.image.name}`).put(this.image);
            
            storageRef.on(`state_changed`, snapshot =>{
                console.log(snapshot)
            },error => {
                console.log(error.message)
            }, () => {
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.Seller.bank_book_picture = url
                    console.log(this.Seller.bank_book_picture)
                })
            })
        },
        next() {
            this.step = this.step ===4 ? this.step=3 : this.step + 1
        },
        //check password
        checkPassword(event){
            if(event.target.value.length != 0 && event.target.value.length < 6 )
            console.log("check password")
        },
        //structure of seller 
        async addSeller(){
            this.Seller.timstamp = Date.now();
            this.Seller.verify_seller = false
             let newaddress = {
                address : this.seller_address.address,
                seller_street : this.seller_address.seller_street,
                seller_district : this.seller_address.seller_district,
                seller_sub_district : this.seller_address.seller_sub_district,
                seller_province : this.seller_address.seller_province,
                seller_zipcode : this.seller_address.seller_zipcode
            }
            let newSeller = {
                seller_email : this.Seller.seller_email,
                seller_name_shop : this.Seller.seller_name_shop,
                seller_password : this.Seller.seller_password,
                seller_firstname : this.Seller.seller_firstname,
                seller_lastname : this.Seller.seller_lastname,
                seller_phonenumber : this.Seller.seller_phonenumber,
                bank_account_name : this.Seller.bank_account_name,
                bank_account_number : this.Seller.bank_account_number,
                bank_name : this.Seller.bank_name,
                bank_book_picture : this.Seller.bank_book_picture,
                bank_branch_name : this.Seller.bank_branch_name,
                verify_seller : this.Seller.verify_seller,
                timstamp : dateToString(this.Seller.timstamp),
                seller_address1 : newaddress
            }

           
//auth seller
            await auth.createUserWithEmailAndPassword(newSeller.seller_email, newSeller.seller_password)
                .then(
                  seller => {
                    console.log('regis success!!!')
                    console.log(seller)
                    this.uidSeller = auth.currentUser.uid
                    console.log("this is uid of seller " + this.uidSeller)
                  }
                )
            await firebase.ref("seller/" + this.uidSeller).set(newSeller)
            .then((data) => {
                console.log(data)
                this.$router.push({name: "sellerCenter" , params : {sellerid : auth.currentUser.uid}})
            })
        },
        //date
        dateToString,
    },
};
</script>

<style>

.inputRegisSeller{
    width: 400px;
    height: 40px;
}
.labelRegisSeller{
    text-align: left;
    padding-bottom: 10px;
}
.regisSeller{
    width: 400px;
    margin: 0 auto;
}
.openshop{
    padding-top: 40px;
    padding-bottom: 30px;
    text-decoration: black;
    text-align: center;
}
#buttonNext{
    margin-top: 20px;
    margin-left: 150px;
}
.ui.submit.button{
    margin-top: 20px;
    margin-left: 150px;
}
.numberCircle {
    position: relative;
    left: -200px;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    padding: 100px;
    margin-top: 50px;
    margin-bottom: 100px;
    display: inline;
    background: #666;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font-weight: 900;
    /* font: 32px Arial, sans-serif; */
} 
#buttonChoose{
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    width: 300px;
    padding: 5px;
}
#buttonupload{
    background-color: white;
    border-radius: 10px;
    border: 1px solid black;
    padding: 5px;
    margin-left: 20px;

}
</style>