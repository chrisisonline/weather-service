<template>
  <h1 class="mb-2">{{ title }}</h1>
  <h3 class="mb-8">{{ description }}</h3>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
    description: String,
  }
}
</script>
