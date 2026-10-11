// Selecting DOM Elements
const messageInput = document.getElementById('messageInput');
const counterDisplay = document.getElementById('counterDisplay');
const warningMsg = document.getElementById('warningMsg');

// Set Maximum Character Limit
const maxLength = 200;

// Function to update character count
function updateCharacterCount() {
    const currentLength = messageInput.value.length;

    // Display Typed Characters / Max Limit (e.g., 150 / 200 characters)
    counterDisplay.textContent = `${currentLength} / ${maxLength} characters`;

    // Check if maximum limit is reached
    if (currentLength >= maxLength) {
        warningMsg.textContent = "Character limit reached!";
        messageInput.classList.add('border-red-500', 'ring-2', 'ring-red-400');
    } else {
        warningMsg.textContent = "";
        messageInput.classList.remove('border-red-500', 'ring-2', 'ring-red-400');
    }
}

// Real-time Event Listener for Input
messageInput.addEventListener('input', updateCharacterCount);