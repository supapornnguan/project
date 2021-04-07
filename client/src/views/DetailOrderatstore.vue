<template>
    <div>

        <loading :active.sync="isLoading" 
        :can-cancel="true" 
        :is-full-page="true">
        </loading>

        <div style="background-color:#0F4C81; height:80px;">
        <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
        </div>
        <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">ORDER AT STORE</p>
        <hr>

        <p style="font-weight:600; font-size:20px; margin-top:20px; margin-left:30px" >Tracking No. : {{this.$route.params.idTrackAtstore}}</p>



    <sui-table celled style="width:1000px; margin-left:210px">
        <sui-table-header>
            <sui-table-row>
                <sui-table-header-cell><p style="font-size:20px; text-align:center">Order ID.</p></sui-table-header-cell>
                <sui-table-header-cell><p style="font-size:20px; text-align:center">Received Date</p></sui-table-header-cell>
                <sui-table-header-cell><p style="font-size:20px; text-align:center">Customer Name</p></sui-table-header-cell>
                <sui-table-header-cell><p style="font-size:20px; text-align:center">Name shop</p></sui-table-header-cell>
            </sui-table-row>
        </sui-table-header>

    <sui-table-body >
      <sui-table-row v-for="(key,index) in key_pickup_order_list1" :key="index">
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'detailOrderStore' , params : {idOrder : key} }">{{key_pickup_order_list1[index].substring(1,100)}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center">{{date_received[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{customer_firstname[index]}} {{customer_lastname[index]}}</sui-table-cell>  
        <sui-table-cell style="text-align:center">{{seller_name_shop[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      
        
    </div>
</template>
<script>
    // Import component
import Loading from 'vue-loading-overlay';
    // Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
import firebase from "../firebase"
export default {
    data() {
        return {
            isLoading : true,
            tracking_no : "",
            key_pickup_order1 : {},
            key_pickup_order_list1 : [],
            date_received : [],
            userid : [],
            customer_firstname : [],
            customer_lastname : [],
            sellerUid : [],
            seller_name_shop : []
        }
    },
    components : {
        Loading
    },
    beforeMount() {
        this.isLoading = true 
        firebase.ref("pickup_order").orderByChild("tracking_no/tracking_no").equalTo(this.$route.params.idTrackAtstore).on("value" , snapshot => {
            console.log(snapshot.val())
            this.key_pickup_order1 = snapshot.val()
            this.key_pickup_order_list1 = Object.keys(snapshot.val())
            console.log(this.key_pickup_order_list1)

            for(var i=0;i<this.key_pickup_order_list1.length ; i++){
                var k = this.key_pickup_order_list1[i]

                var date_received = this.key_pickup_order1[k].status.atstore.date_time_to_order
                this.date_received.push(date_received)

                var userid = this.key_pickup_order1[k].userid
                this.userid.push(userid)

                var sellerUid = this.key_pickup_order1[k].sellerUid
                this.sellerUid.push(sellerUid)
                
            }
        console.log(this.date_received)
        console.log(this.userid)
        for(var j =0 ;j< this.userid.length ;j++){
            firebase.ref("user/" + this.userid[j]).on("value" , snapshot => {
                console.log(snapshot.val())
                this.customer_firstname.push(snapshot.val().customer_firstname)
                this.customer_lastname.push(snapshot.val().customer_lastname)
            })
        } 
        for(var a = 0 ; a < this.sellerUid.length ; a++){
            firebase.ref("seller/" + this.sellerUid[a]).on("value" , snapshot => {
                console.log(snapshot.val())
                this.seller_name_shop.push(snapshot.val().seller_name_shop)
            })
        }
        
        this.isLoading = false 
        })

        
    },
    
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
</style>