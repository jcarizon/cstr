import useAdmin from "~/composables/admin/useAdmin";


export default defineComponent({
  render () {
    const { pageTitle } = useAdmin();

    return (
      <div>{ pageTitle }</div>
    )
  }
})