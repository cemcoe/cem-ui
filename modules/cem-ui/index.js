import Button from './Button'

export const CemButton = {}

CemButton.install = Vue => Vue.component(Button.name, Button)

const COMPONENTS = [
  Button
]

const CemUI = {}

CemUI.install = function (Vue) {
  COMPONENTS.forEach((component) => {
    Vue.component(component.name, component)
  })
}


export default CemUI