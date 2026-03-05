// ✅ Correct: single default export function
async function globalTeardown() {
    console.log("Cleaning up resources...");
    // e.g., stop servers, close DB connections, etc.
}


module.exports = globalTeardown;