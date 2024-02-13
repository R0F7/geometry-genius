function calculateEllipseArea(){
    const a = getInputValueById('ellipse-a');
    const b = getInputValueById('ellipse-b');

    const area = 3.1416 * a * b ;

    setInnerTextById('ellipse-area',area);
}

//get input value 
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value ;
    const inputValue = parseFloat(inputValueText);
    return inputValue ;
}

//set innerText
function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}