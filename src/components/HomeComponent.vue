<template>
    <div>
        <!-- Page content-->
        <div class="container">
            <div class="row py-5">
                <!-- Blog entries-->
                <div class="col-lg-8 mx-auto">
                    <!-- Nested row for non-featured blog posts-->
                    <div class="row">
                    
                        <!-- Blog post-->
                        <div class="col-lg-6" v-for="student in Students" :key="student._id">
                            <div class="card mb-4">
                                <a href="#!"><img class="card-img-top" :src="student.image" style="width:100%; height:250px; object-fit:cover" alt="..."></a>
                                <div class="card-body">                                
                                <h2 class="card-title h4">{{ student.name }}</h2>
                                <p class="card-text text-primary">{{ student.email }}</p>
                                <a class="btn btn-primary" target="_blank" :href="`https://wa.me/+62`+student.phone">WA - (  {{student.phone}} )</a>
                                </div>
                            </div>
                        </div>                        
                        <!-- End Blog post-->

                    </div>
                </div>
            </div>
        </div>
        <!-- Footer-->
        <footer class="py-5">
            <div class="container">
                <p class="m-0 text-center text-dark">&copy; Copyright 2022</p>
            </div>
        </footer>
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
  methods: {},
};
</script>