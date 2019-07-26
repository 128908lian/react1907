import Loadable from 'react-loadable';
import Loading from '@common/loading';

const BooksList = Loadable({
    loader: () => import('./books/booksList'),
    loading: Loading,
});

const BooksHot = Loadable({
    loader: () => import('./books/booksHot'),
    loading: Loading,
});


const Home = Loadable({
    loader: () => import('./home'),
    loading: Loading,
});


const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const Users = Loadable({
    loader: () => import('./users'),
    loading: Loading,
});


export {
    BooksList,
    BooksHot,
    Home,
    Login,
    Users
}