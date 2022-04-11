const buttonLabel = ({label}) => {
    alert("A label deste botão é " + label);
}

const Button = ({label}) => {
    return (
        <button onClick={() => buttonLabel({label})}>{label}</button>
    );
}

Button.defaultProps = {
    label: 'Botão'
}

export default Button;