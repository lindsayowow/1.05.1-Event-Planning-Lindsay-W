/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================

// ============================================
// 🧩 Task 1: Generate Attendee Badge (10 minutes)
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

function generateBadgeLiteral (name, role) {
    //with template literals + to Uppercase
    return `Name: ${name.toUpperCase()}, Role: ${role}`;
}

console.log(generateBadgeLiteral('Alice', 'Speaker'));
// ============================================
// 🧩 Task 2: Calculate Event Cost (10 minutes)
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.


function calculateEventCost (numberOfAttendees, costPerAttendee) {
    if (numberOfAttendees > 100) {
        return (costPerAttendee * numberOfAttendees) * 0.90;
    }
    else{
        return costPerAttendee * numberOfAttendees;
    }
}


console.log(calculateEventCost(200, 10));
console.log(calculateEventCost(101, 30));
console.log(calculateEventCost(100, 30));

// ============================================
// 🧩 Task 3: Validate Email (25 minutes)
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
    //❓ Start with a question: How do we check each character in a string?
    // 🔍 Google search with the programming language
            //Encourage a Google search: "how do we check each character in a string in Javascript?"
    // 
// 2. Return true or false accordingly.

//

function validateEmail (email) {
    let atSignCheck = false;
    let dotCheck = false;
    for (let i = 0; i < email.length; i++){
        if (email[i] ==='@') {
            atSignCheck = true;
        }
        else if (email[i] === '.') {
            dotCheck = true;
        }
    }
    return atSignCheck && dotCheck; 
}

console.log(validateEmail('alice@email.com'));
console.log(validateEmail('alice.'));
console.log(validateEmail('Alice'))


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?