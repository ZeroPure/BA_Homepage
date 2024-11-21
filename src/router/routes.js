const routes = [
    {
        path: "/",
        name: "main",
        component: ()=> import("@/views/main/Index.vue"),
        meta: {
            title: "Home of pure"
        }
    },
    {
        path: "/profile",
        name: "Profile",
        component: ()=> import("@/views/profile/Index.vue"),
        meta: {
            title: "Profile of pure",
            topBarTitle: "个人主页"
        }
    }
]

export default routes