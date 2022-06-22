import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/theme-context";

const Button = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Btn {...props}>{props.label}</Btn>
        );
}

Button.defaultProps = {
    label: "Button"
}

const Btn = styled.button`
    padding: 10px;
    margin: 5px;
`

export default Button;