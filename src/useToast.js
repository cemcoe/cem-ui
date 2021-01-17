import { reactive, createApp, h } from 'vue';


export function useToast() {
  return function Toast(msg) {
    console.log(msg)
    // 拿到传来的数据

    const state = reactive({
      show: true, // toast元素是否显示
      text: msg
    });

    const toastVM = createApp({
      setup() {
        return () =>
          h(
            'div',
            {
              // 这里是根据配置显示一样不同的样式
              class: [
                'lx-toast',
              ],
              style: {
                display: state.show ? 'block' : 'none',
                background: "#000",
                color: "#fff",
                width: '100px',
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "8px 10px",
              }
            },
            state.text
          );
      }
    });

    setTimeout(() => {
      state.show = false
    }, 1000);

    const toastWrapper = document.createElement('div');
    toastWrapper.id = 'lx-toast';
    document.body.appendChild(toastWrapper);
    toastVM.mount('#lx-toast');
  }
}