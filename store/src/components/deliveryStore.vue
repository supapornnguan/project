<template>
    <div>
        <h3 style="font-weight:600">THE PRODUCT IS COMING</h3>
        <div v-if="show_track==2" style="margin-top:20px">
        <a href="#" @click="back">Back</a>
    </div>
    <div v-if="show_track==1 ">
        <h1>during ship</h1>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">Tracking No.</p>
           <p style="display:inline; margin-left:190px; font-weight:670; font-size:20px">Delivery Date</p>
        </div>
            <div v-for="(key,index) in track " :key="index">
                <sui-segment id="trackSeg"  v-if="getNameStore  == branch_selected[index]" @click="gotoDetailTrack(key,tracking_no[index])">
                <div>
                    <p style="display:inline; margin-left:30px; margin-top:5px">{{tracking_no[index]}}</p>
                    <p style="display:inline; margin-left:160px; margin-top:5px">{{delivery_date[index]}}</p>
                </div>      
            </sui-segment>
            </div>

            <b-modal ref="my-modal" hide-footer size="lg" title="DURING SHIPMENT">
                <div class="d-block">
                    <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
                        <sui-accordion-content >
                            <p style="display:inline; font-weight:670; font-size:20px; margin-top:20px">Tracking No. : {{key_press}}</p>
                            <sui-table celled >
                                <sui-table-header>
                                    <sui-table-row>
                                        <sui-table-header-cell>Order ID</sui-table-header-cell>
                                        <sui-table-header-cell>Order Delivery</sui-table-header-cell>
                                    </sui-table-row>
                                </sui-table-header>
                                <sui-table-body v-for="(item,index) in order_id" :key="index">
                                    <sui-table-row>
                                        <sui-table-cell><a href="#" @click="gotoDetailOrder(item)" >{{item.substring(1,100)}}</a></sui-table-cell>
                                        <sui-table-cell>{{date_delivery}}</sui-table-cell>
                                    </sui-table-row>
                                </sui-table-body>
                            </sui-table>
                        </sui-accordion-content>
                    </sui-accordion>

                </div>
            </b-modal>
    </div>

    <div v-if="show_track==2 ">
        <detailOrder/>
    </div>
    </div>
</template>
<script>
import firebase from "../firebase"
import {mapGetters} from "vuex"
import detailOrder from "../components/detailOrder"
import store from "../store"
export default {
    data() {
        return {
            show_track : 1,
            infoTrack : {},
            track : [],
            tracking_no : [],
            branch_selected : [],
            delivery_date : [],
            sellerUid : [],
            seller_name_shop :[],
            order_id : [],
            store_select : "",
            key_press : "",

            date_delivery: ""
        }
    },
    components : {
            detailOrder
    },
    methods: {
        gotoDetailTrack (key,track) {      
         console.log(key)
         firebase.ref("tracking_number/" + key ).on("value" , snapshot => {
            console.log(snapshot.val())
            this.order_id = snapshot.val().order_id
            console.log(this.order_id)
            this.date_delivery = snapshot.val().delivery_date 
            this.key_press = track
         })
            this.$refs['my-modal'].show()
        },
        back(){
            this.show_track = ''
            this.show_track = 1
        },
        hideModal() {
        this.$refs['my-modal'].hide()
      },
        gotoDetailOrder(keyOrder){
            this.show_track =''
            this.show_track = 2
            console.log(keyOrder)
            store.commit('SET_KEY_ORDER' , keyOrder)
        }
    },
    mounted() {
        this.store_select = this.getNameStore

            firebase.ref('tracking_number').on("value" , snapshot => {
                console.log(snapshot.val())
                this.infoTrack = snapshot.val()
                this.track = Object.keys(snapshot.val())
                console.log(this.track)
                for(var i=0 ; i< this.track.length ;i++){
                    var k = this.track[i]
                    var tracking_no = this.infoTrack[k].tracking_no
                    var branch_selected = this.infoTrack[k].branch_selected
                    var delivery_date = this.infoTrack[k].delivery_date
                    var sellerUid = this.infoTrack[k].sellerUid

                    this.tracking_no[i] = tracking_no
                    this.branch_selected[i] = branch_selected
                    this.delivery_date[i] = delivery_date
                    this.sellerUid[i] = sellerUid
                    console.log(this.tracking_no[i])
                    console.log(this.branch_selected[i])
                    console.log(this.sellerUid[i])
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
#trackSeg{
  width: 960px;
  height: 60px;
  margin-left: 30px;
  border-radius: 15px;
  margin-top: 20px;
}
</style>