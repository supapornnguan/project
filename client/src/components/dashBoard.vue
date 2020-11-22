<template>
  <div>
    <h3 id="spaceLeftRight" is="sui-header" block>
    TO DO
    </h3>
    <sui-grid :columns="3">
      <sui-grid-row id="spaceLeftRight" stretched>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example">
              <sui-statistic>
                <sui-statistic-label>TOTAL ORDERS</sui-statistic-label>
                <sui-statistic-value>120</sui-statistic-value>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example">
              <sui-statistic>
                <sui-statistic-label>PICKUP ORDERS</sui-statistic-label>
                <sui-statistic-value>70</sui-statistic-value>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example">
              <sui-statistic>
                <sui-statistic-label>SHIPPING ORDERS</sui-statistic-label>
                <sui-statistic-value>50</sui-statistic-value>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
    <h3 id="spaceLeftRight" is="sui-header" block>
    STATISTICS
    </h3>
    <sui-grid :columns="3">
      <sui-grid-row id="spaceLeftRight" stretched>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example">
              <sui-statistic>
                <sui-statistic-label>RATING</sui-statistic-label>
                <sui-statistic-value>4.5</sui-statistic-value>
                <sui-statistic-label>(+4%)</sui-statistic-label>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example">
              <sui-statistic>
                <sui-statistic-label>ORDERS SUCCESSFUL</sui-statistic-label>
                <sui-statistic-value>200</sui-statistic-value>
                <sui-statistic-label>(+12%)</sui-statistic-label>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
        <sui-grid-column>
          <sui-segment>
            <div class="single-example">
              <sui-statistic>
                <sui-statistic-label>TOTAL SALES</sui-statistic-label>
                <sui-statistic-value>120,000฿</sui-statistic-value>
                <sui-statistic-label>(+25%)</sui-statistic-label>
              </sui-statistic>
            </div>
          </sui-segment>
        </sui-grid-column>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<style>
#spaceLeftRight{
    margin-left: 10px;
    margin-Right: 10px;   
}
</style>