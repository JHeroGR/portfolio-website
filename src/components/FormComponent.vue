<template lang="">
    <form>
      <div class="bg-white border rounded shadow-sm overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col">
              <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Name / Company" />
            </div>
            <div class="col">
              <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Email" />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Phone Number" />
            </div>
            <div class="col">
              <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Subject" />
            </div>
          </div>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
          <br />
          <input type="submit" class="form-control btn btn-success" />
        </div>
      </div>
    </form>
</template>

<script>
export default {
  name: "FormComponent",
};
</script>

<style>
form {
  margin: 25px 50px;
}

form .container {
  padding: 10px;
}

@media only screen and (max-width:600px) {
  form .container {
    padding: 20px;
  }
}

</style>
