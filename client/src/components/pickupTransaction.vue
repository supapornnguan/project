<template>
  <div>
    <sui-tab :menu="{ borderless: true, attached: false, tabular: false }">
    <sui-tab-pane title="Pick-up" :attached="false"> 
    <sui-step-group size="mini">
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
  </sui-tab-pane>
  <sui-tab-pane title="Shipping" :attached="false"> 
  </sui-tab-pane>
  </sui-tab>
    <h2 is="sui-header" floated="left">SHIPPING ADDRESS</h2>
    <sui-button basic color="black">DOWNLOAD INVOICE</sui-button>
  </div>
</template>

<script>
export default {
  name: 'BorderlessExample',
};
</script>