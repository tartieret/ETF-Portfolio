<template>
  <div class="row align-items-center">
    <div class="col-xs-8 col-md-4 col-lg-3 signin-form">
      <h4>Sign Up</h4>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email">
          <small
            id="emailHelp"
            class="form-text text-muted"
          >We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password">
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirm-password"
            v-model="confirmPassword"
          >
        </div>
        <div class="form-group">
          <label for="age">Your Age</label>
          <input type="number" class="form-control" id="age" v-model.number="age">
        </div>
        <div class="form-group">
          <label for="country">Country</label>
          <select id="country" class="form-control" v-model="country">
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="india">India</option>
            <option value="uk">UK</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="terms" v-model="terms">
          <label class="form-check-label" for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      age: null,
      password: "",
      confirmPassword: "",
      country: "canada",
      terms: false
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        terms: this.terms
      };
      axios
        .post("/users.json", formData)
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
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