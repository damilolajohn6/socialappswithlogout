<template>
  <div class="page-header clear-filter" filter-color="orange">
    <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
    <div class="">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto mt-0">
          <card type="login" plain>
            <div slot="header" class="mt-0">
              <img v-lazy="'img/fancrux-logo.png'" alt="" />
            </div>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="User Name..."
            >
            </fg-input>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_email-85"
              placeholder="Email  ..."
              type="email"
            >
            </fg-input>

            <select
              class="no-border input-lg you"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="User Name..."
            >
              <option>hello</option>
            </select>

            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons objects_key-25"
              placeholder="Password..."
              type="password"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center">
                <a href="#pablo" class="btn btn-primary btn-round btn-lg btn-block"
                  >Get Started</a
                >
              </div>
              <div class="pull-left">
                <h6>
                  <router-link class="link footer-link" to="/login">Login</router-link>
                  <!-- <a href="#pablo" ></a> -->
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import MainFooter from "@/layout/MainFooter";
export default {
  name: "register-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
};
</script>
<style>
.you {
  display: none;
}
</style>
