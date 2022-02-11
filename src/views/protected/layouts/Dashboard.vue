<template>
  <div class="row container-fluid">
    <div class="col-md-2 px-0">
      <app-sidebar></app-sidebar>
    </div>
    <div class="col-md-10 col-sm-12 px-0">
      <app-header></app-header>
      <main class="">
        <router-view />
      </main>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./../components/ui/Header.vue";
import Sidebar from "./../components/ui/Sidebar.vue";
import Footer from "./../components/ui/Footer.vue";
// import { Navbar } from "@/components";
export default {
  name: "Layout",
  components: {
    // Navbar,
    // AppNavbar: Navbar,
    AppSidebar: Sidebar,
    AppHeader: Header,
    AppFooter: Footer,
  },
  data() {
    return {
      opened: true,
    };
  },
  mounted() {},
};
</script>
<style>
.navbar {
  position: fixed;
  top: 0;
  width: 83.33%;
  right: 0;
}
@media screen and (max-width: 768px) {
  .navbar {
    width: 100%;
  }
}
</style>
