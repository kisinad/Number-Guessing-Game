//Number Guessing Game
// Array.from({length: 100}, () => Math.floor(Math.random() * 100));
// var y = Math.floor(Math.random() * 100) + 1; //Generates random numbers and stores it in i
var y = Array.from({length: 100}, () => Math.floor(Math.random() * 100));
var j=y%2; //gets the modulus and stores the result in j
if (j==0) //Conitioin checks to see if the result in module is zero or not
	alert (" Number is Even"); 
else 
	alert (" Number is odd");

for(var count=1;count<=10;count++)
{
		let num = prompt ("Please enter a number:"); //Captures user input
	if (num<1 || num>100){
		alert("Out of range");
	}

	if (num==y){
		alert("You WIN!");
		break;
	}
	if (num<y){
		alert("Number is lower, make another guess");
	}
	if (num>y){
				alert("Number is higher,make another guess");
			}
	if (count==10){	
			alert("You LOSE!");}
};



