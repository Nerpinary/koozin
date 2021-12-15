import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    STEP1_ROUTE,
    STEP2_ROUTE,
    STEP3_ROUTE
} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import {Step1} from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]
export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: STEP1_ROUTE,
        Component: Step1
    },
    {
        path: STEP2_ROUTE,
        Component: Step2
    },
    {
        path: STEP3_ROUTE,
        Component: Step3
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: CART_ROUTE,
        Component: Cart
    }
]