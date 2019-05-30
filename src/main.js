import Vue from "vue";
import "@/assets/css/common.styl";
import Toast from "@/components/Toast.vue";
import { mountListElement } from "@/pages/list";
import { mountFileListElement } from "@/pages/view";

// Init toast item
const ToastVM = Vue.extend(Toast);

const toast = new ToastVM().$mount();
document.body.appendChild(toast.$el);

Object.defineProperty(Vue.prototype, "$toast", { value: toast });

const topicListEl = document.querySelector("#topic_list");
if (topicListEl) {
  const listVM = mountListElement(topicListEl, function() {
    listVM.$destroy();
  });
}

const fileListEl = document.querySelector("#resource-tabs .file_list");

if (fileListEl) {
  const fileListVM = mountFileListElement(fileListEl, function() {
    fileListVM.$destroy();
  });
}
