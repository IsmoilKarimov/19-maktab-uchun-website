
const password_field = document.querySelector('password'); 
const show_btn = document.querySelector('show');
show_btn.addEventListener('click',function(){
    if(password_field.type === 'password'){
        password_field.type = 'text';
    }
    else{
        password_field.type = 'password';
    }
   
});
