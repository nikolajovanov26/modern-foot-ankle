// Booking Form Doctor Radio Button Styling
var doctorRadioButtons = document.querySelectorAll('[data-ra="doctor"]');
for (var i = 0; i < doctorRadioButtons.length; i++) {
    doctorRadioButtons[i].addEventListener('change', function () {
        for (var j = 0; j < doctorRadioButtons.length; j++) {
            if (doctorRadioButtons[j].checked) {
                doctorRadioButtons[j].parentNode.classList.add('checked');
            } else {
                doctorRadioButtons[j].parentNode.classList.remove('checked');
            }
        }
    });
}

// Booking Form Location Radio Button Styling
var locationRadioButtons = document.querySelectorAll('[data-ra="location"]');
for (var i = 0; i < locationRadioButtons.length; i++) {
    locationRadioButtons[i].addEventListener('change', function () {
        for (var j = 0; j < locationRadioButtons.length; j++) {
            if (locationRadioButtons[j].checked) {
                locationRadioButtons[j].parentNode.classList.add('checked');
            } else {
                locationRadioButtons[j].parentNode.classList.remove('checked');
            }
        }
    });
}