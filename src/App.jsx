import { Footer, Header } from './components';
import { AppRouter } from './router/AppRouter';

export const App = () => {
    return (
        <>
            <Header />
            {/* <Body /> */}
            <div className="container p-6">
                <AppRouter />
            </div>
            <Footer />
            {/* <Footer /> Alt+Shift+вниз/вверх клонировать */}
        </>
    );
};
