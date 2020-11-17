<template>
    <div>
        <div v-if="show=='Tracking'">
            <div style="margin-left:70px; margin-top:50px">
                <p style="display:inline; font-weight:670; font-size:20px">Tracking No.</p>
                <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Date Received</p>
            </div>
            <sui-segment id="orderAtStore" @click="clickDetailTrack('showDetail')">
                <docs-wireframe name="short-paragraph" />
            </sui-segment>
        </div>

        <detailTracking v-if="show=='showDetail'"/>

    </div>
</template>
<script>
import detailTracking from "../components/detailTracking"
export default {
    data() {
        return {
            show : 'Tracking'
        }
    },
    components: {
        detailTracking
    },
    methods: {
        clickDetailTrack(value){
            this.show=value
        }
    },
}
</script>
<style scoped>
#orderAtStore{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>