<template>
  <div>
    <form v-on:submit="registerUser" onsubmit="return false">
      <div class="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr>
        <label for="email"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" v-model="username" id="text" required>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" v-model="password" id="pwd" required>
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password"
        v-model="password_repeat" id="psw-repeat" required>
        <hr>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
        <button type="submit" class="registerbtn">Register</button>
      </div>
      <div class="container signin">
        <p>Already have an account? <a href="#">Sign in</a>.</p>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'RegisterUser',
  methods: {
    registerUser() {
      if (!this.passwordRepeated()) {
        this.$el.querySelector('#psw-repeat').style.border = '1px solid red';
      }
      fetch(`${this.$dishApi}/user/register/`,
        {
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
              alert('User already exists');
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
        );
    },
    passwordRepeated() {
      return this.password === this.password_repeat;
    },
  },
  data() {
    return {
      username: '',
      password: '',
      password_repeat: '',
      token: '',
    };
  },
};
</script>

<style scoped>
* {box-sizing: border-box}
.container {
  padding: 16px;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.registerbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.registerbtn:hover {
  opacity:1;
}
a {
  color: dodgerblue;
}
.signin {
  background-color: #f1f1f1;
  text-align: center;
}
</style>
