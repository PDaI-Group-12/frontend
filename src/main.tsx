import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AuthProvider} from "./hooks/useAuth.tsx";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage.tsx";
import MainPage from "./pages/MainPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AuthProvider userToken={localStorage.getItem("token") || ""}>
            <RouterProvider router={
                createBrowserRouter(
                    createRoutesFromElements(
                        <Route path="/frontend">
                            <Route index element={<MainPage/>}></Route>
                            <Route path="login" element={<LoginPage/>}/>
                        </Route>
                    )
                )
            }/>
        </AuthProvider>
    </StrictMode>,
)
