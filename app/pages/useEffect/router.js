import { HOCAsync } from "@nice/nice-ui";

export default [
  {
    path: "/useEffect",
    name: "首页",
    component: HOCAsync(() => import("./index")),
  }
]