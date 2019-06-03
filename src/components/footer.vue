<template>
  <footer>
    <div class="circle"></div>
    <div class="second-circle"></div>

  </footer>
</template>
<script>
export default {name: 'footer'}
</script>
<style>
footer {
  background: rgb(238,174,202);
  background: linear-gradient(131deg, rgba(238,174,202,1) 0%, rgba(1,7,80,1) 100%);
  height: 500px;
  position: relative;
  overflow: hidden;
}
.circle {
  background: radial-gradient(ellipse at center, #ffbdd700 0%, #ffbdd70f 71%, transparent 66%);
  background-size: 34% 97%;
  background-repeat: repeat-x;
  background-position: -20px center;
  width: 100vw;
  height: 341px;
  overflow: hidden;
  top: -157px;
  position: absolute;
}

.second-circle {
  background: radial-gradient(ellipse at center, #ffbdd700 0%, #ffbdd70f 71%, transparent 66%);
  background-size: 34% 97%;
  background-repeat: repeat-x;
  background-position: -20px center;
  width: 100vw;
  height: 344px;
  overflow: hidden;
  top: -172px;
  left: 246px;
  position: absolute;
}
</style>