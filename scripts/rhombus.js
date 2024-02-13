function calculateRhombusArea (){

    //get rhombus d1 value
    const rhombusD1Input = document.getElementById('rhombus-d1');
    const rhombusD1Text = rhombusD1Input.value ;
    const d1 = parseFloat(rhombusD1Text);
    
    //get rhombus d2 value
    const rhombusD2Input = document.getElementById('rhombus-d2');
    const rhombusD2Text =rhombusD2Input.value ;
    const d2 = parseFloat(rhombusD1Text);
    
    // calculate rhombus area
    const rhombusArea = 0.5 * d1 * d2 ;

    //display rhombus Area
    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = rhombusArea;
}