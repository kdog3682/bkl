<template>
  <div class="homepage">
    <header>
      <WebsiteLogo/>
      <nav>
        <ul>
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="content">
        <slot/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.homepage {
  background-color: #f5f3ff;
  color: #3f51b5;
  font-family: Arial, sans-serif;
}

header {
  background-color: #3f51b5;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-left: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #6573c3;
}

.content {
  display: flex;
  justify-content: space-between;
  padding: 40px;
}

.login-section {
  flex: 1;
  margin-right: 40px;
}

.hero-section {
  flex: 1;
  background-color: #9fa8da;
  color: #fff;
  padding: 40px;
  border-radius: 8px;
}

.hero-section h1 {
  font-size: 36px;
  margin-bottom: 20px;
}
</style>



