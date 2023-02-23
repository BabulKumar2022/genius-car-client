import { RouterProvider } from "react-router-dom";
import router from "./pages/route/routes";

function App() {



  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
