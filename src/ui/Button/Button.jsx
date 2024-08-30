import './Button.css';

export const Button = ({ variant = 'primary', children, className, ...props }) => {
    return (
        <button className={`btn ${variant} ${className}`} {...props}>
            {children}
        </button>
    );
};
