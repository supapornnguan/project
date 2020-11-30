<template>
    <div id="InfoUser">
        <img src="../assets/Myaccount.png" :width="60" style="display:inline">
        <h3 style="display:inline; margin-left:20px;">Customer Name</h3>
        <h3 style="margin-top:50px">INFORMATION</h3>

        <h3>ORDER HISTORY</h3>
        <sui-table style="width:950px; margin-left:20px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>No.</sui-table-header-cell>
                    <sui-table-header-cell>Order ID</sui-table-header-cell>
                    <sui-table-header-cell>Order Date</sui-table-header-cell>
                    <sui-table-header-cell>Receiving Type</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell>1.</sui-table-cell>
                    <sui-table-cell> <a href="#">8439021</a></sui-table-cell>
                    <sui-table-cell>01-10-2020</sui-table-cell>
                    <sui-table-cell>pick-up</sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#InfoUser{
  position: relative;
  left: 400px;
  top: -990px;
}
</style>