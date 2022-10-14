const valueVerifier= (email, password) => {
    if (email !='' && password !=''){
        alert('Program continues to the next step');
    }
        else {
            alert('Please provide an email and/or password');
        }
    
    }

    const passwordVerifier = (value) =>{
        if (password.length < 4){
            alert ('The password should be greater than 4 characters')
        }     
    }

    const userOne = {'email': 'email@email.com', 'password':'password'}

    const loginFunction=(email, password) => {

if (email == userOne.email && password == userOne.password){
    const loginMessage='You are now logged in as '+email;
    alert (loginMessage);
} else{
    alert('Please review your email and/or password');
}
    }

const loginHandler = () => {


const emailInput=document.getElementById('email');
const passwordInput=document.getElementById('password');


console.log('Email element', emailInput)
console.log('Password element', passwordInput)

const email =emailInput.value;
const password = passwordInput.value;

valueVerifier(email, password);

passwordVerifier(password);

loginFunction(email, password);

// console.log(password.length)

// if (email != '') {

// }
// if (password !=''){

// }
// else{
//     console.log('Login successful')
// }
}