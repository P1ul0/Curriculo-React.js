import "./style.css"
import foto from "../../assets/foto.png"

export default function DadosPessoais (){
    return (
        <div className="conteiner">
            <img className="img_Curriculo" src={foto}></img>
            <h1 className="titulo">Dados Pessoais</h1>
            <div className="dados">
                <h3 className="nome">Nome : Paulo</h3>
                <h3 className="email">E-mail : Paulo@gmail.com</h3>
                <h3 className="telefone">Telefone : (12)-3478956</h3>
            </div>
        </div>
    )
}