<script setup>
import { ref } from "vue";

let levels = ref([]);

const numberOfLevels = 2;

for (let i = 1; i <= numberOfLevels; i++) {
  levels.value.push(i);
}

let showMenu = ref(false)

const openMenu = () => {
  showMenu.value = ! showMenu.value
}
</script>

<template>
  <div>
    <button @click="openMenu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <div v-if="showMenu">
    <ul class="flex flex-col text-gray-400 gap-2">
      <li v-for="level in levels" :key="level">
        <a :href="route('play.level', level)">Level {{ level }}</a>
      </li>
    </ul>
  </div>
</template>
