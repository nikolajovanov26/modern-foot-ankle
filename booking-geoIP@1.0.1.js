fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ipAddress = data.ip;
        getGeoLocation(ipAddress);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function getGeoLocation(ipAddress) {
    const accessKey = '5be6d10e55523101a347f33d8cc1fee7';
    fetch('https://api.ipstack.com/' + ipAddress + '?access_key=' + accessKey)
        .then(response => response.json())
        .then(data => {
            const { latitude, longitude } = data;
            arrangeCards(latitude,longitude);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function arrangeCards(latitude,longitude) {
    // Locations
    distances = []

    cards = document.querySelectorAll('[location-longitude]')
    cards.forEach(card => {
        distance = calculateDistance(latitude, longitude, card.attributes['location-latitude'].value, card.attributes['location-longitude'].value);
        distances.push([distance, card]);
    })

    sortedArray = distances.sort(function(a, b) { return a[0] - b[0]; });

    divs = [];
    sortedArray.forEach(sorted => divs.push(sorted[1]))

    container = document.getElementById('location-list');

    divs.forEach(div => {
        container.appendChild(div);
    });


    // Doctors
    distances = []

    cards = document.querySelectorAll('[doctor-longitude-1]')
    cards.forEach(card => {
        if(card.attributes['doctor-latitude-1'].value  > 0) {

            distance = calculateDistance(latitude, longitude, card.attributes['doctor-latitude-1'].value, card.attributes['doctor-longitude-1'].value);
            distances.push([distance, card]);
        }
    })

    cards = document.querySelectorAll('[doctor-longitude-2]')
    cards.forEach(card => {
        if(card.attributes['doctor-latitude-2'].value  > 0) {
            distance = calculateDistance(latitude, longitude, card.attributes['doctor-latitude-2'].value, card.attributes['doctor-longitude-2'].value);
            distances.push([distance, card]);

        }
    })

    cards = document.querySelectorAll('[doctor-longitude-3]')
    cards.forEach(card => {
        if(card.attributes['doctor-latitude-3'].value  > 0) {
            distance = calculateDistance(latitude, longitude, card.attributes['doctor-latitude-3'].value, card.attributes['doctor-longitude-3'].value);
            distances.push([distance, card]);
        }
    })

    sortedArray = distances.sort(function(a, b) { return a[0] - b[0]; });

    divs = [];
    sortedArray.forEach(sorted => {
        if (!divs.includes(sorted[1])) {
            divs.push(sorted[1])
        }
    })

    container = document.getElementById('doctor-list');

    divs.forEach(div => {
        container.appendChild(div);
    });
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;

    return distance;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}