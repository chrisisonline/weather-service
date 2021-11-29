<template>
    <form class="container grid grid-cols-1 gap-4 mx-auto w-1/4">
      <h2 class="text-3xl text-center text-gray-700 mb-6">Weather Service<br/>Login</h2>
      <div class="w-full">
        <div class="flex items-center">
          <input
            type='text'
            placeholder="Username"
            class="px-5 py-3 w-full border rounded-lg text-gray-700 focus:outline-none"
            v-model="username"
          />
        </div>
      </div>
      <div class="w-full">
        <div class="flex items-center">
          <input
            type='password'
            placeholder="Password"
            class="px-5 py-3 w-full border rounded-lg text-gray-700 focus:outline-none"
            v-model="password"
          />
        </div>
      </div>
      <button
        type="submit"
        class="w-1/2 py-2 rounded-full bg-green-600 text-gray-100 justify-self-end focus:outline-none mt-4"
        @click="this.$emit('log-in', {username: username, password: password})"
      >
        Sign In
      </button>
    </form>
</template>

<script>
  export default {
    name: "Login"
  }
</script>
