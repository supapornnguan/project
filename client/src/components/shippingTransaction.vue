<template>
  <div>
  <sui-step-group size="mini" step-number="six" attached="top">
    <sui-step 
      title="Ordered" 
      description="29 Sep 2020 12:38 PM"
      icon="circle"
    />
    <sui-step
      title="Payment"
      description="29 Sep 2020 15:38 PM"
      icon="circle"
    />
    <sui-step
      title="Slip Verified"
      description="29 Sep 2020 20:38 AM"
      icon="circle"
    />
    <sui-step
      active
      title="Seller Comfirm"
      description="30 Sep 2020 04:38 PM"
      icon="circle"
    />
    <sui-step
      disabled
      title="Shipped"
      description="Verify order details"
      icon="circle"
    />
    <sui-step
      disabled
      title="Complete"
      description="Verify order details"
      icon="circle"
    />
  </sui-step-group>
    <h2 is="sui-header" id="orderInfomation">ORDER INFORMATION</h2>

    <b id="headProductID">Product ID</b>
    <b id="headQTY">QTY</b>
    <b id="headRetailPrice">Retail Price</b>
    <sui-item>
      <b id="headTotalAmount">Total amount</b>
    </sui-item>
    
  </div>
</template>

<style>
#orderInfomation{
  margin-top: 50px;
  margin-left: 10px;
}
#headProductID{
  margin-left: 65px;
  margin-top: 50px;
}
#headQTY{
  margin-left: 135px;
  margin-top: 50px;
}
#headRetailPrice{
  margin-left: 160px;
  margin-top: 50px;
}
#headTotalAmount{
  margin-left: 270px;
}
</style>>

<script>
export default {
  name: 'BorderlessExample',
};
</script>