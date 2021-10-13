// The following function accepts one argument (a callback function)
// and calls it back with two arguments:
function getDayEvents(callback) {
    fetch('https://events.umich.edu/day/json')
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

const showEventsButton = document.querySelector('#problem-3 #show-events');
const problemOutputEl = document.getElementById('p3-events-output');

showEventsButton.addEventListener('click', () => {
    getDayEvents((data) => {
        console.log(data);
        for (const key in data){
            const item = data[key];
            const title = document.createElement('h3');
            title.textContent = item['event_title'];
            problemOutputEl.append(title);

            if(item['image_url']) {
                const image = document.createElement('img');
                image.setAttribute('src', item['image_url']);
                image.setAttribute('alt', item['event_title'] + ' image');
                problemOutputEl.append(image);
            }
            
            const description = document.createElement('p');
            description.textContent = item['description'];
            problemOutputEl.append(description);
        }
    });
});
