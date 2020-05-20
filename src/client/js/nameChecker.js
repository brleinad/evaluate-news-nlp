async function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);

    const response = await fetch(inputText, {
        method: 'get',
        mode: 'no-cors',
        //credentials: 'omit',
        headers: { 'Content-Type': 'text/plain' }
        
    })

    try {
        console.log('URL exists', response.status)
        console.log('Got this from URL', response)
    }catch(error) {
        console.log('ERROR: ', error)
    }

}

export { checkForName }
