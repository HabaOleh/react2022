import {Route, Routes, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {
    CommentsPage,
    HomePage,
    NotFoundPage,
    PostCommentsPage,
    PostsPage,
    SingleCommentPage,
    SinglePostPage,
    SingleUserPage,
    UserPostsPage,
    UsersPage
} from "./pages";


function App() {
    return (
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"home"}/>}/>
                <Route path={"home"} element={<HomePage/>}/>
                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":userId"} element={<SingleUserPage/>}>
                        <Route path={"posts"} element={<UserPostsPage/>}/>
                    </Route>
                </Route>
                <Route path={"posts"} element={<PostsPage/>}>
                    <Route path={":id"} element={<SinglePostPage/>}>
                        <Route path={"comments"} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={"comments"} element={<CommentsPage/>}>
                    <Route path={":commentId"} element={<SingleCommentPage/>}/>
                </Route>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
