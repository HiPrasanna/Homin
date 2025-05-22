function startCountdown(duration) {
    const countdownDate = new Date().getTime() + duration;
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
  
      if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".countdown-banner").innerText = "Offer has ended";
      }
    }, 1000);
  }
  
  // Set countdown duration (e.g., 30 days in milliseconds)
  startCountdown(30 * 24 * 60 * 60 * 1000);
  


