<template>
  <h1>Student Form</h1>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="studentID">Student ID</label>
      <input v-model="student.studentID" type="text" id="studentID" />
    </div>

    <div class="form-group">
      <label for="firstName">First Name</label>
      <input v-model="student.firstName" type="text" id="firstName" />
    </div>

    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input v-model="student.lastName" type="text" id="lastName" />
    </div>

    <div class="form-group">
      <label for="section">Section</label>
      <input v-model="student.section" type="text" id="section" />
    </div>

    <button type="submit">Submit</button>
  </form>

  <div v-if="response" class="response-box">
    <h3>Server Response:</h3>
    <pre>{{ response }}</pre>
  </div>
</template>

<script setup>
import { ref } from "vue";

const student = ref({
  studentID: "",
  firstName: "",
  lastName: "",
  section: ""
});

const response = ref(null);

const submitForm = async () => {
  const query = new URLSearchParams(student.value).toString();
  const res = await fetch(`http://localhost:3000/getStudent?${query}`);
  response.value = await res.json();
};
</script>

<style scoped>
    body {
    font-family: Arial, Helvetica, sans-serif;
    background: #99cbe1; 
    }

    h1 {
    text-align: center;
    margin: 2rem 0;
    color: #0035a9;
    }

    form {
    border: 2px solid #0035a9;
    box-shadow: 4px 6px 15px rgba(3, 28, 56, 0.3);
    background: #fff;
    border-radius: 15px;
    width: 350px;
    margin: 1em auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }

    .form-group {
    display: flex;
    flex-direction: column;
    }

    label {
    font-weight: bold;
    margin-bottom: 0.3rem;
    color: #222;
    }

    input[type="text"] {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
    transition: border 0.2s ease-in-out;
    }

    input[type="text"]:focus {
    border: 1px solid #0035a9;
    box-shadow: 0 0 5px rgba(0, 53, 169, 0.4);
    }

    button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: none;
    background-color: #0035a9;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    }

    button:hover {
    background-color: #002377;
    }

    .response-box {
  width: 350px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fff4f2;
  font-size: 14px;
  color: #333;
}
</style>