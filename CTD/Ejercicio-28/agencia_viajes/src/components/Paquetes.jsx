import Card from "./Card";

const Paquetes = (props) => {
  // props.data.map(item => console.log(item.nombre))
  return (
    <div>
      {props.data.map((item, i) => {
        return (
          <div key={i.toString()+"as"}>
            <h2>Paquetes</h2>
            <Card data={item} key={i.toString() + "p"} />
          </div>
        )

      })}
    </div>
  )


}
export default Paquetes;