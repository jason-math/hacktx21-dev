const volcano = bodymovin.loadAnimation({
    container: document.getElementById('volcano'), // Required
    path: 'images/volcano.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Volcano", // Name for future reference. Optional.
});

const SUNDAY_BUTTON = document.getElementById('sunday-button');
const SATURDAY_BUTTON = document.getElementById('saturday-button');
const SUNDAY_SCHEDULE = document.getElementById('sunday-schedule');
const SATURDAY_SCHEDULE = document.getElementById('saturday-schedule');

const makeSaturdayScheduleActive = () => {
    console.log('Making saturday active')
    SUNDAY_BUTTON.classList.remove('active');
    SUNDAY_SCHEDULE.classList.remove('active');
    SATURDAY_BUTTON.classList.add('active');
    SATURDAY_SCHEDULE.classList.add('active');
};

const makeSundayScheduleActive = () => {
    console.log('Making sunday active')
    SUNDAY_BUTTON.classList.add('active');
    SUNDAY_SCHEDULE.classList.add('active');
    SATURDAY_BUTTON.classList.remove('active');
    SATURDAY_SCHEDULE.classList.remove('active');
};

SUNDAY_BUTTON.onclick = makeSundayScheduleActive;
SATURDAY_BUTTON.onclick = makeSaturdayScheduleActive;
