import {
    BooksList,
    BooksHot,
    Home,
    Login,
    Users
} from "@pages"

//带layout布局的
export const layoutRouteComponent = [
    {
        path:"/home",
        meta:{},
        component:Home,
        name:"首页",
        key:"/home"
    },
    {
        path:"/books",
        meta:{},
        name:"书籍管理",
        key:"/books",
        children:[
            {
                path:"/books/booksList",
                name:"书籍列表",
                meta:{},
                component:BooksList,
                key:"/books/booksList"
            },
            {
                path:"/books/booksHot",
                name:"热门书籍",
                meta:{},
                component:BooksHot,
                key:"/books/booksHot"
            }
        ]
    },
    {
        path:"/users",
        meta:{},
        component:Users,
        name:"用户列表",
        key:"/users"
    }
]

//不带layout布局的
export const noLayoutRouteComponent = [
    {
        path:"/login",
        meta:{},
        component:Login,
        name:"登陆",
        key:"/login"
    }
]