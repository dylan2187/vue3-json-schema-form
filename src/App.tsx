import { defineComponent, reactive } from 'vue'
import HelloWorld from './components/HelloWorld'
// function returnHelloWorld(num: number) {
//   return <HelloWorld />
// }
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'wangkai',
    })

    setInterval(() => {
      state.name += 'h'
    }, 1000)

    return () => {
      return (
        <div id="app">
          <p>{state.name}</p>
          <HelloWorld msg="hello" />
        </div>
      )
    }
    // return () => {
    //   return h('div', { id: 'app' }, [h('p', state.name)])
    // }
  },
})
