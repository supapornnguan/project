<template lang="html">
<div> 
    <navbar/>
    <div class="regisSeller">
       
        <h1 class="openshop">OPEN SHOP</h1>
    <div>
    <!-- form1-->
    <sui-form>
        <sui-form-field required >
            <label class="labelRegisSeller" >EMAIL</label>
            <input 
                type="email" 
                class="inputRegisSeller" 
                placeholder="EMAIL" 
                v-model="Seller.seller_email"
                @change="checkEmailAddress" />
                <!-- check email if invalid email will show error -->
                <span is="sui-label" basic color="red" pointing v-if="Seller.seller_email==''">Enter email</span>
                <span is="sui-label" basic color="red" pointing v-else-if="checkEmail">Invalid email</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">NAME STORE</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="NAME STORE" 
                v-model="Seller.seller_name_shop" />
                <!-- check name store -->
                <span is="sui-label" basic color="red" pointing v-if="Seller.seller_name_shop==''">Enter name shop</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">PASSWORD</label>
            <input 
                type="password" 
                id="inputRegisSeller" 
                placeholder="PASSWORD" 
                v-model="Seller.seller_password" 
                @change="checkPasswordseller" /> 
                <!-- check password -->
            <span is="sui-label" basic color="red" pointing v-if="Seller.seller_password==''">Enter password</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkPasswordnum">Password must be have 8 characters</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">REPEAT PASSWORD</label>
            <input 
                type="password" 
                class="inputRegisSeller" 
                placeholder="REPEAT PASSWORD" 
                v-model="Seller.repassword" />
                <!-- check repeatpassword -->
                <span is="sui-label" basic color="red" pointing v-if="Seller.seller_password != Seller.repassword">Password mismatch</span>
        </sui-form-field>
    </sui-form>
    <br>

    <!-- form2 -->
     <sui-form>
        <sui-form-field required class="box1">
            <label class="labelRegisSeller">FIRSTNAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="FIRSTNAME" 
                v-model="Seller.seller_firstname"/>
                <span is="sui-label" basic color="red" pointing v-if="Seller.seller_firstname==''">Enter firstname</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">LASTNAME</label>
            <input type="text" class="inputRegisSeller" placeholder="LASTNAME" v-model="Seller.seller_lastname" />
            <span is="sui-label" basic color="red" pointing v-if="Seller.seller_lastname==''">Enter lastname</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">PHONE NUMBER</label>
            <input 
                type="number" 
                class="inputRegisSeller" 
                placeholder="PHONE NUMBER" 
                v-model="Seller.seller_phonenumber" 
                @change="checkPhone"/>
                <span is="sui-label" basic color="red" pointing v-if="Seller.seller_phonenumber==''">Enter phone number</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkPhonenum">Phone number is bad formated</span>
        </sui-form-field>

         <sui-form-field required>
            <label class="labelRegisSeller">ADDRESS</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ADDRESS" 
                v-model="seller_address.address" />
                <span is="sui-label" basic color="red" pointing v-if="seller_address.address==''">Enter address</span>
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
                <span is="sui-label" basic color="red" pointing v-if="seller_address.seller_district==''">Enter district</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">SUB DISTRICT</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="SUB DISTRICT" 
                v-model="seller_address.seller_sub_district" />
                <span is="sui-label" basic color="red" pointing v-if="seller_address.seller_sub_district==''">Enter sub district</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">PROVINCE</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="PROVINCE" 
                v-model="seller_address.seller_province" />
                <span is="sui-label" basic color="red" pointing v-if="seller_address.seller_province==''">Enter province</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">ZIP CODE</label>
            <input 
                type="number" 
                class="inputRegisSeller" 
                placeholder="ZIP CODE" 
                v-model="seller_address.seller_zipcode" 
                @change="checkZipcode" />
                <span is="sui-label" basic color="red" pointing v-if="seller_address.seller_zipcode==''">Enter zipcode</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkZipcodenum">Invalid zipcode</span>
        </sui-form-field>


    </sui-form>
    <br>

    <!-- form3 -->
        <sui-form>
        <sui-form-field required id="box1">
            <label class="labelRegisSeller">ACCOUNT HOLDER NAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ACCOUNT HOLDER NAME" 
                v-model="Seller.bank_account_name"/>
                <span is="sui-label" basic color="red" pointing v-if="Seller.bank_account_name==''">Enter account holder name</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">ACCOUNT NUMBER</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="ACCOUNT NUMBER" 
                v-model="Seller.bank_account_number" />
                <span is="sui-label" basic color="red" pointing v-if="Seller.bank_account_number==''">Enter account number</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">BANK NAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="BANK NAME" 
                v-model="Seller.bank_name" />
                <span is="sui-label" basic color="red" pointing v-if="Seller.bank_name==''">Enter bank name</span>
        </sui-form-field>

        <sui-form-field required>
            <label class="labelRegisSeller">BRANCH’S NAME</label>
            <input 
                type="text" 
                class="inputRegisSeller" 
                placeholder="BRANCH’S NAME" 
                v-model="Seller.bank_branch_name" />
                <span is="sui-label" basic color="red" pointing v-if="Seller.bank_branch_name==''">Enter branch's name</span>
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
    <button @click="click1" id="buttonChoose">choose Image</button>
    <button @click="create" id="buttonupload">upload</button>
    <!-- <p>{{image.name}}</p> -->
    <b-progress :value="uploadvalue" variant="primary" max="100" style="width:300px; margin-top:15px"></b-progress>

    </div>
    <!-- button -->
 
    <!-- <div disable content="Next" class="ui button" di id="buttonNext" v-on:click="next" v-if="step==1 || step==2">Next</div> -->
    <!-- <div>
    
        <b-button disable id="buttonNext" v-on:click="next" v-if="step==1 || step==2">Next</b-button>
    </div> -->
    
    <div class="ui submit button" @click="addSeller();" style="margin-top:50px">Submit</div>

    <!-- <div>
            <b-modal ref="my-modal" hide-footer title="REGISTER SUCCESSFULLY">
                
                Please wait for verify by SHOPAHOLIC.
            
            </b-modal>
        </div> -->

    
    </div>
</div>
</template>

<script>
import {dateToString} from '../utils/utils';
// import firebase from "../firebase";
import {storage} from "../firebase"
import {auth} from  "../firebase";
// const { isNavigationFailure, NavigationFailureType } = VueRouter
// import router from "../router/index"
// import VueRouter from 'vue-router'
// import axios from "axios";
import navbar from "../components/navbarSeller"
export default {
    name : "regisSeller",
    data() {
        return {
            isActive: false,
            checkPhonenum : false,
            checkLength : false,
            checkZipcodenum : false,
            checkEmail : false,
            checkPasswordnum : false,
            step: 1,
            image:null,
            uploadvalue : 0,
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
                this.uploadvalue = (snapshot.bytesTransferred.snapshot.totalBytes)*100;
                console.log(snapshot)
            },error => {
                console.log(error.message)
            }, () => {
                this.uploadvalue = 100;
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
            
            // this.$refs['my-modal'].show()
            this.$router.push({name : "waitingVerify"})
        
            if(!this.isActive){
                this.isActive = true   
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
            // await firebase.ref("seller/" + this.uidSeller).set(newSeller)
            // .then((data) => {
            //     console.log(data)
            //     this.$router.push({name: "sellerCenter" , params : {sellerid : auth.currentUser.uid}})
            // })
        },
        //date
        dateToString,
        checkPhone(){
        if(this.Seller.seller_phonenumber.length != 10){
          return this.checkPhonenum = true
        }else if(this.Seller.seller_phonenumber.length == 10){
          return this.checkPhonenum = false
        }
      },
      checkZipcode(){
        if(this.seller_address.seller_zipcode.length != 5){
          return this.checkZipcodenum = true
      }else if(this.seller_address.seller_zipcode.length == 5){
          return this.checkZipcodenum = false
      }
      },
      checkEmailAddress(){
        if(!this.Seller.seller_email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)){
          return this.checkEmail = true
      }else{
          return this.checkEmail = false
      }
      },
      checkPasswordseller(){
        if(this.Seller.seller_password.length != 8){
          return this.checkPasswordnum = true
      }else if(this.Seller.seller_password.length == 8){
          return this.checkPasswordnum = false
      }
      }
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
    width: 320px;
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