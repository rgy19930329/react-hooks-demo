import { HOCAsync } from "@nice/nice-ui";

export default {
  path: "/list/detail/:email",
  name: "系统配置-详情",
  component: HOCAsync(() => import("./index")),
}