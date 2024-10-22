<template>
  <button @click="handleButton">{{ text }}</button>
</template>

<script>
export default {
  name: "MonBouton",
  props: {
    text: {
      type: String,
      default: "Bouton",
    },
  },
  methods: {
    handleButton() {
      this.$emit("handleButton");
    },
  },
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
