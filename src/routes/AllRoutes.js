import AuthPage from "../views/AuthPage";
import MainPAge from "../views/MainPAge";
import ProfilePage from "../views/ProfilePage";
import Support from "../views/Support";
import TicketPage from "../views/TicketPage";

export const ALL_ROUTES = [
    {
        id: 1,
        link: "/",
        element: <MainPAge />,
        title: "Главная"
    },
    {
        id: 2,
        link: "/auth",
        element: <AuthPage />,
        title: "Вход пользователя"
    }
    ,
    {
        id: 3,
        link: "/profile",
        element: <ProfilePage />,
        title: "Мои поездки"
    }, {
        id: 4,
        link: "/support",
        element: <Support />,
        title: "Поддержка"
    }
    , {
        id: 5,
        link: "/about",
        // element: <Support />,
        title: "О нас"
    }
    , {
        id: 6,
        link: "/tickets",
        element: <TicketPage />,
    }

]

