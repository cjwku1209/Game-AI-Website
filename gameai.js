
$(document).ready(function(){
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
      })
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#gameAINavbar'
  })