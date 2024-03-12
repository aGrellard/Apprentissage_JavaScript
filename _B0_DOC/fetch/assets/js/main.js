
// (async function (){
//     try {
//         const request = await fetch("http://localhost:8081/db_1")
//         const response = await request.json();
//         console.log("response", response);
//     } catch (e) {
//         console.error(e);
//     }
// })().then(
//     console.log("test 2")
// )

async function getDataJSON(){
    try {
        const request = await fetch("http://localhost:8081/db_1")
        const response = await request.json();
        console.log("getDataJSON", response);
    } catch (e) {
        console.error(e);
    }
}
async function postDataJson(){
    try {
        const bodyData = {
            "id": 0,
            "title": "teste su requette POST",
            "content": "contenu"
        }
        const chargeUtile = JSON.stringify(bodyData);
        const data = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: chargeUtile
        }
        const request = await fetch("http://localhost:8081/db_1", data);
        const response = await request.json();
        console.log("postDataJson", response);
    } catch (e) {
        console.error(e);
    }
}
getDataJSON().then( async ()=>{
    await postDataJson();
    console.log("end of postDataJSON");
})
