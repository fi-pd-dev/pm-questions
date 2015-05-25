<script>
var array = [1,2,3,4,5];

function forSum (array){
	var sum = 0;
	for (i=0; i<array.length; i++){
		sum += array[i]; 	
	}
	return sum;
}
document.write(forSum(array));

function whileSum(array){
	var i = 0;
	var sum = 0;
	while (i<array.length) {
		sum += array[i];
		i++;
	}
	return sum;
}
document.write("<br><br>");
document.write(whileSum(array));


function saikiSum(array, i, sum){
	sum += array[i];
	if (array.length-1==i)	{
		return sum;
	}
	return saikiSum(array, i+1, sum)
}
document.write("<br><br>");
document.write(saikiSum(array,0,0));


</script>
