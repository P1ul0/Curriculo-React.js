import DadosPessoais from "../components/DadosPessoais";
import DadosProfissionais from "../components/DadosProfissionais";
import FormacaoAcademica from "../components/FormacaoAcademica";

export default function Curriculo(){
    return(
        <div>
            <DadosPessoais/>
            <DadosProfissionais/>
            <FormacaoAcademica/>
        </div>
    )
}