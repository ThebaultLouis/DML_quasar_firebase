// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }
export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      isOnAdminPath() {
        return this.$route.matched.some(record => record.meta.admin)
      },
      isOnClassePath() {
        return this.$route.matched.some(record => record.meta.classe)
      }
    }
  })
}
