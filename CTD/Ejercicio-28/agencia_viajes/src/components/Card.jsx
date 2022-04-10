

const Card = (props) => {

  console.log(props.data)
  return (
    <div key={props.id} className="card" style={{width:"18rem;"}}>
      <img src={props.data.src} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.data.nombre}</h5>
          <p className="card-text">Desde: {props.data.ingreso} Hasta: {props.data.egreso}</p>
          <p>Promo: {props.data.estadia}</p>
          <p>Costo: {props.data.costo}</p>
          <p>Lugar de salida: {props.data.ubicacion}</p>
          {props.data.servicio.map((servicio,i) =><li key={i+"s"}>{servicio}</li>)}
          <a href="#" className="btn btn-primary">Crear Reserva</a>
        </div>
    </div>
  )

}
export default Card;