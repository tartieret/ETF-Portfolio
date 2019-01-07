<template>
  <div class="col-md-6 col-lg-6">
    <div class="card">
      <div class="card-header bg-primary text-white">
        {{stock.name}}
        <small>(Price: {{ stock.price| currency }})</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <input
              type="number"
              class="form-control"
              placeholder="quantity"
              :class="{danger: insufficientFunds}"
              v-model.number="quantity"
            >
          </div>
          <div class="col-sm-4 justify-content-end">
            <button
              class="btn btn-success"
              @click="buyStock"
              :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
            >{{ insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>


<style scoped>
.card {
  margin-bottom: 15px;
}

.danger {
  border: 1px solid red;
}
</style>
