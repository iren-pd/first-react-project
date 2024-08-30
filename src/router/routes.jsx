import { AboutPage, HomePage, HomeWorkPage } from '../pages';

export const Routes = {
    home: '/',
    about: '/about',
    homeWork: '/homeWork'
}

export const routes = [
    {
        path: Routes.home,
        element: <HomePage />,
    },
    {
        path: Routes.about,
        element: <AboutPage />,
    },
    {
        path: Routes.homeWork,
        element: <HomeWorkPage />

    }
];
