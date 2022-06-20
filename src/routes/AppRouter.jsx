import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';

// import { DashboardRoutes } from './DashboardRoutes';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {


    return (
        <BrowserRouter>

            <Routes>

               

                <Route
                    path={`${process.env.REACT_APP_HOMEPAGE}/*`}
                    element={
                        // <PrivateRoute>
                            <DashboardRoutes />
                        // </PrivateRoute>
                    }
                />


                {/* <Route path="/" element={<Navigate to={`${process.env.REACT_APP_HOMEPAGE}/`} />} /> */}

            </Routes>

        </BrowserRouter>
    )
}
