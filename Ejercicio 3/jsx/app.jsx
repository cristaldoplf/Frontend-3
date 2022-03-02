const create = React.createElement;

const span = create(
    "span",
    { key: 2 },
    " con un Span"
)
const p = create(
    "p",
    { key: 1 },
    ["Elemento Nuevo",span]
)

ReactDOM.render(p,document.getElementById("root"))  