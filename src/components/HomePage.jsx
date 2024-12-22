import { useState , useEffect , useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

const HomePage = () => {

    const [count, setCount] = useState(0);
    const a = useContext(ThemeContext)

    useEffect(() => {
        setTimeout(() => {
        setCount((count) => count + 1);
        }, 1000);
    });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-3xl font-bold">Welcome to auth Tutorial</div>
        <div className="text-2xl">{count}</div>
        <h1 className="text-lg">{a.theme}</h1>
        <input type="checkbox" id="theme-switch" onChange={a.toggleTheme} />
    </div>
  );
};

export default HomePage;