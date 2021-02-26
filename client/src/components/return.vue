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
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in key_order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU01'">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{info_pickup_list.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{return_date[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
<!-- 
    <sui-table-body v-for="(key1,index1) in key_order1" :key="index1">
      <sui-table-row v-if="branch_selected1[index1] == 'PU01'">
        <sui-table-cell>{{tracking_number1[index1]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key1.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_return1[index1]}}</sui-table-cell>
        <sui-table-cell>{{total_amount1[index1]}}</sui-table-cell>
        <sui-table-cell>{{quantity[index1]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body> -->


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
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU02'">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_return[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
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
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU03' ">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_return[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
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
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU04'">
        <!-- <sui-table-cell>{{tracking_number[index]}}</sui-table-cell> -->
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_return[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
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
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body v-for="(key,index) in order" :key="index">
      <sui-table-row v-if="branch_selected[index] == 'PU05' ">
        <sui-table-cell>{{tracking_number[index]}}</sui-table-cell>
        <sui-table-cell><a href="#" >{{key.substring(1,100)}}</a></sui-table-cell>
        <sui-table-cell>{{date_time_return[index]}}</sui-table-cell>
        <sui-table-cell>{{total_amount[index]}}</sui-table-cell>
        <sui-table-cell>{{number_of_product[index]}}</sui-table-cell>
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
            
            order : [],
            status : [],
            status1 : [],
            date_time_to_order : [],
            
            
            
            return_date : [],

    

            branch_selected : [],
            check_return : [],
            date_time_return : [],
            product_description : [],
            tracking_number : [],
            key_order : [],
            total_amount : [],
            number_of_product : [],

            branch_selected1 : [],
            date_time_return1 : [],
            tracking_number1 : [],
            key_order1 : [],

            product_unit_price : [],
            quantity : [],
            sum : 0,
            total_amount1 : [],
            info_pickup_list : [],
            info_pickup: {}


            
        }
    },
    created() {
      firebase.ref("pickup_order/").on("value" , snapshot => {
          console.log(snapshot.val())
        })
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

        


   


        // firebase.ref("pickup_order/").on("value" , snapshot => {
        //   console.log(snapshot.val())
        //   this.infoOrder = snapshot.val()
        //   this.order = Object.keys(snapshot.val())

        //   for(var j =0 ; j<this.order.length ;j++ ){
        //     var k = this.order[j]
        //     // var branch_selected = this.infoOrder[k].branch_selected
        //     // this.branch_selected[j] = branch_selected

        //     var check_return = this.infoOrder[k].status.return.check_status
        //     this.check_return[j] = check_return

        //     var product_description = this.infoOrder[k].product_description
        //     this.product_description[j] = product_description

            
            
        //     console.log("check return status")
        //     //check return -> if return == true ->get data
        //     if(this.check_return[j] == true){

        //       this.branch_selected.push(this.infoOrder[k].branch_selected)
        //       this.key_order.push(this.order[j])
        //       this.date_time_return.push(this.infoOrder[k].status.return.date_time_to_order) 
        //       this.tracking_number.push(this.infoOrder[k].tracking_no.tracking_no)
        //       this.total_amount.push(this.infoOrder[k].total_amount)
        //       this.number_of_product.push(this.infoOrder[k].number_of_product)
        //       console.log("return!!!")

        //     }else{

        //       for(var i = 0 ; i < this.product_description[j].length ; i++){
        //         console.log(this.product_description[j][i].status.return_product.check_status)
        //       if(this.product_description[j][i].status.return_product.check_status == true){
        //         console.log("return!!!!!")
        //         this.branch_selected1.push(this.infoOrder[k].branch_selected)
                
        //         this.key_order1.push(this.order[j])
        //         this.date_time_return1.push(this.product_description[j][i].status.return_product.return_date)
        //         this.product_unit_price.push(this.product_description[j][i].product_unit_price)
        //         this.quantity.push(this.product_description[j][i].quantity)
        //         this.tracking_number1.push(this.infoOrder[k].tracking_no.tracking_no)

        //         this.sum += parseInt(this.product_unit_price[i]) * this.quantity[i]
        //         this.total_amount1.push(this.sum)
        //       }
        //     }
        //   }
        // }
        //   console.log(this.key_order)
        //   console.log(this.date_time_return)
        //   console.log(this.tracking_number)
        //   console.log(this.product_description)
        //   console.log(this.total_amount)
        //   console.log(this.number_of_product)


        //   console.log(this.branch_selected1)
        //   console.log(this.date_time_return1)
        //   console.log(this.tracking_number1)
        //   console.log(this.product_unit_price)
        //   console.log(this.quantity)
        //   console.log(this.total_amount1)
        // })

    },
    
}
</script>
<style scoped>
    
</style>