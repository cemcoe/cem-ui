import Button from './Button'
import Cell from './Cell'
import Icon from './Icon'
import NavBar from './NavBar'

export const CemButton = {}
export const CemCell = {}
export const CemIcon = {}
export const CemNavBar = {}

CemButton.install = Vue => Vue.component(Button.name, Button)
CemCell.install = Vue => Vue.component(Cell.name, Cell)
CemIcon.install = Vue => Vue.component(Icon.name, Icon)
CemNavBar.install = Vue => Vue.component(NavBar.name, NavBar)

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