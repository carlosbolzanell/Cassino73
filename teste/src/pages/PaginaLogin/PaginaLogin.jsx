import BotaoAzul from "../../components/BotaoAzul"
import Input from "../../components/Input"

export default function PaginaLogin() {

    const alertar = () =>{
        alert("Olá");
    }

    return (
        <div className="bg-gradient-to-b from-gradient-end via-primary to-gradient h-screen flex justify-center items-center">
            <div className="bg-secondary h-[60vh] w-[50vw] rounded-lg flex flex-row">
                <figure className="w-[50%] h-full flex justify-center items-center">
                    <img src="/logo.png" alt="" className="w-[70%]" />
                </figure>
                <div className="w-[50%] h-full flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex gap-5 flex-col">
                            <Input titulo="Login" type="text" />
                            <Input titulo="Senha" type="password" />
                        </div>
                        <div className="self-start">
                            <a href="" className="font-montserrat text-xs mt-2 underline">Esqueceu a senha?</a>
                        </div>

                    </div>
                    <BotaoAzul texto="Entrar" aoClicar ={alertar}/>
                    <div className="border-t border-current w-56 mt-4 mb-1"></div>
                    <div className="w-56 items-start flex flex-row gap-1">
                        <p className="font-montserrat text-xs">Não tem cadastro?</p> 
                        <a href="" className="font-montserrat text-xs underline">Cadastre-se</a>
                    </div>
                </div>
            </div>
        </div>
    )
}