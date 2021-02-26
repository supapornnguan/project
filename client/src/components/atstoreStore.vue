<template>
    <div>
        <div>
       
        <sui-table celled >
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Tracking No.</sui-table-header-cell>
                    <sui-table-header-cell>Name Shop</sui-table-header-cell>
                    <sui-table-header-cell>Date Arrived</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body v-for="(key,index) in userid" :key="index">
                <sui-table-row >
                    <sui-table-cell><a href="#" @click="gotoDetailProductAtstore(tracking_no[index])">{{tracking_no[index]}}</a></sui-table-cell>
                    <sui-table-cell>{{seller_name_shop[index]}}</sui-table-cell>
                    <sui-table-cell>{{date_time_arrived[index]}}</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>


            <b-modal ref="my-modal" hide-footer size="lg" title="ORDER AT STORE">
                <div class="d-block">
                    <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
                        <sui-accordion-content >
                            <p style=" font-weight:670; font-size:20px; margin-top:20px">Tracking No. : {{tracking_press}}</p>
                                <br>
                                <p style="display:inline; margin-left:60px; font-weight:670;">Order ID</p>
                                <p style="display:inline; margin-left:160px; font-weight:670;">Customer Name</p>
                                <sui-segment emphasis="tertiary" style="height:60px; border-radius:15px">
                                    <div v-for="(key,index) in order_id" :key="index">
                                        <p style="display:inline; color:black; margin-top:6px" @click="gotoOrderDetail(order_id1[index][index])">{{order_id1[index][index].substring(1,100)}}</p>
                                        <p style="display:inline; color:black; margin-top:6px; margin-left:70px; "></p>
                                    </div>
                                    
                                </sui-segment>
                                <!-- <sui-table-header>
                                    <sui-table-row>
                                        <sui-table-header-cell>Order ID</sui-table-header-cell>
                                        <sui-table-header-cell>Order Delivery</sui-table-header-cell>
                                    </sui-table-row>
                                </sui-table-header>
                                <sui-table-body>
                                    <sui-table-row>
                                        <sui-table-cell></sui-table-cell>
                                        <sui-table-cell></sui-table-cell>
                                    </sui-table-row>
                                </sui-table-body> -->
                       
                        </sui-accordion-content>
                    </sui-accordion>

                </div>
            </b-modal>
    </div>
    </div>
</template>
<script>
import firebase from "../firebase"
import {mapGetters} from "vuex"
export default {
    data() {
        return {
     
            store_select : "",
            info_pickup : {},
            info_pickupList : [],

            //info pickup

            sellerUid : [],
            tracking_no : [],
            check_track : "",
            status_atStore : [],
            userid : [],
            date_time_arrived : [],
            branch_selected : [],

            //user
            info_customer : [],
            customer_firstname : [],

            //seller
            seller_name_shop : [],

            tracking_press : "",

            key_track : {},
            order_id : [],
            order_id1 : []
        }
    },
    methods: {
        gotoDetailProductAtstore(track){
            this.tracking_press = track
            console.log(track)
            firebase.ref("tracking_number/").orderByChild("tracking_no").equalTo(track).on("value", snapshot => {
                this.key_track = snapshot.val()
                console.log(this.key_track)

                this.order_id = Object.keys(this.key_track)
                // // console.log(this.order_id)
                for(var j =0 ;j<this.order_id.length;j++){
                    var k = this.order_id[j]
                    var order_id1 = this.key_track[k].order_id
                    this.order_id1[j] = order_id1
                    console.log(this.order_id1[j][j])
                    firebase.ref("pickup_order/" + this.order_id[j][j]).on("value", snapshot => {
                        console.log(snapshot.val())
                    })
                }
            })
            this.$refs['my-modal'].show()
        },
        hideModal() {
        this.$refs['my-modal'].hide()
      },
    },
    created() {
        
        firebase.ref("pickup_order/").on("value", snapshot => {
            console.log(snapshot.val())
            this.info_pickup = snapshot.val()
            this.info_pickupList = Object.keys(this.info_pickup)

            for(var i =0; i < this.info_pickupList.length ; i++){
                var k = this.info_pickupList[i]
                var status_atStore = this.info_pickup[k].status.atstore.check_status
                console.log(status_atStore)
                this.status_atStore[i] = status_atStore
                if(this.status_atStore[i] == true){
                    console.log("showwww")
                    var userid = this.info_pickup[k].userid
                    this.userid.push(userid)

                    var date_time_arrived = this.info_pickup[k].status.atstore.date_time_to_order
                    this.date_time_arrived.push(date_time_arrived)

                    var tracking_no = this.info_pickup[k].tracking_no.tracking_no
                    this.tracking_no.push(tracking_no)

                    var sellerUid = this.info_pickup[k].sellerUid
                    this.sellerUid.push(sellerUid)

                    var branch_selected = this.info_pickup[k].branch_selected
                    this.branch_selected[i] = branch_selected

                }
            }
            for(var q=0 ; q<this.sellerUid.length ; q++){
                firebase.ref("seller/" + this.sellerUid[q]).on("value" , snapshot => {
                    this.seller_name_shop.push(snapshot.val().seller_name_shop)
                })

            }
        
    })
},

    computed : {
        ...mapGetters([
            'getNameStore'
        ])
    }
    
  
}
</script>
<style scoped>
    
</style>