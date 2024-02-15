export default function Header() {
    return (
        <header className="bg-primary flex flex-col">
            <div className="flex flex-row justify-between w-[95%] m-auto">
                <section>
                    <img src="/logo.png" alt="logo" className="w-16" />
                </section>
                <section className="flex items-center gap-10">
                    <a href="#" className="font-montserrat">Lançamentos</a>
                    <a href="#" className="font-montserrat">Em alta</a>
                    <a href="#" className="font-montserrat">Perfil</a>
                </section>
                <section className="flex items-center">
                    <button className="border border-secondary py-1 px-6 bg-secondary rounded font-montserrat font-medium">Login</button>
                </section>
            </div>
            <div className="border-t border-black"></div>
            <div className="h-7 bg-primary flex items-center justify-center gap-20">
                <a href="" className="font-montserrat text-sm">Terror</a>
                <a href="" className="font-montserrat text-sm">Animação</a>
                <a href="" className="font-montserrat text-sm">Comédia</a>
                <a href="" className="font-montserrat text-sm">Ação</a>
                <a href="" className="font-montserrat text-sm">Romance</a>
            </div>
        </header>
    )
}