<template>
    <div class="contact contact-container">
      <h1>Contact</h1>
      <p>Let's Connect!</p>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model="formData.subject" required />
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        successMessage: ''
      };
    },
    methods: {
      handleSubmit() {
        // Here you can handle form submission, e.g., send the data to an API
        console.log('Form Submitted:', this.formData);
        this.successMessage = 'Thank you for contacting us! We will get back to you soon.';
        
        // Reset form fields
        this.formData.name = '';
        this.formData.email = '';
        this.formData.subject = '';
        this.formData.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    margin-bottom: 5px;
  }
  
  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  </style>
  