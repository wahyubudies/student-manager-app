<template>
  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-secondary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <router-link to="/" class="text-decoration-none">
          <a class="navbar-brand float-left">Student Manager App</a>
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item px-2">
            <router-link class="nav-link pr-3" to="/create"
              >Create Student</router-link
            >
          </li>
          <li class="nav-item px-2">
            <router-link class="nav-link" to="/view">Lists Students</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <router-view></router-view>
  </div>
</template>