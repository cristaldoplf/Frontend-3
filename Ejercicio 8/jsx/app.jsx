const frutas = ["pera", "manzana", "naranja", "banana"]
const Hijo = ({ fruta }) => <li>{fruta}</li>;
const titulo = "Cajon"

const Padre = () => {
    const hijos = () => frutas.map((fruta) => <Hijo fruta={fruta} />);
    return (
        <div>
            <h1>{titulo}</h1>
            <ul>{hijos()}</ul>
        </div>
    );
};

ReactDOM.render(
    <Padre />,
    document.querySelector("body")
) 

console.log("asd")