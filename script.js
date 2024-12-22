class EventTarget {
    constructor() {
        this.listeners = {};  // Store event listeners by event name
    }

    // Add an event listener
    addEventListener(event, callback) {
        // If the event does not have an array of listeners, create it
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        // Ensure the callback is not already added
        if (!this.listeners[event].includes(callback)) {
            this.listeners[event].push(callback);
        }
    }

    // Remove an event listener
    removeEventListener(event, callback) {
        // Check if the event has listeners
        if (this.listeners[event]) {
            const index = this.listeners[event].indexOf(callback);
            if (index !== -1) {
                this.listeners[event].splice(index, 1);  // Remove the callback
            }
        }
    }

    // Dispatch an event
    dispatchEvent(event) {
        // Check if there are listeners for this event
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => {
                callback();  // Invoke each listener
            });
        }
    }
}

// Sample Usage
const target = new EventTarget();

// Define callback functions
const logHello = () => console.log('hello');
const logWorld = () => console.log('world');

// Add event listeners
target.addEventListener('hello', logHello);
target.addEventListener('world', logWorld);

// Dispatch events
target.dispatchEvent('hello');  // Output: hello
target.dispatchEvent('world');  // Output: world

// Remove event listener
target.removeEventListener('hello', logHello);

// Dispatch events again
target.dispatchEvent('hello');  // No output (event listener removed)
target.dispatchEvent('world');  // Output: world
