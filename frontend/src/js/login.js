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

        // Gửi yêu cầu đăng nhập bằng AJAX
        $.ajax({
            url: "http://localhost:5001/v1/auth/login", // ✅ Sửa lại đường dẫn API
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ username: username, password: password }),
            dataType: "json",
            success: function (response) {
                if (response.accessToken) {
                    // ✅ Lưu token vào localStorage (hoặc cookie nếu cần)
                    localStorage.setItem("accessToken", response.accessToken);

                    // ✅ Chuyển hướng sang home.html
                    window.location.href = "/my-app/src/Pages/home.html";
                } else {
                    $("#error-message").text(response.message || "Đăng nhập thất bại!");
                }
            },
            error: function (xhr) {
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    $("#error-message").text(xhr.responseJSON.message);
                } else {
                    $("#error-message").text("Lỗi kết nối máy chủ! Vui lòng thử lại.");
                }
            }
        });
    });
});
