<template>
  <div :class="{ dropdown: true, 'is-active': dropDownState }">
    <div class="dropdown-trigger" @click="dropDownState = !dropDownState">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <i class="fas fa-ellipsis-v"></i>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item"> Edit Role </a>
        <a href="#" class="dropdown-item is-danger"> Remove </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageMember",
  data() {
    return {
      dropDownState: false
    };
  },
}
</script>
