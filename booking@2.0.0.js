iniNavButtons();
iniStarterTab();

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