const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

const listItems = numbers.map(number =>
    <React.Fragment>
        <p><span>N°</span>{number}</p>
    </React.Fragment>
)

ReactDOM.render(
    <div>{listItems}</div>,
    document.querySelector("main")
)