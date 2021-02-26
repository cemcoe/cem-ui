<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="iconLink"></use>
    </svg>
  </div>
</template>

<script>
import { computed } from "vue";
import "./iconfont";
export default {
  name: "CemIcon",
  props: {
    name: {
      type: String,
    },
    theme: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const iconLink = computed(() => {
      let theme
      if(props.theme === '') {
        theme = ''

      } else {
        theme = props.theme + '-'
      }
      return `#icon${theme}${props.name}`;
    });

    return {
      props,
      iconLink,
    };
  },
};
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>