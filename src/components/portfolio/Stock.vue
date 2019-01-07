<template>
  <div class="col-md-6 col-lg-6">
    <div class="card">
      <div class="card-header bg-info text-white">
        {{stock.name}}
        <small>(Price: {{ stock.price| currency }} | Quantity: {{ stock.quantity }})</small>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-sm-8">
            <input
              type="number"
              class="form-control"
              v-model.number="quantity"
              :class="{danger: insufficientQuantity}"
            >
          </div>
          <div class="col-sm-4 justify-content-end">
            <button
              class="btn btn-danger"
              @click="sellStock"
              :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
            >{{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["stock"],
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
