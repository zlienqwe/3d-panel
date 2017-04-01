$('#parent').on('mousemove', function (e) {

    var offset = $('#parent').offset()

    var x = e.pageX - offset.left
    var y = e.pageY - offset.top


    var centerX = $('#parent').outerWidth() / 2
    var centerY = $('#parent').outerHeight() / 2

    var deltaX = x - centerX
    var deltaY = y - centerY

    var percentX = deltaX / centerX
    var percentY = deltaY / centerY

    var deg = 10

    $('#child').css({
        transform: 'rotateX(' + deg * -percentY + 'deg)' +
        ' rotateY(' + deg * percentX + 'deg)'
    })
})

$('#parent').on('mouseleave', function () {
    $('#child').css({
        transform: ''
    })
})