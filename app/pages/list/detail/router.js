import { HOCAsync } from "@nice/nice-ui";

export default {
  path: "/list/detail/:f",
  name: "系统配置-详情",
  component: HOCAsync(() => import("./index")),
}