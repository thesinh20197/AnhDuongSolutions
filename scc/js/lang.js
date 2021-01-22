/* Language */

var tnum = 'VN';


$(document).ready(function () {

    $(document).click(function (e) {
        $('.translate_wrapper, .more_lang').removeClass('active1');
    });

    $('.translate_wrapper .current_lang').click(function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass('active1');

        setTimeout(function () {
            $('.more_lang').toggleClass('active1');
        }, 5);
    });


    /*TRANSLATE*/
    translate(tnum);

    $('.more_lang .lang').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.more_lang').removeClass('active1');

        var img = $(this).find('img').attr('src');
        var lang = $(this).attr('data-value');
        var tnum = lang;
        translate(tnum);

        $('.current_lang .lang-txt').text(lang);

        $('.current_lang img').attr('src', img);

        /* ---- */

        if ($(this).attr('data-value') == 'VN') {
            document.getElementsByName('tbxFullName')[0].placeholder = 'Tên của bạn là gì?';
            document.getElementsByName('tbxPhone')[0].placeholder = 'Số điện thoại liên lạc của bạn là gì?';
            document.getElementsByName('tbxEmail')[0].placeholder = 'Email liên hệ của bạn là gì?';
            document.getElementsByName('tbxContent')[0].placeholder = 'Dịch vụ mà bạn mong muốn là gì?';
            document.getElementsByName('btnSubmit')[0].value = 'Gửi';
            document.getElementsByName('nameTestCall')[0].placeholder = 'Họ và tên';
            document.getElementsByName('phoneTestCall')[0].placeholder = 'Số điện thoại';
            document.getElementsByName('secutityCode')[0].placeholder = 'Mã bảo mật';

        }
        else if ($(this).attr('data-value') == 'ENG') {
            document.getElementsByName('tbxFullName')[0].placeholder = 'What is your name?';
            document.getElementsByName('tbxPhone')[0].placeholder = 'What is your contact phone number?';
            document.getElementsByName('tbxEmail')[0].placeholder = 'What is your contact email?';
            document.getElementsByName('tbxContent')[0].placeholder = 'What service do you want?';
            document.getElementsByName('btnSubmit')[0].value = 'Send';
            document.getElementsByName('nameTestCall')[0].placeholder = 'Name';
            document.getElementsByName('phoneTestCall')[0].placeholder = 'Phone number';
            document.getElementsByName('secutityCode')[0].placeholder = 'Security code';

        }
        /* ---- */
    });
});

function translate(tnum) {
    $('.home').text(trans[0][tnum]);
    $('.introduce').text(trans[1][tnum]);
    $('.service').text(trans[2][tnum]);
    $('.contact').text(trans[3][tnum]);
    $('.login-lang').text(trans[4][tnum]);
    $('.register-lang').text(trans[5][tnum]);
    $('.simple-operation-title').text(trans[6][tnum]);
    $('.simple-operation-content').text(trans[7][tnum]);
    $('.cost-matching-title').text(trans[8][tnum]);
    $('.cost-matching-content').text(trans[9][tnum]);
    $('.high-productivity-title').text(trans[10][tnum]);
    $('.high-productivity-content').text(trans[11][tnum]);
    $('.absolute-security-title').text(trans[12][tnum]);
    $('.absolute-security-content').text(trans[13][tnum]);
    $('.services-experience .services-title').text(trans[14][tnum]);
    $('.services-experience .services-provided').text(trans[15][tnum]);
    $('.formTestCall .btnTest').text(trans[16][tnum]);
    $('.our-solution .services-subtitle').text(trans[17][tnum]);
    $('.our-solution .services-title').text(trans[18][tnum]);
    $('.our-solution .services-text').text(trans[19][tnum]);
    $('.our-solution .see-price-list').text(trans[20][tnum]);
    $('.pricing-container .pricing-title h2').text(trans[21][tnum]);
    $('.pricing-container .pricing-title p').text(trans[22][tnum]);
    $('.pricing-card-section .personal-use').text(trans[23][tnum]);
    $('.pricing-all-plan-features-section .personal-server').text(trans[24][tnum]);
    $('.pricing-all-plan-features-section .personal-robocalls').text(trans[25][tnum]);
    $('.pricing-all-plan-features-section .personal-autoConnect').text(trans[26][tnum]);
    $('.pricing-all-plan-features-section .personal-workspace').text(trans[27][tnum]);
    $('.pricing-all-plan-features-section .personal-ipopup').text(trans[28][tnum]);
    $('.pricing-all-plan-features-section .personal-diligence').text(trans[29][tnum]);
    $('.pricing-all-plan-features-section .personal-tourHotline').text(trans[30][tnum]);
    $('.pricing-all-plan-features-section .personal-govern').text(trans[31][tnum]);
    $('.pricing-all-plan-features-section .personal-statistic').text(trans[32][tnum]);
    $('.pricing-card-section .use-now').text(trans[33][tnum]);
    $('.pricing-card-section .team-use').text(trans[34][tnum]);
    $('.contact-section .contact-title').text(trans[35][tnum]);
    $('.contact-section .contact-subtitle').text(trans[36][tnum]);
    $('.name-lang').text(trans[37][tnum]);
    $('.phone-lang').text(trans[38][tnum]);
    $('.field-lang').text(trans[39][tnum]);
    $('.real-estate').text(trans[40][tnum]);
    $('.stock').text(trans[41][tnum]);
    $('.finance-support').text(trans[42][tnum]);
    $('.car').text(trans[43][tnum]);
    $('.insurrance').text(trans[44][tnum]);
    $('.education').text(trans[45][tnum]);
    $('.beauty-salon').text(trans[46][tnum]);
    $('.dentistry').text(trans[47][tnum]);
    $('.note').text(trans[48][tnum]);
    $('.clients-title').text(trans[49][tnum]);
    $('.clients-content').text(trans[50][tnum]);
    $('.company-contact').text(trans[51][tnum]);
    $('.company-name').text(trans[52][tnum]);
    $('.company-address').text(trans[53][tnum]);
    $('.company-address-location').text(trans[54][tnum]);
    $('.company-connect').text(trans[55][tnum]);
    $('.other-service-packs').text(trans[56][tnum]);
    $('.pricing-target-personal').text(trans[57][tnum]);
    $('.pricing-target-team').text(trans[58][tnum]);


}

var trans = [
    {
        ENG: 'Home',
        VN: 'Trang chủ',
    }, {
        ENG: 'About us',
        VN: 'Giới thiệu',
    }, {
        ENG: 'Services',
        VN: 'Dịch vụ',
    },
    {
        ENG: 'Contact',
        VN: 'Liên hệ',
    },
    {
        ENG: 'Sign In',
        VN: 'Đăng nhập',
    },
    {
        ENG: 'Sign Up',
        VN: 'Đăng ký',
    },
    {
        ENG: 'Simple Operation',
        VN: 'Vận hành đơn giản',
    },
    {
        ENG: 'Simple for the operator without professional IT training (Company CEO / Branch Director / Division Manager / Teamleader / Individual ...). We guarantee you only run the campaign in 5 minutes!',
        VN: 'Đơn giản cho người vận hành không cần qua đào tạo IT chuyên nghiệp (CEO Công ty/ Giám Đốc Chi Nhánh/ Trưởng Phòng / Teamleader/ Cá nhân...). Chúng tôi cam kết bạn chỉ cân vận hành chiến dịch trong 5 phút !',
    },

    {
        ENG: 'Cost Matching',
        VN: 'Chi phí phù hợp',
    },
    {
        ENG: 'Cheap price, suitable for small and medium businesses or for outstanding individuals. Our software helps you to save a lot of costs for product introduction, hiring new staff,...',
        VN: 'Giá rẻ, phù hợp với các doanh nghiệp vừa và nhỏ hoặc dành cho cá nhân kiệt xuất. Phần mềm của chúng tôi giúp bạn tiết giảm chi phí rất nhiều cho việc giới thiệu sản phẩm, thuê nhân sự mới,...',
    },
    {
        ENG: 'High Productivity',
        VN: 'Năng suất cao',
    },
    {
        ENG: 'The system will support you to approach customers through a smart virtual assistant to transmit and update product information to customers through Smart Call, SMS brandname, Email. Your job is to only receive the number of customers interacting each day for consultation and care. Smart customer management module makes it easy to take care of and connect with customers.',
        VN: 'Hệ thống sẽ hỗ trợ bạn tiếp cận đến khách hàng thông qua trợ lý ảo thông minh để truyền tải, cập nhập thông tin sản phẩm cho khách hàng thông qua Cuộc gọi thông minh, tin nhắn SMS brandname, Email. Công việc của bạn là chỉ tiếp nhận lượng khách hàng tương tác mỗi ngày để tư vấn và chăm sóc. Phân hệ quản lý khách hàng thông minh giúp bạn dễ dàng chăm sóc và kết nối thông tin với khách hàng.',
    },

    {
        ENG: 'Absolute Security',
        VN: 'Bảo mật tuyệt đối',
    },

    {
        ENG: 'Technology transfer model of Private Call Center. Smart switchboard model with own ownership of businesses, groups, and individuals. That means 100% security level because the data is stored directly on the server owned by you. No need to rent a server from outside or happen any other data interference from outside.',
        VN: 'Chuyển giao công nghệ mô hình Private Call Center .Mô hình tổng đài thông minh với quyền sở hữu riêng của doanh nghiệp, đội nhóm, cá nhân. Nghĩa là mức độ bảo mật đạt 100% do dữ liệu được lưu giữ trực tiếp trên máy chủ thuộc sở hữu của chính bạn. Không cần thuê máy chủ từ bên ngoài hay xảy ra bất cứ một biện pháp can thiệp dữ liệu nào khác từ bên ngoài.',
    },

    {
        ENG: 'Experience Now',
        VN: 'Trải nghiệm ngay',
    },

    {
        ENG: 'pioneering in providing solutions that change the way businesses, business teams, and individuals communicate and connect with customers.',
        VN: 'tiên phong trong lĩnh vực cung cấp giải pháp thay đổi cách thức mà doanh nghiệp, đội nhóm kinh doanh, cá nhân giao tiếp và kết nối với khách hàng.',
    },

    {
        ENG: 'Start Demo',
        VN: 'Bắt đầu Demo',
    },

    {
        ENG: 'Our Solution',
        VN: 'Giải pháp của chúng tôi',
    },
    {
        ENG: 'Sales Growth',
        VN: 'Tăng trưởng doanh số bán hàng',
    },
    {
        ENG: 'Solutions to help you reach and connect with customers interested in products and services. Support customer care through intelligent virtual assistants from system software.',
        VN: 'Giải pháp giúp bạn tiếp cận và kết nối với khách hàng quan tâm sản phẩm, dịch vụ. Hỗ trợ chăm sóc tập khách hàng thông qua trợ lý ảo thông minh từ phần mềm hệ thống.',
    },
    {
        ENG: 'See price list',
        VN: 'Xem bảng giá',
    },
    {
        ENG: 'Cost of Technology Transfer',
        VN: 'Chi phí chuyển giao công nghệ',
    },
    {
        ENG: 'Our system saves you a lot of costs for connecting with customers, introducing products, hiring new staff,...',
        VN: 'Hệ thống của chúng tôi giúp bạn tiết giảm chi phí rất nhiều cho việc kết nối với khách hàng, giới thiệu sản phẩm, thuê nhân sự mới,...',
    },
    {
        ENG: 'Reasonable choice for personal use',
        VN: 'Lựa chọn hợp lý cho cá nhân sử dụng',
    },
    {
        ENG: 'Private server, 100% absolute security',
        VN: 'Server riêng, đảm bảo bảo mật tuyệt đối 100%',
    },
    {
        ENG: 'Robocalls - Automated machine transfer scripts',
        VN: 'Robocalls - Kịch bản chuyển máy tự động',
    },
    {
        ENG: 'Auto Connect - Increases Telesales productivity by 10 times',
        VN: 'Auto Connect - Nâng cao năng suất Telesales gấp 10 lần',
    },
    {
        ENG: 'Workspace - Customer resource management system',
        VN: 'Workspace - Hệ quản trị tài nguyên nguồn khách hàng',
    },
    {
        ENG: 'I-Pop Up - Get to know your customers right away',
        VN: 'I-Pop Up - Hiểu về khách hàng ngay khi trò chuyện',
    },
    {
        ENG: 'Attendance Reporting - Breakthrough feature for administrators',
        VN: 'Báo cáo chuyên cần - Tính năng đột phá cho quản trị viên',
    },
    {
        ENG: 'The Tour Hotline is fully automated',
        VN: 'Phân Tour Hotline tự động động hoàn toàn',
    },
    {
        ENG: 'Call history administration - 100% call recording',
        VN: 'Quản trị lịch sử cuộc gọi - Ghi âm cuộc gọi 100%',
    },
    {
        ENG: 'Smart Statistics - Smart Reminder',
        VN: 'Thống kê thông minh - Nhắc việc thông minh',
    },
    {
        ENG: 'Use Now',
        VN: 'Sử dụng ngay',
    },
    {
        ENG: 'Reasonable choice for team use',
        VN: 'Lựa chọn hợp lý cho đội nhóm sử dụng',
    },
    {
        ENG: 'Contact Now',
        VN: 'Liên hệ ngay',
    },
    {
        ENG: 'We will contact you as soon as we receive the letter. We are happy to answer any questions you may have, feel free to contact us!',
        VN: 'Chúng tôi sẽ liên hệ với quý khách ngay khi nhận được thư. Chúng tôi rất sẵn lòng trả lời bất kỳ câu hỏi nào của bạn, hãy liên hệ với chúng tôi!',
    },
    {
        ENG: 'Name',
        VN: 'Tên',
    },
    {
        ENG: 'Phone number',
        VN: 'Số điện thoại',
    },
    {
        ENG: 'Your field',
        VN: 'Lĩnh vực',
    },
    {
        ENG: 'Real Estate',
        VN: 'Bất động sản',
    },
    {
        ENG: 'Stock',
        VN: 'Chứng khoán',
    },
    {
        ENG: 'Finance Support',
        VN: 'Tư vấn tài chính',
    },
    {
        ENG: 'Car',
        VN: 'Ô tô',
    },
    {
        ENG: 'Insurrance',
        VN: 'Bảo hiểm',
    },
    {
        ENG: 'Education',
        VN: 'Giáo dục',
    },
    {
        ENG: 'Beauty Salon',
        VN: 'Thẩm mỹ viện',
    },
    {
        ENG: 'Dentistry',
        VN: 'Nha khoa',
    },
    {
        ENG: 'Note',
        VN: 'Ghi chú',
    },
    {
        ENG: 'Partner Used The Product',
        VN: 'Đối tác đã sử dụng sản phẩm',
    },
    {
        ENG: 'with the aim of maximizing customers for our partners when using the product, we always bring the best customer experience when using the system.',
        VN: 'đặt mục tiêu tối đa hóa khách hàng cho đối tác khi sử dụng sản phẩm, chúng tôi luôn mang đến những trải nghiệm tốt nhất cho khách hàng khi sử dụng hệ thống.',
    },
    {
        ENG: 'Contact Us',
        VN: 'Liên hệ với chúng tôi',
    },
    {
        ENG: 'ANH DUONG ENTERPRISE SOLUTIONS JOINT STOCK COMPANY.',
        VN: 'CÔNG TY CP GIẢI PHÁP DOANH NGHIỆP ÁNH DƯƠNG.',
    },
    {
        ENG: '17 Street No. 4, Him Lam Residential Area',
        VN: 'Số 17 Đường số 4, KDC Him Lam',
    },
    {
        ENG: 'Tan Hung Ward, District 7, Ho Chi Minh City.',
        VN: 'Phường Tân Hưng, Quận 7, Thành phố Hồ Chí Minh.',
    },
    {
        ENG: 'Connect with us',
        VN: 'Kết nối với chúng tôi',
    },

    {
        ENG: 'Other Service Packs',
        VN: 'Các gói dịch vụ khác',
    },
    {
        ENG: 'Personal Call Center Transfer',
        VN: 'Chuyển giao Call Center Cá nhân',
    },
    {
        ENG: 'Team Call Center Transfer',
        VN: 'Chuyển giao Call Center Đội nhóm',
    },



];
