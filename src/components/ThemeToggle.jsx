import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <button
            onClick={handleToggle}
            className="theme-toggle"
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}

export default ThemeToggle;