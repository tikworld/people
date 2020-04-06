(function() {
    'use strict'
    fetch('https://dev.tikworld.ga/people/people/6', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            FirstName: 'Samantha'
        })
    })
        .then(results => console.log(results))
        .catch(error => console.log(error));   
}())