<template>
    <div id="detailOrder">
        <h2 style="margin-bottom:30px; font-weight:600">Order ID</h2>
        <p style="font-size:20px">CustomerName</p>
        <p style="font-size:20px">Phone</p>
        <p style="font-size:20px">Email</p>

        <div id="shipFrom">
          <h2 style="font-weight:600">SHIPPED FORM</h2>  
        </div>

        <div class="v1"></div>

        <div id="shipTo">
            <h2 style="font-weight:600">SHIPPED TO</h2>
        </div>

        <div id="tableOrder">
            <sui-table style="width:1000px; margin-top:30px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Product ID</sui-table-header-cell>
                    <sui-table-header-cell>Product Name</sui-table-header-cell>
                    <sui-table-header-cell>Quantity</sui-table-header-cell>
                    <sui-table-header-cell>Retail Price</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        </div>

        <button id="receiveOrder" @click="gotoHome">RECEIVE ORDER</button>
         
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#detailOrder{
    position: relative;
    left: 400px;
    top: -990px;
}
#receiveOrder{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
    position: absolute;
    top: 700px;
    left: 400px;
}
#shipFrom{
    position:absolute;
}
#shipTo{
    position:absolute;
    left: 500px;
}
#tableOrder{
    position: absolute;
    top: 500px;
}
.v1 {
  border-left: 3px solid black;
  height: 300px;
  margin-left: 450px;
  position: absolute;

}  
</style>