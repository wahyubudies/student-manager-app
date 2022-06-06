<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card py-5 px-3 mt-5">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="student in Students" :key="student._id">
              <td><img :src="student.image" width="100"/></td>
              <td>{{ student.name }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>
                <router-link
                  :to="{ name: 'edit', params: { id: student._id } }"
                  class="btn btn-success"
                  >Edit
                </router-link>
                <button
                  @click.prevent="deleteStudent(student._id)"
                  class="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Students: [],
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Students = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteStudent(id) {
      let apiURL = `http://localhost:4000/api/delete-student/${id}`;
      let indexOfArrayItem = this.Students.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Students.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
.table td {
  vertical-align: initial;
}
</style>
