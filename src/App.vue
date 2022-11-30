<template>
  <div id="app">
    <h1>DishRecipes.io</h1>
    <div id="nav" v-if="this.userHasValidToken()">
      <router-link to="/recipes/">Recipe List</router-link>
      <router-link to="/add-dish/">Add dishes</router-link>
      <router-link to="/login/">Login</router-link>
      <router-link to="/register/">Register</router-link>
      <button v-on:click="this.logoutUser()">Logout</button>
    </div>
    <div id="nav" v-else>
      <router-link to="/recipes/">Recipe List</router-link>
      <router-link to="/login/">Login</router-link>
      <router-link to="/register/">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  background: rgb(247,247,247);
  background: linear-gradient(125deg, rgba(247,247,247,1) 0%, rgba(255,255,255,1) 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav *{
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
}
#nav button {
  border: none;
  background-color: inherit;
  font-weight: bold;
  color: #2c3e50;
  font-size: 16px;
}
#nav button:hover {
 color: #42b983;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
