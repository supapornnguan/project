<template>
  <div>
    <b-tabs content-class="mt-3" fill>

    <!-- ORDER -->
    <b-tab title="Order" active>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell style="text-align:center">Order ID</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Order Date</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Total Price</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Quantity</sui-table-header-cell>
        <sui-table-header-cell style="text-align:center">Store</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="(key,index) in keyOrder" :key="index">
        <sui-table-cell style="text-align:center"><a href="#">{{key}}</a></sui-table-cell>
        <sui-table-cell style="text-align:center">{{date_time_to_order[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{total_amount[index]}}.00 THB</sui-table-cell>
        <sui-table-cell style="text-align:center">{{quantity[index]}}</sui-table-cell>
        <sui-table-cell style="text-align:center">{{branch_selected[index]}}</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </b-tab>

  <!-- PACKING -->
  <b-tab title="Packing">
  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        Central Pinklao
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>
          <sui-checkbox label="All" v-model="value" />
        </sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      <sui-button>Ship</sui-button>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Ladprao
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>
          <sui-checkbox label="All" v-model="value" />
        </sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      <sui-button>Ship</sui-button>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Salaya
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>
          <sui-checkbox label="All" v-model="value" />
        </sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>
          <sui-checkbox v-model="value" />
        </sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      <sui-button>Ship</sui-button>
      </sui-accordion-content>

    </sui-accordion>
  </b-tab>

  <!-- DELIVERY -->
  <b-tab title="Delivery">
  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        Central Pinklao
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Ladprao
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Salaya
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Tracking No.</sui-table-header-cell>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
    </sui-accordion>
  </b-tab>

  <!-- AT STORE -->
  <b-tab title="At Store">
  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        Central Pinklao
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Ladprao
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Salaya
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
    </sui-accordion>
  </b-tab>

  <!-- COMPLETE -->
  <b-tab title="Complete">
  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        Central Pinklao
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Ladprao
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Salaya
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
    </sui-accordion>
  </b-tab>

  <!-- RETURN -->
  <b-tab title="Return">
  <sui-accordion is="sui-menu" vertical exclusive styled style="width:1000px">
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon  name="dropdown" />
        Central Pinklao
      </sui-accordion-title>
      <sui-accordion-content >
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
      
      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Ladprao
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>

      <sui-accordion-title id="positionLeft" is="sui-menu-header">
        <sui-icon name="dropdown" />
        Central Salaya
      </sui-accordion-title>
      <sui-accordion-content>
    <sui-table celled>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
      </sui-accordion-content>
    </sui-accordion>
</b-tab>

  </b-tabs>
  </div>
</template>

<script>
import firebase from "../firebase"
import {auth} from "../firebase"
export default {
  data() {
    return {
      infoOrder : {},
      keyOrder : [],
      branch_selected :[],
      date_time_to_order : [],
      product_key : [],
      status : [],
      total_amount : [],
      userid : [],
      quantity :[],
      value:""

    }
  },
     mounted() {
      firebase.ref('pickup_order/').orderByChild('userid').equalTo(auth.currentUser.uid).on('value', snapshot => {
      this.infoOrder = snapshot.val()
      this.keyOrder = Object.keys(snapshot.val())
      console.log(this.keyOrder)
      for(var i = 0 ; i<this.keyOrder.length ; i++){
        var k = this.keyOrder[i];
        var branch_selected = this.infoOrder[k].branch_selected;
        var date_time_to_order = this.infoOrder[k].date_time_to_order;
        var product_key = this.infoOrder[k].product_key;
        var status = this.infoOrder[k].status;
        var total_amount = this.infoOrder[k].total_amount;
        var userid = this.infoOrder[k].userid;
        var quantity = this.infoOrder[k].quantity;

        this.branch_selected[i] = branch_selected
        this.date_time_to_order[i] = date_time_to_order
        this.product_key[i] = product_key
        this.status[i] = status
        this.total_amount[i] = total_amount
        this.userid[i] = userid
        this.quantity[i] = quantity
      }
    })
  },

  
}
</script>
<!--
<script>
import pickupTransaction from "../components/pickupTransaction"
export default {
    data () {
    return {
      show : 1,
    }
},
 components:{
      pickupTransaction,
  },
    methods: {
      pickupTransaction1(){
        this.show =2

      },
  },
}
</script>>
-->

