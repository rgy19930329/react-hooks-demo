import { HOCAsync } from "@nice/nice-ui";

export default {
  path: "/list",
  name: "列表页",
  component: HOCAsync(() => import("./index")),
}