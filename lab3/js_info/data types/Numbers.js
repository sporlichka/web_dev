//1
function sum(){
let a = +prompt('a?', '');
let b = +prompt('b?', '');
return a + b
}
//2
function readNumber(){
    let num;
    do {
        num = prompt("Enter a number please?", 0);
      } while ( !isFinite(num) );
    
      if (num === null || num === '') return null;
    
      return +num;
}
    
    alert(`Read: ${readNumber()}`);

    //3
    function random(min, max) {
        return min + Math.random() * (max - min);
      }
      
      alert( random(1, 5) );
      alert( random(1, 5) );
      alert( random(1, 5) );
    
    //4
    function randomInteger(min, max) {
        // now rand is from  (min-0.5) to (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      
      alert( randomInteger(1, 3) );
