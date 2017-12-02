var input, output, remaining, digit ;

display=
'Please enter the number you want to reverse';
digit = prompt (display);
input=digit;
output=0;

while (input != 0){
	remaining = input%10;
	output = output*10 + remaining;
	input =Math.floor(input/10);
}

output_display=
'The number you want to reverse is ' + digit + '\n' +
'The number reversed is ' + output + '\n' ;
alert(output_display);
