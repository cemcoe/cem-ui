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

  <div class="cell">
    <div class="info">Cell</div>
    <div class="demo">
      <cem-cell title="单元格" value="内容" />
      <cem-cell title="单元格" value="内容" label="描述信息" />
    </div>
  </div>

  <div class="icon">
    <div class="info">Icon</div>
    <div class="demo">
      <div class="icon-item" v-for="(icon, i) in iconNameList" :key="i">
        <cem-icon :name="icon.name"></cem-icon>
        <span>{{ icon.name }}</span>
      </div>
    </div>
  </div>

  <div class="toast">
    <div class="info">toast</div>
    <div class="demo">
      <button @click="toastClick">toast</button>
    </div>
  </div>
</template>

<script>
import iconNameList from "./iconNameList";
import { useToast } from "./useToast.js";

export default {
  name: "App",
  setup() {
    const btnClick = function () {
      console.log("测试按钮点击");
    };

    const toastClick = function () {
      const Toast = useToast(); // 所有的子组件都要从useToast拿到toast方法
      Toast("Hello World");
    };

    return {
      btnClick,
      iconNameList,
      toastClick,
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: rgb(236, 230, 230);
  padding: 10px;
}

.icon .demo {
  display: flex;
  flex-wrap: wrap;
}
.icon .demo .icon-item {
  padding: 10px;
  margin: 2px;
  background-color: #fff;
  text-align: center;
}
</style>
