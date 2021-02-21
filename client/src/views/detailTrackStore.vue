<template>
    <div >

    <div style="background-color:#0F4C81; height:80px;">
    <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
    </div>


    <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">DURING SHIPMENT</p>
    <hr>

      <p style="font-weight:600; font-size:20px; margin-top:20px; margin-left:30px">Tracking No. : {{tracking_no}}</p>

  <sui-table celled style="width:1000px; margin-left:210px">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell><p style="font-size:20px; text-align:center; width:333px">Order Id</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center; width:333px">Customer Name</p></sui-table-header-cell>
        <sui-table-header-cell><p style="font-size:20px; text-align:center; width:333px">Status</p></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>

    <sui-table-body>
      <sui-table-row v-for="(key,index) in order_id" :key="index">
        <sui-table-cell style="text-align:center"> <router-link :to="{name : 'detailOrderStore' , params : {idOrder : key}}">{{order_id[index].substring(1,100)}}</router-link></sui-table-cell>
        <sui-table-cell style="text-align:center"  >{{customer_firstname[index]}} {{customer_lastname[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center"></sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
    </div>
  
</template>
<script > 
import firebase from "../firebase"

export default {
    data() {
        return {
            tracking_no : "",
            order_id : [],
            status_order : [],
            userid : [],
            customer_firstname : [],
            customer_lastname : [],
   
        }
    },
    components : {

    },
    // async beforeCreate() {
    //     await this.getInfoTrack();
    // },
    // methods: {
    //     getInfoTrack(){
    //         return Promise((resolve) => {
    //             firebase.ref("tracking_number/" + this.$route.params.idTrack).onSnapshot("value" , snapshot => {
    //                 this.tracking_no = snapshot.val().tracking_no
    //                 this.order_id = snapshot.val().order_id
    //                 console.log(this.tracking_no)
    //                 console.log(this.order_id)
    //                 for(var i =0 ; i< this.order_id.length ; i++){
    //                     firebase.ref("pickup_order/" + this.order_id[i]).on("value" , snapshot => {
    //                         console.log(snapshot.val())
    //                         this.status_order[i] = snapshot.val().status.delivery.check_status
    //                         console.log(this.status_order[i])
    //                         this.userid[i] = snapshot.val().userid
    //                         console.log(this.userid[i])
    //                         firebase.ref("user/" + this.userid[i]).on("value" , snapshot => {
    //                             console.log("user")
    //                             console.log(snapshot.val())
    //                             this.customer_firstname[i] = snapshot.val().customer_firstname
    //                             this.customer_lastname[i] = snapshot.val().customer_lastname
    //                             console.log(this.customer_firstname[i])
    //                             console.log(this.customer_lastname[i])
    //                         })
    //                     })
    //                 }
    //                 resolve();
    //             })
    //         })
    //     }
    // },
    beforeCreate (){
        firebase.ref("tracking_number/" + this.$route.params.idTrack).on("value" , snapshot => {
            console.log(snapshot.val())
            this.tracking_no = snapshot.val().tracking_no
            this.order_id = snapshot.val().order_id
            console.log(this.tracking_no)
            console.log(this.order_id)
            for(var i =0 ; i< this.order_id.length ; i++){
                firebase.ref("pickup_order/" + this.order_id[i]).on("value" , snapshot => {
                    console.log(snapshot.val())
                    this.status_order[i] = snapshot.val().status.delivery.check_status
                    console.log(this.status_order[i])
                    this.userid[i] = snapshot.val().userid
                    console.log(this.userid[i])
                    firebase.ref("user/" + this.userid[i]).on("value" , snapshot => {
                        console.log("user")
                        console.log(snapshot.val())
                        this.customer_firstname[i] = snapshot.val().customer_firstname
                        this.customer_lastname[i] = snapshot.val().customer_lastname
                        console.log(this.customer_firstname[i])
                        console.log(this.customer_lastname[i])
                        
                    })
                })
            }
        }) 
  
    },
    created() {
      
    },
    
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
</style>