<template>
  <div class="wrapper">
    <h2>Liste avec logique de switch Homme/Femme</h2>
    <div class="button-wrapper">
      <MonBouton text="Switch" @handleButton="switchUsers" />
    </div>
    <ul class="list" v-if="!isLoading">
      <!-- <li v-for="(user, index) in switchedList" :key="index">{{ user.firstname }}</li> -->
      <UserItem v-for="(user, index) in switchedList" :key="index" :user="user" />
    </ul>
  </div>
</template>
<script setup>
import { useUsers } from "../composables/users";
import MonBouton from "../components/MonBouton";
import { onMounted } from "vue";
import UserItem from "./UserItem";

onMounted(() => {
  getUsers();
});

const { isLoading, getUsers, switchedList, switchUsers } = useUsers();
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(178, 155, 96);
  padding: 10px;
}
.list {
  list-style-type: none;
  padding: 0;
}
</style>
