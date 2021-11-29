<template>
  <!-- card header image -->
  <div :id="cityInfo.cityname" class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="relative pb-56 overflow-hidden">
      <img
        class="filter brightness-75 absolute inset-0 h-full w-full object-cover"
        :src="cityInfo.imgUrl"
        :alt="cityInfo.cityname"
      >
    </div>
    <!-- card title -->
    <div class="absolute -mt-20 ml-2 z-10 flex items-center">
      <div class="rounded-full bg-white">
        <img
          class="w-16 object-contain object-center filter drop-shadow-text"
          :src=" OWData ? 'http://openweathermap.org/img/wn/'+OWData.weather[0].icon+'@2x.png' : '#' "
          alt="weather description icon"
        />
      </div>
      <h1 class="text-white text-2xl text-shadow pt-2 pl-4">{{ cityInfo.cityname }}</h1>
    </div>
    <!-- card body -->
    <div class="grid grid-cols-1 gap-4 p-5 pt-7">
      <!-- temperature, high/low -->
      <div class="flex items-end">
        <h2 class="text-5xl font-medium">
          {{OWData ? Math.round(OWData.main.temp) : '...'}}&#176;
        </h2>
        <div class="flex-grow"></div>
        <p class="text-2xl font-medium align-baseline">
          {{OWData ? Math.round(OWData.main.temp_max) : '...'}}&#176;
        </p>
        <ArrowNarrowUpIcon class="w-7 h-7 pb-1 text-green-600"/>
        <p class="text-2xl font-medium align-baseline">
          {{OWData ? Math.round(OWData.main.temp_min) : '...'}}&#176;
        </p>
        <ArrowNarrowDownIcon class="w-7 h-7 pb-1 text-red-400"/>
      </div>
      <!-- divider -->
      <div class="border-t w-full"></div>
      <!-- more details -->
      <p class="text-lg font-medium capitalize">{{OWData ? OWData.weather[0].description : '...'}}</p>
      <div class="grid grid-cols-1 gap-1">
        <div class="flex items-end">
          <p class="text-md text-gray-500">Feels like</p>
          <div class="flex-grow"></div>
          <p class="text-xl font-medium text-gray-500">{{OWData ? Math.round(OWData.main.feels_like) : '...'}}&#176;</p>
        </div>
        <div class="flex items-end">
          <p class="text-md text-gray-500">Humidity</p>
          <div class="flex-grow"></div>
          <p class="text-xl font-medium text-gray-500">{{OWData ? Math.round(OWData.main.humidity) : '...'}}&#37;</p>
        </div>
        <div class="flex items-end">
          <p class="text-md text-gray-500">Wind Speeds</p>
          <div class="flex-grow"></div>
          <p class="text-xl font-medium text-gray-500">{{OWData ? OWData.wind.speed : '...'}} m/s</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { ArrowNarrowUpIcon, ArrowNarrowDownIcon } from '@heroicons/vue/solid'

  export default {
    name: 'WeatherCard',
    props: {
      cityInfo: Object,
    },
    components: {
      ArrowNarrowUpIcon,
      ArrowNarrowDownIcon
    },
    created() {
      var cityname = this.cityInfo.cityname
      axios.get("https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&units=metric&appid="+ process.env.VUE_APP_OPENWEATHER_API)
        .then( res => {
          this.OWData = res.data;
          console.log(this.OWData);
        })
        .catch(err => { console.log(err) })
    },
    data() {
      return  {
        OWData: NaN
      }
    }
  }
</script>