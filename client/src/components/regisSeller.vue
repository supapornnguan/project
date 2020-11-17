<template lang="html">
    <div class="regisSeller">
        <h1 class="openshop">OPEN SHOP</h1>

    <!-- step -->
     
    <!-- form1-->
    <sui-form v-if="step==1">
        <sui-form-field required>
            <label id="labelRegisSeller">EMAIL</label>
            <input type="text" id="inputRegisSeller" placeholder="EMAIL" v-model="Seller.emailSeller"/>
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">NAME STORE</label>
            <input type="text" id="inputRegisSeller" placeholder="NAME STORE" v-model="Seller.nameStore" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">PASSWORD</label>
            <input type="password" id="inputRegisSeller" placeholder="PASSWORD" v-model="Seller.password" />
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
            <input type="text" id="inputRegisSeller" placeholder="FIRSTNAME" v-model="Seller.firstnameSeller"/>
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">LASTNAME</label>
            <input type="text" id="inputRegisSeller" placeholder="LASTNAME" v-model="Seller.lastnameSeller" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">PHONE NUMBER</label>
            <input type="text" id="inputRegisSeller" placeholder="PHONE NUMBER" v-model="Seller.phoneSeller" />
        </sui-form-field>

         <sui-form-field required>
            <label id="labelRegisSeller">ADDRESS</label>
            <textarea id="inputRegisSeller" v-model="Seller.addressSeller"></textarea>
        </sui-form-field>
    </sui-form>


    <!-- form3 -->
        <sui-form v-if="step==3">
        <sui-form-field required id="box1">
            <label id="labelRegisSeller">ACCOUNT HOLDER NAME</label>
            <input type="text" id="inputRegisSeller" placeholder="ACCOUNT HOLDER NAME" v-model="Seller.accountHolderSeller"/>
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">ACCOUNT NUMBER</label>
            <input type="text" id="inputRegisSeller" placeholder="ACCOUNT NUMBER" v-model="Seller.accountNumSeller" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">BANK NAME</label>
            <input type="text" id="inputRegisSeller" placeholder="BANK NAME" v-model="Seller.bankNameSeller" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">BRANCH’S NAME</label>
            <input type="text" id="inputRegisSeller" placeholder="BRANCH’S NAME" v-model="Seller.branchNameSeller" />
        </sui-form-field>

        <sui-form-field required>
            <label id="labelRegisSeller">BOOKBANK PICTURE</label>
            <input type="file" id="inputRegisSeller" placeholder="BOOKBANK PICTURE"  />
        </sui-form-field>
    </sui-form>

    <!-- button -->
    <div class="ui button" id="buttonNext" v-on:click="next" v-if="step!=3">Next</div>
    <div class="ui submit button" v-if="step==3" @click="addSeller">Submit</div>
        
    </div>
</template>

<script>
import firebase from "../firebase";
// import regisSuccess from "../components/regisSuccess"
const db = firebase.ref("seller");
// import axios from "axios";
export default {
    name : "regisSeller",
    data() {
        return {
            step: 1,
            seller : {},
            Seller :[{
                emailSeller : "",
                nameStore : "",
                password : "",
                firstnameSeller : "",
                lastnameSeller : "",
                phoneSeller : "",
                productType : "",
                addressSeller : "",
                accountHolderSeller : "",
                accountNumSeller : "",
                bankNameSeller : "",
                branchNameSeller : ""
            }]
            }
         },
    methods: {
        next() {
            this.step = this.step ===3 ? stop : this.step + 1
        },
        //add new user to the seller collection
         addSeller(){
            console.log('okokokok')
            console.log(firebase)
            let newSeller = {
                emailSeller : this.Seller.emailSeller,
                nameStore : this.Seller.nameStore,
                password : this.Seller.password,
                firstnameSeller : this.Seller.firstnameSeller,
                lastnameSeller : this.Seller.lastnameSeller,
                phoneSeller : this.Seller.phoneSeller,
                productType : this.Seller.productType,
                addressSeller : this.Seller.addressSeller,
                accountHolderSeller : this.Seller.accountHolderSeller,
                accountNumSeller : this.Seller.accountNumSeller,
                bankNameSeller : this.Seller.bankNameSeller,
                branchNameSeller : this.Seller.branchNameSeller
            }
            JSON.parse( JSON.stringify(newSeller))
            db.push(newSeller)
        },
        //check password
        checkPassword(event){
            if(event.target.value.length != 0 && event.target.value.length < 6 )
            console.log("check password")
        }
    }
}
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
}
#buttonNext{
    margin-top: 20px;
}
.ui.submit.button{
    margin-top: 20px;
}

</style>
