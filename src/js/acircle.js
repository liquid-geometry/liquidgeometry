﻿$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const radius = $("#radius").val();
        const result = (radius * radius) * 3.14;
        if (radius <= 0) {
            $("#output").html(`<p class="text-warning">Please enter a valid value</p>`);
            $("#shape").attr({
                "style": `height: 0; width: 0; display: none`
            });
            $("#radius").val(null);
        }
        else {
            $("#output").html(`The area of the circle is &#8764; ${result}cm^2 (&#8719; = 3.14)`);
            $("#radius").val(null);
            if (!(radius <= 40)) {
                if (!(radius >= 600)) {
                    $("#shape").attr({
                        "style": `height: ${radius}px; width: ${radius}px; display: flex`
                    });
                }
                else {
                    $("#shape").attr({
                        "style": `height: 300px; width: 300px; display: block`
                    });
                }
            }
            else {
                $("#output").html("The area of the circle is &#8764;" + result + " cm<sup>2</sup> (&#8719; = 3.14)");
                $("#radius").val(null);
                $("#shape").attr({
                    "style": `height: 40px; width: 40px; display: flex`
                });
            }
        }
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});