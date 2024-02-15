
export default function PaginaLogin() {
    return (
        <div className="bg-gradient-to-b from-gradient-end via-primary to-gradient h-screen flex justify-center items-center">
            <div className="bg-secondary h-[60vh] w-[50vw] rounded-lg flex flex-row">
                <figure className="w-[50%] h-full flex justify-center items-center">
                    <img src="/logo.png" alt="" className="w-[70%]" />
                </figure>
                <div className="w-[50%] h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <div>
                            <p className="font-montserrat text-xl">Login</p>
                            <input type="text" className="border border-black rounded py-0.5 w-56 pl-1" />
                        </div>
                        <div>
                            <p className="font-montserrat text-xl">Senha</p>
                            <input type="password" className="border border-black rounded py-0.5 w-56 pl-1" />
                            <div>
                                <a href="" className="font-montserrat text-xs mt-2 underline">Esqueceu a senha?</a>
                            </div>
                        </div>
                    </div> 
                    <button className="px-6 py-1 bg-primary rounded font-montserrat font-medium mt-4">Entrar</button>
                    <div className="border-t border-current w-56 mt-4 mb-1"></div>
                    <div className="w-56 items-start flex flex-row gap-1">
                        <p className="font-montserrat text-xs">Não tem cadastro?</p> <a href="" className="font-montserrat text-xs underline">Cadastre-se</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}