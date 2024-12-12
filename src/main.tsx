import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";

import {LoginPage} from "./pages/LoginPage.tsx";
import {RootPage} from "./pages/RootPage.tsx";
import {EmployeesPage} from "./pages/EmployeesPage.tsx";
import {EditUserPage} from "./pages/EditUserPage.tsx";
import {SaveHoursPage} from "./pages/SaveHoursPage.tsx";

import {AuthProvider} from "./hooks/providers/AuthProvider.tsx";
import {ThemeSwitchProvider} from "./hooks/providers/ThemeSwitchProvider.tsx";
import {LabelProvider} from "./hooks/providers/LabelProvider.tsx";
import {PaymentHistoryPage} from "./pages/PaymentHistoryPage.tsx";
import {RequestPaymentPage} from "./pages/RequestPaymentPage.tsx";
import RequestedPaymentsPage from "./pages/RequestedPaymentsPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SnackbarProvider} from "notistack";
import {ProtectedRoute} from "./components/ProtectedRoute.tsx";
import {RegisterUserPage} from "./pages/RegisterUserPage.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <LabelProvider>
            <ThemeSwitchProvider>
                <SnackbarProvider>
                    <QueryClientProvider client={new QueryClient()}>
                        <AuthProvider>
                            <RouterProvider router={
                                createBrowserRouter(
                                    createRoutesFromElements(
                                        <Route path="/" element={<RootPage/>}>
                                            <Route index element={<LoginPage/>}/>
                                            <Route path="employees"
                                                   element={<ProtectedRoute children={<EmployeesPage/>}/>}/>
                                            <Route path="profile"
                                                   element={<ProtectedRoute children={<EditUserPage/>}/>}/>
                                            <Route path="save-hours"
                                                   element={<ProtectedRoute children={<SaveHoursPage/>}/>}/>
                                            <Route path="payment-history"
                                                   element={<ProtectedRoute children={<PaymentHistoryPage/>}/>}/>
                                            <Route path="request-payments"
                                                   element={<ProtectedRoute children={<RequestPaymentPage/>}/>}/>
                                            <Route path="requested-payments"
                                                   element={<ProtectedRoute children={<RequestedPaymentsPage/>}/>}/>
                                            <Route path="register"
                                                   element={<ProtectedRoute children={<RegisterUserPage/>}/>}/>
                                        </Route>
                                    ), {
                                        basename: "/frontend"
                                    }
                                )
                            }/>
                        </AuthProvider>
                    </QueryClientProvider>
                </SnackbarProvider>
            </ThemeSwitchProvider>
        </LabelProvider>
    </StrictMode>
)