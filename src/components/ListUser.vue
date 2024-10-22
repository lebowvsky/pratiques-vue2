<template>
  <div class="wrapper">
    <h2>Titre</h2>
    <ul class="list">
      <UserItem v-for="(user, index) in users" :key="index" :user="user" />
    </ul>
  </div>
</template>
<script>
import UserItem from "./UserItem";
export default {
  name: "ListUser",
  components: {
    UserItem,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list {
  list-style-type: none;
  padding: 0;
}
</style>
