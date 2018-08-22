import './corsika2018.html';

var events = [{
        "name": "hike",
        "count": 66,
        "path": "hike"
    },
    {
        "name": "chil",
        "count": 67,
        "path": "chil"
    },
    {
        "name": "bike",
        "count": 44,
        "path": "bike"
    }
];

Template.corsika2018.onRendered(function helloOnCreated() {

    //add slider to all (visible) containers
    for (y = 0; y < events.length; y++) {

        $('#sliderContainer' + y).append("<div class=\"slider w3-panel w3-center\" id=\"slide" + y +
            "\" style=\"display:none\"><div class=\"slide" + y +
            " owl-carousel owl-theme\"></div></div>");

        $('#slide' + y).show();
        fillSlider(events[y].count, events[y].path, y);
    }

    //hide some containers
    $('#sliderContainer1').hide();
    $('#sliderContainer2').hide();

});

Template.corsika2018.events({

    'click .navEventCorsika' (event) {

        $('.navEventCorsika').removeClass("active").addClass('inactive');
        $(event.currentTarget).addClass("active");

        $('.sliderCont').hide();

        $('#' + event.currentTarget.dataset.target).show();

    },

    'click .imgModal' (event) {

        $('#myModal').show();
        $('#modalImg').attr("src","second.jpg");
        modalImg.src = $(event.currentTarget).attr("src");
    },

    'click .close' (event) {
        $('#myModal').hide();
    }
});

function fillSlider(count, evtName, sliderId) {

    var path;
    for (i = 0; i < count; i++) {
        path = "../corsika2018-gallery/img/" + evtName + "/" + evtName + "_" + (i + 1) + ".jpg";
        $('.slide' + sliderId).append("<img class=\"owl-lazy imgModal\" data-src=" + path + ">");
    }

    $('.slide' + sliderId).owlCarousel({
        loop: false,
        lazyLoad: true,
        margin: 10,
        responsiveClass: true,
        navText: ["<i class='fa fa-chevron-left' style='padding:16px'></i>",
            "<i class='fa fa-chevron-right' style='padding:16px'></i>"
        ],
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 2,
                nav: true,
            },
            990: {
                items: 2,
                nav: true,
            }
        }
    })
}