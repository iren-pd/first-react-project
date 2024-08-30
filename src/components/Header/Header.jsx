import { NavLink } from 'react-router-dom';
import './Header.css';
import { Routes } from '../../router/routes';

export const Header = () => {
    return (
        <header className="header flex justify-around py-6">
            <div className="logo-header">
                <p>LogoText</p>
            </div>

            <nav>
                <NavLink to={Routes.home} className="mr-6">Home</NavLink>
                <NavLink to={Routes.about} className="mr-6">About</NavLink>
                <NavLink to={Routes.homeWork}>Home Work</NavLink>
            </nav>
        </header>
    );
};
