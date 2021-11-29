<template>
  <nav class="shadow-lg px-10 py-3 mb-12">
    <ul class="flex items-center">
      <li>
        <img class="h-16" alt="Weather service logo" src="../assets/weather-logo.png">
      </li>
      <li class="flex-grow"></li>
      <li class="">
        <a
          v-if="this.$.vnode.key"
          class="inline-block py-1.5 px-6 border rounded bg-green-500 text-white"
          href="#"
          @click="this.$emit('log-out')"
        >
          Logout
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>
