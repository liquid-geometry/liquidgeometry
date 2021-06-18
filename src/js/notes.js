//IGNORE THIS FILE. IT IS JUST FOR TAKING NOTES

//first way of solving linear systems (proccess of elimination)
//copyright (c) 2021 MathFlare LLC. - All rights reserved.
$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();
        const a1 = $("#a1").val();
        const b1 = $("#b1").val();
        const c1 = $("#c1").val();
        const a2 = $("#a2").val();
        const b2 = $("#b2").val();
        const c2 = $("#c2").val();
        const E1;
        if (
            a1 == "" ||
            a2 == "" ||
            b1 == "" ||
            b2 == "" ||
            c1 == "" ||
            c2 == ""
        ) {
            $("#output").html(
                `<p class="text-warning">Please enter a valid value</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else if (c1 == 0 && c2 == 0) {
            if (a1 / a2 == b1 / b2) {
                //unlimited solutions
                $("#output").html(
                    `<p class="text-warning">The system has unlimited solutions</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } else {
                $("#output").html(
                    `<p class="text-warning">The system has a single solution (x,y) = (0,0)</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            }
        } else if (a1 / a2 == b1 / b2 && b1 / b2 != c1 / c2 || a1 == 0 && a2 == 0 && b1 / b2 != c1 / c2 || b1 == 0 && b2 == 0 && a1 / a2 != c1 / c2) {
            $("#output").html(
                `<p class="text-warning">The system is a contradiction: it has no solutions</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else if (a1 / a2 == b1 / b2 && b1 / b2 == c1 / c2 || a1 == 0 && a2 == 0 && b1 / b2 == c1 / c2 || b1 == 0 && b2 == 0 && a1 / a2 == c1 / c2) {
            //unlimited solutions
            $("#output").html(
                `<p class="text-warning">The system has unlimited solutions</p>`
            );
            $("#a1").val(null);
            $("#b1").val(null);
            $("#c1").val(null);
            $("#a2").val(null);
            $("#b2").val(null);
            $("#c2").val(null);
        } else {
            if (a1 == 0 && b1 != 0) {
                y = c1 / b1;
                x = (c2 - b2 * y) / a2;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } else if (a1 != 0 && b1 == 0) {
                x = c1 / a1;
                y = (c2 - a2 * x) / b2;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } else if (a2 == 0 && b2 != 0) {
                y = c2 / b2;
                x = (c1 - b1 * y) / a1;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            } 
            else if ( a2 != 0 && b2 == 0) {
                x = c2 / a2;
                y = (c1 - a1 * x) / b1;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            }
            else {
                E1 = b1 * -a2 + b2 * a1; //edit
                y = (c1 * -a2 + c2 * a1) / E1;
                x = (c1 - b1 * y) / a1;
                $("#output").html(
                    `<p class="text-success">The system has a single solution (x,y) = (${x},${y})</p>`
                );
                $("#a1").val(null);
                $("#b1").val(null);
                $("#c1").val(null);
                $("#a2").val(null);
                $("#b2").val(null);
                $("#c2").val(null);
            }
        }
    });
});


//PRIGHTSIDE FIRST WAY

$(document).ready(() => {
    $("#button").click((e) => {
        e.preventDefault();
        const hypo = $("#hypo").val();
        const side = $("#side").val();
        console.log(hypo);
        console.log(side);

        if (side === "" && hypo === "") {
            $("#output").html(
                `<p class="text-warning">Leg and Hypo cannot be empty</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (side < 0 && hypo < 0) {
            $("#output").html(
                `<p class="text-warning">Leg and Hypo Must be Greater Than Zero</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (side === "") {
            $("#output").html(
                `<p class="text-warning">Leg cannot be empty</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (hypo === "") {
            $("#output").html(
                `<p class="text-warning">Hypo cannot be empty</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (side < 0) {
            $("#output").html(
                `<p class="text-warning">Leg Must be Greater Than Zero</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (hypo < 0) {
            $("#output").html(
                `<p class="text-warning">Hypo Must be Greater Than Zero</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else if (side > hypo) {
            $("#output").html(
                `<p class="text-warning">The leg cannot be larger than or equal to the hypotenuse</p>`
            );
            $("#hypo").val(null);
            $("#side").val(null);
        } else {
            $("#output").html(
                `<p class="text-success">The other leg is ${Math.sqrt(
                    hypo ** 2 - side ** 2
                )}cm</p>`
            );
        }
        $("#hypo").val(null);
        $("#side").val(null);
    });
    $(".show-formula").click(() => {
        $("#formula").fadeToggle(500);
    });
});



//copyright (c) 2021 MathFlare LLC. - All rights reserved.