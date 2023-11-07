var map;
var pushpin;

// Function to initialize the Bing Maps control
function initMap() {
    // Create the map and set the center to the provided coordinates
    map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'AusKqlPoYqBbbtgU7Uy346JYJ1omqvRlb1i_SbsR5xFouYVZyNorFL5uXzKGxsu4',
        center: new Microsoft.Maps.Location(53.285435, -6.220859), // Set the center of the map
        zoom: 13
    });
	

    // Attach the search function to the search button
    document.getElementById('search-button').addEventListener('click', searchAddress);

    // Add an event listener to the input field to detect Enter key press
    document.getElementById('search-input').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            searchAddress();
        }
    });

    // Call the function to add the boundary area
    addBoundaryArea();
}


// Function to add a boundary area polygon to the map
function addBoundaryArea() {
    var boundaryCoordinates = [
    new Microsoft.Maps.Location(53.310648, -6.248220),
    new Microsoft.Maps.Location(53.309569, -6.249009),
    new Microsoft.Maps.Location(53.308460, -6.251510),
    new Microsoft.Maps.Location(53.308197, -6.254496),
    new Microsoft.Maps.Location(53.306157, -6.253549),
    new Microsoft.Maps.Location(53.303541, -6.251843),
    new Microsoft.Maps.Location(53.301507, -6.251209),
    new Microsoft.Maps.Location(53.299333, -6.253292),
    new Microsoft.Maps.Location(53.298011, -6.254172),
    new Microsoft.Maps.Location(53.296767, -6.254365),
    new Microsoft.Maps.Location(53.296311, -6.254150),
    new Microsoft.Maps.Location(53.295008, -6.255006),
    new Microsoft.Maps.Location(53.293196, -6.246139),
    new Microsoft.Maps.Location(53.292347, -6.246514),
    new Microsoft.Maps.Location(53.290627, -6.245140),
    new Microsoft.Maps.Location(53.284742, -6.237279),
    new Microsoft.Maps.Location(53.285300, -6.236185),
    new Microsoft.Maps.Location(53.283509, -6.228683),
    new Microsoft.Maps.Location(53.282840, -6.229030),
    new Microsoft.Maps.Location(53.282359, -6.227150),
    new Microsoft.Maps.Location(53.281964, -6.226806),
    new Microsoft.Maps.Location(53.281941, -6.225868),
    new Microsoft.Maps.Location(53.278882, -6.225855),
    new Microsoft.Maps.Location(53.278935, -6.223374),
    new Microsoft.Maps.Location(53.277477, -6.223183),
    new Microsoft.Maps.Location(53.277622, -6.222322),
    new Microsoft.Maps.Location(53.276544, -6.221818),
    new Microsoft.Maps.Location(53.276011, -6.224779),
    new Microsoft.Maps.Location(53.275696, -6.228325),
    new Microsoft.Maps.Location(53.274674, -6.226616),
    new Microsoft.Maps.Location(53.275006, -6.223797),
    new Microsoft.Maps.Location(53.274230, -6.223492),
    new Microsoft.Maps.Location(53.274030, -6.225045),
    new Microsoft.Maps.Location(53.271994, -6.223998),
    new Microsoft.Maps.Location(53.271838, -6.228094),
    new Microsoft.Maps.Location(53.271331, -6.227509),
    new Microsoft.Maps.Location(53.267758, -6.221303),
    new Microsoft.Maps.Location(53.268393, -6.219769),
    new Microsoft.Maps.Location(53.269247, -6.218685),
    new Microsoft.Maps.Location(53.269734, -6.217290),
    new Microsoft.Maps.Location(53.270061, -6.215080),
    new Microsoft.Maps.Location(53.270017, -6.213396),
    new Microsoft.Maps.Location(53.270014, -6.213695),
    new Microsoft.Maps.Location(53.270659, -6.213017),
    new Microsoft.Maps.Location(53.271211, -6.210445),
    new Microsoft.Maps.Location(53.272005, -6.203765),
    new Microsoft.Maps.Location(53.272390, -6.201962),
    new Microsoft.Maps.Location(53.272961, -6.200589),
    new Microsoft.Maps.Location(53.273154, -6.198517),
    new Microsoft.Maps.Location(53.273859, -6.195253),
    new Microsoft.Maps.Location(53.274929, -6.191400),
    new Microsoft.Maps.Location(53.275954, -6.188671),
    new Microsoft.Maps.Location(53.277299, -6.186568),
    new Microsoft.Maps.Location(53.278302, -6.185281),
    new Microsoft.Maps.Location(53.280894, -6.191123),
    new Microsoft.Maps.Location(53.281765, -6.192801),
    new Microsoft.Maps.Location(53.282647, -6.193594),
    new Microsoft.Maps.Location(53.285006, -6.194608),
    new Microsoft.Maps.Location(53.287464, -6.194387),
    new Microsoft.Maps.Location(53.288720, -6.194848),
    new Microsoft.Maps.Location(53.289360, -6.195584),
    new Microsoft.Maps.Location(53.288909, -6.198294),
    new Microsoft.Maps.Location(53.290649, -6.199927),
    new Microsoft.Maps.Location(53.289903, -6.201667),
    new Microsoft.Maps.Location(53.290557, -6.202483),
    new Microsoft.Maps.Location(53.290106, -6.205148),
    new Microsoft.Maps.Location(53.292693, -6.207504),
    new Microsoft.Maps.Location(53.293340, -6.203234),
    new Microsoft.Maps.Location(53.292840, -6.201775),
    new Microsoft.Maps.Location(53.293135, -6.201174),
    new Microsoft.Maps.Location(53.293713, -6.202168),
    new Microsoft.Maps.Location(53.294915, -6.203219),
    new Microsoft.Maps.Location(53.296895, -6.204075),
    new Microsoft.Maps.Location(53.295412, -6.209064),
    new Microsoft.Maps.Location(53.294466, -6.209411),
    new Microsoft.Maps.Location(53.294220, -6.210594),
    new Microsoft.Maps.Location(53.295318, -6.210896),
    new Microsoft.Maps.Location(53.296380, -6.210363),
    new Microsoft.Maps.Location(53.296949, -6.216315),
    new Microsoft.Maps.Location(53.296910, -6.219182),
    new Microsoft.Maps.Location(53.299069, -6.218334),
    new Microsoft.Maps.Location(53.299284, -6.219105),
    new Microsoft.Maps.Location(53.297841, -6.220071),
    new Microsoft.Maps.Location(53.297340, -6.220275),
    new Microsoft.Maps.Location(53.298289, -6.222262),
    new Microsoft.Maps.Location(53.298885, -6.222358),
    new Microsoft.Maps.Location(53.297164, -6.223207),
    new Microsoft.Maps.Location(53.296349, -6.224505),
    new Microsoft.Maps.Location(53.296987, -6.226973),
    new Microsoft.Maps.Location(53.296679, -6.227565),
    new Microsoft.Maps.Location(53.296449, -6.228285),
    new Microsoft.Maps.Location(53.297463, -6.229018),
    new Microsoft.Maps.Location(53.298939, -6.230098),
    new Microsoft.Maps.Location(53.299307, -6.230779),
    new Microsoft.Maps.Location(53.299968, -6.231242),
    new Microsoft.Maps.Location(53.299976, -6.229224),
    new Microsoft.Maps.Location(53.302004, -6.228246),
    new Microsoft.Maps.Location(53.302551, -6.231001),
    new Microsoft.Maps.Location(53.302750, -6.233415),
    new Microsoft.Maps.Location(53.305454, -6.236462),
    new Microsoft.Maps.Location(53.305175, -6.239804),
    new Microsoft.Maps.Location(53.305270, -6.245732),
    new Microsoft.Maps.Location(53.307880, -6.246509),
    new Microsoft.Maps.Location(53.309669, -6.246585),
    new Microsoft.Maps.Location(53.310193, -6.247102),
    new Microsoft.Maps.Location(53.310648, -6.248220) // Repeat the first coordinate to close the polygon
];

    // Create a polygon from the coordinates
    var boundaryPolygon = new Microsoft.Maps.Polygon(boundaryCoordinates, {
        fillColor: 'rgba(0, 0, 255, 0.5)', // Fill color of the polygon
        strokeColor: 'blue', // Border color of the polygon
        strokeThickness: 2 // Border thickness of the polygon
    });

    // Add the polygon to the map
    map.entities.push(boundaryPolygon);
}

// Function to search for and display an address on the map
function searchAddress() {
    var address = document.getElementById('search-input').value;

    // Remove the existing pushpin if it exists
    if (pushpin) {
        map.entities.remove(pushpin);
    }

    // Use Bing Maps REST API for geocoding
    fetch(`https://dev.virtualearth.net/REST/v1/Locations?query=${encodeURIComponent(address)}&key=AusKqlPoYqBbbtgU7Uy346JYJ1omqvRlb1i_SbsR5xFouYVZyNorFL5uXzKGxsu4`)
        .then(response => response.json())
        .then(data => {
            if (data && data.resourceSets && data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
                var location = data.resourceSets[0].resources[0].point.coordinates;
                map.setView({ center: new Microsoft.Maps.Location(location[0], location[1]), zoom: 13 });

                // Add a pushpin marker at the found location
                pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(location[0], location[1]));
                map.entities.push(pushpin);
            } else {
                alert('Address not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while searching for the address.');
        });
}

// Function to search for and display an address on the map
function searchAddress() {
    var address = document.getElementById('search-input').value;

    // Remove the existing pushpin if it exists
    if (pushpin) {
        map.entities.remove(pushpin);
    }

    // Use Bing Maps REST API for geocoding
    fetch(`https://dev.virtualearth.net/REST/v1/Locations?query=${encodeURIComponent(address)}&key=AusKqlPoYqBbbtgU7Uy346JYJ1omqvRlb1i_SbsR5xFouYVZyNorFL5uXzKGxsu4`)
        .then(response => response.json())
        .then(data => {
            if (data && data.resourceSets && data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
                var location = data.resourceSets[0].resources[0].point.coordinates;

                // Check if the location is within Dublin's hypothetical bounding box
                if (isWithinDublin(location)) {
                    map.setView({ center: new Microsoft.Maps.Location(location[0], location[1]), zoom: 13 });

                    // Add a pushpin marker at the found location
                    pushpin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(location[0], location[1]));
                    map.entities.push(pushpin);
                } else {
                    alert('Address is outside of Dublin, Ireland');
                }
            } else {
                alert('Address not found');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while searching for the address.');
        });
}

// Function to check if a location is within Dublin's boundary
function isWithinDublin(location) {
    // Define the boundaries of Dublin
    var dublinBounds = {
        north: 53.641891,
        south: 53.175953,
        west: -6.572555,
        east: -5.965638
    };

    // Check if the location's coordinates are within the Dublin boundaries
    return (
        location[0] >= dublinBounds.south &&
        location[0] <= dublinBounds.north &&
        location[1] >= dublinBounds.west &&
        location[1] <= dublinBounds.east
    );
}