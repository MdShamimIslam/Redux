import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { router } from "./Routes/Router";

const App = () => {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div>Checking authentication...</div>
  ) : (
    <RouterProvider router={router} />
  );
};

export default App;
