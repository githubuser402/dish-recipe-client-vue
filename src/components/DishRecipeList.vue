<template>
  <div>
    <DishRecipeItem
    v-for="recipe in recipes"
    v-bind:recipe="recipe"
    v-bind:key="recipe.id"
    />
  </div>
</template>

<script>

import DishRecipeItem from '@/components/DishRecipeItem.vue';

export default {
  name: 'DishRecipeList',
  components: {
    DishRecipeItem,
  },
  data() {
    return { recipes: '' };
  },
  methods: {
    fetchDishRecipe() {
      fetch(`${this.$dishApi}/recipes/`)
        .then((response) => response.json())
        .then(
          (json) => {
            console.log(json);
            this.recipes = json;
          },
        );
    },
  },
  beforeMount() {
    this.fetchDishRecipe();
  },
};

</script>

<style>
</style>
