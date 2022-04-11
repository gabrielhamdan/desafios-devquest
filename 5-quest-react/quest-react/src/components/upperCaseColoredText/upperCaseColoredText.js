const UpperCaseColoredText = ({text, textColor}) => {
    return (
        <p
            style={{color: textColor}}
        >
            {text.toUpperCase()}
        </p>
    );
}

UpperCaseColoredText.defaultProps = {
    textColor: 'red'
}

export default UpperCaseColoredText;