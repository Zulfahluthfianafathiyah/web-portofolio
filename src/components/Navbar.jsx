import { useEffect, useState } from "react";

export const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        // setShow(!show);
    };

    let menuActive = show ? "left-0" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                console.log("testing");
                setScroll(true);
                setShow(false); 
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

    return (
        <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
            <div className="container mx-auto px-4">
                <div className="navbar-box flex items-center justify-between">
                    <div className="logo">
                        <h1 className="text-3xl font-bold">Portofolio</h1>
                    </div>
                    <ul className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 
                    md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed left-0 top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-pink-200 bg-pink-300 font-bold
                     text-white transition-all ${menuActive}`}>
                        <li>
                            <a href="#home" className="font-medium opacity-75">Beranda</a>
                        </li>
                        <li>
                            <a href="#fto2" className="font-medium opacity-75">Tentang Saya</a>
                        </li>
                        <li>
                            <a href="#services" className="font-medium opacity-75">Pendidikan</a>
                        </li>
                        <li>
                            <a href="#proyek" className="font-medium opacity-75">Proyek</a>
                        </li>
                    </ul>
                    <a href="#social" className="bg-pink-300 px-5 py-4 rounded-full text-white font-bold hover:bg-pink-400 transition-all">Sosial Media</a>
                    <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
