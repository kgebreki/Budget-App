// Budget Controller
const budgetController = (function () {
    const Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    const transactionData = {
        transactions: {
            exp: [],
            inc: []
        },
        total: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addTransaction: function (type, des, val) {
            let newItem, ID;
            // Create new ID: new ID = last ID + 1
            if (transactionData.transactions[type].length > 0) {
                ID = transactionData.transactions[type][transactionData.transactions[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            transactionData.transactions[type].push(newItem);
            return newItem;
        },
        // Temporary testing function 
        testing: function () {
            console.log(transactionData);
        }
    }
})();

// UI controller
const UIController = (function () {
    const DOMstrings = {
        inputType: '.add__type', // inc or exp
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function () {
            return DOMstrings;
        }
    }
})();

// Global App Controller
const globalController = (function (budgetCtrl, UICtrl) {
    const setUpEventListeners = function () {
        const DOM = UICtrl.getDOMstrings();
        // Event listener and handler for add button
        document.querySelector(DOM.inputBtn).addEventListener('click', glbCtrlAddItem);
        // Return keypress event listener
        document.addEventListener('keyup', function (event) {
            if (event.code === 'Enter') {
                glbCtrlAddItem();
            }
        });
    };

    const glbCtrlAddItem = function() {
        let input, newTransaction;
        // Get field input data
        input = UICtrl.getInput();
        // Add the item to the budget controller
        newTransaction = budgetController.addTransaction(input.type, input.description, input.value);
        // Add item to the UI
        // Calculate the budget
        // Display the budget on the UI
    };

    return {
        init: function () {
            setUpEventListeners();
        }
    }
})(budgetController, UIController);

// Initialize
globalController.init();
