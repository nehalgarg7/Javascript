function generateRandomNumberWithDelay(delay) {
    console.log(`Generating random number in ${delay} seconds...`);

    // Countdown
    let remainingTime = delay;
    const countdownInterval = setInterval(() => {
        console.log(`Time remaining: ${remainingTime} seconds`);
        remainingTime--;

        if (remainingTime < 0) {
            clearInterval(countdownInterval);

            // Generate and display the random number
            const randomNum = Math.floor(Math.random() * 100) + 1; // Change the range as needed
            console.log(`\nRandom number generated: ${randomNum}`);
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}

// Set the delay (in seconds)
const delaySeconds = 3;

// Call the function with the specified delay
generateRandomNumberWithDelay(delaySeconds);
