import useIndex from "~/composables/useIndex"

export default defineComponent({
  render () {
    const { pageTitle } = useIndex();

    return <h1>{ pageTitle }</h1>
  }
})