#include <LiquidCrystal.h>
// Include the LiquidCrystal library for controlling LCD displays

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
// Define the pins for the LCD: RS, EN, D4, D5, D6, D7

LiquidCrystal lcd(rs, en, d4, d5, d6, d7);
// Create an instance of the LiquidCrystal class and initialize the LCD

bool handWaved = false;
// Initialize a boolean variable to track if a hand wave signal is received

void setup() {
  // Setup function: runs once when the sketch starts
  
  lcd.begin(16, 2);
  // Initialize the LCD with 16 columns and 2 rows
  lcd.print("waiting...");
  // Display "waiting..." message on the LCD
  Serial.begin(9600);
  // Initialize serial communication with baud rate 9600
}

void loop() {
  // Loop function: runs repeatedly as long as the Arduino is powered on
  
  if (Serial.available() > 0) {
    // Check if there's data available in the serial buffer
    char incomingData = Serial.read();
    // Read the data from the serial buffer
    
    if (incomingData == '1') {
      // Check if the received data is the signal to display the message
      handWaved = true;
      // Set the flag to indicate that the hand was waved
    }
  }

  if (handWaved && Serial.available() > 0) {
    // Check if the hand was waved and there's data available to display
    char incomingData = Serial.read();
    // Read the data from the serial buffer

    lcd.clear();
    // Clear the LCD screen
    lcd.print("Hello!");
    // Display "Hello!" message on LCD

    handWaved = false;
    // Reset the flag after displaying the message
  }
}