import { HOCAsync } from "ky-nice-ui";

export default [
  {
    path: "/useState",
    name: "首页",
    component: HOCAsync(() => import("./index")),
  }
]