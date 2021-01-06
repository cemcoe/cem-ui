<template>
  <div class="cell" v-if="!props.label">
    <div class="left title">{{ props.title }}</div>
    <div class="right value">{{ props.value }}</div>
  </div>
  <div class="cell-label" v-if="props.label">
    <div class="top">
      <div class="left title">{{ props.title }}</div>
      <div class="right value">{{ props.value }}</div>
    </div>
    <div class="bottom">
      <div class="label">{{ props.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CemCell",
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
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
.cell {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  position: relative;
}
.value {
  color: rgb(128, 136, 133);
}

.cell::after {
  position: absolute;
  box-sizing: border-box;
  content: " ";
  pointer-events: none;
  right: 16px;
  bottom: 0;
  left: 16px;
  border-bottom: 1px solid #ebedf0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}

/* has label */
.cell-label {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
}
.cell-label .top {
  display: flex;
  justify-content: space-between;
}
.cell-label .label {
  font-size: 12px;
  color: rgb(99, 95, 95);
}
</style>