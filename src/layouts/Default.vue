
<script setup lang="ts">
import { RouterLink } from 'vue-router';
const route = useRoute()

</script>
<template>
  <div class="w-full h-dvh flex bg-gray-50">
    <div class="w-[20%] h-full bg-gray-400 flex flex-col py-8"
    v-if="!route.meta.isAuth">
      <div class="flex items-center gap-x-4 font-bold text-xl text-white mb-12 px-4">
        <div class="w-12 h-12 rounded-full bg-gray-600"></div>
        <h1>Admin</h1>
      </div>
      
      <div class="mb-4 text-xl font-bold w-full p-4"
      :class="{'bg-white': route.name == 'user-list'}">
        <RouterLink :to="{name:'user-list'}" >Kelola Pengguna</RouterLink>
      </div>
      <div class="mb-4 text-xl font-bold w-full  p-4"
      :class="{'bg-white': route.name == 'product-list'}">
        <RouterLink :to="{name:'product-list'}" >Kelola Produk</RouterLink>
      </div>
      
    </div>
    <RouterView class="flex-1"/>
  </div>
</template>