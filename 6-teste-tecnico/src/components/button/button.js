const Button = ({ label, morePokemon }) => {
    return (
        <button onClick={() => morePokemon()}>{label}</button>
    );
}

Button.defaultProps = {
    label: "Clique aqui"
}

export default Button;