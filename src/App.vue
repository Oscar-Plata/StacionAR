<script setup>
// import { RouterLink, RouterView } from "vue-router";
import ARScreen from "./components/ARScreen.vue";
import { ref } from "vue";
const text = ref();
</script>
<template>
  <ARScreen />
  <!-- <a-scene arjs>
      <a-marker type="pattern" url="/src/assets/pattterns/pattern-1176.patt">
        <a-sphere color="red" radius="4"></a-sphere>
        <a-entity
          position="0 0 0"
          scale="1 1 1"
          rotation="0 0 90"
          gltf-model="/src/assets/models/steamboat_willie.glb"
        ></a-entity>
      </a-marker>
      <a-entity camera look-controls position="0 0 0"></a-entity>
    </a-scene> -->
</template>

<style scoped></style>
