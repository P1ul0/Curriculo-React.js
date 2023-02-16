import "./style.css"
import foto from "../../assets/foto.png"
import img_github from "../../assets/img_github.svg"
import img_linkendin from "../../assets/img_linkedin.svg"

export default function DadosPessoais (){
    return (
        <div className="conteiner">
            <div className="topo">
                <img className="img_Curriculo" src={foto}></img>
                <a className="nome"><b>Paulo César</b></a>
            </div>
            <h1 className="titulo">Dados Pessoais</h1>
            <div className="dados">
                <a className="email">E-mail : Paulo@gmail.com</a>
                <a className="telefone">Telefone : (00)-00000000</a>
            </div>
            <div className="secundarios">
                <a className="github" href = "https://github.com/P1ul0"><img className="img_github" src = {img_github}></img></a>
                <a className="linkedin" href = "https://www.linkedin.com/in/paulo-c%C3%A9sar-a3b787234/"><img className="img_linkedin" src = {img_linkendin}></img></a>
            </div>
        </div>
    )
}