const create = document.querySelector('.sign-up-register');
create.addEventListener('click', function (e) {
    // localStorage.setItem('user', JSON.stringify({ username: 'Minhaz' }));
    const parseStor = JSON.parse(localStorage.getItem('user'));
    const user = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    console.log(parseStor);
    if (user == '' && password == '') {
        document.getElementById('error-msg').style.display = 'block';
    }
    else if (parseStor?.username == user) {
        document.getElementById('user-exist-up').style.display = 'block';
    }
    else if (parseStor?.username !== user) {
        localStorage.setItem('user', JSON.stringify({ username: user, password: password }));
        window.location.href = "../signin.html";
    }
    // console.log(parseStor.username);
    // console.log(localStorage.getItem('user'));;
})
console.log('connected with signin');