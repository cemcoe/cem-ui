<template>
  <button
    :class="props.type"
    :style="{ backgroundColor: props.color }"
    :disabled="props.disabled || props.loading"
  >
    <div v-show="!props.loading">
      <slot></slot>
    </div>
    <div v-show="props.loading">加载中。。。</div>
  </button>
</template>

<script>
export default {
  name: "CemButton",
  props: {
    type: {
      default: "default",
    },
    color: {},
    loading: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
  },
  setup(props) {
    return {
      props,
    };
  },
};
</script>

<style scoped>
button {
  border: 0;
  background-color: transparent;
  padding: 10px;
}
.primary {
  background-color: rgb(11, 235, 96);
}
.info {
  background-color: rgb(11, 35, 247);
}
.default {
  background-color: #fff;
}
.warning {
  background-color: rgb(226, 6, 6);
}
.danger {
  background-color: rgb(165, 40, 40);
}
</style>