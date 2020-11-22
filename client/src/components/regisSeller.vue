<template lang="html">
<div> 
    <navbar/>
    <div class="regisSeller">
       
        <h1 class="openshop" v-if="step!=4">OPEN SHOP</h1>

    <!-- step -->

   <!-- <div class="numberCircle"></div>
   <div class="numberCircle"></div>
   <div class="numberCircle"></div> -->

    <!-- form1-->
    <sui-form v-if="step==1">
        <sui-form-field required>
            <label id="labelRegisSeller">EMAIL</label>
            <input type="email" id="inputRegisSeller" placeholder="EMAIL" v-model="Seller.seller_email"/>
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">NAME STORE</label>
            <input type="text" id="inputRegisSeller" placeholder="NAME STORE" v-model="Seller.seller_name_shop" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">PASSWORD</label>
            <input type="password" id="inputRegisSeller" placeholder="PASSWORD" v-model="Seller.seller_password" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">REPEAT PASSWORD</label>
            <input type="password" id="inputRegisSeller" placeholder="REPEAT PASSWORD" v-model="Seller.repassword" />
        </sui-form-field>
    </sui-form>

    <!-- form2 -->
     <sui-form v-if="step==2">
        <sui-form-field required id="box1">
            <label id="labelRegisSeller">FIRSTNAME</label>
            <input type="text" id="inputRegisSeller" placeholder="FIRSTNAME" v-model="Seller.seller_firstname"/>
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">LASTNAME</label>
            <input type="text" id="inputRegisSeller" placeholder="LASTNAME" v-model="Seller.seller_lastname" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">PHONE NUMBER</label>
            <input type="number" id="inputRegisSeller" placeholder="PHONE NUMBER" v-model="Seller.seller_phonenumber" />
        </sui-form-field>

         <sui-form-field required>
            <label id="labelRegisSeller">ADDRESS</label>
            <input type="text" id="inputRegisSeller" placeholder="ADDRESS" v-model="seller_address.address" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">STREET</label>
            <input type="text" id="inputRegisSeller" placeholder="STREET" v-model="seller_address.seller_street" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">DISTRICT</label>
            <input type="text" id="inputRegisSeller" placeholder="DISTRICT" v-model="seller_address.seller_district" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">SUB DISTRICT</label>
            <input type="text" id="inputRegisSeller" placeholder="SUB DISTRICT" v-model="seller_address.seller_sub_district" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">PROVINCE</label>
            <input type="text" id="inputRegisSeller" placeholder="PROVINCE" v-model="seller_address.seller_province" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">ZIP CODE</label>
            <input type="text" id="inputRegisSeller" placeholder="ZIP CODE" v-model="seller_address.seller_zipcode" />
        </sui-form-field>


    </sui-form>


    <!-- form3 -->
        <sui-form v-if="step==3">
        <sui-form-field required id="box1">
            <label id="labelRegisSeller">ACCOUNT HOLDER NAME</label>
            <input type="text" id="inputRegisSeller" placeholder="ACCOUNT HOLDER NAME" v-model="Seller.bank_account_name"/>
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">ACCOUNT NUMBER</label>
            <input type="text" id="inputRegisSeller" placeholder="ACCOUNT NUMBER" v-model="Seller.bank_account_number" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">BANK NAME</label>
            <input type="text" id="inputRegisSeller" placeholder="BANK NAME" v-model="Seller.bank_name" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">BRANCH’S NAME</label>
            <input type="text" id="inputRegisSeller" placeholder="BRANCH’S NAME" v-model="Seller.bank_branch_name" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">BOOKBANK PICTURE</label>
            <input 
                type="file" 
                id="inputRegisSeller" 
                placeholder="BOOKBANK PICTURE" 
                accept ="image/*"
                @change="previewImage"/>
        </sui-form-field>
    </sui-form>

    <!-- button -->
    <div class="ui button" id="buttonNext" v-on:click="next" v-if="step==1 || step==2">Next</div>
    <div class="ui submit button" v-if="step==3" @click="addSeller(); onUpload();">Submit</div>

    <!-- <waitVerify v-if="step==4" /> -->
    </div>
</div>
</template>

<script>
import {dateToString} from '../utils/utils';
import firebase from "../firebase";
import {storage} from "../firebase"
const db = firebase.ref("seller");
// import waitVerify from "../components/waitingVerify"
// import axios from "axios";
import navbar from "../components/navbar"
export default {
    name : "regisSeller",
    data() {
        return {
            step: 1,
            ImgUrl : "",
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
                timstamp: ""
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
            //  waitVerify
         },
    methods: {
        next() {
            this.step = this.step ===4 ? this.step=3 : this.step + 1
        },
        //check password
        checkPassword(event){
            if(event.target.value.length != 0 && event.target.value.length < 6 )
            console.log("check password")
        },

        addSeller(){
            this.Seller.timstamp = Date.now();
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
                bank_branch_name : this.Seller.bank_branch_name,
                timstamp : dateToString(this.Seller.timstamp)
            }

            let newaddress = {
                address : this.seller_address.address,
                seller_street : this.seller_address.seller_street,
                seller_district : this.seller_address.seller_district,
                seller_sub_district : this.seller_address.seller_sub_district,
                seller_province : this.seller_address.seller_province,
                seller_zipcode : this.seller_address.seller_zipcode
            }
            db.push(newSeller).child('seller_address').set(newaddress)

        },
        // uploadBookbank(e){
        //     let file = e.target.files[0]

        //     console.log(file)

        //     var storageRef = storage.ref('bookbank/' + file.name)

        //     if(this.submit==1){
        //         let uploadTask = storageRef.put(file)
        //         uploadTask.on('state_changed', function(snapshot){
        //         console.log(snapshot)
        //     }),
        //     (error) => {
        //         console.log(error)
        //     },
        //     () => {
        //         uploadTask.snapshot.ref.getDownloadURL()
        //                                 .then((downloadURL) => {
        //                                     this.Seller.bank_book_picture = downloadURL;
        //                                     console.log('file avaliable at ',downloadURL);
        //                                 });
        //     }
        //     }
       
        // },
        previewImage ( event ) {
            this.Seller.bank_book_picture = event.target.files[0];
            console.log(this.Seller.bank_book_picture)
        },
        onUpload () {
            const storageRef = storage.ref(`/bookbank/${this.Seller.bank_book_picture.name}`)
            const uploadTask = storageRef.put(this.Seller.bank_book_picture);
            uploadTask.on('state_changed', function(snapshort){
                console.log(snapshort)
            }),
            (error) => {
                console.log(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                                        .then((downloadURL) => {
                                            console.log(downloadURL)
                                        });
            }
        },
        dateToString
    }
};
</script>

<style>

#inputRegisSeller{
    width: 400px;
    height: 40px;
}
#labelRegisSeller{
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


</style>