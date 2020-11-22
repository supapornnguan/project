<template>
    <div>
        <navbar/>
        <h1 id="wordOne">ONE LAST STEP!</h1>
        <h3 id="wordTwo">PAYMENT INFORMATION</h3>
        <p id="infoBank">The Siam Commericial Bank Public Company Limited (SCB) <br> Account Name : SHOPAHOLIC Co.,LTD <br>Acount Number: 111 111111 1</p>
        <div style="margin-top:60px; margin-left:500px">
            <input type="file" @change="uploadSlip">
        </div>
        <div id="formTransfer">
            <sui-form>
                <sui-form-field>
                    <label style="text-align:left">Sender account name</label>
                    <input placeholder="Sender account name" />
                </sui-form-field>
                <sui-form-field>
                    <label style="text-align:left">Transfer date</label>
                    <input placeholder="Transfer date" />
                </sui-form-field>
                <sui-form-field>
                    <label style="text-align:left">Transfer time</label>
                    <input placeholder="Transfer time" />
                </sui-form-field>
                <sui-form-field>
                    <label style="text-align:left">Amount of transfer</label>
                    <input placeholder="Amount of transfer" />
                </sui-form-field>
                <sui-button type="submit" style="margin-left:150px">Submit</sui-button>
            </sui-form>
        </div>
    </div>
</template>
<script>
import navbar from "../components/navbar"
import {storage} from "../firebase"
export default {
    data() {
        return {
            SlipImage : '',
            name : ''
        }
    },
    components:{
        navbar
    },
    methods : {
        uploadSlip(e){
            let file = e.target.files[0]

            console.log(file)

            var storageRef = storage.ref('slip/' + file.name);

            let uploadTask = storageRef.put(file)

            uploadTask.on('state_changed', function(snapshot){
                console.log(snapshot)
            }),
            (error) => {
                console.log(error)
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL()
                                        .then((downloadURL) => {
                                            this.SlipImage = downloadURL;
                                            console.log('file avaliable at ',downloadURL);
                                        });
            }

            
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
</style>