<template>
    <div class="modal" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>You want to select this package?</p>
        <span>You will be redirected to Fiverr</span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-success">Yes</button>
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: "ModalComponent",
    props: {
        title: String
    }
}
</script>