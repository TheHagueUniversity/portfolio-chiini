$(document).ready(
    function () {

//        First Test
//        $("#mail_icon").hover(
//            function () {
//                $("#mail_circle").removeClass("st0");
//                $("#mail_circle").addClass("st1");
//                $(".mail_inside").removeClass("st1");
//                $(".mail_inside").addClass("st0");
//            },
//            function () {
//                $("#mail_circle").removeClass("st1");
//                $("#mail_circle").addClass("st0");
//                $(".mail_inside").removeClass("st0");
//                $(".mail_inside").addClass("st1");
//            }
//
//        );
        $('button').click(
            function () {
                $(this).css({"background-color":"black","border":"2px solid black", "color":"#FFE46E"});
            }
        );

        function hoverFunction(icon, circle, inside) {
            $(icon).hover(
                function () {
                    $(circle).removeClass("st0");
                    $(circle).addClass("st1");
                    $(inside).removeClass("st1");
                    $(inside).addClass("st0");
                },
                function () {
                    $(circle).removeClass("st1");
                    $(circle).addClass("st0");
                    $(inside).removeClass("st0");
                    $(inside).addClass("st1");
                }

            );
        }
        
        hoverFunction('#mail_icon', '#mail_circle', '.mail_inside');
        hoverFunction('#phone_icon', '#phone_circle', '.phone_inside');
        hoverFunction('#linkedin_icon', '#linkedin_circle', '.linkedin_inside');
        
        hoverFunction('#linkedin_footer', '.linkedin_footer_circle', '.linkedin_footer_inside');
        
        hoverFunction('#mail_footer', '#mail_footer_circle', '.mail_footer_inside');
        
        hoverFunction('#phone_footer', '#phone_footer_circle', '.phone_footer_inside');

    }
);
