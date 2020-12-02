<template>
  <div>
    <b-tabs content-class="mt-3" fill>

    <!-- ORDER -->
    <b-tab title="Order" active><p>
    <sui-table celled>
      <h1>{{order_pickup}}</h1>
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell>Order ID</sui-table-header-cell>
        <sui-table-header-cell>Order Date</sui-table-header-cell>
        <sui-table-header-cell>Total Price</sui-table-header-cell>
        <sui-table-header-cell>Number of Product</sui-table-header-cell>
        <sui-table-header-cell>Store</sui-table-header-cell>
        <sui-table-header-cell></sui-table-header-cell>
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>
          <sui-button>Confirm</sui-button>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>
          <sui-button>Confirm</sui-button>
        </sui-table-cell>
      </sui-table-row>
      <sui-table-row>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>Cell</sui-table-cell>
        <sui-table-cell>
          <sui-button>Confirm</sui-button>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
  </p></b-tab>

  <!-- PACKING -->
  <b-tab title="Packing"><p>
  <sui-accordion is="sui-menu" vertical exclusive styled >
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
  </p></b-tab>

  <!-- DELIVERY -->
  <b-tab title="Delivery"><p>
  <sui-accordion is="sui-menu" vertical exclusive styled >
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
  </p></b-tab>

  <!-- AT STORE -->
  <b-tab title="At Store"><p>
  <sui-accordion is="sui-menu" vertical exclusive styled >
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
  </p></b-tab>

  <!-- COMPLETE -->
  <b-tab title="Complete"><p>
  <sui-accordion is="sui-menu" vertical exclusive styled >
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
  </p></b-tab>

  <!-- RETURN -->
  <b-tab title="Return"><p>
  <sui-accordion is="sui-menu" vertical exclusive styled >
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
  </p></b-tab>

  </b-tabs>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      value : ""
    }
  },
  computed: {
    ...mapGetters({
      order_pickup : "getOrderByPickup"
    })
  },
  mounted() {
    console.log(this.order_pickup)
  },
  
}
</script>

<style>
#positionLeft{
    text-align: left;
}  
</style>
