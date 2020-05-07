// our refrences
const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const hours = now.getHours(),
            mins = now.getMinutes(),
            secs = now.getSeconds(),
             ampm = hours >= 12 ? 'pm' : 'am';
    const html = `  // Hi :)
        <span>${hours}</span> :
        <span>${mins}</span> :
        <span>${secs}</span> :
        <span>${ampm.toUpperCase()}</span> 
        `
    clock.innerHTML = html;
};
setInterval(tick, 1000);

