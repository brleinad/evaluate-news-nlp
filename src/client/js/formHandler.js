function handleSubmit(event) {
    event.preventDefault()

    const results = document.getElementById('results')
    results.innerHTML = ''

    // check what text was put into the form field
    const formText = document.getElementById('name').value
    if (!Client.isValidLink(formText)){
        // Tell the user no results for the given link
        const noResults = document.createElement('li')
        noResults.textContent = 'No results for the given link'
        results.appendChild(noResults)
        console.log('Not doing anything')
        return
    }

    // The link is valid
    console.log("::: Form Submitted :::", formText)

    const data = {link: formText}
    // post the link to the server so that the API call can be made 
    fetch('http://localhost:8080/post-link', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    // Actually do the API call
    .then(res => {
        console.log('First Received: ', res)
        return fetch('http://localhost:8080/hashtags')
    })
    .then(res => res.json())
    // Update the UI
    .then(function(res) {
        console.log('Received', res)
        for (let hashtag of res.hashtags) {
            const li = document.createElement('li')
            li.textContent = hashtag
            results.appendChild(li)
        }
    })
}

export { handleSubmit }
