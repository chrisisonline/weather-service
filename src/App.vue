<template>
  <NavBar @log-out="logout" :key="this.isLoggedIn" />
  <div v-if="!this.isLoggedIn" class="pt-8">
    <Login @log-in="login" />
  </div>
  <div v-else class="container mx-auto px-32 pb-16">
    <PageTitle
      title="Live Weather Updates"
      description="Weather conditions for 11 cities all across the world"
    />
    <div class="grid grid-cols-3 gap-8">
      <WeatherCard
        v-for="(city, index) in cities"
        :cityInfo="city"
        :key="city.cityname+index"
      ></WeatherCard>
    </div>
  </div>
</template>

<script>
  import { cities } from './assets/citydata'
  import { users } from './assets/userdata'
  import NavBar from './components/NavBar.vue'
  import PageTitle from './components/PageTitle.vue'
  import WeatherCard from './components/WeatherCard.vue'
  import Login from './components/Login.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      PageTitle,
      WeatherCard,
      Login,
    },
    methods: {
      login(user) {
        users.forEach((u) => {
          if (u.username == user.username){
            if (u.password == user.password) {
              this.isLoggedIn = user.username
              alert(user.username + " has successfully logged in")
              return
            }
          }
        })
        if (!this.isLoggedIn)
          alert("user does not exists or wrong password!")
      },
      logout() {
        this.isLoggedIn = false
        console.log("user logged out")
      },
    },
    data() {
      return {
        cities: cities,
        isLoggedIn: false,
      }
    }
  }
</script>