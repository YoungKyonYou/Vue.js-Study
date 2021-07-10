import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingInputNumber from "../views/DataBindingInputNumber.vue";
import DataBindingTextarea from "../views/DataBindingTextarea.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingCheckbox2 from "../views/DataBindingCheckbox2.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataBindingClass from "../views/DataBindingClass.vue";
import DataBindingList from "../views/DataBindingList.vue";
import DataBindingList2 from "../views/DataBindingList2.vue";
import EventChange from "../views/EventChange.vue";
import Watch from "../views/Watch.vue";
import NestedComponent from "../views/NestedComponent.vue";
import ParentComponent3 from "../views/ParentComponent3.vue";
import ParentComponent4 from "../views/ParentComponent4.vue";
import ParentComponent5 from "../views/ParentComponent5.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    //component의미: 지정된 path로 들어왔을 때 보여줄 vue 컴포넌트, 앞으로 구현할 vue 파일을 연결하고, 해당 파일을 실행시킨다.
    component: DataBinding,
  },
  {
    path: "/databindinginputtext",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/databindinginputnumber",
    name: "DataBindingInputNumber",
    component: DataBindingInputNumber,
  },
  {
    path: "/databindingtextarea",
    name: "DataBindingTextarea",
    component: DataBindingTextarea,
  },
  {
    path: "/databindingselect",
    name: "DataBindingTextarea",
    component: DataBindingSelect,
  },
  {
    path: "/databindingcheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/databindingcheckbox2",
    name: "DataBindingCheckbox2",
    component: DataBindingCheckbox2,
  },
  {
    path: "/databindingradio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/databindingbutton",
    name: "DataBindingButton",
    component: DataBindingButton,
  },
  {
    path: "/databindingclass",
    name: "DataBindingClass",
    component: DataBindingClass,
  },
  {
    path: "/databindinglist",
    name: "DataBindingList",
    component: DataBindingList,
  },
  {
    path: "/eventchange",
    name: "EventChange",
    component: EventChange,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/databindinglist2",
    name: "DataBindingList2",
    component: DataBindingList2,
  },
  {
    path: "/nestedcomponent",
    name: "NestedComponent",
    component: NestedComponent,
  },
  {
    path: "/parentcomponent3",
    name: "ParentComponent3",
    component: ParentComponent3,
  },
  {
    path: "/parentcomponent4",
    name: "ParentComponent4",
    component: ParentComponent4,
  },
  {
    path: "/parentcomponent5",
    name: "ParentComponent5",
    component: ParentComponent5,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
