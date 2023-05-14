let locationID, doctorID, officeID, activeDiv, impLoc, impDoc;
let frame = [
    {
        officeID: 109036,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc_bkKz4dWi0PVlgnUzrH5mM='
    },
    {
        officeID: 290828,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc-r4YjWO7SLTs1N9v9dcJPQ='
    },
    {
        officeID: 343298,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc9Pua_d_mLh5N83vMYydBbs='
    },
    {
        officeID: 134496,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc1_goZCcbHnCsYL5Aiv8tJ8='
    },
    {
        officeID: 284928,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc1_goZCcbHnCsYL5Aiv8tJ8='
    },
    {
        officeID: 342362,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc_Qh2S5A8qG0XnijOFP1r8w='
    },
    {
        officeID: 209020,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc8wvrETJP6hITfSHxVg9RlA='
    },
    {
        officeID: 284930,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc7xdB5xDVqQl-Eg6w7UGC2g='
    },
    {
        officeID: 290911,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc5o_AlBYjBf3QZuUq1--q5c='
    },
    {
        officeID: 315385,
        iframe: 'dGhpcyBpcyAxNiBjaGFycyq95wQdPmiwyh-0ChCFcJ0='
    },
    {
        officeID: 333760,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc6i7eDLSDJZazo24k4sY4jo='
    },
    {
        officeID: 338600,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc1F4rd8SIpiQGkY_h2R5ISs='
    },
    {
        officeID: 316585,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc1d0-yHtqR9c4AaTTnZc_V0='
    },
    {
        officeID: 333649,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc0Znn7QZ77W7EOt07qr2_IM='
    },
    {
        officeID: 323626,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc2cGoC41w_qhv37I25geNXw='
    },
    {
        officeID: 343317,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc62OVnsCEsFSdbPGNH293p0='
    },
    {
        officeID: 328696,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc3l1dWrL5JEBfQm5v-edN3A='
    },
    {
        officeID: 333763,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc5oKzSAg1JoJ6rykX8oUUvc='
    },
    {
        officeID: 333764,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc69GppqSRlcoktYR7IY4yiA='
    },
    {
        officeID: 333769,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc1U86RemFuOl2GwV-vIcQvU='
    },
    {
        officeID: 343299,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc3lM45MfCH8bDpXDsjiz7HM='
    },
    {
        officeID: 344768,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc5w9DmVJM_Kjfwe59OyWWBo='
    },
    {
        officeID: 348027,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc1FEyXj0qzz_UbkRaXzXE9s='
    },
    {
        officeID: 348264,
        iframe: 'dGhpcyBpcyAxNiBjaGFycw-4MUAPzCJtBAobSA2_mmI='
    },
    {
        officeID: 333766,
        iframe: 'dGhpcyBpcyAxNiBjaGFycw3IY3wdR81OE9EfpTRN6XU='
    },
    {
        officeID: 338601,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc9_yCBQGCvRLN39orBfZo6o='
    },
    {
        officeID: 343004,
        iframe: 'dGhpcyBpcyAxNiBjaGFycwn9rsbUMVovI_pZQH-TWpM='
    },
    {
        officeID: 348028,
        iframe: 'dGhpcyBpcyAxNiBjaGFyc4hhG-uk1tjs2XM3Zuw0664='
    },

]

changeTab();
document.querySelector('[data-tab="default"]').style.display = 'block';
dataTriggers();
dataTypeDoctor();
dataTypeLocation(); // tuka problem
dataTypeLocationSec();
dataTypeDoctorSec();
dataClick();
initDataLocation();
initDataDoctor();
closeButton();
initializeIframe();


function dataTriggers() {
    document.querySelectorAll('[data-trigger="location"]')
        .forEach(trigger => trigger.addEventListener("click", (e) => {
            document.querySelectorAll('[data-type="location"]').forEach(element => element.classList.toggle('show'));
        }));

    document.querySelectorAll('[data-trigger="doctor"]')
        .forEach(trigger => trigger.addEventListener("click", (e) => {
            document.querySelectorAll('[data-type="doctor"]').forEach(element => element.classList.toggle('show'));
            document.querySelectorAll('.doctor--hours').forEach(element => element.classList.toggle('hide'));
        }));
}

function dataTypeDoctor() {
    document.querySelectorAll('[data-type="doctor"]')
        .forEach(trigger => trigger.addEventListener("click", (e) => {
            activeTab = document.querySelector('[data-tab]:not([style*="display: block"])').dataset.tab;
            doctorID = trigger.dataset.id;
            id = trigger.dataset.id;

            document.querySelector('[data-click="doctor"]').style.display = 'none';
            document.querySelectorAll('[office-hour]').forEach(element => element.style.display = 'none');

            if (locationID) {
                if (document.querySelectorAll('[data-tab]:not([style*="display:"]) [data-type="doctor"]:not([style*="display:"])').length !== 1) {
                    getIframe();
                }
            }

            if (document.querySelectorAll('.show[data-type="doctor"]').length > 1) { // dropdown open

                document.querySelector('[data-id="' +id + '"]').parentNode.childNodes.forEach(function (node) {

                    if (node.dataset.id !== id) {
                        node.classList.toggle('show');
                    }
                });
            } else { // dropdown closed
                console.log('closed')
                document.querySelector(`[data-id="${id}"]`).parentNode.childNodes.forEach(function (node) {
                    if (node.dataset.id !== id) {
                        node.classList.toggle('show');
                    }
                });
            }

            document.querySelectorAll('[data-type="location"]').forEach(element => element.style.display = 'none');
            document.querySelectorAll('[data-locdiv]').forEach(element => element.style.display = 'none');

            document.querySelectorAll('[data-type="location"]').forEach(element => {
                    if (element.dataset.id.includes(doctorID)) {
                        element.style.display = 'block';
                        document.querySelectorAll('[data-locdiv="' + element.dataset.id + '"]').forEach(element => element.style.display = 'block');
                    }
                }
            );

            if (activeTab !== 'selLocation' && activeTab !== 'iframe') {
                changeTab();
                document.querySelector('[data-tab="selLocation"]').style.display = 'block';
            }

            if (trigger.classList.contains('curloc')) {
                document.querySelectorAll('[data-type="map"]').forEach(element => element.classList.toggle('hide'));
                trigger.querySelectorAll('[data-type="map"]').forEach(element => element.classList.remove('hide'));
            }
        }));
}

function dataTypeLocation() {
    document.querySelectorAll('[data-type="location"]')
        .forEach(trigger => trigger.addEventListener("click", (e) => {
            activeTab = document.querySelector('[data-tab]:not([style*="display: block"])').dataset.tab;
            locationID = trigger.dataset.id;
            id = trigger.dataset.id;

            document.querySelector('[data-type="doctor"]').style.display = 'none';
            document.querySelectorAll('[data-docdiv]').forEach(element => element.style.display = 'none');
            document.querySelectorAll('[data-click="location"]').forEach(element => element.style.display = 'none');

            officeHour();

            if (doctorID) {
                if (document.querySelectorAll('[data-tab]:not([style*="display:"]) [data-type="location"]:not([style*="display:"])').length !== 1) {
                    getIframe();
                }
            }

            if (activeTab !== 'selDoctor' && activeTab !== 'iframe') {
                changeTab()
                document.querySelector('[data-tab="selDoctor"]').style.display = 'block';
            }

            document.querySelectorAll('[data-type="doctor"]').forEach(function (elem) {
                let x = elem.dataset.id;
                let opis = locationID.split(' ');
                for (let o of opis) {
                    let curr = o.split(':');
                    if (curr[0] === x) {
                        elem.style.display = '';
                        document.querySelector(`[data-docdiv="${x}"]`).style.display = 'block';
                    }
                }
            });

            if (trigger.classList.contains('curloc')) {
                document.querySelectorAll('[data-type="map"]').forEach(element => element.classList.toggle('hide'));
                document.querySelectorAll('[data-type="map"]').forEach(element => {
                    element.querySelectorAll('[data-id="' + id + '"]').forEach(element => element.classList.remove('hide'));
                });
                document.querySelectorAll('[data-type="map"]').forEach(element => element.classList.remove('curloc'));
            }


            if (document.querySelectorAll('.show[data-type="location"]').length > 1) { // dropdown open
                console.log(id);
                let siblings = Array.from(document.querySelectorAll('[data-id="' + id + '"] [data-type="location"]'));
                siblings.forEach(sibling => sibling.classList.toggle('show'));
                document.querySelector('.dropdown--toggle__location').style.display = 'none';
            } else { // dropdown closed
                let target = document.querySelector('[data-id="' + id + '"]');
                Array.from(target.querySelectorAll('[data-type="map"]')).forEach(map => map.classList.toggle('hide'));
                let siblings = Array.from(target.parentNode.querySelectorAll(`[data-type="location"]`));
                siblings.forEach(sibling => sibling.classList.toggle('show'));
                Array.from(document.querySelectorAll('[data-type="map"]')).forEach(map => map.classList.toggle('hide'));
            }
        }));
}

function dataTypeLocationSec() {
    document.querySelectorAll('[data-type="location"]')
        .forEach(trigger => trigger.addEventListener("click", (e) => {
            document.querySelectorAll('.dropdown--toggle__location').forEach(element => element.style.display = 'none');
            document.querySelectorAll('.collection-list-wrapper-location').forEach(element => element.style.position = 'static');
            document.querySelectorAll('[data-type="map"]').forEach(element => element.classList.toggle('hide'));
        }));
}

function dataTypeDoctorSec() {
    document.querySelectorAll('[data-type="doctor"]')
        .forEach(trigger => trigger.addEventListener("click", (e) => {
            document.querySelectorAll('.dropdown--toggle__doctor').forEach(element => element.style.display = 'none');
            document.querySelectorAll('.doctor--hours').forEach(element => element.classList.toggle('hide'));
        }));
}

function dataClick() {
    document.querySelectorAll('[data-click]').forEach(elem => {
        elem.addEventListener("click", (event) => {
            target = event.currentTarget.dataset.click;

            if (target === 'doctor') {
                if (locationID) {
                    document.querySelector('[data-tab="selDoctor"]').style.display = 'block';
                } else {
                    document.querySelector('[data-tab="allDoctor"]').style.display = 'block';
                    document.querySelector('[data-triggerdoc="all"]').click();
                }
            } else {
                document.querySelector('[data-tab="allLocation"]').style.display = 'block';
                document.querySelector('[data-triggerloc="all"]').click();
            }
            document.querySelector('[data-tab="default"]').style.display = 'none';
        });
    });
}

function initDataLocation() {
    document.querySelectorAll('[data-location]').forEach(elem => {
        elem.addEventListener("click", (event) => {
            activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
            locationID = elem.dataset.location;

            document.querySelectorAll('[data-type="doctor"]').forEach(el => { el.style.display = 'none'; });
            document.querySelectorAll('[data-docdiv]').forEach(el => { el.style.display = 'none'; });

            dataLocation(locationID, activeTab)
            officeHour()
        })
    })
}

function dataLocation(locationID, activeTab) {
    document.querySelectorAll('[data-tab="selDoctor"] [data-doctor]').forEach(elem => {
        let target = elem.dataset.doctor;
        if (locationID.includes(target)) {
            document.querySelectorAll('[data-docdiv="' + target + '"]').forEach(element => element.style.display = 'block');
            document.querySelectorAll('[data-id="' + target + '"]').forEach(element => element.style.display = 'block');
        }
    });

    if (document.querySelectorAll('.show[data-type="location"]').length > 1) {
        document.querySelector('[data-tab="' + activeTab + '"]').querySelector('[data-id="' + locationID + '"]').click()
    } else {
        // console.log(document.querySelectorAll('[data-id="' + locationID + '"]'))
        document.querySelectorAll('[data-id="' + locationID + '"]').forEach(element => element.classList.toggle('show'));
        document.querySelectorAll('[data-id="' + locationID + '"]').forEach(element => element.classList.toggle('curloc'));
        document.querySelectorAll('[data-id="' + locationID + '"] [data-type="map"]').forEach(element => element.classList.remove('hide'));
        document.querySelectorAll('.dropdown--toggle__location').forEach(element => element.style.display = 'none');
        changeTab();
        document.querySelectorAll('[data-tab="selDoctor"]').forEach(element => element.style.display = 'block');
    }


    if (activeTab === 'selLocation') {
        getIframe()
    }
}

function initDataDoctor() {
    document.querySelectorAll('[data-doctor]').forEach(elem => {
        elem.addEventListener("click", (event) => {
            activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
            doctorID = elem.dataset.doctor;

            document.querySelectorAll('[data-type="location"]').forEach(el => { el.style.display = 'none'; });
            document.querySelectorAll('[data-docdiv]').forEach(el => { el.style.display = 'none'; });

            dataDoctor(doctorID, activeTab)
            officeHour()
        })
    })
}

function dataDoctor(doctorID, activeTab) {
    document.querySelectorAll('[data-tab="selLocation"] [data-location]').forEach(elem => {
        let target = elem.dataset.location;
        if (doctorID.includes(target)) {
            document.querySelectorAll('[data-docdiv="' + target + '"]').forEach(element => element.style.display = 'block');
            document.querySelectorAll('[data-id="' + target + '"]').forEach(element => element.style.display = 'block');
        }
    });

    if (document.querySelectorAll('.show[data-type="doctor"]').length > 1) {
        document.querySelector('[data-tab="' + activeTab + '"]').querySelector('[data-id="' + doctorID + '"]').click()
    } else {
        document.querySelectorAll('[data-id="' + doctorID + '"]').forEach(element => element.classList.toggle('show'));
        document.querySelectorAll('[data-id="' + doctorID + '"]').forEach(element => element.classList.toggle('curloc'));
        document.querySelectorAll('.dropdown--toggle__doctor').forEach(element => element.style.display = 'none');
        document.querySelectorAll('.doctor--hours').forEach(element => element.style.display = 'none');
        changeTab();
        document.querySelectorAll('[data-tab="selLocation"]').forEach(element => element.style.display = 'block');
    }

    if (locationID) {
        getIframe()
    }
}

function officeHour() {
    document.querySelectorAll('[office-hour]').forEach(officeHour => officeHour.style.display = 'none');
    document.querySelectorAll('[office-hour="' + locationID + '"]').forEach(officeHour => officeHour.style.display = 'block');
}

// getIframe() start //
function getIframe() {
    changeTab();
    document.querySelector('[data-tab="iframe"]').style.display = 'block';
    document.querySelector('[data-tab="iframe"]').style.display = 'block';
    officeHour()
    // $('.doctor--hours').css('display', '')
    office = locationID.split(' ')
    office.forEach(o => {
        let oSplit = o.split(':')
        if (oSplit[0] === doctorID) {
            officeID = oSplit[1]
            frame.forEach(f => {
                if (f.officeID === parseInt(officeID)) {
                    frameID = f.iframe
                    url = `https://drchrono.com/scheduling/offices/${frameID}`
                    document.querySelector('[data-content="iframe"] iframe').src = url
                }
            })
        }
    })
}

let referrer, referrerUrl, previousPath;

function findPrevPath() {
    referrer = document.referrer;
    if (referrer !== '') {
        let referrerUrl = new URL(referrer);
        let previousPath = referrerUrl.pathname;
    }
}

function closeButton() {
    document.querySelectorAll('[data-btn="close"]').forEach(el => {
        el.addEventListener("click", (e) => {
            findPrevPath();
            locationID = '';
            doctorID = '';
            if (typeof history.back === 'undefined' || referrer === '') {
                window.location.href = 'https://mfa-podiatry.webflow.io/';
            } else {
                if (document.referrer) {
                    window.location.href = document.referrer;
                } else {
                    history.back();
                }
            }
        });
    });
}

function prevButton() {
    backBtns = document.querySelectorAll('.back--btn');

    backBtns.forEach(function(backBtn) {

        backBtn.addEventListener('click', function () {
            closeTabs();

            if (activeTab === 'default') {
                history.back();
            }

            if (activeTab === 'allLocation' || activeTab === 'allDoctor') {
                activeTab = 'default';
            }

            if (activeTab === 'selDoctor') {
                activeTab = 'allLocation';
            }

            if (activeTab === 'selLocation') {
                activeTab = 'allDoctor';
            }

            if (activeTab === 'iframe') {
                activeTab = 'selDoctor';
            }

            document.querySelector('[data-tab="' + activeTab + '"]').style.display = 'block';
        });
    });
}

function initializeIframe() {
    const iframe = document.querySelector('[data-content="iframe"] iframe');

    iframe.addEventListener('load', function() {
        const bookingLoader = document.querySelector('.booking--loader');
        if (bookingLoader) {
            bookingLoader.style.display = 'none';
        }
    });
}

function changeTab() {
    document.querySelectorAll('[data-tab]').forEach(element => element.style.display = 'none');
}