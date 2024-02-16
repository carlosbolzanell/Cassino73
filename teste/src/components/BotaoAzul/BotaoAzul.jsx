export default function BotaoAzul({texto, aoClicar}){
    return(
        <button className="px-6 py-1 bg-primary rounded font-montserrat font-medium mt-4" onClick={aoClicar}>{texto}</button>
    )
}