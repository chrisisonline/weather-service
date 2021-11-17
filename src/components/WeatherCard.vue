<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <div class="relative pb-56 overflow-hidden">
      <img
        class="filter brightness-75 absolute inset-0 h-full w-full object-cover"
        :src="cityInfo.imgUrl"
        alt=""
      >
    </div>
    <h1 class="absolute text-white text-shadow-md -mt-11 ml-4 z-10">{{ cityInfo.cityname }}</h1>
    <div class="p-4">
      <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <div class="mt-3 flex items-center">
        <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
      </div>
    </div>
    <div class="p-4 border-t border-b text-xs text-gray-700">
      <span class="flex items-center mb-1">
        <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
      </span>
      <span class="flex items-center">
        <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i> Ermäßigung mit Karte
      </span>        
    </div> 
  </div>
</template>

<script>
  export default {
    name: 'WeatherCard',
    props: {
      cityInfo: Object,
    }
  }
</script>