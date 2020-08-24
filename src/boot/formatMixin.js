const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
]
export default ({ Vue }) => {
  Vue.mixin({
    methods: {
      timestampToDate(timestamp) {
        timestamp = new Date(timestamp)
        return `${timestamp.getDate()} ${
          months[timestamp.getMonth()]
        } ${timestamp.getFullYear()}`
      }
    }
  })
}
