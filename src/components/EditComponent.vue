<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card px-3 py-5">
        <h3 class="text-center">Update Student</h3>
        <form @submit.prevent="handleUpdateForm">
          <div class="form-group mb-3">
            <label>Image Link ( <span>https://test.com/image-test.jpg</span> )</label>
            <input
              type="text"
              class="form-control"
              v-model="student.image"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              v-model="student.name"
              required
            />
          </div>

          <div class="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              v-model="student.email"
              required
            />
          </div>

          <div class="form-group mb-3">
            <label>Phone ( +628xxxxxxxxxx )</label>            
            <input
              type="text"
              class="form-control"
              v-model="student.phone"
              required
            />
          </div>

          <div class="form-group">
            <button class="btn btn-danger btn-block">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      student: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/edit-student/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.student = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

      axios
        .put(apiURL, this.student)
        .then((res) => {
          console.log(res);
          this.$router.push("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style>
label span{
  color:blue
}
</style>