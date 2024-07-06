<template>
  <div>
    <div class="layout-row justify-content-center">
      <div class="card mt-75">
        <div class="canvas"
             :style="{ backgroundColor: selectedColor }"
             data-testid="selectedColor">
          <p class="text-center mx-auto px-5">{{ selectedColor }}</p>
        </div>
        <div class="card-actions">
          <div
              class="layout-row justify-content-center align-items-center"
              data-testid="colorPickerOptions">
            <div
                v-for="color in colorPickerOptions"
                :key="color"
                :style="{ backgroundColor: color }"
                class="color-box mx-8 my-15"
                :class="{'selected': selectedColor === color }"
                @click="selectColor(color)">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    colorPickerOptions: {
      type: Array,
      required: true
    },
    initialSelectedColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedColor: this.initialSelectedColor
    };
  },
  methods: {
    selectColor(color) {
      this.selectedColor = color;
    }
  }
}
</script>

<style scoped>
.canvas {
  width: 100%;
  height: 280px;
  transition: background-color 0.3s ease-in-out;
  position: relative;
}

.canvas p {
  font-size: 0.8em;
  position: absolute;
  bottom: 4px;
  width: 30%;
  background: rgba(255, 255, 255, 0.6);
  left: 35%;
  font-style: italic;
}

.color-box {
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
}

.color-box::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 2px solid black;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  will-change: opacity;
}

.color-box.selected::after {
  opacity: 1;
}

.divider {
  color: rgba(0, 0, 0, 0.12);
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0px;
  max-height: 0px;
  border: solid;
  border-width: thin 0 0 0;
  transition: inherit;
}
</style>
