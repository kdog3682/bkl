<template>
  <div class="login-form">
    <div class="form-group">
      <label for="username">Username</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="Enter your username"
      />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>
    <div class="form-group">
      <input id="remember-me" v-model="rememberMe" type="checkbox" />
      <label for="remember-me">Remember me</label>
    </div>
    <button @click="login" type="submit">Login</button>
  </div>
</template>

<script setup>
    const {
        username,
        rememberMe,
        password,
        user,
        status,
        login,
    } = useFirebaseLogin()

</script>

<style scoped>
.login-form {
  background-color: #e6f0ff;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  color: #3f51b5;
  margin-bottom: 5px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #3f51b5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
