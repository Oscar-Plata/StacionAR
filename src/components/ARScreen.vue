<template>
  <div class="container">
    <a-scene arjs>
      <template v-for="(item, index) in markersAndModels" :key="index">
        <!-- <a-marker :preset="item.marker.preset"> -->
        <a-marker preset="custom" type="pattern" :url="item.marker.patt">
          <a-entity :position="item.marker.position" :scale="item.marker.scale">
            <a-text
              :value="item.marker.preset"
              color="yellow"
              position="0 0 -2"
              rotation="270 0 0"
              scale="2 2 2"
            ></a-text>
            <a-gltf-model
              :src="item.model.src"
              :position="item.model.position"
              :rotation="item.model.rotation"
              :scale="item.model.scale"
              :animation-mixer="item.model.animConf"
            >
            </a-gltf-model>
          </a-entity>
        </a-marker>
      </template>
      <a-entity camera look-controls></a-entity>
    </a-scene>
  </div>
</template>

<script setup>
import { ref } from "vue";

const markersAndModels = ref([
  {
    marker: {
      preset: "Pokemon 1234\n123143",
      patt: "/src/assets/pattterns/pattern-pokebal (2).patt",
      position: "0 0 0",
      rotation: "0 0 0",
      scale: "1 1 1",
    },
    model: {
      src: "/src/assets/models/pokeballDUO.glb",
      position: "0 0 0",
      rotation: "0 270 90",
      scale: "1 1 1",
      animConf: "loop:repeat",
    },
  },
  {
    marker: {
      preset: "Bird",
      patt: "/src/assets/pattterns/pattern-Pajaro.patt",
      position: "0 0 0",
      scale: "1 1 1",
      rotation: "0 0 0",
    },
    model: {
      src: "/src/assets/models/birds.glb",
      position: "0 0 0",
      scale: "2 2 2",
      rotation: "0 50 0",
      animConf: "loop:repeat",
    },
  },
  {
    marker: {
      preset: "Train",
      patt: "/src/assets/pattterns/pattern-marker.patt",
      position: "0 0 0",
      scale: "1 1 1",
      rotation: "0 0 0",
    },
    model: {
      src: "/src/assets/models/train.glb",
      position: "0 0 0",
      scale: "1 1 1",
      rotation: "0 50 0",
      animConf: "loop:repeat",
    },
  },
  // Agrega más objetos según sea necesario
]);
</script>

<style scoped></style>
