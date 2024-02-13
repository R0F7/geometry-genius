function calculateRectangleArea (){
    //get rectangle wide value
    const rectangleWideInput = document.getElementById('rectangleWide');
    const rectangleWideText = rectangleWideInput.value;
    const wide = parseFloat(rectangleWideText);
    
    //get rectangle length value
    const rectangleLengthInput = document.getElementById('rectangleLength');
    const rectangleLengthText = rectangleLengthInput.value ;
    const length = parseFloat(rectangleLengthText);

    //calculate rectangle area
    const rectangleArea = wide * length ;

    //display rectangle area
    const rectangleDisplay = document.getElementById('rectangle-area');
    rectangleDisplay.innerText = rectangleArea;

}