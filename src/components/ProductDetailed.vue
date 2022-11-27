<template>
  <div>
    <p>product detailed view</p>
    <center><h1>{{ product.name }}</h1></center>
    <div class="product-description">
      {{ product.description }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductDetailed',
  data() {
    return { product: '' };
  },
  methods: {
    fetchProduct() {
      fetch(`${this.$dishApi}products/${this.$route.params.product_id}/`)
        .then(
          (response) => response.json(),
        )
        .then(
          (json) => {
            console.log('product info:');
            console.log(json);
            this.product = json;
          },
        );
    },
  },
  beforeMount() {
    this.fetchProduct();
  },
};
</script>

<style>
</style>
