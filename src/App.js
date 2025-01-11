import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./pages/posts";
import { Root } from "./components/Root";
import { Main } from "./pages/main";
import { Blog } from "./pages/blog";
import { Feedback } from "./pages/feedback";

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
          path: "blog",
          element: <Blog />
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
