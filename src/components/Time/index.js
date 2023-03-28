import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && //condição
        <section className="time" style={ { backgroundColor: props.corSecundaria } }>
            <h3 style={ { borderColor: props.corPrimaria } }>{ props.nome }</h3>
            <div className="colaboradores">
                { props.colaboradores.map(colaborador => 
                <Colaborador 
                key={ colaborador.nome } 
                nome={ colaborador.nome }
                cargo={ colaborador.cargo }
                imagem={ colaborador.imagem } 
                corCabecalho={ props.corPrimaria }
                />
            )  }
            </div>
        </section>
    )
}

export default Time