const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("show");
let series = "";

const button2 = document.querySelectorAll(".btn_scientific");
buttons.forEach(button => {
    if (button.id === 'arrow') return;
    button.addEventListener("click", () => {
        const aria = button.getAttribute("aria-label");
        const text = button.innerText.trim();
        
        if (aria === "delete") {
            if (series.length > 0) series = series.slice(0, -1);
        } else if (text === "AC") {
            series = "";
        } else if (text === "=") {
            try {
                if(series[series.length-1]==="%"){
                    series=series.replace("%","/100");
                    series = String(eval(series));
                }
                else{
                    series = String(eval(series));
                }
                
            } catch (e) {
                series = "Error";
            }
        } else {
            if (text) series += text;
        }

        display.innerText = series;
    });
});


Math.PI === 3.141592653589793;
Math.E === 2.718281828459045;
const btn_science = document.querySelectorAll(".btn_scientific");
let flag=0;
btn_science.forEach(button => {
    if (button.id === 'arrow') return;
    button.addEventListener("click", () => {
        const aria = button.getAttribute("aria-label");
        const text = button.innerText.trim();
        const text1 = button.innerText.trim();
        if (aria === "delete") {
            if (series.length > 0) series = series.slice(0, -1);
        }
         else if (text === "AC") {
            series = "";
        } 
        else if (text === "x²") {
            try {
                if (series !== "") {
                    series = String(eval(series) ** 2);
                }
            } catch (e) {
                series = "Error";
            }
        } 
        else if (text === "xʸ") {
            // Add the exponentiation operator
            series += "**";
        }
        else if (text === "ʸ√x") {
            // Calculate nth root: x^(1/y)
            series += "**(1/";
            flag=1;
        }
        else if (text === "x³") {
            try {
                if (series !== "") {
                    series = String(eval(series) ** 3);
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "10ˣ") {
            try {
                if (series !== "") {
                    series = String(10 ** eval(series));
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "eˣ") {
            try {
                if (series !== "") {
                    series = String(Math.E ** eval(series));
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "1/x") {
            try {
                if (series !== "") {
                    series = String(1/eval(series));
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "²√x") {
            try {
                if (series !== "") {
                    series = String(Math.sqrt(eval(series)));
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "³√x") {
            try {
                if (series !== "") {
                    series = String(Math.cbrt(eval(series)));
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "x!") {
            try {
                if (series !== "") {
                    series = String((eval(series)));
                    var val=Number(series);
                    var x=1;
                    while(val>1){
                        x*=val;
                        val--;
                    }
                    series=String(x);
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "+/-") {
            try {
                if (series !== "") {
                    series = String(-(eval(series)));
                }
            } catch (e) {
                series = "Error";
            }
        }
        else if (text === "=") {
            if(flag){
                series+=")";
                flag=0;
            }
            if(series.includes("π")){
                series = series.replace(/π/g, "Math.PI");
            }
            if(series.includes("e")){
                series = series.replace(/e/g, "Math.E");
            }
            try {
                
                if(series[series.length-1]==="%"){
                    series=series.replace("%","/100");
                    series = String(eval(series));
                }
                else{
                    series = String(eval(series));
                }
                
            } catch (e) {
                series = "Error";
            }
        } else {
            if (text) series += text;
        }

        display.innerText = series;
    });
});
//to give border to the button of the calculator
buttons.forEach(btn=>{
    if (btn.id === 'arrow') return;
    btn.addEventListener("click", ()=>{
        buttons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
    });
});


//to change the calculator to scientific calculator
const arrowBtn = document.getElementById('arrow');
if (arrowBtn) {
    arrowBtn.addEventListener('click', () => {
        window.location.href = 'swap.html';
    });
}
// Numpad keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    // Handle number keys (0-9) and numpad
    if (key >= '0' && key <= '9') {
        series += key;
    }
    // Handle operators
    else if (key === '+' || key === '-' || key === '*' || key === '/') {
        series += key;
    }
    // Handle exponentiation (^ key)
    else if (key === '^') {
        series += '**';
    }
    // Handle decimal point
    else if (key === '.') {
        series += '.';
    }
    // Handle equals (Enter or =)
    else if (key === 'Enter' || key === '=') {
        try {
            if(series[series.length-1]==="%"){
                series=series.replace("%","/100");
                series = String(eval(series));
            }
            else{
                series = String(eval(series));
            }
        } catch (e) {
            series = "Error";
        }
    }
    // Handle backspace (delete)
    else if (key === 'Backspace') {
        if (series.length > 0) series = series.slice(0, -1);
    }
    // Handle clear (Escape or C)
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        series = "";
    }
    // Handle percentage
    else if (key === '%') {
        series += '%';
    }
    
    display.innerText = series;
});
