import './index.css'
// @ts-expect-error
import View from './view.svelte'
const app = new View({
  target: document.body,
})