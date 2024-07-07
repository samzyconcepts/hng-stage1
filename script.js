function updateTimeAndDay() {
    const currentTimeUTC = new Date().toUTCString();
    const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });
    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
  }
  
  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);