<script>

	
	
	var password = document.getElementById ("password");
	var confirm = document.getElementById ("conpassword");
	
	
	function validatePassword() {
		
		if ( password.value != confirm.value ) {
		confirm password.setCustmValidity("Password and Confirm password does not match!!" );
			
		}
		
		else{
			confirm password.setCustmValidity("");
			
		}
	}
	password.onchange=validatePassword;
	confirm_password.onkeyup=validatePassword;
	
	let code= Math.random();
			
			let userCode=prompt("OTP : " +code,"Enter OTP");
			
			if ( code == userCode ) {
				alert ( "Fund Transfered successfully." );
				
			}

</script>