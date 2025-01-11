import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./pages/posts";
import { Root } from "./components/Root";
import { Main } from "./pages/main";
import { Blog } from "./pages/blog";
import { Feedback } from "./pages/feedback";
import { Post } from "./pages/posts/components/Post";
import './App.css'
import { BlogItem } from "./pages/blog/components/blogItem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: 'posts/:postId',
          element: <Post />
        },
        {
          path: "blog",
          element: <Blog />
        },
        {
          path:"blog/:pictureId",
          element: <BlogItem />
        },
        {
          path: "feedback",
          element: <Feedback /> 
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
