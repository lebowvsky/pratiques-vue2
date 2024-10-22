import { fetchUsers } from "@/api/user";
import { computed, ref } from "vue";

export const useUsers = () => {
  const isLoading = ref(false);
  const allUsers = ref([]);
  const isWomen = ref(true);

  const getUsers = async () => {
    try {
      isLoading.value = true;
      const response = await fetchUsers();
      console.log(
        response.data.results.map((item) => ({
          firstname: item.name.first,
          lastname: item.name.last,
          picture: item.picture.medium,
          gender: item.gender,
        }))
      );
      allUsers.value = response.data.results.map((item) => ({
        firstname: item.name.first,
        lastname: item.name.last,
        picture: item.picture.medium,
        gender: item.gender,
      }));
    } catch (error) {
      console.error(error);
    }
    isLoading.value = false;
  };

  const allMen = computed(() => allUsers.value.filter((user) => user.gender === "male"));
  const allWomen = computed(() => allUsers.value.filter((user) => user.gender === "female"));
  const switchedList = computed(() =>
    allUsers.value.filter((user) => user.gender === `${isWomen.value ? "female" : "male"}`)
  );

  const switchUsers = () => (isWomen.value = !isWomen.value);

  return { isLoading, allUsers, allMen, allWomen, getUsers, switchedList, switchUsers };
};
