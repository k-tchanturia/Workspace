$('.spoiler').on('click', 'button', function(){
    //Show the poler text
    $('.spoiler span').show();
    //Hide the "Reval Spoiler" button
    $('.spoiler button').hide();
});

//Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>')
//Append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();