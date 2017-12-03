var a = prompt('Enter the number to be reversed :');
var n= a;
var b = 0, c;

while (n>0)
{
c = n % 10;
b = b * 10 + c ;
n = Math.floor(n/10);
}

 
output=
'The given number is : ' + a +  '\n'+
'The reversed number is : '  + b + '\n';
alert(output);