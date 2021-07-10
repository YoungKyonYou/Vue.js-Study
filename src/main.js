import { createApp } from "vue";
import App from "./App.vue";
//import router from './router'를 통해 router 폴더의 index.js가 import되게 된다.
import router from "./router";
//mixins 파일을 사용할 수 있도록 등록
import mixins from "./mixins";

//createApp(App)은 최상위 컴포넌트인 App.vue로 app을 생성하고 use(router)코드를 추가하여 App.vue에서 router가
//사용될 수 있도록 추가했다. 그리고 App.vue를 public 폴더의 index.html에 정의되어 있는 id="app"인 html element에 마운트 시킨 것이다.
const app = createApp(App);
app.use(router);
app.mixin(mixins);
app.mount("#app");
