var input1, input2, output;

text_display =
'Please enter Your User Name and Password';

input1 = prompt(text_display);
input2 = prompt(text_display);

if (input1 == 'pohtsuchauw' && input2 == 'lengzai'){
	output = 'Access granted!';
}
if (input1 != 'pohtsuchauw' || input2 != 'lengzai'){
	output = 'Access denied!';
}

alert(output)