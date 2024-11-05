<template>
    <div v-if="product">
      <h1>{{ product.title }}</h1>
      <p>{{ product.snippet }}</p>
      <img :src="product.image" :alt="product.title" width="300" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const products = useProducts()
  const productId = parseInt(route.params.id)
  const product = products.value.find(p => p.id === productId) || null
  </script>
  