<template>
  <footer>
    <div class="circle"></div>
    <div class="second-circle"></div>
    <div class="subscribe">
      <h2>Subscribe Our Newsletter</h2>
      <p>Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio tincidunt maximus. Pellentesque tempus gravida viverra.</p>
      <div class="subscribe-form">
        <input type="text" placeholder="Enter Email Address">
        <button type="submit">Subscribe > </button>
      </div>
    </div>

    <div class="row bottom-footer ">
      <div class="col-md-6">Designed by GoldeLayers | Powered by WordPress</div>
      <div class="col-md-6 hidden-xs hidden-sm">
        <b-navbar-nav class="ml-auto">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/">Screen</router-link>
          <router-link to="/">Contact</router-link>
          <router-link to="/login" class="regsiter-button">Create Account</router-link>
        </b-navbar-nav>
      </div>
    </div>
  </footer>
</template>
<script>
export default {name: 'myfooter'}
</script>
<style>

</style>