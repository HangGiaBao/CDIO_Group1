$(document).ready(function() {
    $('#eye').on('click', function() {
        let passwordField = $('#password');
        let passwordFieldType = passwordField.attr('type');
        if (passwordFieldType === 'password') {
            passwordField.attr('type', 'text');
            $(this).find('i').removeClass('far fa-eye').addClass('far fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            $(this).find('i').removeClass('far fa-eye-slash').addClass('far fa-eye');
        }
    });
});

function handleLogin(event) {
    event.preventDefault();
    const username = $('#username').val();
    const password = $('#password').val();
    const errorMessage = $('#error-message');

    if (username === '' || password === '') {
        errorMessage.text('Tên đăng nhập và mật khẩu không được để trống.');
        return false;
    }

    // Example of a simple login validation
    if (username === 'admin' && password === 'admin') {
        alert('Đăng nhập thành công!');
        // Redirect to another page or perform other actions
        window.location.href = '/frontend/src/Pages/home.html';
    } else {
        errorMessage.text('Tên đăng nhập hoặc mật khẩu không đúng.');
    }

    return false;
}