<template>
  <div id="modal" class="modal is-active">
    <div class="modal-background" @click="$emit('closeDeleteModal')"></div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="$emit('closeDeleteModal')"
    ></button>
    <div class="modal-content">
      <div class="box">
        <figure
          class="image is-64x64 is-pulled-left has-text-centered is-vcentered"
        >
          <i class="fas fa-info-circle" id="info-icon"></i>
        </figure>
        <p class="has-text-centered delete-warning">
          <strong>{{ email }} will not be able to access the site.</strong>
        </p>
        <div class="has-text-centered">
          <button
            class="button is-danger"
            type="submit"
            @click="callDeleteMember"
          >
            Delete
          </button>
          <button
            class="button"
            type="button"
            @click="$emit('closeDeleteModal')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteMember",
  props: {
    id: { required: true },
    email: { required: true },
  },
  data() {
    return {
      showDeleteModal: false,
    };
  },
  methods: {
    callDeleteMember() {
      console.log("Deleted Member");
      this.$store.commit("deleteMember", this.id);
      this.showDeleteModal = false;
    },
  },
};
</script>


<style scoped>
#info-icon {
  font-size: 3rem;
  color: orange;
}
button {
  margin-left: 10px;
}
.delete-warning {
  margin-bottom: 1rem;
}
</style>


