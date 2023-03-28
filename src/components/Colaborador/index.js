import './Colaborador.css'

// const Colaborador = (props) => {
//     return (
//         <div className="colaborador">
//             <div className="cabecalho">
//                 <img src={ props.imagem } alt={ props.nome } />
//             </div>
//             <div className="rodape">
//                 <h4>{ props.nome }</h4>
//                 <h5>{ props.cargo }</h5>
//             </div>
//         </div>
//     )
// }

const Colaborador = ({ nome, cargo, imagem, corCabecalho }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={ { backgroundColor: corCabecalho }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4 style={ { color: corCabecalho } }>{ nome}</h4>
                <h5>{ cargo }</h5>
            </div>
        </div>  
    )
}

export default Colaborador