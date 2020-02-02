import { HOCAsync } from "ky-nice-ui";

export default [
  {
    path: "/useEffect",
    name: "首页",
    component: HOCAsync(() => import("./index")),
  }
]