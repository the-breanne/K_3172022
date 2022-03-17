<template>
  <div>
    <nav class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">Kudos</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/add">Add Task</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/list">View Task List</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/meeting">Request Meeting</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/meetinglist">View Meetings</router-link>
          </li>
                    <li class="nav-item">
            <router-link class="nav-link pr-3" to="/feedback">Request Feedback</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/feedbacklist">View Feedback</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/register">Register</router-link>
          </li>
                    <li class="nav-item">
            <router-link class="nav-link pr-3" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <button @click="logout">Logout</button>
          </li>          
          

        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>