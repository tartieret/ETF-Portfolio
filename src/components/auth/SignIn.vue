<template>
  <div class="row align-items-center">
    <div class="col-xs-8 col-md-4 col-lg-3 signin-form">
      <h4>Sign In</h4>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <p>Don't have an account? <router-link to="/signup">Create one!</router-link> </p>
        <div class="submit">
          <button type="submit" class="btn btn-primary">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
    }
  }
};
</script>

<style scoped>

.signin-form {
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}
</style>