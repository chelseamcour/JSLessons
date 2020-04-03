const api_key = "ZhIBNntSTkpSwdHfiEhx8uDw4qxahaQ9FdrPlY1v";
const url = "https://api.nasa.gov/planetary/apod?api_key=" + api_key;

fetch(url)
    .then(xbox => {
        console.log(xbox);
        return xbox.json()
    })
    .then(json => {
        console.log(json);
        console.log("done")
    })
    .catch(err => {
        console.error(err)
    })


