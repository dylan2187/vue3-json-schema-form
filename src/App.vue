<template>
  <img alt="Vue logo"
       src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"
              :age="12" />
  <p>{{state.name1}}</p>
  <p>computedName:{{computedName}}</p>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  ref,
  watchEffect,
} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// interface Config {
//   name: String
// }

export default defineComponent({
  name: 'App',
  props: {
    // config: {
    //   type: Object as PropType<Config>,
    //   required: true,
    // },
  },
  components: {
    HelloWorld,
  },
  mounted() {
    // if(this.config)
    // this.config.name
  },
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      name1: 'dylan',
    })
    const nameRef = ref('dylan')

    setInterval(() => {
      state.name1 += '1'
    }, 1000)
    const computedName = computed(() => {
      return state.name1 + '~'
    })
    watchEffect(() => {
      console.log(computedName)
    })
    return { state, computedName }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
