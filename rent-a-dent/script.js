
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const result = document.getElementById('result');
  if (form && result) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        pickup:  document.getElementById('pickup').value,
        dropoff: document.getElementById('dropoff').value,
        date:    document.getElementById('date').value,
        window:  document.getElementById('window').value
      };
      result.textContent = 'Danke! Wir haben Ihre Anfrage erhalten: ' + JSON.stringify(data);
      form.reset();
    });
  }
});
