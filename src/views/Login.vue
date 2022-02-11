<template>
  <div class="container">
    <div class="screen">
      <div class="screen__content">
        <img
          src="../assets/images/custom/fancrux-logo.png"
          alt=""
          height="100"
          width="100"
        />
        <div class="login">
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input
              v-model="form.username"
              type="text"
              class="login__input"
              placeholder="Username"
            />
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>

            <input
              v-model="form.password"
              type="password"
              class="login__input"
              placeholder="Password"
            />
          </div>
          <button class="button login__submit" @click="Login">
            <span class="button__text">Login</span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>
        </div>
        <div class="social-login">
          <div>
            <p>Don't have an account...?  
              <router-link to="/register">Sign Up</router-link>
            </p>
          </div>
          
          <h3>log in via</h3>
          <div class="social-icons">
            <a href="#" class="social-login__icon fab fa-instagram"></a>
            <a href="#" class="social-login__icon fab fa-facebook"></a>
            <a href="#" class="social-login__icon fab fa-twitter"></a>
          </div>
        </div>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("auth");

export default {
  name: "register",
  components: {},

  data() {
    return {
      form: {
        username: "",
        // email: "",
        password: "",
      },
      toast: () => {},
    };
  },
  mounted() {
    this.toast = this.$swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 10000,
    });
  },
  methods: {
    ...mapActions(["login"]),
    async Login() {
      let res = await this.login(this.form);

      console.log(res);
      if (res.user) {
        this.toast({
          type: "success",
          title: "Login Successfull!",
        });
        this.$router.push("/dasboard");
      } else {
        this.toast({
          type: "error",
          title: `${res.data.message}`,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,700");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Raleway, sans-serif;
}

body {
  background: linear-gradient(90deg, #f1b490, #d36145);
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.screen {
  background: linear-gradient(90deg, #d36145, #f1b490);
  position: relative;
  height: 600px;
  width: 360px;
  box-shadow: 0px 0px 24px #d36145;
}

.screen__content {
  z-index: 1;
  position: relative;
  height: 100%;
}

.screen__background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}

.screen__background__shape {
  transform: rotate(45deg);
  position: absolute;
}

.screen__background__shape1 {
  height: 520px;
  width: 520px;
  background: #fff;
  top: -50px;
  right: 120px;
  border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
  height: 220px;
  width: 220px;
  background: #a39547;
  top: -172px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape3 {
  height: 540px;
  width: 190px;
  background: linear-gradient(270deg, #d36145, #f1b490);
  top: -24px;
  right: 0;
  border-radius: 32px;
}

.screen__background__shape4 {
  height: 400px;
  width: 200px;
  background: #cc8675;
  top: 420px;
  right: 50px;
  border-radius: 60px;
}

.login {
  width: 320px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 100px;
}

.login__field {
  padding: 5px 0px;
  position: relative;
}

.login__icon {
  position: absolute;
  top: 30px;
  color: #d36145;
}

.login__input {
  border: none;
  border-bottom: 2px solid #d1d1d4;
  background: none;
  padding: 10px;
  padding-left: 24px;
  font-weight: 700;
  width: 75%;
  transition: 0.2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #ee8368;
}

.login__submit {
  background: #fff;
  font-size: 14px;
  margin-top: 30px;
  padding: 16px 20px;
  border-radius: 26px;
  border: 1px solid #d4d3e8;
  text-transform: uppercase;
  font-weight: 700;
  display: flex;
  align-items: center;
  width: 100%;
  color: #d36145;
  box-shadow: 0px 2px 2px #c07460;
  cursor: pointer;
  transition: 0.2s;
}

.login__submit:active,
.login__submit:focus,
.login__submit:hover {
  border-color: #c07460;
  outline: none;
}

.button__icon {
  font-size: 24px;
  margin-left: auto;
  color: #b58275;
}

.social-login {
  position: absolute;
  height: 140px;
  width: 160px;
  text-align: center;
  bottom: 0px;
  right: 0px;
  color: #fff;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-login__icon {
  padding: 20px 10px;
  color: #fff;
  text-decoration: none;
  text-shadow: 0px 0px 8px #b58975;
}

.social-login__icon:hover {
  transform: scale(1.5);
}
</style>