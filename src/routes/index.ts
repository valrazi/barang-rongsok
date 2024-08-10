import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/Default.vue"),
    children: [
      {
        name: "home",
        path: "",
        component: () => import("@/pages/admin/Login.vue"),
      },
      {
        name: "admin-login",
        path: "admin-login",
        meta:{isAuth: true},
        component: () => import("@/pages/admin/Login.vue"),
      },
      {
        name: "user-list",
        path: "user-list",
        meta:{needAuth: true},
        component: () => import("@/pages/admin/UserList.vue"),
      },
      {
        name: "product-list",
        path: "product-list",
        meta:{needAuth: true},
        component: () => import("@/pages/admin/ProductList.vue"),
      },
    ],
  },
];

export * from "./guard";
