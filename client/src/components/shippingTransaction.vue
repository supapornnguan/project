<template>
  <div>
    <sui-tab :menu="{ borderless: true, attached: false, tabular: false }">
    <sui-tab-pane title="Pick-up" :attached="false"> 
  </sui-tab-pane>
  <sui-tab-pane title="Shipping" :attached="false"> 
  <sui-step-group size="mini">
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
  </sui-tab-pane>
  </sui-tab>
    <h2 is="sui-header" floated="left">ORDER INFORMATION</h2>
  </div>
</template>

<script>
export default {
  name: 'BorderlessExample',
};
</script>