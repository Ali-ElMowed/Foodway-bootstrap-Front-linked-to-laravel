let input_fname = document.getElementById('fname');
let input_lname = document.getElementById('lname');
let input_email = document.getElementById('email');
let input_password = document.getElementById('pass');
let register = document.getElementById('signup');



register.addEventListener('click', function () {
    console.log('register');
    let data = new FormData();
    data.append('first_name', input_fname.value);
    data.append('last_name', input_lname.value);
    data.append('email', input_email.value);
    data.append('password', input_password.value);

    fetch('http://127.0.0.1:8000/api/add_user',
        {
            method: 'POST',
            body: JSON.stringify(data)
        }
        
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
        }
        )
});