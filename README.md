Shopping Cart Engine: Functional Logic & DOM Integration
This project is a deep dive into Functional Programming using Vanilla JavaScript. It demonstrates how to take a raw dataset (JSON-like objects), process it through a mathematical engine, and dynamically update the browser's Document Object Model (DOM).

📸 Final Result
<img width="1801" height="912" alt="image" src="https://github.com/user-attachments/assets/a21f4750-91f5-4a36-b2c9-06c7fa5fe3fb" />


🛠️ The Technical Narrative
Here is the step-by-step logic of how the application "thinks":

1. The Data Structure
The application starts with an array of objects called cartItems. Each object contains a name, price, and a stock boolean. This mimics how data is typically received from a database or an API.

2. The Logic Pipeline (processOrder)
The heart of the app is the processOrder function. Instead of using messy "for-loops," it uses a clean Functional Pipeline:

Filtering: It first checks the stock status. If an item is false, it's discarded from the calculation immediately.

Reduction: It uses the .reduce() method to "boil down" the remaining array into a single numerical subtotal.

Transformation: It uses .map() to extract just the names of the available items, creating a clean list for the receipt.

3. Bridging to the UI (The DOM)
The JavaScript connects to the HTML in two distinct phases:

Initialization: On page load, the script loops through the data and uses document.createElement to build the physical cards you see on the screen.

Event Handling: It listens for a click event on the "Generate Invoice" button. When clicked, it runs the logic function and uses .innerHTML to inject a formatted string of HTML back into the "Invoice Summary" box.

4. Responsive Layout (CSS)
The UI uses CSS Flexbox to create a side-by-side dashboard layout.

The .layout container uses display: flex to ensure the Inventory and the Invoice scale appropriately.

The .out-of-stock class uses CSS selectors to visually dim items that are unavailable, providing immediate visual feedback to the user.

🚀 Key Concepts Mastered
Higher-Order Functions: Mastered .filter(), .map(), and .reduce().

DOM Manipulation: Creating and injecting elements dynamically.

Conditional Styling: Using JavaScript to toggle CSS classes based on data properties.

Clean Code: Separating "Business Logic" (calculations) from "UI Logic" (updating the screen).
