
$(document).ready(function(){
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    $('#sign-up-button').click(function (e) {
        window.open("https://forms.gle/57p5mzEPXEFmuzz97")
    })
    $('#sign-up').click(function (e) {
        window.open("https://forms.gle/57p5mzEPXEFmuzz97")
    })
    // https://forms.gle/57p5mzEPXEFmuzz97
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#gameAINavbar'
  })