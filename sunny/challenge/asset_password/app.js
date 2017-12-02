var input_name, input_password, output;

username='tsuchauw'
password='yengloh'

display=
'Please enter your username and password'
input_name = prompt(display);
input_password = prompt(display);

if (input_name==username && input_password==password) {
	output='win wan liao(Login successfully)'
}
else {
	output='tsuchauw zui yengloh (Password Invalid)'
}

alert(output)

