import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Hone",
    component: () => import("../pages/index.vue"),
    meta: {
      title: "首頁",
      name: "首頁",
      requiresAuth: true,
      icon: "IconHome",
    },
  },
  // {
  //   path: "/admin-list",
  //   name: "Admin-list",
  //   component: () => import("../pages/admin-list.vue"),
  //   meta: {
  //     title: "管理員列表",
  //     name: "管理員列表",
  //     requiresAuth: true,
  //     icon: "IconsUsers",
  //   },
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../pages/login.vue"),
  //   meta: {
  //     title: "登入",
  //     name: "登入",
  //     requiresAuth: false,
  //     permissionId: "",
  //   },
  // },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/[...all].vue"),
    meta: {
      title: "404 Not Found",
      name: "404 page",
      requiresAuth: true,
      permissionId: "",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const title = "Funs Girl";
  document.title = title || to.meta.title;

  if (to.meta.requiresAuth) {
    // if (userInfo?.token !== "" && userInfo) {
    next();
    // } else {
    //   next("/login");
    //   localStorage.removeItem("userPermissions");
    //   localStorage.removeItem("userInfo");
    // }
  } else {
    next();
  }
});

export default router;
