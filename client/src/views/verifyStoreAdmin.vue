<template>
    <div>
      <div >
    <h1 style="font-weight:600; background-color:#542e71;" @click="gotoHome">ADMIN SHOPAHOLIC</h1>
    </div>
        <div style="margin-left:130px; margin-top:30px">
        <h3 style="font-weight:600;">VERTIFY SELLER</h3>
        <br>
        
        <!-- search -->
        <!-- <div style="width:1000px">
          <input type="text" v-model="search" placeholder="Enter seller email" class="form-control" />
        </div> -->

        <!-- table -->
        <sui-table celled style="width:1000px; margin-left:130px; margin-top:30px">
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell style="text-align:center">No.</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Shop Name</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Seller Email</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center">Date Time</sui-table-header-cell>
            <sui-table-header-cell style="text-align:center"></sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="(key,index) in keys" :key="index">
            <sui-table-cell style="text-align:center"><a href="#">{{index+1+"."}}</a></sui-table-cell>
            <sui-table-cell >{{seller_name_shop[index]}}</sui-table-cell>
            <sui-table-cell>{{seller_email[index]}}</sui-table-cell>
            <sui-table-cell >{{timstamp[index]}}</sui-table-cell>
            <sui-table-cell style="text-align:center" @click="gotoSellerInfo(key)"><b-button variant="outline-primary">More</b-button></sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      </sui-table>
    </div>
    </div>
</template>

<script>
import firebase from "../firebase"
// const db = firebase.ref("/seller");
export default {
    name: "verifyStore",
    data() {
        return {
            Seller : {},
            keys : [],
            seller_name_shop : [],
            seller_email : [],
            verify_seller : [],
            timstamp : [],
            check_status : []
        } 
    },
    methods: {
        gotoSellerInfo(key){
            console.log(key)
            this.$router.push({name : "sellerManageInfo" , params : { sellerId : key }})
            },
            gotoHome() {
          this.$router.push('/HomeAdmin')
        }
    },
    mounted () {
      firebase.ref("seller/").orderByChild("verify_seller").equalTo(false).on("value", snapshot => {
        console.log(snapshot.val())
        this.Seller = snapshot.val()
        this.keys = Object.keys(snapshot.val())
        console.log(this.Seller) //return object
        console.log(this.keys) //return array
        for (var i=0 ; i< this.keys.length ; i++){
              var k = this.keys[i];
              var seller_name_shop = this.Seller[k].seller_name_shop;
              var seller_email = this.Seller[k].seller_email;
              var verify_seller = this.Seller[k].verify_seller;
              var timestamp = this.Seller[k].timstamp;

              this.seller_name_shop[i] = seller_name_shop
              this.seller_email[i] = seller_email
              this.verify_seller[i] = verify_seller
              this.timstamp[i] = timestamp
        }
      })
  },
}     
      
      // db.on('value', (snapshot) => {
      // console.log(snapshot.val())
      // this.Seller = snapshot.val()
      // this.keys = Object.keys(snapshot.val())
      // console.log(this.Seller) //return object
      // console.log(this.keys) //return array
      
      //       console.log(check_status)
      //       this.check_status[i] = check_status
         

           
      //         var seller_name_shop = this.Seller[k].seller_name_shop;
      //         var seller_email = this.Seller[k].seller_email;
      //         var verify_seller = this.Seller[k].verify_seller;
      //         var timestamp = this.Seller[k].timstamp;
      //         console.log(seller_name_shop)

      //         this.seller_name_shop[i] = seller_name_shop
      //         this.seller_email[i] = seller_email
      //         this.verify_seller[i] = verify_seller
      //         this.timstamp[i] = timestamp
           
      // }
    

</script>

<style scoped>
h1{
  text-align: center;
  background-color: 	#0F4C81;
  color:#FFFF;
  padding: 20px;
  margin-top: -9px;
  margin-left: -9px;
  margin-right: -9px;
}

</style>