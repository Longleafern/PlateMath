



  
function calculate(weight) {  
    let barSubtract = weight - 45
    let barweight = barSubtract;
    console.log(`Minus Bar: ${barweight}`) 
 
  while(barweight > 0)  { 
    if (barweight >= 90) {
            console.log("Two 45's")
            barweight = (barweight - 90)
        } if (barweight >= 70 && barweight < 90) {
            console.log("Two 35's")
            barweight = (barweight - 70)
        }  if (barweight >= 50 && barweight < 70) {
            console.log("Two 25's")
            barweight = (barweight - 50)
        }  if (barweight >= 20 && barweight < 50) {
            console.log("Two 10's")
            barweight = (barweight - 20)
        } if (barweight >= 10 && barweight < 20) {
            console.log("Two 5's")
            barweight =  (barweight - 10)
        } if (barweight >= 5 && barweight < 10) {
            console.log("Two 2.5's")
            barweight = (barweight - 5) 
        }
};  };
