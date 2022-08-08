<template>
  <p v-for="{ content } in messages">{{ content }}</p>
  <form @submit.prevent="handleSubmit">
    <input v-model="input" type="text" />
    <input type="submit" />
  </form>
</template>

<script setup>
import { onMounted, ref } from "vue";
import socket from "./socket/socket.service";

const messages = ref([]);
const input = ref("");

const handleSubmit = () => {
  input.value = "";
};
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  background-color: black;
  color: white;
}
</style>
