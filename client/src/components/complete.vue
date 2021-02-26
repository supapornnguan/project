<template>
    <div>

  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        CENTRAL PLAZA PINKLAO
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU01' && status[index] == true && status1[index] == false">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount_1[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        SIAM PARAGON
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU02' && status[index] == true && status1[index] == false">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount_2[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        CENTRAL RAMA3
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU03' && status[index] == true && status1[index] == false">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount_2[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>


      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        CENTRAL LARDPRAO
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU04' && status[index] == true && status1[index] == false">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount_2[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>


            <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        EMQUARTIER
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Date received</sui-table-header-cell>
        <sui-table-header-cell>Total Price (THB)</sui-table-header-cell>
        <!-- <sui-table-header-cell>Number of Product</sui-table-header-cell> -->
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU05' && status[index] == true && status1[index] == false">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount_2[index]}}</sui-table-cell>
        <!-- <sui-table-cell>{{quantity_return[index]}}</sui-table-cell> -->
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>


    </sui-accordion>


    </div>
</template>
<script>
import firebase from "../firebase"
export default {
    data() {
        return {
            name_store_pickup : [],
            branch : {},
            keyStore : [],
            infoOrder: {},
            keysOrder : [],
            branch_selected : [],
            order : [],
            status : [],
            status1 : [],
            date_time_to_order : [],
            total_amount : [],
            number_of_product : [],
            tracking_number : [],
            product_description : [],
            status_return : [],

            //return case
            product_unit_price_return : [],
            quantity_return : [],
            total_amount_1 : [],
            total_amount_2 : []

            
        }
    },
    mounted() {

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
                var status = this.infoOrder[k].status.complete.check_status //ต้องเป็น true ถึงจะ รับสินค้าเสร็จเรียบร้อย
                var status1 = this.infoOrder[k].status.return.check_status
                if(this.infoOrder[k].tracking_no.check_track == true){
                    var tracking_number = this.infoOrder[k].tracking_no.tracking_no
                }
                
                var date_time_to_order = this.infoOrder[k].status.complete.date_time_to_order
                var total_amount = this.infoOrder[k].total_amount
                var number_of_product = this.infoOrder[k].number_of_product
                this.branch_selected[j] = branch_selected
                this.status[j] = status
                if(this.status[j] == true){
                  this.product_description.push(this.infoOrder[k].product_description)
                }
                this.status1[j] = status1
                this.date_time_to_order[j] = date_time_to_order
                this.total_amount[j] = total_amount
                this.number_of_product[j] = number_of_product
                this.tracking_number[j] = tracking_number    
            }
             console.log(this.product_description)
             for(var i =0; i < this.product_description.length; i++ ){
               for(var a = 0; a < this.product_description[i].length ; a++){
                 console.log(this.product_description[i][a])
                 this.status_return[a] = this.product_description[i][a].status.return_product.check_status
                 console.log(this.status_return[a])
                 if(this.status_return[a] == false){
                   this.product_unit_price_return[a] = this.product_description[i][a].product_unit_price
                   this.quantity_return[a] = this.product_description[i][a].quantity
                   console.log(this.product_unit_price_return[a])
                   console.log(this.quantity_return[a])

                   this.total_amount_1.push( parseInt(this.product_unit_price_return[a]) * parseInt(this.quantity_return[a]) )
                   console.log(this.total_amount_1[a])
                 }
               }
             }
             console.log(this.total_amount_1)
             console.log(this.quantity_return)
            //  console.log(this.total_amount_2)
        })

    },
    
}
</script>
<style scoped>
    
</style>