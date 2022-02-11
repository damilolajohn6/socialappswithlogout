<template>
  <div class="sidebar-footer">
    <a href="#">
      <i class="fa fa-home"></i>
    </a>
    <a href="#">
      <i class="far fa-bell"></i>
      <!-- <span class="badge badge-pill badge-warning notification">3</span> -->
    </a>
    <a href="#">
      <i class="far fa-plus-square"></i>
    </a>
    <a href="#">
      <i class="far fa-comment-alt"></i>
      <!-- <span class="badge badge-pill badge-success notification">7</span> -->
    </a>
    <a href="#" v-b-toggle.sidebar-right>
      <i class="fa fa-user-circle"></i>

      <span class="badge-sonar"></span>
    </a>

    <b-sidebar id="sidebar-right" title="" right shadow>
      <div class="mt-1">
        <app-sidebar></app-sidebar>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import Msidebar from "./Msidebar.vue";
export default {
  components: {
    AppSidebar: Msidebar,
  },
};
</script>
<style scoped>
/*--------------------------side-footer------------------------------*/
.sidebar-footer {
  display: none;
}
@media screen and (max-width: 1114px) {
  .sidebar-footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    display: flex;
    overflow: hidden;
    padding-top: 15px;
    padding-bottom: 5px;
    background: #ffffff;
  }

  .sidebar-footer > a {
    flex-grow: 1;
    text-align: center;
    height: 30px;
    line-height: 35px;
    position: relative;
    font-size: 18px;
  }

  .sidebar-footer > a .notification {
    position: absolute;
    top: 0;
  }

  .badge-sonar {
    display: inline-block;
    background: #980303;
    border-radius: 50%;
    height: 8px;
    width: 8px;
    position: absolute;
    top: 0;
  }

  .badge-sonar:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid #980303;
    opacity: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: sonar 1.5s infinite;
  }
}
</style>
