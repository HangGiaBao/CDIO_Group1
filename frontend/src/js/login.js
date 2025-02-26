$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form gửi dữ liệu mặc định
    window.location.href = '/src/Pages/home.html'; // Chuyển hướng sang home.html
});

$(document).ready(function () {
    $("#form-login").submit(function (event) {
        event.preventDefault(); // Ngăn form tải lại trang

        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        // Kiểm tra hợp lệ
        if (username === "" || password === "") {
            $("#error-message").text("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        // Gửi dữ liệu bằng AJAX
        $.ajax({
            url: "/my-app/src/backend/login.php",
            type: "POST",
            data: { username: username, password: password },
            dataType: "json",
            success: function (response) {
                if (response.success) {
                    window.location.href = response.redirect; // Chuyển trang khi đăng nhập thành công
                } else {
                    $("#error-message").text(response.message); // Hiển thị lỗi
                }
            },
            error: function () {
                $("#error-message").text("Lỗi kết nối máy chủ!");
            }
        });
    });

    // Hiển thị / Ẩn mật khẩu
    $("#eye").click(function () {
        var passwordField = $("#password");
        var passwordFieldType = passwordField.attr("type");

        if (passwordFieldType === "password") {
            passwordField.attr("type", "text");
            $("#eye i").removeClass("far fa-eye").addClass("far fa-eye-slash");
        } else {
            passwordField.attr("type", "password");
            $("#eye i").removeClass("far fa-eye-slash").addClass("far fa-eye");
        }
    });
});
