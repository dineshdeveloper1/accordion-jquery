$('.list').click(function(e){

    e.preventDefault()

    $(this).next().slideToggle(600)

})