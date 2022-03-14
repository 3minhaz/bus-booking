


document.getElementById('signin-btn').addEventListener('click', function () {
    const user = document.getElementById('signin-user').value;
    const password = document.getElementById('signin-password').value;
    const getUser = JSON.parse(localStorage.getItem('user'));

    if (user == '' && password == '') {
        document.getElementById('error-msg').style.display = 'block';
    }
    else if (getUser.username == user && getUser.password == password) {
        document.location.href = '../seatbooking.html';
    }
    else {
        document.getElementById('user-exist').style.display = 'block';
    }
})




document.getElementById('signup-btn').addEventListener('click', function () {
    document.location.href = '../signup.html';
})