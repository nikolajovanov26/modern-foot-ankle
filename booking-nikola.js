/**
 * Functions
 */
function officeHour() {
  let officeHourElements = document.querySelectorAll('[office-hour]');
  let targetElement = document.querySelector('[office-hour="' + locationID + '"]');

  officeHourElements.forEach(function(officeHourElement) {
    if (officeHourElement !== targetElement) {
      officeHourElement.style.display = 'none';
    }
  });
}

function getIframe() {
  let tabElements = document.querySelectorAll('[data-tab]');
  tabElements.forEach(function(tabElement) {
    tabElement.style.display = 'none';
  });

  iframeElement = document.querySelector('[data-tab="iframe"]');
  iframeElement.style.display = 'block';

  let loaderElement = document.querySelector('.booking--loader');
  loaderElement.style.display = 'block';

  officeHour();

  let office = locationID.split(' ');
  let frameID;
  let url;
  for (let i = 0; i < office.length; i++) {
    let oSplit = office[i].split(':');
    if (oSplit[0] === doctorID) {
      officeID = oSplit[1];
      for (let j = 0; j < frame.length; j++) {
        if (frame[j].officeID === parseInt(officeID)) {
          frameID = frame[j].iframe;
          url = 'https://drchrono.com/scheduling/offices/' + frameID;
          let iframeContent = document.querySelector('[data-content="iframe"]');
          iframeContent.querySelector('iframe').setAttribute('src', url);
        }
      }
    }
  }
}

function dataDoctor(doctorID, activeTab) {
  const locationElems = document.querySelectorAll('[data-tab="selLocation"] [data-location]');

  locationElems.forEach(function(elem) {
    const target = elem.dataset.location;
    if(target.includes(doctorID)) {
      document.querySelector('[data-locdiv="' + target + '"]').style.display = "block";
      document.querySelector('[data-id="' + target + '"]').style.display = "block";
    }
  });


  if(document.querySelectorAll('.show[data-type="doctor"]').length > 0) {
    document.querySelector('[data-tab="' + activeTab + '"] [data-id="' + doctorID + '"]').click();
  } else {
    document.querySelector('[data-id="' + doctorID + '"]').classList.toggle('show');
    document.querySelector('[data-id="' + doctorID + '"]').classList.toggle('curdoc');
    document.querySelector('[data-tab="' + activeTab + '"]').style.display = "none";
    document.querySelector('[data-tab="selLocation"]').style.display = "block";
  }

  if(locationID){
    getIframe()
  }
}

function dataLocation(locationID, activeTab) {
  const doctorElems = document.querySelectorAll('[data-tab="selDoctor"] [data-doctor]');

  doctorElems.forEach(function (doctorElem) {
    const target = doctorElem.dataset.doctor;
    if (locationID.includes(target)) {
      document.querySelector('[data-docdiv="' + target + '"]').style.display = 'block';
      document.querySelector('[data-id="' + target + '"]').style.display = 'block';
    }
  });

  const locationElems = document.querySelectorAll('.show[data-type="location"]');
  if (locationElems.length > 1) {
    const targetElem = document.querySelector('[data-tab="' + activeTab + '"] [data-id="' + locationID + '"]');
    targetElem.click();
  } else {
    const locationElem = document.querySelector('[data-id="' + locationID + '"]');
    locationElem.classList.toggle('show');
    locationElem.classList.toggle('curloc');
    document.querySelector('[data-tab="' + activeTab + '"]').style.display = 'none';
    document.querySelector('[data-tab="selDoctor"]').style.display = 'block';
  }

  if (activeTab === 'selLocation') {
    getIframe();
  }
}

initializeApp();

doctorDataType();

locationDataType();
dataClick();

initializeDataLocations();

doctorData();

closeButton();

prevButton();

initializeIframe();

/**
 * Initial functions
 */

function initializeApp() {
  locationID = false;
  doctorID = null;
  officeID = null;
  activeDiv = null;
  impLoc = null;
  impDoc = null;
  referrer = null;
  referrerUrl = null;
  previousPath = null;
  prevTab = '';
  activeTab = 'default';

  frame = [
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
}

function doctorDataType() {
  doctorElements = document.querySelectorAll('[data-type="doctor"]');

  doctorElements.forEach(function(doctorElement) {
    doctorElement.addEventListener('click', function() {
      activeTab = document.querySelector('[data-tab]:not([style*="display: block"])').dataset.tab;
      doctorID = this.dataset.id;
      clickDoctorElements = document.querySelectorAll('[data-click="doctor"]');
      officeHourElements = document.querySelectorAll('[office-hour]');

      // var locationID = false;
      // if (document.querySelector('[data-tab]:not([style*="display: none"]) [data-type="location"]:not([style*="display: none"])')) {
      //   locationID = true;
      //   if (document.querySelectorAll('[data-tab]:not([style*="display: none"]) [data-type="doctor"]:not([style*="display: none"])').length !== 1) {
      //     getIframe();
      //   }
      // }

      doctorElements = document.querySelectorAll('[data-id="' + doctorID + '"]');
      doctorElements.forEach(function (doctorElement) {
        doctorElement.style.display = 'block'
      })


      var locationElements = document.querySelectorAll('[data-type="location"]');

      locationElements.forEach(function(locationElement) {
        var x = locationElement.dataset.id;
        if (x.includes(doctorID)) {
          locationElement.style.display = 'block';
          document.querySelector('[data-locdiv="' + x + '"]').style.display = 'block';
        }
      });

      if (activeTab !== 'selLocation' && activeTab !== 'iframe') {
        closeTabs();
        document.querySelector('[data-tab="selLocation"]').style.display = 'block';
      }
    });
  });
}

function locationDataType() {
  var locationElements = document.querySelectorAll('[data-type="location"]');
  locationElements.forEach(function(locationElement) {
    locationElement.addEventListener('click', function() {

      id = this.getAttribute('data-id');

      prevTab = activeTab;
      activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').getAttribute('data-tab');
      locationID = this.getAttribute('data-id');

      // Hide all doctor elements and their containers
      doctorElements = document.querySelectorAll('[data-type="doctor"]');
      doctorElements.forEach(function(doctorElement) {
        doctorElement.style.display = 'none';
        document.querySelector('[data-docdiv]').style.display = 'none';
      });

      officeHour();

      if (activeTab !== 'selDoctor' && activeTab !== 'iframe') {
        closeTabs();
        document.querySelector('[data-tab="selDoctor"]').style.display = 'block';
      }

      doctorElements.forEach(function(doctorElement) {
        x = doctorElement.getAttribute('data-id');
        opis = locationID.split(' ');
        opis.forEach(function(o) {
          var curr = o.split(':');
          if (curr[0] === x) {
            doctorElement.style.display = 'block';
            document.querySelector('[data-docdiv="' + x + '"]').style.display = 'block';
          }
        });
      });

      var visibleLocationElements = document.querySelectorAll('.show[data-type="location"]');
      if (visibleLocationElements.length > 1) { // dropdown open
        var siblings = this.parentNode.children;
        for (i = 0; i < siblings.length; i++) {
          if (siblings[i] !== this) {
            siblings[i].classList.toggle('show');
          }
        }
      } else { // dropdown closed
        locationElements = document.querySelectorAll('[data-type="location"]');
        siblings = this.parentNode.children;
        for (i = 0; i < siblings.length; i++) {
          if (siblings[i] !== this) {
            siblings[i].classList.toggle('show');
          }
        }
      }
    });
  });

}

function dataClick() {
  document.querySelectorAll('[data-click]').forEach(function(el) {
    el.addEventListener('click', function(event) {
      let target = event.currentTarget.dataset.click;

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

function initializeDataLocations() {
  const doctors = document.querySelectorAll('[data-doctor]');
  const locations = document.querySelectorAll('[data-location]');

  doctors.forEach((doctor) => {
    doctor.addEventListener('click', function() {
      prevTab = activeTab;
      activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').getAttribute('data-tab');
      doctorID = this.getAttribute('data-doctor');
      document.querySelectorAll('[data-type="location"]').forEach((elem) => {
        elem.style.display = 'none';
      });
      document.querySelectorAll('[data-locdiv]').forEach((elem) => {
        elem.style.display = 'none';
      });
      dataDoctor(doctorID, activeTab);
    });
  });

  locations.forEach((location) => {
    location.addEventListener('click', function() {
      prevTab = activeTab;
      activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').getAttribute('data-tab');
      locationID = this.getAttribute('data-location');
      document.querySelectorAll('[data-type="doctor"]').forEach((elem) => {
        elem.style.display = 'none';
      });
      document.querySelectorAll('[data-docdiv]').forEach((elem) => {
        elem.style.display = 'none';
      });
      dataLocation(locationID, activeTab);
      officeHour();
    });
  });
}

function doctorData() {
  const doctorElements = document.querySelectorAll('[data-doctor]');
  doctorElements.forEach((element) => {
    element.addEventListener('click', () => {
      const activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
      const doctorID = element.dataset.doctor;
      document.querySelectorAll('[data-type="location"]').forEach((location) => {
        location.style.display = 'none';
      });
      document.querySelectorAll('[data-locdiv]').forEach((locdiv) => {
        locdiv.style.display = 'none';
      });
      dataDoctor(doctorID, activeTab);
    });
  });
}

function closeButton() {
  closeBtns = document.querySelectorAll('[data-btn="close"]');

  closeBtns.forEach(function (closeBtn) {

    closeBtn.addEventListener('click', function() {
      if (typeof history.back === 'undefined' || referrer === '') {
        // window.location.href = 'https://mfa-podiatry.webflow.io/';
      } else {
        // history.back();
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
         prevTab = activeTab;
         activeTab = 'default';
      }

      if (activeTab === 'selDoctor') {
        prevTab = activeTab;
        activeTab = 'allLocation';
      }

      if (activeTab === 'selLocation') {
        prevTab = activeTab;
        activeTab = 'allDoctor';
      }

      if (activeTab === 'iframe') {
        activeTab = prevTab;
        prevTab = activeTab;
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

function closeTabs() {
  tabs = document.querySelectorAll('[data-tab]');
  tabs.forEach(function(tab) {
    tab.style.display = 'none';
  });
}

// function resetCards() {
//   doctorCards = document.querySelectorAll('[data-type=doctor]');
//
//   doctorCards.forEach(function (doctorCard) {
//     doctorCard.style.display = 'block'
//   })
// }