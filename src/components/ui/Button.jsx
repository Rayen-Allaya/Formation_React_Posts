

const Button = (props) => {
    const color = props.color;
    let buttonClass = "";
    if (color === "blue") {
        buttonClass = "btn-primary"
    } else if (color === "green") {
        buttonClass = "btn-success"
    } else if (color === "red") {
        buttonClass = "btn-danger"
    } else {
        buttonClass = "btn-primary"
    }


    return (
        <button className={props.className + " mx-3 btn " + buttonClass}>
            {props.children}
        </button>
    )
}

export default Button;
