const username = process.env.KB_USER;
if (!username) {
    throw new Error('KB_USER environment variable not found');
}
// Now you can use the username variable for further processing
