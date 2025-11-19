import { lazy, type PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router";
import { ErrorPage } from "@/pages/error-page";
import { ROUTES } from "@/shared/config/routes";
import { CheckAuthProvider } from "./CheckAuthProvider";

const Layout = lazy(() => import("@/pages/layout"));
const LoginPage = lazy(() => import("@/pages/login-page"));
const UsersPage = lazy(() => import("@/pages/users-page"));
const EditUserPage = lazy(() => import("@/pages/edit-user-page"));

const router = createBrowserRouter([
    {
        path: ROUTES.LOGIN,
        element: (
            <CheckAuthProvider>
                <LoginPage />
            </CheckAuthProvider>
        ),
    },
    {
        path: ROUTES.INDEX,
        element: (
            <CheckAuthProvider>
                <Layout />
            </CheckAuthProvider>
        ),
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.USERS,
                element: <UsersPage />,
            },
            {
                path: ROUTES.EDIT_USER,
                element: <EditUserPage />,
            },
        ],
    },
]);

export const RouterProvider = ({ children }: PropsWithChildren) => (
    <>
        <ReactRouterProvider router={router} />
        {children}
    </>
);
