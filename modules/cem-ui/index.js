import Button from './Button'
import Cell from './Cell'

export const CemButton = {}
export const CemCell = {}

CemButton.install = Vue => Vue.component(Button.name, Button)
CemCell.install = Vue => Vue.component(Cell.name, Cell)

const COMPONENTS = [
  Button,
  Cell,
]

const CemUI = {}

CemUI.install = function (Vue) {
  COMPONENTS.forEach((component) => {
    Vue.component(component.name, component)
  })
}


export default CemUI