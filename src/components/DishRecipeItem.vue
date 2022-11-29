<template>
<div class="recipe-item">
  <a :href="recipe.id">
    <div class="name">
      {{ recipe.name }}
    </div>
  </a>
  <div class="info-wrapper">
    <div class="picture">
    </div>
    <div class="discription">
      {{ recipe.recipe }}
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'DishRecipeItem',
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
};

</script>

<style>
.recipe-item{
  border: 1px solid black;
  border-radius: 4px;
  margin: 10px;
  padding: 10px 10px 10px 10px;
}
</style>
