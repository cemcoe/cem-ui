<template>
  <nav>
    <div class="left" @click="clickLeft">
      <slot name="left"></slot>
    </div>
    <div class="center">{{title}}</div>
    <div class="right" @click="clickRight">
      <slot name="right"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: "CemNavBar",
  props: {
    title: {
      type: String,
    }
  },
  setup(props, context) {
    const clickLeft = () => {
      context.emit('clickLeft')

    }
    const clickRight = () => {
      context.emit('clickRight')

    }
    return {
      clickLeft,
      clickRight,
    }
  }

}
</script>

<style scoped>
nav {
  height: 44px;
  background-color: #fff;
  display: flex;
  line-height: 44px;
  text-align: center;
}
nav .left {
  /* background-color: #000; */
  width: 60px;
}
nav .center {
  flex: 1;
}
nav .right {
  /* background-color: #000; */
  width: 60px;
}

</style>