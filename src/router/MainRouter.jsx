import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Service";
const routers = createBrowserRouter([
    {
        path: "/",
        element: <PublicRouter />,
        children: [
            { path: "", index: true, element: <Home /> },
            { path: "/about", element: <About /> },
            // { path: "career", element: <Career /> },
            { path: "contact", element: <Contact /> },
            // { path: "employer", element: <Employer /> },
            // { path: "ites", element: <Ites /> },
            // { path: "login", element: <Login /> },
            { path: "services", element: <Services /> },
            // { path: "services/:id", element: <ServiceDetails /> },
        ],
    },
]);

export default function MainRouter() {
    return <RouterProvider router={routers} />;
}
