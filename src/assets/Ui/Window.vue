<template>
  <div @click.self="$emit('close')" class="field">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.field {
  position: fixed;
  display: flex;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}</style>
