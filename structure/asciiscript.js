document.addEventListener("DOMContentLoaded", () => {
    const asciiArt = document.getElementById("ascii-art");
    const restartButton = document.getElementById("restart-animation");
    const caption = document.getElementById("caption");

    const frames = [
        "frames/frame1.png",
        "frames/frame2.png",
        "frames/frame3.png",
        "frames/frame4.png",
        "frames/frame5.png",
        "frames/frame6.png",
        "frames/frame7.png",
        "frames/frame8.png",
        "frames/frame9.png",
        "frames/frame10.png",
        "frames/frame11.png",
        "frames/frame12.png",
        "frames/frame13.png",
        "frames/frame14.png",
        "frames/frame15.png",
        "frames/frame16.png",
        "frames/frame17.png",
        "frames/frame18.png",
        "frames/frame19.png",
        "frames/frame20.png",
        "frames/frame21.png",
        "frames/frame22.png",
        "frames/frame23.png",
        "frames/frame24.png",
        "frames/frame25.png",
        "frames/frame26.png",
        "frames/frame27.png",
        "frames/frame28.png",
        "frames/frame29.png",
        "frames/frame30.png",
        "frames/frame31.png",
        "frames/frame32.png",
        "frames/frame33.png",
        "frames/frame34.png",
        "frames/frame35.png",
        "frames/frame36.png",
        "frames/frame37.png",
        "frames/frame38.png",
        "frames/frame39.png",
        "frames/frame40.png",
        "frames/frame41.png",
        "frames/frame42.png",
        "frames/frame43.png",
        "frames/frame44.png",
        "frames/frame45.png"
    ];

    const captions = [
        "Rise and shine! It's time to make breakfast. Click the fridge to open it up, and let's get started!",
        "Click on the egg carton.",
        "Click on an egg to move it to the counter.",
        "Click the carton to close it.",
        "Now close the fridge.",
        "Click the pan to bring it down to the stove.",
        "Now open the cabinet directly above the bread and butter; the oil's in there.",
        "Click on the oil, let's grease up this pan.",
        "That's a good amount. Click on the cabinet to put it back.",
        "Now close the cabinet.",
        "Click the leftmost knob on the stove to turn the heat on.",
        "Click the egg to bring it above the pan.",
        "Now crack the egg.",
        "Click on the trash to throw away the shell.",
        "Great job! Now, let's make some toast while we wait for the egg to cook. Click on the bread bag to grab a slice.",
        "Click on the toaster to pop the bread in there.",
        "Now click on the toaster lever to push it down and toast the bread.",
        "Well done! But wait! Your egg is almost done cooking! Click on the cabinet above the sink so we can grab a plate.",
        "Now click on a plate to bring it to the counter.",
        "Perfect! Now click on the cabinet to close it, and then we'll plate the egg.",
        "Now let's turn off the heat.",
        "Click on the spatula in the container above your plate to grab it.",
        "And click the egg to pick it up.",
        "And then we'll click on the plate to drop it off there.",
        "Eggcellent! Now click on the sink to put your dirty spatula in there.",
        "Also, click the pan to put that in the sink too.",
        "Your toast just popped up! Click on it to transfer it to your plate.",
        "Great! Now let's get some butter on your toast. First, let's grab some silverware in the little drawer that's next to the fridge, under the counter but above the bottom cabinet.",
        "Now click a knife to put one on the counter.",
        "And do the same with a fork.",
        "Now let's close the drawer.",
        "Click on the butter dish to take the top off.",
        "Now click on the butter to take a little bit off with your knife.",
        "Now let's click on your bread so you can slather that butter on.",
        "Click on the sink to throw your knife on there.",
        "And don't forget to put the lid of the butter dish back on by clicking it.",
        "Amazing! We're almost done-- we just need to get you a drink. Click on the cabinet above the toaster to open it up.",
        "Click on a cup to bring it down to the counter.",
        "Now let's click on the fridge to open it up...",
        "And click on the orange juice so we can bring it to your cup.",
        "Click on it one last time to pour it.",
        "And now, let's click on the fridge to put it back.",
        "Close the fridge with one final click...",
        "and you're ready to dig in. Click to see your breakfast! Enjoy!!!",
        " "
    ];

    let currentFrame = 0;

    function updateFrame() {
        if (frames.length > 0) {
            asciiArt.src = frames[currentFrame];
            caption.textContent = captions[currentFrame];
        }

        if (currentFrame === frames.length - 1) {
            restartButton.style.display = "block";
        } else {
            restartButton.style.display = "none";
        }
    }

    asciiArt.addEventListener("click", () => {
        if (currentFrame < frames.length - 1) {
            currentFrame++;
            updateFrame();
        }
    });

    restartButton.addEventListener("click", () => {
        currentFrame = 0;
        updateFrame();
    });

    updateFrame();
});
