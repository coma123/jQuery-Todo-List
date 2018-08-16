// Check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();       
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    if (e.which === 13 && $("input[type='text']").val() !== "") {
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle(500);
});