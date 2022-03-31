//Create the "Reveal Spoiler" button
//Append to web page

//Hide the spoiler text
$('.spoiler span').hide();
                                            //When the buttin is presed
$('.spoiler button').click(function(){
    $('.spoiler span').show();             //Show the poler text
    $('.spoiler button').hide();           //Hide the "Reval Spiler" button
})
