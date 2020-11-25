<template>
  <div>
    <sui-step-group size="mini" step-number="five" attached="top" >
    <sui-step
      title="Ordered"
      description="29 Sep 2020 12:38 PM"
      icon="circle"
    />
    <sui-step
      title="Seller Comfirm"
      description="29 Sep 2020 15:38 PM"
      icon="circle"
    />
    <sui-step
      active
      title="Shipped"
      description="30 Sep 2020 04:38 AM"
      icon="circle"
    />
    <sui-step
      disabled
      title="Ready For Pick-up"
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
    <h2 is="sui-header" id="headShippingAddress">SHIPPING ADDRESS</h2>
    <sui-button basic color="black" id="downloadInvoice">DOWNLOAD INVOICE</sui-button>

  </div>
</template>

<style>
#downloadInvoice{
  margin-left: 370px;
  margin-top: 100px;
}
#headShippingAddress{
  margin-left: 10px;
  margin-top: 50px;
}

</style>>

<script>
export default {
};
</script>