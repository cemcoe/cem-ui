<template>
  <div class="button">
    <div class="info">Button</div>
    <div class="demo">
      <cem-button>默认按钮</cem-button>
      <cem-button type="primary">主要按钮</cem-button>
      <cem-button type="info">信息按钮</cem-button>
      <cem-button type="default">默认按钮</cem-button>
      <cem-button type="warning">警告按钮</cem-button>
      <cem-button type="danger">危险按钮</cem-button>
      <cem-button color="#f40">自定义颜色按钮</cem-button>
      <cem-button disabled>禁用按钮</cem-button>
      <cem-button loading>加载按钮</cem-button>
      <cem-button @click="btnClick">测试按钮点击</cem-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    const btnClick = function () {
      console.log("测试按钮点击");
    };

    return {
      btnClick,
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: rgb(236, 230, 230);
  padding: 10px;
}
</style>
