<template>
    <div>
        <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        CENTRAL PLAZA PINKLAO
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled >
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Select</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body  v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU01' && status[index] == true && status1[index] == false">
        <sui-table-cell><sui-checkbox v-model="selected" :value="key"  /></sui-table-cell>
        <sui-table-cell ><a href="#"  >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell  >{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell  >{{total_amount[index]}}.00</sui-table-cell>
        <sui-table-cell >{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      <b-button id="show-btn" variant="secondary" @click="showModal('PU01')">Ship</b-button>

    </sui-accordion-content>


            <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        SIAM PARAGON
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled >
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Select</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body  v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU02' && status[index] == true && status1[index] == false">
        <sui-table-cell><sui-checkbox v-model="selected" :value="key"  /></sui-table-cell>
        <sui-table-cell ><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell >{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell >{{total_amount[index]}}.00</sui-table-cell>
        <sui-table-cell >{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      <b-button id="show-btn" variant="secondary" @click="showModal('PU02')">Ship</b-button>
 

      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        CENTRAL RAMA3
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled >
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Select</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body  v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU03' && status[index] == true && status1[index] == false">
       <sui-table-cell><sui-checkbox v-model="selected" :value="key"  /></sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell >{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell >{{total_amount[index]}}.00</sui-table-cell>
        <sui-table-cell >{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
       <b-button id="show-btn" variant="secondary" @click="showModal('PU03')">Ship</b-button>
 
      </sui-accordion-content>


            <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        CENTRAL LARDPRAO
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled >
    <sui-table-header>
      <sui-table-row>
       <sui-table-header-cell>Select</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body  v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU04' && status[index] == true && status1[index] == false">
     <sui-table-cell><sui-checkbox v-model="selected" :value="key"  /></sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell >{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell >{{total_amount[index]}}.00</sui-table-cell>
        <sui-table-cell >{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
       <b-button id="show-btn" variant="secondary" @click="showModal('PU04')">Ship</b-button>

      </sui-accordion-content>


                  <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        EMQUARTIER
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled >
    <sui-table-header>
      <sui-table-row>
       <sui-table-header-cell>Select</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body  v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU05'&& status[index] == true && status1[index] == false">
       <sui-table-cell><sui-checkbox v-model="selected" :value="key"  /></sui-table-cell>
        <sui-table-cell ><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell >{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell >{{total_amount[index]}}.00</sui-table-cell>
        <sui-table-cell >{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
       <b-button id="show-btn" variant="secondary" @click="showModal('PU05')">Ship</b-button>
 
 <!-- modal ship -->
    <b-modal ref="my-modal" hide-footer title="Tracking No.">
      <div class="d-block text-center" style="margin-bottom:30px">
        
        <b-form-input v-model="tracking_no"  placeholder="Tracking No."></b-form-input>
      </div>

      <b-button class="mt-2" variant="secondary" style="margin-left:300px; " @click="submitModal">Submit</b-button>
      <b-button class="mt-2" variant="secondary" style="margin-left:10px; "  @click="hideModal">Cancle</b-button>
    </b-modal>

    <b-modal ref="my-modal1" hide-footer title="CONFIRMATION">
        <div class="d-block text-center" style="margin-bottom:30px">
        
        
      </div>

      <b-button class="mt-2" variant="secondary" style="margin-left:300px; " @click="okModal">OK</b-button>
      <b-button class="mt-2" variant="secondary" style="margin-left:10px; "  @click="cancleModal">Cancle</b-button>
    </b-modal>
      </sui-accordion-content>
    </sui-accordion>

    </div>
</template>
<script>
import firebase from "../firebase"
import {auth} from "../firebase"
import {dateToString} from '../utils/utils';
export default {
    data() {
        return {
            value : "",
            branch : {},
            keyStore : [],
            name_store_pickup : [],

            infoOrder: {},
            order : [],
            keysOrder : [],
            branch_selected : [],
            status : [],
            status1 : [],
            date_time_to_order : [],
            selected : [],

            total_amount : [],
            number_of_product : [],
            tracking_no : "",
            choose_branch : "",
            seller_name_shop : ""

            
        }
    },
    methods: {
        showModal(branch) {
          this.choose_branch = branch
        this.$refs['my-modal'].show()
        
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      submitModal() {
          this.$refs['my-modal'].hide()
          this.$refs['my-modal1'].show()
      },
      cancleModal() {
          this.$refs['my-modal1'].hide()
          this.$refs['my-modal'].show()
      },
      okModal(){
          this.$refs['my-modal1'].hide()
          this.$refs['my-modal'].hide()
          console.log(this.choose_branch)

        let new_tracking = {
            tracking_no : this.tracking_no,
            order_id : this.selected,
            sellerUid : auth.currentUser.uid,
            delivery_date : dateToString(Date.now()),
            branch_selected : this.choose_branch,
            status : {check_status : false},
            seller_name_shop : this.seller_name_shop

        }
        for(var j=0;j<this.selected.length;j++){
            firebase.ref("pickup_order/" + this.selected[j] + "/status" + "/delivery" ).update({
                check_status : true, 
                date_time_to_order : dateToString(Date.now())
            })
            firebase.ref("pickup_order/" + this.selected[j] +"/tracking_no").update({
                check_track : true,
                tracking_no : this.tracking_no,
                
            })
        }
            
          firebase.ref("tracking_number").push(new_tracking)

          //tracking no. collection
          //update tracking in order
      }
    },
    beforeMount() {
        
        firebase.ref('Store/').on('value', snapshot => {
           this.branch = snapshot.val() 
           this.keyStore = Object.keys(snapshot.val())
           console.log(this.keyStore)
           for (var i =0 ; i < this.keyStore.length ; i++){
               var k = this.keyStore[i];
               var name_store_pickup = this.branch[k].name_store_pickup
               this.name_store_pickup[i] = name_store_pickup
               console.log(this.keyStore)
           }
        })
        firebase.ref('pickup_order/').on('value',snapshot => {
            console.log(snapshot.val())
            this.infoOrder = snapshot.val()
            this.order = Object.keys(this.infoOrder)
            for(var j =0 ; j<this.order.length ;j++){
                var k = this.order[j]
                var branch_selected = this.infoOrder[k].branch_selected
                var status = this.infoOrder[k].status.packing.check_status
                var status1 = this.infoOrder[k].status.delivery.check_status

                var date_time_to_order = this.infoOrder[k].status.packing.date_time_to_order
                var total_amount = this.infoOrder[k].total_amount
                var number_of_product = this.infoOrder[k].number_of_product
                this.branch_selected[j] = branch_selected
                this.status[j] = status
                this.status1[j] = status1
                this.date_time_to_order[j] = date_time_to_order
                this.total_amount[j] = total_amount
                this.number_of_product[j] = number_of_product
            }
        })
        console.log("jfdi")
        firebase.ref("seller/" + auth.currentUser.uid).on("value", snapshot => {
          console.log(snapshot.val())
          this.seller_name_shop = snapshot.val().seller_name_shop
        })
    },
}
</script>
<style scoped>
#positionLeft{
    text-align: left;
}   
</style>