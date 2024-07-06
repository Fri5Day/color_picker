<template>
  <div>
    <h8k-navbar v-bind:header="title"></h8k-navbar>
    <ColorPicker
        :color-picker-options="colorPickerOptions"
        :initial-selected-color="initialSelectedColor"/>
  </div>
</template>

<script>
import ColorPicker from "@/components/ColorPicker";

export default {
  components: {
    ColorPicker
  },
  data() {
    return {
      title: 'Color Picker',
      colorPickerOptions: ['#5d77f5', '#0fd085', '#ffba5b', '#f95e62', 'lightpink'],
      initialSelectedColor: 'black'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/h8k-design/dist/index.css';
</style>
