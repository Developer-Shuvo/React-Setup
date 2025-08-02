import router from "./router/router";
import { RouterProvider } from "react-router-dom"; // ✅ Correct import

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
