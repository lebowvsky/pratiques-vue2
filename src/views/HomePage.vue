<template>
  <main>
    <h1>Liste de users</h1>
    <div class="filters">
      <MonBouton text="Cliquez" />
    </div>
    <div v-if="!isLoading" class="lists">
      <ListUser :users="allUsers" />
      <ListUser :users="allMen" />
      <ListUser :users="allWomen" />
    </div>
    <div class="lists">
      <SwitchList />
      <SwitchList />
    </div>
  </main>
</template>
<script>
import userMixins from "../mixins/userMixins";
import ListUser from "../components/ListUser";
import MonBouton from "../components/MonBouton";
import SwitchList from "../components/SwitchList";

export default {
  name: "HomePage",
  components: {
    ListUser,
    MonBouton,
    SwitchList,
  },
  mixins: [userMixins],
  data() {
    return {
      type: "type",
    };
  },
  mounted() {
    console.log(this.type);
    this.getUsers();
  },
};
</script>
<style scoped>
main {
  background-color: blanchedalmond;
  padding: 20px;
}
.filters {
  justify-content: center;
  display: flex;
  gap: 10px;
}
.lists {
  display: flex;
  justify-content: space-between;
}
</style>
