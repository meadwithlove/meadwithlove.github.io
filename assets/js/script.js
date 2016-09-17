$(document).ready(function() {

    $('#myModal').on('shown.bs.modal', function () {
        $('#pw').focus();
    })

    $('#pwForm').on('submit',function(e) {
        if($('#pw').val() != "meadwithlove") {
            e.preventDefault();
            alert("Like we said, this is just a regular website.");
        }
    });
});
