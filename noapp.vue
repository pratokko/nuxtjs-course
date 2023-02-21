<template>
   <!-- <HomeWelcome /> -->
  <!-- <Counter /> -->
<button @click="toggle">toggle</button>
  <component :is="myComponent" />
 <NuxtPage />
</template>


<script setup>
const myComponent = ref(resolveComponent("Counter"))

const toggle = () => {
  myComponent.value = resolveComponent("HomeWelcome")
}

</script>