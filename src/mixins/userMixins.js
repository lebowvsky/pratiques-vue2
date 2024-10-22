import { fetchUsers } from "@/api/user";

export default {
  data() {
    return {
      isLoading: false,
      allUsers: [],
      type: "type du Mixin",
    };
  },
  methods: {
    async getUsers() {
      try {
        this.isLoading = true;
        const response = await fetchUsers();
        console.log(
          response.data.results.map((item) => ({
            firstname: item.name.first,
            lastname: item.name.last,
            picture: item.picture.medium,
            gender: item.gender,
          }))
        );
        this.allUsers = response.data.results.map((item) => ({
          firstname: item.name.first,
          lastname: item.name.last,
          picture: item.picture.medium,
          gender: item.gender,
        }));
      } catch (error) {
        console.error(error);
      }
      this.isLoading = false;
    },
  },
  computed: {
    allMen() {
      return this.allUsers.filter((user) => user.gender === "male");
    },
    allWomen() {
      return this.allUsers.filter((user) => user.gender === "female");
    },
  },
};
