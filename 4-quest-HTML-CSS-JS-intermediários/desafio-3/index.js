const requiredField = document.getElementsByName("required");

function OnSubmitMessage() {
    requiredField.forEach(element => {
        if (element.required && element.value === "") {
            element.classList.add("requiredField");
            element.nextElementSibling.classList.add("required")
        }
    });
}

function OnFocusOut() {
    requiredField.forEach(element => {
        if (element.value != "") {
            element.classList.add("filled-out");
            if (element.nextElementSibling.classList.contains("required"))
            {
                element.classList.remove("requiredField")
                element.nextElementSibling.classList.remove("required")
            }
        } else {
            element.classList.remove("filled-out");
        }
    });
}