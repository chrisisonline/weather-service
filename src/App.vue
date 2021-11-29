<template>
  <NavBar />
  <div class="container mx-auto px-32 pb-16">
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
  import NavBar from './components/NavBar.vue'
  import PageTitle from './components/PageTitle.vue'
  import WeatherCard from './components/WeatherCard.vue'

  export default {
    name: 'App',
    components: {
      NavBar,
      PageTitle,
      WeatherCard,
    },
    data() {
      return {
        cities: cities 
      }
    }
  }
</script>