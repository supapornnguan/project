<template>
    <div>
        <div style="background-color:#0F4C81; height:80px;">
        <h1 align=center is="sui-header" style="color:#FFFFFF; font-family: 'Michroma', cursive;" id="headerbar">STORE PICK-UP</h1>
        </div>
        <p style="font-weight:600; font-size:25px; margin-top:20px; margin-left:30px">ORDER AT STORE</p>
        <hr>
        <p style="display:inline; font-weight:670; font-size:20px; margin-left:100px; ">Order ID : {{this.$route.params.idOrderAtstore.substring(1,100)}}</p>

        <p style="font-weight:670; font-size:20px; margin-top:30px; margin-left:100px ">Customer Infomation</p>
            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name : </p> 
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Email : </p> 
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Phone Number : </p> 
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>
            <hr>

            <p style="font-weight:670; font-size:20px; margin-top:20px; margin-left:100px ">Shipped From</p>

            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name Shop: </p> 
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Address: </p> 
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Name : </p> 
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <div style="margin-bottom:10px; margin-left:100px">
            <p style="display:inline; color:#808080; font-size:15px">Email : </p>
            <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <div style="margin-bottom:10px; margin-left:100px">
                <p style="display:inline; color:#808080; font-size:15px">Phone Number : </p>
                <p style="display:inline; position:absolute; left:200px; font-size:15px"></p>
            </div>

            <p style="font-weight:670; font-size:20px; margin-top:20px; margin-left:100px ">Products</p>

            <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px; margin-left:250px" >
                <sui-accordion-content >
                    <sui-table celled >
                        <sui-table-header>
                            <sui-table-row>
                                <sui-table-header-cell>Product ID</sui-table-header-cell>
                                <sui-table-header-cell>Name Product</sui-table-header-cell>
                                <sui-table-header-cell>QTY</sui-table-header-cell>
                                <sui-table-header-cell>Unit price</sui-table-header-cell>
                                <sui-table-header-cell>Selected</sui-table-header-cell>
                            </sui-table-row>
                        </sui-table-header>
                    <sui-table-body >
                            <sui-table-row >
                                <sui-table-cell></sui-table-cell>
                                <sui-table-cell></sui-table-cell>
                                <sui-table-cell></sui-table-cell>
                                <sui-table-cell></sui-table-cell>
                                <sui-table-cell ><sui-checkbox/></sui-table-cell>
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
            userid : "",
            sellerUid : "",
            product_description : []

            
        }
    },
    beforeCreate() {
        firebase.ref("pickup_order/" + this.$route.params.idOrderAtstore).on("value" , snapshot => {
            console.log(snapshot.val())
            this.userid = snapshot.val().userid
            this.sellerUid = snapshot.val().sellerUid
            this.product_description = snapshot.val().product_description

             console.log(this.userid)
        console.log(this.sellerUid)
        console.log(this.product_description)
        })
       
        
    },

    
}
</script>
<style scoped>
#headerbar{
  position: relative;
  top: 20px;
} 
</style>