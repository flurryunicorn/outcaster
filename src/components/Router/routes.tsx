import Dashboard from "pages/Dashboard"
import type { PathRouteProps } from "react-router-dom"

export const routes: Array<PathRouteProps> = [
    {
        path: "/",
        element: <Dashboard />
    }
]

export const privateRoutes: Array<PathRouteProps> = []
