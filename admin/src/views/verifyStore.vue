<template>
    <div id="verifyStore">
        <h2 style="font-weight:600; margin-top:50px">VERIFY STORE</h2>
        <div style="margin-left:70px; margin-top:50px">
           <p style="display:inline; font-weight:670; font-size:20px">No.</p>
           <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">SellerID</p>
            <p style="display:inline; margin-left:150px; font-weight:670; font-size:20px">Seller name</p>
        </div>
        <sui-segment id="SellerSeg">
            <docs-wireframe name="short-paragraph" />
        </sui-segment>
    </div>
</template>

<script>
export default {
    name: "verifyStore"
    
}
</script>

<style scoped>
#verifyStore{
    position: relative;
    left: 400px;
    top: -990px;
}
#SellerSeg{
    width: 900px;
    height: 70px;
    margin-left: 40px;
    border-radius: 15px;
}
</style>