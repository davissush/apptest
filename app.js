window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="header"><h1>Page Slider</h1></div>' +
        '<div class="scroller">' +
            '<ul class="list">' +
                '<li><a href="#page1"><strong>Build Bot</strong></a></li>' +
                '<li><a href="#page2"><strong>Medi Bot</strong></a></li>' +
                '<li><a href="#page3"><strong>Ripple Bot</strong></a></li>' +
            '</ul>' +
        '</div>' +
    '</div>';

var detailsPage =
        '<div>' +
                '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
                '<div class="scroller">' +
                '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
                "<button id='fireup'>Fire UP</button>" +
                "<button onclick='window.plugins.socialsharing.share(&quot;Message only&quot;)'>message only</button>" +
                '</div>' +
                '</div>' +
                '</div>';

window.localStorage.setItem("homePage", homePage);
window.localStorage.setItem("detailsPage", detailsPage);

var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = merge(window.localStorage.getItem("homePage"), {img: "buildbot.jpg", name: "Build Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
    } else if (hash === "#page2") {
        page = merge(window.localStorage.getItem("detailsPage"), {img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
    } else if (hash === "#page3") {
        page = merge(window.localStorage.getItem("detailsPage"), {img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
    }
    else {
        page = window.localStorage.getItem("homePage");
    }

    slider.slidePage($(page));

}

function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();

(function($) {

        $("#fireup").entwine({
                onclick: function(){
                        window.alert('hello');
                        window.plugins.socialsharing.share('Message and subject', 'The subject');
                }
        })

})(jQuery);