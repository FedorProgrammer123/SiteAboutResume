function checkRegistration(){
    if(names.value == '' || names.value == ' '){
         span.innerHTML = "<p style ='color:#ff1100'>Это поле обязательное</p>"
    }
    else if(names.value.length < 3){
         span.innerHTML = "<p style ='color:#ff1100'>Длинна имени должна быть минимум от 3-х символов</p>"
    }
    else if(email.value == '' || email.value == ' '){
         span.innerHTML = "<p style ='color:#ff1100'>Это поле обязательное</p>"
    }
    else if(email.value.length < 3){
         span.innerHTML = "<p style ='color:#ff1100'>Длинна email должна быть минимум от 3-х символов</p>"
    }
    else if(login.value == '' || login.value == ' '){
         span.innerHTML = "<p style ='color:#ff1100'>Это поле обязательное</p>"
    }
    else if(login.value.length < 3){
         span.innerHTML = "<p style ='color:#ff1100'>Длинна логина должна быть минимум от 3-х символов</p>"
    }
    else if(password.value == '' || password.value == ' '){
         span.innerHTML = "<p style ='color:#ff1100'>Это поле обязательное</p>"
    }
    else if(password.value.length < 3){
         span.innerHTML = "<p style ='color:#ff1100'>Длинна пароля должна быть минимум от 3-х символов</p>"
    }
    else if(confirm_password.value == '' || confirm_password.value == ' '){
         span.innerHTML = "<p style ='color:#ff1100'>Это поле обязательное</p>"
    }
    else if(confirm_password.value != confirm_password.value){
     span.innerHTML = "<p style ='color:#ff1100'>Пароли не совпадают</p>"
    }
    else{
         span.innerHTML = "<a href = '../Pages/first_page_for_registered.html'>Добро пожаловать!</a>"
    }
}
function showName(event){
    let target = event.target.value
     if(names.value != '' || names.value != ' '){
          nameSpan.innerHTML = target
     }
     if(names.value.length > 10){
          nameSpan.innerHTML = "<p>Превышено количество введённых символов</p>"
     }
}
function showEmail(event){
    let target = event.target.value
    if(email.value != '' || email.value != ' '){
         EmailSpan.innerHTML = target
    }
    if(email.value.length > 50){
         EmailSpan.innerHTML = "<p>Превышено количество введённых символов</p>"
    }
}
function showLogin(event){
    let target = event.target.value
     if(login.value != '' || login.value != ' '){
          LoginSpan.innerHTML = target
     }
     if(login.value.length > 20){
          LoginSpan.innerHTML = "<p>Превышено количество введённых символов</p>"
     }
}
function showPassword(event){
    let target = event.target.value
     if(password.value != '' || password.value != ' '){
          PasswordSpan.innerHTML = target
     }
}
function showConfirmPassword(event){
    let target = event.target.value
     if(confirm_password.value != '' || confirm_password.value != ' '){
          RepeatPasswordSpan.innerHTML = target
     }
}
function Autorization(){
     if(login_aut.value == '' || login_aut.value == ' '){
          LoginShow_Aut.innerHTML = "<p>Логин не может быть пустым</p>"
      }
      else if(password_aut.value == '' || password_aut.value == ' '){
          PasswordShow_Aut.innerHTML = "<p>Пароль не может быть пустым</p>"
      }
      else{
          error_aut.innerHTML = "<a href = '../Pages/first_page_for_registered.html'>Добро пожаловать</a>"
      }
}