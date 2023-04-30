import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom'
import { Routes as AppRoutes } from '../models/constant';
import {
    LoginPage,
    RegisterPage,
    HomePage,
    BlogsPage,
    UserProfilePage
} from '../pages';
import BlogDetailPage from '../pages/user/blog-detail/BlogDetailPage';

export default function AppRouter() {

    return (
        <Router>
            <Routes>
                {/* route => / */}
                <Route
                    path={AppRoutes.PUBLIC_HOME}
                    element={<HomePage />}
                />
                {/* route => /login-account */}
                <Route
                    path={AppRoutes.LOGIN}
                    element={<LoginPage />}
                />
                {/* route => /register-account */}
                <Route
                    path={AppRoutes.REGISTER}
                    element={<RegisterPage />}
                />
                {/* route => /blogs */}
                <Route
                    path={AppRoutes.BLOGS_PAGE}
                    element={<BlogsPage />}
                />
                {/* route => /blogs/:blogId */}
                <Route
                    path={AppRoutes.BLOG_DETAIL_PAGE}
                    element={<BlogDetailPage />}
                />
                {/* route => /me */}
                <Route
                    path={AppRoutes.USER_PROFILE}
                    element={<UserProfilePage />}
                />
            </Routes>
        </Router>
    )
}