function check_pwd(e, formId){

    const new_pwd_security = document.querySelector(e);
    
    const least_eight = document.querySelector(".least_eight");
    const least_symbol = document.querySelector(".least_symbol");
    const least_capital = document.querySelector(".least_capital");
    const least_number = document.querySelector(".least_number");

    if(new_pwd_security){
        new_pwd_security.addEventListener('keyup',function(e){
            let pwd_input = e.target.value;
            
            if(pwd_input.length >=8){
              least_eight.classList.remove("validation_red");
              least_eight.classList.add("validation_green");
                                
                      
            }else{
                least_eight.classList.remove("validation_green");
                least_eight.classList.add("validation_red");
      
            }
            
            var decimal1=  /[!@#$%^&*(),.?":{}|<>]/g;
            decimal1 = decimal1.test(pwd_input)
            if(decimal1){
                
                least_symbol.classList.remove("validation_red");
                least_symbol.classList.add("validation_green");
      
            }else{
                least_symbol.classList.remove("validation_green");
                least_symbol.classList.add("validation_red");
      
            }
            
            var decimal2 =  /[A-Z]/g;
            decimal2 = decimal2.test(pwd_input)
            if(decimal2){
                least_capital.classList.remove("validation_red");
                least_capital.classList.add("validation_green");
      
            }else{
                least_capital.classList.remove("validation_green");
                least_capital.classList.add("validation_red");
      
            }
            
            var decimal3=  /[0-9]/g;
            decimal3 = decimal3.test(pwd_input)
            if(decimal3){
                least_number.classList.remove("validation_red");
                least_number.classList.add("validation_green");
      
            }else{
                least_number.classList.remove("validation_green");
                least_number.classList.add("validation_red");
      
            }

            var is_verified = (pwd_input.length >=8 && decimal1 && decimal2 && decimal3)
            
        })
    }
    
    

}


check_pwd(".new_pwd_security", '#sign_up_form')


const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
// toggle the type attribute
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
// toggle the eye slash icon
 $(this).toggleClass("fa-eye fa-eye-slash");
  
});