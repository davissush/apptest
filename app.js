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

document.addEventListener("deviceready",onDeviceReady,false);



var pictureSource;   // picture source
var destinationType; // sets the format of returned value

// Wait for device API libraries to load
//
document.addEventListener("deviceready",onDeviceReady,false);

// device APIs are available
//
function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
}

// Called when a photo is successfully retrieved
//
function onPhotoDataSuccess(imageData) {
        // Uncomment to view the base64-encoded image data
        // console.log(imageData);

        // Get image handle
        //
        var smallImage = document.getElementById('smallImage');

        // Unhide image elements
        //
        smallImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        smallImage.src = "data:image/jpeg;base64," + imageData;
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
        // Uncomment to view the image file URI
        // console.log(imageURI);

        // Get image handle
        //
        var largeImage = document.getElementById('largeImage');

        // Unhide image elements
        //
        largeImage.style.display = 'block';

        // Show the captured photo
        // The inline CSS rules are used to resize the image
        //
        largeImage.src = imageURI;
}

// A button will call this function
//
function capturePhoto() {
        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
                destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function capturePhotoEdit() {
        // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
                destinationType: destinationType.DATA_URL });
}

// A button will call this function
//
function getPhoto(source) {
        // Retrieve image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                destinationType: destinationType.FILE_URI,
                sourceType: source });
}

// Called if something bad happens.
//
function onFail(message) {
        alert('Failed because: ' + message);
}

(function($) {

        $("#fireup").entwine({
                onclick: function(){
                      capturePhoto();
                }
        })

})(jQuery);