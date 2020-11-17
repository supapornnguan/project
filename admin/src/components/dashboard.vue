<template>
    <div>
        <sui-grid :columns="3" id="gridTodo">
            <sui-grid-row stretched>
                <sui-grid-column>
                    <sui-segment id="segment1" @click="gotoVerifyStore">
                        <docs-wireframe name="short-paragraph" />
                        <h1 style="font-size:50px; text-align:center; margin-top:25px">1</h1>
                        <p style="font-size:30px; text-align:center">verify store</p>
                    </sui-segment>
                </sui-grid-column>
                <sui-grid-column>
                    <sui-segment id="segment1" @click="gotoverifySlip">
                        <docs-wireframe name="short-paragraph" />
                        <h1 style="font-size:50px; text-align:center; margin-top:25px">4</h1>
                        <p style="font-size:30px; text-align:center">verify Slip</p>
                    </sui-segment>
                </sui-grid-column>
                <sui-grid-column>
                    <sui-segment id="segment1">
                        <docs-wireframe name="short-paragraph" />
                        <h1 style="font-size:50px; text-align:center; margin-top:25px">1</h1>
                        <p style="font-size:30px; text-align:center">Bank</p>
                    </sui-segment>
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>
export default {
    methods: {
        gotoVerifyStore(){
            this.$router.replace('verifyStore')
        },
        gotoverifySlip(){
            this.$router.replace('verifySlip')
        }
    },
}
</script>

<style scoped>
#segment1{
  width: 200px;
  height:200px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
}
#gridTodo{
    width: 900px;
    margin-left:60px ;
}
</style>