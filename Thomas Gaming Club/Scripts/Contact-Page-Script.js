/*Jquery for get the whole document ready*/
$(document).ready(function() {
	/*Hashtag is grabbing the item from HTML labeled with an ID contact-submit-button, so when it is clicked, do postContent*/
	$("#contact-submit-button").click(postContent);
});

function postContent()
{	
	if(!hasEmptyFields(document.forms[0]))
	{
		/*Creating elements table data (table cells) to be in a row*/
		var submitContact = document.createElement("td");
		var submitConnection = document.createElement("td");
		var submitName = document.createElement("td");
		var submitEmail = document.createElement("td");
		var submitPhone = document.createElement("td");
		var submitMessage = document.createElement("td");
		
		/*Grab each piece of data filled into the form*/
		var inputContact = document.getElementById("prefer-contact");
		//The bottom var should be the text that the user has chosen as displayed on the page, value would have given me the value I assigned each
		var inputContactText= inputContact.options[inputContact.selectedIndex].text;
		
		var inputConnection = document.getElementById("client-title");
		//The bottom var should be the text that the user has chosen as displayed on the page, value would have given me the value I assigned each option
		var inputConnectionText= inputConnection.options[inputConnection.selectedIndex].text;
		
		var inputLastName = document.getElementById("last-name").value;
		var inputFullName = document.getElementById("first-name").value;
		inputFullName += inputLastName;
		
		var inputEmail = document.getElementById("email-input").value; 
		var inputPhone = document.getElementById("phone-number").value; 
		var inputMessage = document.getElementById("contact-message").value;
		
		/*Makes the innerHTML be the text displayed within the cell element*/
		submitContact.innerHTML = inputContactText;
		submitConnection.innerHTML = inputConnectionText;
		submitName.innerHTML = inputFullName;
		submitEmail.innerHTML = inputEmail;
		submitPhone.innerHTML = inputPhone;
		submitMessage.innerHTML = inputMessage;
		
		/*The row for the submitted info*/
		var submitInfo = document.createElement("tr");
		
		/*Append our children data to the row object*/
		submitInfo.appendChild(submitContact);
		submitInfo.appendChild(submitConnection);
		submitInfo.appendChild(submitName);
		submitInfo.appendChild(submitEmail);
		submitInfo.appendChild(submitPhone);
		submitInfo.appendChild(submitMessage);
		
		/*Grab the submit table*/
		var submitTable = document.getElementById("submit-table");
		
		//Currently testing to try and make it replace data if more info is submitted, instead of piling up on screen
		/*if (submitTable.hasChildNodes() ==true)
		{
			submitTable.removeChild(submitTable.childNodes[0]);
		}
		else
		{*/
			/*Appends the whole row to the table*/
			submitTable.appendChild(submitInfo);
		//}
		clearAnswers();
		
	}
	else {
		alert("You didn't fill in all fields.");
	}
}

function hasEmptyFields(contactForm)
{
	/*Finding the form to have an empty slot*/
	var hasEmpty = false;
	
	for(i=0; i < contactForm.elements.length; i++)
	{
		if(contactForm.elements[i].value == '')
		{
			hasEmpty = true;
		}
	}
	return hasEmpty;
}

/*This function clears the contact form elements, designed to be used with the submit button clicking*/
function clearAnswers()
{
	document.getElementById("first-name").value='';
	document.getElementById("last-name").value='';
	document.getElementById("email-input").value='';
	document.getElementById("phone-number").value='';
	document.getElementById("contact-message").value='';
	document.getElementById("client-title").value="";
	document.getElementById("prefer-contact").value="";
}

/*This function is only here to not allow a displayed table pile up of continuously submitted info. DisplayTable is the
submitted info table found on the contact page*/
function hasNoData(submitData)
{
	/*Finding the submit table to have data already*/
	var hasData = false;
	
	for(i=0; i < submitData.elements.length; i++)
	{
		if(submitData.elements[i].value == '')
		{
			hasData = true;
		}
	}
	return hasData;
	
}