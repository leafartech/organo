import './CampoTexto.css'

const CampoTexto = (props) => {

    // const placeholderModificada = `${props.placeholder}...`

    // let valor = 'Rafael'

    //Hook do estado
    // const [valor, setValor] = useState(props.valor)

    const aoDigitado = (event) => { //A cada tecla digitada ele dispara esse evento
        props.aoAlterado(event.target.value)
        // console.log(props.valor)
    }
    
    return (
        <div className="campo-texto">
            <label>{ props.label  }</label>
            <input value={props.valor} type="text" onChange={ aoDigitado } required={props.obrigatorio} placeholder={props.placeholder} />
            {/* <input type="text" placeholder={placeholderModificada} /> */}
        </div>
    )
}

export default CampoTexto