export default function Input(props) {
    return (
        <div>
            <p className="font-montserrat text-xl">{props.titulo}</p>
            <input type={props.type} className="border border-black rounded py-0.5 w-56 pl-1 focus:outline-0" />
        </div>
    )
}