<template>
  <div class="recipe-detailed-view">
    <center><h1>{{ recipe.name }}</h1></center>
    <div class="product-description">
      {{ recipe.recipe }}
    </div>
    <div class="recipe-picture-container"
    v-for="picture in recipe.pictures"  v-bind:key="picture.id">
      <img class="recipe-picture" v-bind:src="imgPreUrl() + picture.path" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'DishRecipeDetailed',
  data() {
    return { recipe: '' };
  },
  methods: {
    fetchDish() {
      fetch(`${this.$dishApi}/recipes/${this.$route.params.dish_id}/`)
        .then(
          (response) => response.json(),
        )
        .then(
          (json) => {
            this.recipe = json;
          },
        );
    },
    imgPreUrl() {
      return this.$dishApi;
    },
  },
  beforeMount() {
    this.fetchDish();
  },
};
</script>

<style scoped>
.product-description{
  margin: 10px 40px;
}
.recipe-picture-container{
  float: left;
  width: 33.33%;
  padding: 5px;
}
.recipe-picture{
  width: 400px;
  height: 400px;
  margin: 20px;
  border-radius: 4px;
}
</style>
