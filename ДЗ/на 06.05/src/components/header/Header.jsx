import logo from "../../assets/bobr_kurva.png"
import cls from "../header/Header.module.css"
function Header(){
    const navList = ["Главная", "О компании", "Модалки", "Контакты", "Партнеры"]
    return (
        <header>
            <div className={cls.header__container}>
                <div className={cls.left__side}>
                     <img src={logo} alt="logo bobr_kurva" />
                <h2>Pallas cat studio</h2>
                </div>
                <nav className={cls.right__side}>
                    <ul>
                        {navList.map((elem, index) =>(
                            <li key={index}>{elem}</li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header