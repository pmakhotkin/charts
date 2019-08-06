function show2() {
    $.ajax({
        url: "php/charts.php",
        cache: false,
    });
    return false;
}

$(document).ready(function () {
    show2();
    setInterval('show2()', 5000);
});