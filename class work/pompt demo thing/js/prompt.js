let a, b, c, delta, x1, x2;

function sanitise(x)
{
	do 
	{
		x = prompt("Donner une valeur);
		if (isNaN(x))
			alert("Invalid Input");
	} while(isNaN)
	return x
}

a = sanitise("A = ");
b = sanitise("B = ");
c = sanitise("C = ");
console.log(a, b, c);
delta = (b ** 2) - (4 * a * c);

if (delta < 0)
	console.log("Aucune Solution Entiere");
else
{
	if(delta == 0)
	{
		x1 = -1 * b * b / (2 * a);
		console.log("double = ", x1);
	}
	else
	{
		x1 = (-1*b + Math.sqrt(delta)  ) / (2*a);
		x2 = (-1*b - Math.sqrt(delta)  ) / (2*a);
		console.log("Solutions = ", x1, " ", x2);
	}
}