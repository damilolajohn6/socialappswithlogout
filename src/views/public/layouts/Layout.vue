<template>
  <div class="">
    <!-- <div class="">
            <app-header />
        </div>
        <div class="">
            <app-navbar />
        </div> -->
    <main style="min-height: 100vh">
      <router-view />
    </main>
    <!-- <div class="">
      <app-footer />
    </div> -->
  </div>
</template>

<script>
// import Header from "./../components/ui/Header.vue";
// import Navbar from "./../components/ui/Navbar.vue";
// import Footer from "./../components/ui/Footer.vue";

export default {
  name: "Layout",
  components: {},
  data() {
    return {};
  },
};
</script>
