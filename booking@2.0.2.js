iniNavButtons();
iniStarterTab();
iniDoctorsTab();
iniLocationsTab();

function iniStarterTab() {
    selectDoctor = document.querySelector('#select-doctor');
    selectLocation = document.querySelector('#select-location');

    starterTab = document.querySelector('#starter-tab');
    doctorsTab = document.querySelector('#all-doctors-tab');
    locationsTab = document.querySelector('#all-locations-tab');
    iframeTab = document.querySelector('#iframe-tab')

    tabs = [starterTab,doctorsTab,locationsTab,iframeTab];

    selectDoctor.addEventListener("click", (e) => {
        navigateTab(doctorsTab);
    });

    selectLocation.addEventListener("click", (e) => {
        navigateTab(locationsTab);
    });
}

function iniDoctorsTab() {
    doctorCards = document.querySelectorAll('[card="doctor"]');
    doctorRegionAll = document.querySelector('#doctor-region-all');
    doctorRegionTampa = document.querySelector('#doctor-region-tampa');
    doctorRegionOrlando = document.querySelector('#doctor-region-orlando');

    doctorRegions = [doctorRegionAll, doctorRegionTampa, doctorRegionOrlando];

    doctorRegions.forEach(region => {
        region.addEventListener('click', (e) => {
            navigateDoctorRegion(region.id);
            singleClassChange(doctorRegions, region, 'active')
        })
    })
}

function iniLocationsTab() {
    locationCards = document.querySelectorAll('[card="location"]');
    locationRegionAll = document.querySelector('#location-region-all');
    locationRegionTampa = document.querySelector('#location-region-tampa');
    locationRegionOrlando = document.querySelector('#location-region-orlando');

    locationRegions = [locationRegionAll, locationRegionTampa, locationRegionOrlando];

    locationRegions.forEach(region => {
        region.addEventListener('click', (e) => {
            navigateLocationRegion(region.id);
            singleClassChange(locationRegions, region, 'active')
        })
    })
}

function iniNavButtons() {
    closeButton = document.querySelector('#close-button');
    backButton = document.querySelector('#back-button');

    closeButton.addEventListener('click', (e) => location.href = '/');
    
    backButton.addEventListener('click', (e) => {
        switch (findActiveTab()) {
            case 'starter-tab':
                location.href = '/'
                break;
            case 'all-doctors-tab':
                navigateTab(starterTab)
                break;
            case 'all-locations-tab':
                navigateTab(starterTab)
                break;
            case 'starter-tabiframe-tab':
                break;
        }
    })
}

function navigateTab(newTab) {
    tabs.forEach(tab => hide(tab));
    show(newTab);

    if (newTab.id != 'starter-tab') {
        show(backButton)
    } else {
        hide(backButton)
    }
}

function navigateDoctorRegion(newRegion) {
    switch (newRegion) {
        case 'doctor-region-all': doctorCards.forEach(card => showParent(card)); break;
        case 'doctor-region-tampa': doctorCards.forEach(card => card.querySelector('.doctor-region').innerHTML === 'Tampa' ? showParent(card) : hideParent(card)); break;
        case 'doctor-region-orlando': doctorCards.forEach(card => card.querySelector('.doctor-region').innerHTML === 'Orlando' ? showParent(card) : hideParent(card)); break;
    }
}

function navigateLocationRegion(newRegion) {
    switch (newRegion) {
        case 'location-region-all': doctorCards.forEach(card => showParent(card)); break;
        case 'location-region-tampa': doctorCards.forEach(card => card.querySelector('.location-region').innerHTML === 'Tampa' ? showParent(card) : hideParent(card)); break;
        case 'location-region-orlando': doctorCards.forEach(card => card.querySelector('.location-region').innerHTML === 'Orlando' ? showParent(card) : hideParent(card)); break;
    }
}

function show(div) {
    div.style.display = 'block';
}

function hide(div) {
    div.style.display = 'none';
}

function findActiveTab() {
    tabs.forEach(tab => {
        if (tab.style.display !== 'none') {
            activeTab = tab.id;
        }
    })

    return activeTab;
}

function singleClassChange(divs, target, cssClass) {
    divs.forEach(div => div === target ? div.classList.add(cssClass) : div.classList.remove(cssClass))
}

function hideParent(div) {
    hide(div.parentNode)
}

function showParent(div) {
    show(div.parentNode)
}