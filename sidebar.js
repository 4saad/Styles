document.addEventListener("DOMContentLoaded", function() {
    alert('inn');
    const sidebar = $("<div id='sidebar' class='sidebar'></div>");
    $('.NewSidebarthree').append(sidebar);
    $('.NewSidebarthree').addClass('with-sidebar');

    if ($('ul.tab-box-tabs').length > 0) {
        $('#sidebar').append('<div id="tabs" class="sidebar-tabs">')
        $('.sidebar-tabs').append($('ul.tab-box-tabs'));
        $('a.tab').append('<div class="sidebar-border"><span class="top"></span><span class="bottom"></span></div>');
    }

 });

