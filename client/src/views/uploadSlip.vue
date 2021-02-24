<template>
    <div>
        <navbar/>
     
        <h3 id="wordTwo">PAYMENT INFORMATION</h3>
        <p id="infoBank">The Siam Commericial Bank Public Company Limited (SCB) <br> Account Name : SHOPAHOLIC Co.,LTD <br>Acount Number: 111 111111 1</p>
        <div style="margin-top:60px; margin-left:500px">
            <input 
                type="file"
                accept="image/*"
                ref="input1"
                style="display:none"
                @change="previewImage2">
                <p>{{img.name}}</p>

                <button @click="click1" class="chooseImage">Choose Image</button>
                <button @click="create" class="upload">upload</button>
                <p>{{img.name}}</p>
                <b-progress :value="uploadvalue" variant="primary" max="100" style="width:300px"></b-progress>

        </div>
        <div id="formTransfer">
            <sui-form>
                <sui-form-field>
                    <label style="text-align:left">Last 4 digits of bank account</label>
                    <input 
                        type="number"
                        placeholder="Last 4 digits of bank account"
                        v-model="fourdigits" />
                </sui-form-field>
                <sui-form-field>
                    <label style="text-align:left">Amount of transfer</label>
                    <input 
                        type="number"
                        placeholder="Amount of transfer"
                        v-model="total_amount" />
                </sui-form-field>
            </sui-form>
            <sui-button type="submit" style="margin-left:150px; margin-top:20px" @click="submitSlip">Submit</sui-button>
            <p>{{this.$route.params.orderId}}</p>
        </div>
    </div>
</template>
<script>
import {dateToString} from '../utils/utils';
import navbar from "../components/navbar"
import {storage} from "../firebase"
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
    data() {
        return {
            SlipImage : "",
            name : "",
            slip_image : "",
            img : "",
            date_time_submit : "",
            fourdigits : "",
            total_amount : "",
            value : "",
            uploadvalue : 0,
            keyOrder : ""
        }
    },
    components:{
        navbar
    },
    beforeMount() {
        this.keyOrder = this.$route.params.orderId
    },
    methods : {
        //click upload
        create() {
            const slip_image = this.slip_image
            console.log(slip_image)
        },
        //choose Product
        click1(){
            this.$refs.input1.click()
        },
        //listen event when product add
        previewImage2( event ){
            this.uploadvalue = 0
            this.img = event.target.files[0];
            this.onUpload2()
        },
        onUpload2(){
            const storageRef = storage.ref(`/slip/${this.img.name}`).put(this.img);

            storageRef.on(`state_changed`, snapshot => {
                this.uploadvalue = (snapshot.bytesTransferred.snapshot.totalBytes)*100;
                console.log(snapshot)
            }, error => {
                console.log(error.message)
            }, () => {
                this.uploadvalue = 100;
                storageRef.snapshot.ref.getDownloadURL().then((url) => {
                    this.slip_image = url
                    console.log(this.slip_image )
                })
            })
        },
        async submitSlip(){
            this.date_time_submit = Date.now();
            let newSlip = {
                date_time_submit : dateToString(this.date_time_submit),
                slip_image : this.slip_image,
                fourdigits :this.fourdigits,
                total_amount : this.total_amount,
                userid : auth.currentUser.uid, 
                orderid : this.$route.params.orderId
            }
            await firebase.ref("slip/").push(newSlip)
            this.$router.replace('/')
            
            await firebase.ref("shipping_order/" + this.keyOrder + "/status" + "/payment")
                            .update({
                                check_status : true,
                                date_time_to_order : dateToString(this.date_time_submit)
                            })

        }
    },
}
</script>
<style scoped>
#wordOne{
    color: black;
    font-weight: 600;
    margin-top: 50px;
}
#wordTwo{
    color: black;
    text-align: left;
    font-weight: 600;
    margin-left: 100px;
    margin-top: 30px;
}
#infoBank{
    border-radius: 5px;
    border: 1px solid black;
    width: 600px;
    margin-left: 400px;
    margin-top: 30px;
    font-size: 20px;
    text-align: left;
    padding: 20px;
}
#formTransfer{
    width: 400px;
    margin-left: 500px;
    margin-top: 50px;
}
.chooseImage{
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    width: 320px;
}
.upload{
    margin-left: 20px;
    background-color: white;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
}
</style>