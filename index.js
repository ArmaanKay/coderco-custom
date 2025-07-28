const core = require('@actions/core');  // ✅ Fix: correct package name

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello, ${nameToGreet}!`);  // ✅ Fix: use backticks for template string
    core.setOutput('time', new Date().toTimeString());
} catch (error) {
    core.setFailed(error.message);
}