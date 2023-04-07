import { defineComponent } from 'vue'

const PropsType = {
  msg: {
    type: String,
    required: true,
  },
  age1: {
    type: Number,
    // required: true,
  },
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {
    return () => {
      return (
        <div id="HelloWorld">
          <div>hello msg: {props.msg}</div>
          {/* <div>hello age: {props.age1}</div> */}
        </div>
      )
    }
  },
})
