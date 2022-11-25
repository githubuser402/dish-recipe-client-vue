<template>
    <div>
        <div>
          <ProductItem
          v-for="product of products"
          v-bind:product="product"
          v-bind:key="product.id"
          />
        </div>
    </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  data() {
    return { products: '' };
  },
  methods: {
    fetchProductList() {
      fetch(`${this.$dishApi}products/`)
        .then(
          (response) => response.json(),
        )
        .then(
          (json) => {
            console.log(json);
            this.products = json;
          },
        );
    },
  },
  beforeMount() {
    this.fetchProductList();
  },
};
</script>

<style>
</style>
