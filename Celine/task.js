var colour, output;

text_display = 
'What the colour of mango ?'
colour = prompt(text_display);

switch (colour) {
	case "green":
	output = "The mango is sour.";
	break;
	
	case "yellow":
	output = "The mango is sweet.";
	break;

	default:
	output = "It is not a mango."; }

output_display =
output;
alert(output_display);

