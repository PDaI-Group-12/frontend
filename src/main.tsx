import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import {LoginPage} from "./pages/LoginPage.tsx";
import RootPage from "./pages/RootPage.tsx";
import {EmployeesPage} from "./pages/EmployeesPage.tsx";
import {EditUserPage} from "./pages/EditUserPage.tsx";
import {SaveHoursPage} from "./pages/SaveHoursPage.tsx";

import {AuthProvider} from "./hooks/providers/AuthProvider.tsx";
import {ThemeSwitchProvider} from "./hooks/providers/ThemeSwitchProvider.tsx";
import {LabelProvider} from "./hooks/providers/LabelProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LabelProvider>
            <ThemeSwitchProvider>
                <AuthProvider userToken={localStorage.getItem("token") || ""}>
                    <RouterProvider router={
                        createBrowserRouter(
                            createRoutesFromElements(
                                <Route path="/frontend" element={<RootPage/>}>
                                    <Route index element={<LoginPage/>}/>
                                    <Route path="employees" element={<EmployeesPage/>}/>
                                    <Route path="profile" element={<EditUserPage/>}/>
                                    <Route path="save-hours" element={<SaveHoursPage/>}/>
                                </Route>
                            )
                        )
                    }/>
                </AuthProvider>
            </ThemeSwitchProvider>
        </LabelProvider>
    </StrictMode>
)