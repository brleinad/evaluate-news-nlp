function isValidLink(inputText) {
    console.log("::: Running isValidLink :::", inputText);

    const link = document.createElement('a')
    link.href = inputText
    // It's a valid link if it has a host and it's not something in the current page
    if (link.host != window.location.host && link.host) {
        console.log('It is a link')
        return true
    }
    console.log('It is NOT a link')
    return false
    //return (link.host != window.location.host && link.host)
}

export { isValidLink }
