// Addition Functionality: 

document.getElementById("add-calculate").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("add-num1").value);
    const num2 = parseFloat(document.getElementById("add-num2").value);
    
    // Validate Inputs with a If Statement
    if( !isNaN(num1) && !isNaN(num1)){
        const totaladd = num1 + num2;

        // Update:
        document.getElementById("add-result").textContent = totaladd;
        document.getElementById("add-num1").value = "";
        document.getElementById("add-num2").value = "";
        console.log("Addition Performed.");

    } else {
        document.getElementById("add-result").textContent = "0";
        console.log("Reset Result");
    }
})

// Substraction Functionality:

document.getElementById("sub-calculate").addEventListener("click", function(){
    const num1 = parseFloat(document.getElementById("sub-num1").value);
    const num2 = parseFloat(document.getElementById("sub-num2").value);

    // Validate Inputs with if statement
    if( !isNaN(num1) && !isNaN(num2)){
        const totalSub = num1-num2;

        //Update:
        document.getElementById("sub-result").textContent = totalSub;
        document.getElementById("sub-num1").value = "";
        document.getElementById("sub-num2").value = "";
        console.log("Subtraction Performed.");
    }else {
        document.getElementById("sub-result").textContent = "0";
        console.log("Reset Result");
    }
})

// Multiplication Functionality:

document.getElementById("mul-calculate").addEventListener("click", function(){
    const num1 = parseFloat(document.getElementById("mul-num1").value);
    const num2 = parseFloat(document.getElementById("mul-num2").value);

    // Validate Inputs with if statement
    if( !isNaN(num1) && !isNaN(num2)){
        const totalMul = num1*num2;

        //Update:
        document.getElementById("mul-result").textContent = totalMul;
        document.getElementById("mul-num1").value = "";
        document.getElementById("mul-num2").value = "";
        console.log("Multiplication Performed.");
    }else {
        document.getElementById("mul-result").textContent = "0";
        console.log("Reset Result");
    }
})

// Division Functionality:

document.getElementById("div-calculate").addEventListener("click", function(){
    const num1 = parseFloat(document.getElementById("div-num1").value);
    const num2 = parseFloat(document.getElementById("div-num2").value);

    // Validate Inputs with if statement
    if( !isNaN(num1) && !isNaN(num2)){
        const totalDiv = num1/num2;

        //Update:
        document.getElementById("div-result").textContent = totalDiv;
        document.getElementById("div-num1").value = "";
        document.getElementById("div-num2").value = "";
        console.log("Division Performed.");
    }else {
        document.getElementById("div-result").textContent = "0";
        console.log("Reset Result");
    }
})
