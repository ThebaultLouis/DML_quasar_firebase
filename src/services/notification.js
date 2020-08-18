import { Notify } from "quasar";

const notification = {
  success(message) {
    Notify.create({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: message
    });
  },
  error(message) {
    Notify.create({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: message
    });
  }
};

export { notification };
