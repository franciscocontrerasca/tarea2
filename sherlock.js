//Input Example

//_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
//_INPUT = "2\n3 9\n17 24";
_INPUT = "4\n1 8\n2 4\n10 13\n11 20";
console.log("Cuantas raices hay entre: ", _INPUT);
linea = _INPUT.split("\n");
lineaSig = linea.join(" ");
linea = lineaSig.split(" ");
T = linea[0];
temp = 0;
k = 0;

if(1<=T && T<=1000) {
	for(x=1; x<linea.length; x++) {
		a = linea[x];
		x++;
		b = linea[x];
		if(1<=a && a<=b && b<=10^10) {
			for(i=a; i<=b; i++){
				raiz = Math.sqrt(i);
				if(raiz%1 == 0) {
					temp++;
				}
			}
			console.log("Numero de raices perfectas:", temp);
		}
		else {
			console.log("No se aceptan valores negativos")
		}
		temp = 0;
	}
}
else {
	console.log("Inserte un numero menor de casos");
}
