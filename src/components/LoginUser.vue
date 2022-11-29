<template>
  <div>
    <form v-on:submit="loginUser" onsubmit="return false">
        <div class="imgcontainer">
          <img src="img_avatar2.png" alt="Avatar" class="avatar">
        </div>
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" v-model="username" required>
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" v-model="password" required>
          <button type="submit">Login</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>
        <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
          <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
      </form>
  </div>
</template>

<script>

export default {
  name: 'LoginUser',
  data() {
    return {
      token: '',
      username: '',
      password: '',
    };
  },
  methods: {
    loginUser() {
      fetch(`${this.$dishApi}/user/login/`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: this.username, password: this.password }),
      })
        .then(
          (response) => {
            if (!response.ok) {
              if (response.status === 422) {
                throw new Error('Wrong user credentials');
              } else if (response.status === 404) {
                throw new Error('User does not exist');
              }
            }
            return response.json();
          },
        )
        .then(
          (json) => {
            this.token = json.token;
            this.saveToken(this.token);
            this.$router.push('/');
          },
        )
        .catch(
          (err) => {
            alert(err);
          },
        );
    },
  },
};

</script>

<style scoped>
 form {
    border: 3px solid #f1f1f1;
  }
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
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
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
  }
  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
  }
  img.avatar {
    width: 40%;
    border-radius: 50%;
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
