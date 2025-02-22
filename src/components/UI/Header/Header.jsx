const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Аниме Афиши</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Главная
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                О нас
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
