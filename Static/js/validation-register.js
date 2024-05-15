let registerBtn = document.querySelector('#registerbtn');

registerBtn.addEventListener('click', function() {
    let emailInput = document.querySelector('#registermail');
    let usserInput = document.querySelector('#registerusser');
    let dateInput = document.querySelector('#registerdate');
    let passInput = document.querySelector('#registerpass');
    let repassInput = document.querySelector('#registerrepas');
    let cbInput = document.querySelector('#registerTyC')
    
    if (emailInput.value === '') { 
        let errorMail = document.querySelector('#error-registermail');
        errorMail.innerHTML = 'Debe completar el campo con un mail valido';
        emailInput.classList.add('input-error');
    }
    if (usserInput.value === '') { 
        let errorUsser = document.querySelector('#error-registerusser');
        errorUsser.innerHTML = 'Debe completar el campo con un usario valido';
        usserInput.classList.add('input-error');
    }
    if (dateInput.value === '') { 
        let errorDate = document.querySelector('#error-registerdate');
        errorDate.innerHTML = 'Debe completar el campo con una fecha valida';
        dateInput.classList.add('input-error');
    }
    if (passInput.value === '') { 
        let errorPass = document.querySelector('#error-registerpass');
        errorPass.innerHTML = 'Debe completar el campo';
        passInput.classList.add('input-error');
    }
    if (repassInput.value === '') { 
        let errorRepass = document.querySelector('#error-registerrepas');
        errorRepass.innerHTML = 'Debe completar el campo';
        repassInput.classList.add('input-error');
    }
    if (!(cbInput.checked)) { 
        let errorCB = document.querySelector('#error-registerTyC');
        errorCB.innerHTML = 'Debe tildar el campo';
    } 
    
});


 
