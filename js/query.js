//Filter
$(function() {
    $(".filter_portfolio li").on('click', function(event) {
        event.preventDefault();
        let category = $(this).attr("data-filter");
        $(".filter_portfolio li").removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass('loadbtn')) {
            $("#load_filter").show();
        } else {
            $("#load_filter").hide();
        }
        let item = $(".portfolio .portfolio_item")
       item.fadeOut("slow");
        item.each(function() {
            if ($(this).hasClass(category)) {
                $(this).fadeIn(1000);
            }
        });
    });
});
//Load more 12 + 12
$(function (){
        const elements = $(".portfolio_item.invisible");
    $(elements).hide();
        if ($(elements).length !== 0) {
            $("#load_filter").show();
        }
        $('#load_filter').on('click', function() {
        $('.portfolio_item.invisible:hidden').slice(0, 12).slideDown( "slow" );

            $('.portfolio_item.invisible').addClass('all').removeClass('invisible');
        if ($(".portfolio_item.invisible:hidden").length === 0) {
        $("#load_filter").remove();}
    });
});


// init Masonry
$(function() {
    let $grid = $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer',
    });
    let $subGrid = $('.sub-grid').masonry({
        columnWidth: 180,
        itemSelector: '.subgrid-item',
        //percentPosition: true,
        gutter: '.subgutter-sizer',
    });

    let $subGrid2 = $('.sub-grid2').masonry({
        columnWidth: 120,
        itemSelector: '.subgrid-item2',
        //percentPosition: true,
        gutter: '.subgutter-sizer',
    });

// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});
    $subGrid.imagesLoaded().progress( function() {
        $subGrid.masonry();
    });
    $subGrid2.imagesLoaded().progress( function() {
        $subGrid2.masonry();
    });

});

//Load gallery
$(function() {
    const hiddenGrid = $('.grid-hidden').toArray();
    const loadMore = $('#load_gallery');
    if ($(hiddenGrid).length !== 0) {
        $("#load_gallery").show();
    }
    $(loadMore).on('click', function() {
    
        $(hiddenGrid).removeClass('grid-hidden').slideDown( "1000" );
    
    $('.grid').masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item',
        percentPosition: true,
        gutter: '.gutter-sizer',
        
});
if ($('.grid-hidden').toArray().length === 0) {
    $("#load_gallery").fadeOut('slow');}

});
});