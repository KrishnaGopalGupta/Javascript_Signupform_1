function formvalidation() {
	
	var name = document.forms["myform"]["fname"];
	var age = document.forms["myform"]["mage"];
	var email = document.forms["myform"]["memail"];
	var pass = document.forms["myform"]["pass"];
	var cpass = document.forms["myform"]["cpass"];
	var mnumber = document.forms["myform"]["mnumber"];

	
		//Name
		if(name.value ==""){
		alert ("Please enter the name")
		name.focus(); 
		
	return false;
	}
	
	if(name.value.length <3 ){
		window.alert("Name length must more than 3")
		name.focus();
		return false;
	} 
	
	//Age 
	
		if(age.value ==""){
		alert ("Please enter the age")
		age.focus(); 
		
	return false;
	}
	
	if(isNaN(age.value))
	{
		alert("Invalid Age");
		age.focus();
		return false;
		
	}
	
	// Email Address
		if(email.value ==""){
		alert ("Please enter the Email Address");
		email.focus(); 
	return false;
	}
	

		
	
	if(mnumber.value ==""){
		alert ("Please enter the Mobile Number");
		mnumber.focus(); 
		return false;
	}
		
  //mnumber.value =  /^\d{10}$/;

	if(isNaN(mnumber.value)){
		alert ("Please enter the Valid Mobile Number");
		mnumber.focus(); 
		return false;
	}
	
	if(!(mnumber.value.length == 10)){
		window.alert("Mobile number length must be 10");
		mnumber.focus();
		return false;
	}
	
	
	if(pass.value ==""){
		alert ("Please enter the Password");
		pass.focus(); 
		return false;
	}
	
		if(cpass.value ==""){
		alert ("Please enter the Confirm Password");
		cpass.focus(); 
		return false;
	}
		
	if(cpass.value != pass.value){
		window.alert("Password Mismatch");
		cpass.focus;
		return false;
	}
	
	
	
	
	return true;
	
}