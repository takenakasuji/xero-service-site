<template>
  <div class="loading-page">
    <img src="images/bglogo.png" alt="" />
  </div>
</template>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:#2a3134;
}
img {
  animation: fadeIn 2s ease 0s 1 normal;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 30%;
  max-height: 30%;
}
@keyframes fadeIn {
  0% {opacity: 0}
  100% {opacity: 1}
}
</style>