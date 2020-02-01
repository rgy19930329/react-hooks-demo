import { HOCAsync } from "@nice/nice-ui";

export default [
  {
    path: "/useState",
    name: "首页",
    component: HOCAsync(() => import("./index")),
  }
]