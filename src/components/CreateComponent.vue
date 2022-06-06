<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card px-3 py-5 mt-5">
        <h3 class="text-center">Create Student</h3>
        <form @submit.prevent="handleSubmitForm">
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
            <button class="btn btn-danger btn-block">Create</button>
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
      student: {
        image:"",
        name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-student";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view");
          this.student = {
            image:"",
            name: "",
            email: "",
            phone: "",
          };
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
