export default function Header () {
    return(
        <header className="flex flex-row justify-between w-[95%] m-auto bg-primary">
            <section>
                <img src="/logo.png" alt="logo" className="w-14"/>
            </section>
            <section className="flex items-center gap-10">
                <a href="#">Sobre</a>
                <a href="#">Jogos</a>
                <a href="#">Seja membro</a>
            </section>
            <section className="flex items-center">
                <button>Login</button>
            </section>
        </header>
    )
}