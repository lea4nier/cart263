# AI Jam
Léa Fournier
CART 263 - Created Winter 2024
---

For my project I wanted to challenge myself to use the ml5.js library to interact with Arduino. This is a simple prototype where the user waves their hand into their webcam and the Arduino will display a message once the wave is detected. 

When beginning this project, I wanted to do something much more complex, but I ran into many hardware issues with the Arduino which set me back. I went to the computation/sensor lab at Concordia and was able to fix these issues thanks to Sabine and Elio! 

My project utilizes the ml5.js library for hand gesture recognition and the p5.serialport library for serial communication with an Arduino board. The p5.serialport library sends a message from the code running in the browser to the Arduino board, thus allowing for real-time interaction based on detected hand gestures! Once the wave gesture is detected a message is sent via the console through the p5.serialport library to the Arduino board. This message runs the code loaded onto the Arduino which makes the text displayed on the LCD go from "waiting..." to "hello!"

------
Attributions
This project was inspired by a Lesson by Professor Jon E. Froehlich and the Makeability Lab at the University of Washington.
Link to source: https://makeabilitylab.github.io/physcomp/communication/handpose-serial.html 


I also used the Arduino website to write my code for the Arduino and followed this example to build my circuit. 
Link to source: https://docs.arduino.cc/learn/electronics/lcd-displays/

