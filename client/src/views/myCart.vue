<template>
    <div>
        <navbar/>
        <sui-table style="width:1200px; margin-left:100px; margin-top:80px">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>Select</sui-table-header-cell>
                    <sui-table-header-cell>Product</sui-table-header-cell>
                    <sui-table-header-cell>Description</sui-table-header-cell>
                    <sui-table-header-cell>Unit Price</sui-table-header-cell>
                    <sui-table-header-cell>Quantity</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row style="height:100px">
                    <sui-table-cell style="width:100px"><input type="checkbox"></sui-table-cell>
                    <sui-table-cell style="width:190px"><img src="../assets/nikonAAAA-2.jpg" :width="150" style="margin-left:30px"></sui-table-cell>
                    <sui-table-cell style="width:400px">
                        <p class="info">D5600 DX-Format Digital SLR w/AF-P DX NIKKOR 18-55mm f/3.5-5.6G VR</p>
                    </sui-table-cell>
                    <sui-table-cell><p style="font-size:15px;">19,999.00 THB</p></sui-table-cell>
                    <sui-table-cell>                    
                        <div id="addQTY">
                            <button id="buttonAdd" @click="miniQuantity">-</button>
                            <input type="text" id="inputQTY" v-model="quantity">
                            <button id="buttonAdd" @click="addQuantity">+</button>
                        </div>
                    </sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>

<script>
import navbar from "../components/navbar"
export default {
    components : {
        navbar
    }
    
}
</script>

<style scoped>
#addQTY{
    display: flex;
}
#inputQTY{
    border-radius: 4px;
    border: 1px solid black;
    width: 30px;
    height: 25px;
    margin-top: -5px;
    text-align: center;
}
#buttonAdd{
    border: none;
    background-color: white;
    margin-top: -5px;
    margin-right:5px ;
    margin-left: 5px;
    height: 25px;
}
    
</style>