



  
function calculate(weight) {  
    let barweight = weight - 45;
    console.log(`Minus Bar: ${barweight}`) 
 
    
    if (barweight >= 90) {
            console.log("Two 45's")
            return (barweight - 90)
        } else if (barweight >= 70 && barweight < 90) {
            console.log("Two 35's")
            return barweight - 70;
        } else if (barweight >= 50 && barweight < 70) {
            console.log("Two 25's")
            return barweight - 50
           
        } else if (barweight >= 20 && barweight < 50) {
            console.log("Two 10's")

            return barweight - 20
        }else if (barweight >= 10 && barweight < 20) {
            console.log("Two 10's")

            return barweight - 10
        } else {
            console.log(barweight % 1) 

            return barweight % 1
        }
    

}
