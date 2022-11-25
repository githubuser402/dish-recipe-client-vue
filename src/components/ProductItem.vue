<template>
    <div class="product-item">
        <a :href="product.id">
          <div class="name">
            {{ product.name }}
          </div>
        </a>
        <div class="info-wrapper">
          <div class="picture">
          </div>
          <div class="discription">
            {{ product.description }}
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  components: {},
};
</script>

<style scoped>

.product-item{
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 10px 10px 10px 10px;
}

</style>
