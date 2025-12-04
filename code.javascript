// JavaScript for Form Handling
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    const serviceType = document.getElementById('serviceType').value;
    const locationType = document.getElementById('locationType').value;
    const pickup = document.getElementById('pickup').value;
    const delivery = document.getElementById('delivery').value;
    const slot = document.getElementById('slot').value;

    if (!serviceType || !locationType || !pickup || !delivery || !slot) {
        alert('Please fill in all required fields.');
        return;
    }

    // Mock booking confirmation (in real app, send to server)
    document.getElementById('confirmation').style.display = 'block';
    alert('Slot booked successfully! Check confirmation below.');

    // Reset form
    this.reset();
});

// Dynamic slot updates (mock availability)
document.getElementById('slot').addEventListener('change', function() {
    if (this.value === 'now') {
        alert('ASAP slot available – Drone en route!');
    }
});
