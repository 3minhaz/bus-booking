
document.querySelector('.book-btn').addEventListener('click', function () {

    const seats = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...seats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
})
document.querySelector('.cancel-btn').addEventListener('click', function () {

    const seats = document.querySelectorAll('.row .seat.selected');
    const seatIndex = [...seats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));
})


document.querySelector('.booking-section').addEventListener('click', function (e) {

    if (e.target.classList.contains('seat') != e.target.classList.contains('booked')) {
        e.target.classList.toggle('selected');
    }


})

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    console.log(selectedSeats);
    if (selectedSeats !== null && selectedSeats.length > 0) {
        const seats = document.querySelectorAll('.row .seat:not(.booked');
        console.log(seats);
        seats.forEach((seat, index) => {
            console.log(seat);
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }
}
populateUI();