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


document.querySelectorAll('[data-trigger="location"]').forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    document.querySelectorAll('[data-type="location"]').forEach(function(location) {
      location.classList.toggle('show');
    });
  });
});

document.querySelectorAll('[data-trigger="doctor"]').forEach(function(trigger) {
  trigger.addEventListener('click', function() {
    document.querySelectorAll('[data-type="doctor"]').forEach(function(doctor) {
      doctor.classList.toggle('show');
      document.querySelector('.doctor--hours').classList.toggle('hide');
    });
  });
});


document.querySelectorAll('[data-type="doctor"]').forEach(function(element) {
  element.addEventListener('click', function() {
    activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
    doctorID = this.dataset.id;
    document.querySelectorAll('[data-click="doctor"]').forEach(function(el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('[office-hour]').forEach(function(el) {
      el.style.display = 'none';
    });
    if(locationID) {
      if(document.querySelector('[data-tab]:not([style*="display: none"]) [data-type="doctor"]:not([style*="display: none"])').length !== 1) {
        getIframe();
      }
    }

    if(document.querySelectorAll('.show[data-type="doctor"]').length > 1) { // dropdown open
      console.log('open');
      let id = this.dataset.id;
      document.querySelector(`[data-id="${id}"]`).parentNode.querySelectorAll('[data-type="doctor"]').forEach(function(el) {
        if(el.dataset.id !== id) {
          el.parentNode.classList.toggle('show');
        }
      });
    } else { // dropdown closed
      console.log('closed');
      this.parentNode.querySelectorAll('[data-type="doctor"]').forEach(function(el) {
        if(el.dataset.id !== doctorID) {
          el.parentNode.classList.toggle('show');
        }
      });
    }

    document.querySelectorAll('[data-type="location"]').forEach(function(el) {
      let x = el.dataset.id;
      if(x.includes(doctorID)) {
        el.style.display = '';
        document.querySelector(`[data-locdiv="${x}"]`).style.display = 'block';
      } else {
        el.style.display = 'none';
        document.querySelector(`[data-locdiv="${x}"]`).style.display = 'none';
      }
    });

    if(activeTab !== 'selLocation' && activeTab !== 'iframe') {
      document.querySelector('[data-tab="selLocation"]').style.display = 'block';
      document.querySelector(`[data-tab="${activeTab}"]`).style.display = 'none';
    }

    if(this.classList.contains('curloc')) {
      document.querySelector('[data-type="map"]').classList.toggle('hide');
      this.querySelector('[data-type="map"]').classList.remove('hide');
    }
  });
});

document.querySelectorAll('[data-type="location"]').forEach(function(element) {
  element.addEventListener('click', function() {
    activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
    locationID = this.dataset.id;
    let id = this.dataset.id;
    document.querySelectorAll('[data-type="doctor"]').forEach(function(doc) {
      let x = doc.dataset.id;
      let opis = locationID.split(' ');
      for (o of opis) {
        let curr = o.split(':');
        if (curr[0] === x) {
          doc.style.display = '';
          document.querySelector(`[data-docdiv="${x}"]`).style.display = 'block';
        }
      }
    });
    document.querySelectorAll('[data-click="location"]').forEach(function(click) {
      click.style.display = 'none';
    });
    officeHour();
    if (doctorID) {
      if (document.querySelector('[data-tab]:not([style*="display: none"]) [data-type="location"]:not([style*="display: none"])').length !== 1) {
        getIframe();
      }
    }
    if (activeTab !== 'selDoctor' && activeTab !== 'iframe') {
      document.querySelector('[data-tab="selDoctor"]').style.display = 'block';
      document.querySelector(`[data-tab="${activeTab}"]`).style.display = 'none';
    }
    if (this.classList.contains('curloc')) {
      document.querySelector('[data-type="map"]').classList.toggle('hide');
      document.querySelector(`[data-id="${id}"] [data-type="map"]`).classList.remove('hide');
      this.classList.remove('curloc');
    }
    if (document.querySelectorAll('.show[data-type="location"]').length > 1) { // dropdown open
      console.log('open');
      console.log(id);
      document.querySelectorAll(`[data-id="${id}"] ~ [data-type="location"]`).forEach(function(sibling) {
        sibling.classList.toggle('show');
      });
      document.querySelector('.dropdown--toggle__location').style.display = 'none';
    } else { // dropdown closed
      console.log('closed');
      document.querySelectorAll(`[data-id="${id}"] [data-type="map"]`).forEach(function(map) {
        map.classList.toggle('hide');
      });
      document.querySelectorAll(`[data-id="${id}"] ~ [data-type="location"]`).forEach(function(sibling) {
        sibling.classList.toggle('show');
      });
      document.querySelector('[data-type="map"]').classList.toggle('hide');
    }
  });
});

document.querySelectorAll('[data-type="location"]').forEach(function(elem) {
  elem.addEventListener('click', function() {
    document.querySelector('.dropdown--toggle__location').style.display = 'none';
    document.querySelector('.collection-list-wrapper-location').style.position = 'static';
    document.querySelector('[data-type="map"]').classList.toggle('hide');
  });
});

document.querySelectorAll('[data-type="doctor"]').forEach(function(doctor) {
  doctor.addEventListener('click', function() {
    document.querySelector('.dropdown--toggle__doctor').style.display = 'none';
    document.querySelector('.doctor--hours').classList.toggle('hide');
  });
});

document.querySelectorAll('[data-click]').forEach(function(item) {
  item.addEventListener('click', function(event) {
    let target = event.currentTarget.dataset.click;

    if(target === 'doctor'){
      if(locationID){
        document.querySelector('[data-tab="selDoctor"]').style.display = "block";
      }else{
        document.querySelector('[data-tab="allDoctor"]').style.display = "block";
        document.querySelector('[data-triggerdoc="all"]').click();
      }
    }else{
      document.querySelector('[data-tab="allLocation"]').style.display = "block";
      document.querySelector('[data-triggerloc="all"]').click();
    }
    document.querySelector('[data-tab="default"]').style.display = "none";
  });
});

document.querySelectorAll('[data-location]').forEach(function(element) {
  element.addEventListener('click', function() {
    activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
    locationID = this.dataset.location;
    document.querySelectorAll('[data-type="doctor"]').forEach(function(doc) {
      doc.style.display = 'none';
    });
    document.querySelectorAll('[data-docdiv]').forEach(function(docdiv) {
      docdiv.style.display = 'none';
    });
    dataLocation(locationID, activeTab);
    officeHour();
  });
});

function dataLocation(locationID, activeTab) {
  const doctors = document.querySelectorAll('[data-doctor]');
  doctors.forEach(doctor => {
    const target = doctor.dataset.doctor;
    if (locationID.includes(target)) {
      const docdiv = document.querySelector(`[data-docdiv="${target}"]`);
      docdiv.style.display = 'block';
      const id = document.querySelector(`[data-id="${target}"]`);
      id.style.display = 'block';
    }
  });

  const showLocations = document.querySelectorAll('.show[data-type="location"]');
  if (showLocations.length > 1) {
    const tab = document.querySelector(`[data-tab="${activeTab}"]`);
    const location = tab.querySelector(`[data-id="${locationID}"]`);
    location.click();
  } else {
    const id = document.querySelector(`[data-id="${locationID}"]`);
    id.classList.toggle('show');
    id.classList.toggle('curloc');
    const map = id.querySelector('[data-type="map"]');
    map.classList.remove('hide');
    const dropdownLocation = document.querySelector('.dropdown--toggle__location');
    dropdownLocation.style.display = 'none';
    const tab = document.querySelector(`[data-tab="${activeTab}"]`);
    tab.style.display = 'none';
    const selDoctor = document.querySelector('[data-tab="selDoctor"]');
    selDoctor.style.display = 'block';
  }

  if (activeTab === 'selLocation') {
    getIframe();
  }
}

document.querySelectorAll('[data-doctor]').forEach(function(doctor){
  doctor.addEventListener('click', function(){
    activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
    //console.log(activeTab)
    doctorID = this.dataset.doctor;
    console.log(this.dataset.doctor)
    document.querySelectorAll('[data-type="location"]').forEach(function(location){
      location.style.display = 'none';
    });
    document.querySelectorAll('[data-locdiv]').forEach(function(locdiv){
      locdiv.style.display = 'none';
    });
    //$(`[data-id="${doctorID}"]`).toggleClass('show')
    dataDoctor(doctorID,activeTab);
  });
});

function dataDoctor(doctorID,activeTab) {
  document.querySelectorAll('[data-doctor]').forEach(function(doctor){
    doctor.addEventListener('click', function(){
      activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
      doctorID = this.dataset.doctor;
      document.querySelectorAll('[data-type="location"]').forEach(function(location){
        location.style.display = 'none';
      });
      document.querySelectorAll('[data-locdiv]').forEach(function(locdiv){
        locdiv.style.display = 'none';
      });
      dataDoctor(doctorID, activeTab);
    });
  });
}

function officeHour() {
  const officeHours = document.querySelectorAll('[office-hour]');
  for (let i = 0; i < officeHours.length; i++) {
    officeHours[i].style.display = 'none';
  }
  const selectedOfficeHour = document.querySelector(`[office-hour="${locationID}"]`);
  selectedOfficeHour.style.display = 'block';
}

function getIframe() {
  document.querySelectorAll('[data-tab]').forEach(function(tab) {
    tab.style.display = 'none';
  });
  document.querySelector('[data-tab="iframe"]').style.display = 'block';
  document.querySelector('.booking--loader').style.display = 'block';
  officeHour();
  let office = locationID.split(' ');
  for (let i = 0; i < office.length; i++) {
    let oSplit = office[i].split(':');
    if (oSplit[0] === doctorID) {
      officeID = oSplit[1];
      for (let j = 0; j < frame.length; j++) {
        if (frame[j].officeID === parseInt(officeID)) {
          frameID = frame[j].iframe;
          url = 'https://drchrono.com/scheduling/offices/' + frameID;
          document.querySelector('[data-content="iframe"] iframe').setAttribute('src', url);
        }
      }
    }
  }
}

let referrer, referrerUrl, previousPath;

function findPrevPath() {
  let referrer = document.referrer;
  if (referrer !== '') {
    let referrerUrl = new URL(referrer);
    let previousPath = referrerUrl.pathname;
    //console.log(`Previous page path: ${previousPath}`);
  }
}

document.querySelector('[data-btn="close"]').addEventListener('click', function() {
  findPrevPath();
  locationID = '';
  doctorID = '';

  if (typeof history.back === 'undefined' || referrer === '') {
    window.location.href = 'https://mfa-podiatry.webflow.io/';
  } else {
    if(document.referrer){
      window.location.href = document.referrer;
    } else {
      history.back();
    }
  }
});

document.querySelector('[data-btn="prev"]').addEventListener('click', function(){
  let activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
  if (typeof history.back !== 'undefined' && activeTab !== 'iframe') {
    history.back();
  } else {
    let prevTab = document.querySelector('[data-tab].curTab').dataset.tab;

    if(activeTab==='allLocation' || activeTab==='allDoctor'){
      prevTab = 'default';
    }

    document.addEventListener('DOMContentLoaded', function(){
      activeTab = document.querySelector('[data-tab]:not([style*="display: none"])').dataset.tab;
      if(locationID && !doctorID){
        if(activeTab === 'selDoctor'){
          prev = 'default';
        }
      }else if(!locationID && doctorID){
        if(activeTab === 'selLocation'){
          prev = 'default';
        }
      }else{
        if(activeTab === 'iframe'){
          prev = 'selDoctor';
        }else if(activeTab === 'selDoctor'){
          prev = 'selLocation';
        }else{
          prev = 'default';
        }

      }

      document.querySelectorAll('[data-tab]').forEach(function(tab){
        tab.style.display = 'none';
      });
      document.querySelector(`[data-tab="${prev}"]`).style.display = 'block';
    });
  }
});

const iframe = document.querySelector('[data-content="iframe"] iframe');
iframe.addEventListener('load', function() {
  const bookingLoader = document.querySelector('.booking--loader');
  bookingLoader.style.display = 'none';
});
