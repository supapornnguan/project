<template>
    <div>
        <h2 style="margin-bottom:30px; font-weight:600">Order ID</h2>
        <p style="font-size:20px; color:gray;">CustomerName</p>
        <p style="font-size:20px; color:gray;">Phone</p>
        <p style="font-size:20px; color:gray;">Email</p>
        <p style="font-size:20px; color:gray;">Store Name</p>
        <p style="font-size:20px; color:gray;">Phone Store</p>
        <p style="font-size:20px; color:gray;">Date Arrived</p>

        <div id="shipFrom">
          <h2 style="font-weight:600">SHIPPED FORM</h2>  
        </div>

        <div class="v1"></div>

        <div id="shipTo">
            <h2 style="font-weight:600">SHIPPED TO</h2>
        </div>

        <div id="tableOrder">
            <sui-table style="width:1000px; margin-top:10px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Product ID</sui-table-header-cell>
                    <sui-table-header-cell>Product Name</sui-table-header-cell>
                    <sui-table-header-cell>Quantity</sui-table-header-cell>
                    <sui-table-header-cell>Retail Price</sui-table-header-cell>
                    <sui-table-header-cell>Product Status</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                    <sui-table-cell><button class="receive">receive</button> <button class="return">return</button></sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
        </div>

        <button id="receiveOrder" @click="gotoHome">SUCCESS</button>
         
    </div>
</template>
<script>
export default {
    methods: {
        gotoHome(){
            this.$router.replace('/')
        }
    },
    
}
</script>

<style scoped>
#receiveOrder{
    background: none;
    border-radius: 5px;
    border: 1px solid black;
    padding: 10px;
    margin-top: 100px;
    margin-left: 400px;
}
#shipFrom{
    position:absolute;
}
#shipTo{
    position:absolute;
    left: 500px;
}
#tableOrder{
   margin-top: 400px;
}
.v1 {
  border-left: 3px solid black;
  height: 300px;
  margin-left: 450px;
  position: absolute;
} 
.receive{
    background : white;
    border-radius: 5px;
    border : 1px solid black;
    width: 80px;
}
.return{
    background : white;
    border-radius: 5px;
    border : 1px solid black;
    width: 80px;
    margin-left: 30px
}
    
</style>