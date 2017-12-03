var a, b, c, output;

input_display = 
'Please enter three value,' + '\n'+
'I can help you to determine the maximum value.' +'\n';
a = prompt(input_display);
b = prompt(input_display);
c = prompt(input_display);

output = Math.max (a,b,c);

output_display = 
+ output +' is the maximum value among ' +'\n'+
+ a + ' ,' + b + ' and ' + c +'\n';
alert(output_display);