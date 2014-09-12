(function($, window, document) {
    'use-strict';
    var mobileDevice = false;
    var mobileDeviceBreak = 640;

    $('#nav-toggle').click(function(e) {
        $('nav ul, nav h2').slideToggle();
    });

    $('nav ul li a').click(function(e) {
        adjustSize(); //in case of SAP application menu should be hidden after click;
    });

    $(window).resize(function() {
        setTimeout(function() {
            checkSize();
            adjustSize();
        }, 550); // amortka: delay to avoid decreasing performance loss.
    });

    function checkSize() {
            if ($(document).width() < mobileDeviceBreak) {
                mobileDevice = true;
            } else {
                mobileDevice = false;
            }
    }

    function adjustSize() {
        if (mobileDevice) {
            console.debug('moble device!');
            $('nav ul').hide();
            $('nav h2').show();

        } else {
            console.debug('NOT moble device!');
            $('nav ul').show();
            $('nav h2').hide();
        }
    }

    $('#slide').slidesjs({
        navigation: {
            active: false
        },
        pagination: {
            active: false
        },
        play: {
            auto: true,
            interval: 3000
        }
    });
    
    function init() {
        checkSize();
        adjustSize();        
    }
    
    init();
    
})(window.jQuery, this, document);
