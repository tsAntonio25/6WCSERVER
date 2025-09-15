<template>
  <h1>Admin Form</h1>
  <form @submit.prevent="submitAdminForm" enctype="multipart/form-data">
    <div class="form-group">
      <label for="adminId">Admin ID</label>
      <input v-model="admin.adminId" type="text" id="adminId" />
    </div>

    <div class="form-group">
      <label for="firstName">First Name</label>
      <input v-model="admin.firstName" type="text" id="firstName" />
    </div>

    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input v-model="admin.lastName" type="text" id="lastName" />
    </div>

    <div class="form-group">
      <label for="department">Department</label>
      <input v-model="admin.department" type="text" id="department" />
    </div>

    <div class="form-group">
      <label for="file">Select File</label>
      <input type="file" id="file" @change="handleFile" />
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

const admin = ref({
  adminId: "",
  firstName: "",
  lastName: "",
  department: "",
  file: null,
});

const response = ref(null);


const handleFile = (e) => {
  admin.value.file = e.target.files[0];
};


const submitAdminForm = async () => {
  try {
    const formData = new FormData();
    formData.append("adminId", admin.value.adminId);
    formData.append("firstName", admin.value.firstName);
    formData.append("lastName", admin.value.lastName);
    formData.append("department", admin.value.department);
    formData.append("file", admin.value.file);

    const res = await fetch("http://localhost:3000/postAdmin", {
      method: "POST",
      body: formData,
    });

    response.value = await res.json();
  } catch (err) {
    console.error("Error submitting admin form:", err);
    response.value = { error: "Failed to submit form" };
  }
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
  background: #fed4ce;
}

h1 {
  text-align: center;
  margin: 2rem 0;
  color: #a91f00;
}

form {
  border: 2px solid #a91f00;
  box-shadow: 4px 6px 15px rgba(56, 9, 3, 0.3);
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
  color: #333;
}

input[type="text"],
input[type="file"] {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease-in-out;
}

input[type="text"]:focus,
input[type="file"]:focus {
  border: 1px solid #a91f00;
  box-shadow: 0 0 5px rgba(169, 31, 0, 0.4);
}

button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: #a91f00;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #7a1500;
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
