// script.js — USIU First-Year Companion (unique v1)

// Helper: format currency
function ksh(n){ return Number(Math.round(n)).toLocaleString(); }

// Time-based greeting + prompt on load
window.addEventListener('load', function() {
  try {
    var hr = new Date().getHours();
    var prefix = 'Hello';
    if(hr < 12) prefix = 'Good morning';
    else if(hr < 18) prefix = 'Good afternoon';
    else prefix = 'Good evening';

    var studentName = prompt(prefix + '! Welcome to USIU — what is your first name?');
    if(studentName === null || String(studentName).trim() === '') studentName = 'New Student';
    var emoji = (hr < 18) ? '🌤️' : '🌙';
    alert(prefix + ', ' + studentName + ' ' + emoji);
    console.log('Student entered name:', studentName, 'hour:', hr);
    var greetingEl = document.getElementById('greeting');
    if(greetingEl) greetingEl.textContent = prefix + ', ' + studentName + ' 👋';
    // insert owner's placeholder if present
    var ownerEl = document.getElementById('owner');
    if(ownerEl) ownerEl.textContent = 'Student ID: TBD';
  } catch (e) {
    console.error('Greeting error:', e);
  }
});

// Estimator with optional savings goal
function runEstimator() {
  try {
    var days = Number(prompt('How many days per week do you come to campus? (e.g., 3)'));
    if (isNaN(days) || days < 0) { alert('Please enter a valid number of days.'); return; }

    var costPerTrip = Number(prompt('Average transport cost per trip in KSh? (e.g., 120)'));
    if (isNaN(costPerTrip) || costPerTrip < 0) { alert('Please enter a valid transport cost.'); return; }

    var snacksPerDay = Number(prompt('Snacks per day? (e.g., 2)'));
    if (isNaN(snacksPerDay) || snacksPerDay < 0) { alert('Please enter a valid snacks per day.'); return; }

    var snackPrice = Number(prompt('Average price per snack in KSh? (e.g., 80)'));
    if (isNaN(snackPrice) || snackPrice < 0) { alert('Please enter a valid snack price.'); return; }

    var savingsGoalRaw = prompt('Optional: If you want to try to save a fixed KSh amount per week, enter it now, or leave blank.');
    var savingsGoal = (savingsGoalRaw === null || savingsGoalRaw.trim() === '') ? null : Number(savingsGoalRaw);

    var transportWeekly = days * costPerTrip * 2;
    var snacksWeekly = days * snacksPerDay * snackPrice;
    var totalWeekly = transportWeekly + snacksWeekly;
    var save10 = totalWeekly * 0.10;
    var totalWithSavings = totalWeekly - save10;
    var goalMessage = '';

    if (savingsGoal !== null) {
      if (isNaN(savingsGoal) || savingsGoal < 0) {
        goalMessage = 'Savings goal invalid — ignored.';
      } else if (savingsGoal <= totalWeekly) {
        var remainingIfGoal = totalWeekly - savingsGoal;
        goalMessage = 'Savings goal of KSh ' + ksh(savingsGoal) + ' is feasible. Weekly cost after saving: KSh ' + ksh(remainingIfGoal) + '.';
      } else {
        goalMessage = 'Savings goal of KSh ' + ksh(savingsGoal) + ' is higher than current weekly expenses; consider reducing snack count or transport trips.';
      }
    } else {
      goalMessage = 'No custom savings goal entered. A 10% cut would save KSh ' + ksh(save10) + '.';
    }

    console.log({ days, costPerTrip, snacksPerDay, snackPrice, transportWeekly, snacksWeekly, totalWeekly, save10, totalWithSavings, savingsGoal });

    var summary = '\nWeekly Transport: KSh ' + ksh(transportWeekly) +
                  '\nWeekly Snacks:    KSh ' + ksh(snacksWeekly) +
                  '\n-------------------------------' +
                  '\nWeekly Total:     KSh ' + ksh(totalWeekly) +
                  '\n10% Savings Tip:  KSh ' + ksh(save10) +
                  '\n' + goalMessage + '\n';

    var summaryEl = document.getElementById('summary');
    if (summaryEl) summaryEl.innerText = summary;

    alert('Estimator complete — check the Weekly Summary section. Details logged to the console.');
  } catch (e) {
    console.error('Estimator failed:', e);
    alert('An error occurred while running the estimator. See console for details.');
  }
}

// Theme toggle: teal-accent day vs navy/cream night
function toggleTheme() {
  try {
    var body = document.body;
    var isDay = (body.style.backgroundColor === '' || body.style.backgroundColor === 'rgb(247, 255, 255)' || body.style.backgroundColor === 'white');
    if (isDay) {
      // switch to night
      body.style.backgroundColor = '#06283D'; // navy
      body.style.color = '#F5F5F5'; // cream
    } else {
      // switch to day (teal-accent background)
      body.style.backgroundColor = '#f7ffff';
      body.style.color = '#06283D';
    }
    console.log('Theme toggled. Background now:', body.style.backgroundColor);
  } catch (e) {
    console.error('toggleTheme error', e);
  }
}
