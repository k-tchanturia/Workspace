//Create the "Reveal Spoiler" button
const $button = $('<button>Reveal Spoiler</button>')
//Append to web page
$('.spoiler').append($button);

//Hide the spoiler text
$('.spoiler span').hide();
                                            //When the buttin is presed
$('.spoiler button').on('click mouseleave',  function(){
    $('.spoiler span').show();             //Show the poler text
    $('.spoiler button').hide();           //Hide the "Reval Spiler" button
})
