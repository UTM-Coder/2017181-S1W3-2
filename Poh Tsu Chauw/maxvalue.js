var input1, input2, input3, output;

text_display = 
'Please enter the following numbers' + '\n' +
'to determine the maximum number:' + '\n';
input1 = prompt(text_display);
input2 = prompt(text_display);
input3 = prompt(text_display);

Math.max(input1,input2,input3);

Ans =
'The following numbers are ' + input1 + ' , '+ input2 + ' and ' + input3 + '\n' +
'The maximum number is ' + output + '\n';

alert(Ans);