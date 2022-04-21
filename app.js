const form = document.getElementById('form-name')
const input = form.children[2].children[1]
const screenEror = form.children[2].lastElementChild

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = input.value.trim()
    screenEror.innerHTML = ''//reset the error screen
    output.innerHTML = '' // reset the output screen 
    if(name) { //verification of empty name
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `https://api.nationalize.io?name=${name}`)
    xhr.send()
    xhr.onload = ()=>{
        let response = xhr.responseText
        let data = JSON.parse(response)
        console.log(data.country);
        if(data.country.length > 0) { //verification null result
            let nationality = data.country[0].country_id
            output.innerHTML = `${name} you are most probably from <strong>${nationality}</strong>`
            } else {
            let nationality = 'result not found...'
            output.innerHTML = nationality
            }
        }
    } else {
        screenEror.innerHTML = 'field connot be empty'
    }
})