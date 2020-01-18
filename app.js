// Budget Controller
const budgetController = (function () {
    // Registering incomes and budgets in data
})();

// UI controller
const UIController = (function () {
    // UI code
    // Displaying appropriate expenses and incomes
})();


// Global App Controller
const globalController = (function (budgetCtrl, UICtrl) {
    let count = 0;
    const glbCtrlAddItem = function() {
        // 1. Get the value, the plus/minus and the description
        // 2. Add the item to the budget controller
        // 3. Add item to the UI
        // 4. Calculate the budget
        // 5. Display the budget on the UI
        count++;
        console.log('Everything is working.');
        console.log(count);
    };
    // Event listener and handler for add button
    document.querySelector('.add__btn').addEventListener('click', glbCtrlAddItem);
    // Return keypress event listener
    document.addEventListener('keyup', function (event) {
        if (event.code === 'Enter') {
            glbCtrlAddItem();
        }
    });
})(budgetController, UIController);