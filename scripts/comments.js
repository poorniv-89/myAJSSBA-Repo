// Function to render the comments section
export function renderComments() {
    // Create the main container div for the guestbook
    const container = document.createElement('div');

    // creating the container with HTML for the comments section
    container.innerHTML = `
        <h2>Comments</h2>
        <div id="guest-form-container">
            <form id="guest-form">
                <textarea id="comment-input" placeholder="Leave a comment..."></textarea>
                <button type="submit" id="submit-comment">Submit</button>
            </form>
        </div>
        <div id="guest-comments-container"></div>
    `;

    // Adding a submit event listener to the form to handle comment submissions
    container.querySelector('#guest-form').addEventListener('submit', addComments);

    // Return the entire comments container to be appended in the DOM
    return container;
}

// Function to add new comment 
export function addComments(e) {
    e.preventDefault(); 

    // Getting the comment text from the input
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    // Checking if the input is empty
    if (!commentText) {
        alert('Please enter a comment.');
        return;
    }

    // Creating a new comment element and add the text
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `<p>${commentText}</p><p><small>Posted by Guest</small></p>`;

    // Appending the new comment to the list of comments
    document.getElementById('guest-comments-container').appendChild(commentDiv);

    // Clearing the input field after submission
    commentInput.value = '';
}