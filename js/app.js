$('#flashMessage').hide()
    .slideDown(1000)
    .delay(3000)
    .slideUp();

const title = "My First Blog Post";
const constent = "This is my <strong>first</strong> post!";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').html(constent);