<template>
  <div>
    <h2>Create recipe</h2>
    <form v-on:submit="createRecipe" onsubmit="return false">
        <div class="container">
          <label for="recipe-name"><b>Dish name</b></label>
          <input type="text" id="recipe-name" placeholder="Enter Recipe Name"
          v-model="dishName" required>
          <label for="recipe"><b>Recipe</b></label>
          <textarea type="text" id="recipe" v-model="dishRecipe" required> </textarea>
          <label for="picture-input"><b>Picture</b></label>
          <input id="picture-input" type="file" accept="image/*" v-on:change="addToPictureList">
          <div id="uploaded-pictures" v-html="pictures">
          </div>
          <button type="submit">Create recipe</button>
        </div>
      </form>
  </div>
</template>

<script>

export default {
  name: 'CreateRecipe',
  data() {
    return {
      dishName: '',
      dishRecipe: '',
      dishPictures: [],
      pictures: '',
    };
  },
  methods: {
    createRecipe() {
      fetch(
        `${this.$dishApi}/recipes/`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': localStorage.getItem(this.$dishApiTokenKey),
          },
          body: JSON.stringify({ name: this.dishName, recipe: this.dishRecipe }),
        },
      )
        .then(
          (response) => {
            if (!response.ok) {
              // throw new Error('Recipe is not saved successfully');
              if (response.status === 401) {
                throw new Error('Register account or re-login');
              }
              throw new Error();
            }
            return response.json();
          },
        )
        .then(
          (json) => {
            const recipeId = json.id;
            if (this.dishPictures.length === 0) {
              return;
            }

            const uploadDishPics = async () => {
              let response;
              try {
                response = await Promise.all(
                  this.dishPictures.map(
                    (picture) => {
                      const data = new FormData();
                      data.append('picture', picture);
                      return fetch(
                        `${this.$dishApi}/recipes/${recipeId}/pictures/`,
                        {
                          method: 'POST',
                          headers: {
                            Accept: 'application/json',
                            'x-access-token': localStorage.getItem(this.$dishApiTokenKey),
                          },
                          body: data,
                        },
                      )
                        .then(
                          (res) => res.json(),
                        );
                    },
                  ),
                );
              } catch (error) {
                console.log(`Uploading pictures: ${error}`);
              }
              return response;
            };
            const pictureUploadResponse = uploadDishPics();
            console.log(pictureUploadResponse);
            this.$router.push('/');
          },
        )
        .catch(
          (err) => {
            alert(err);
          },
        );
    },
    addToPictureList(file) {
      this.dishPictures.push(file.target.files[0]);
      this.pictures += `<p>${file.target.files[0].name}</p>`;
    },
  },
};

</script>

<style scoped>
 form {
    border: 3px solid #f1f1f1;
  }
  input[type=text], input[type=file] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  #recipe{
    resize: none;
    width: 100%;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    height: 100px;
  }
  img[data-v-a0e8364c] {
  width: 60px;
  height: 60px;
  border: 1px;
  }
  button {
    background-color: #04AA6D;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  button:hover {
    opacity: 0.8;
  }
  img{
    width: 50px;
    height: 50px;
    border: 1px;
  }
  .container {
    padding: 16px;
  }
  span.psw {
    float: right;
    padding-top: 16px;
  }
  @media screen and (max-width: 300px) {
    span.psw {
      display: block;
      float: none;
    }
    .cancelbtn {
      width: 100%;
    }
  }
</style>
