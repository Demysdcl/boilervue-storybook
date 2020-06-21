<template>
  <button class="btn-examine" @click="$emit('click')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "No text"
    },
  },
}
</script>

<style>
.btn-examine {
  top: 1551px;
  left: 293px;
  width: 290px;
  height: 60px;
  background: #f38f1a 0% 0% no-repeat padding-box;
  border-radius: 9px;
  opacity: 1;
}
</style>