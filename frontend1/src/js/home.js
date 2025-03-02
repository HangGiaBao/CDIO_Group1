$(document).ready(function(){
    console.log("Document is ready");

    // Thêm class has-child cho các menu cha có sub-menu
    $('.sub-menu').parent('li').addClass('has-child');

    // Xử lý sự kiện click vào menu cha
    $('#main-menu > li > button').click(function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định

        var subMenu = $(this).next('.sub-menu');

        if (subMenu.is(":visible")) {
            // Nếu sub-menu đang hiển thị, ẩn nó đi
            subMenu.slideUp();
        } else {
            // Ẩn tất cả sub-menu khác trước khi mở cái mới
            $('.sub-menu').slideUp();
            subMenu.slideDown();
        }
    });

    // Ngăn chặn sự kiện lan ra ngoài menu con
    $('.sub-menu').click(function(event){
        event.stopPropagation();
    });
});
