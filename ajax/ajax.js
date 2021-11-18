const URL = "https://jsonplaceholder.typicode.com/todos"
$('body').prepend('<button id="btn"> METODO GET</button>');

$('#btn').click(() =>{
    $.get(URL, function(respuesta, estado) {
        if (estado === "success"){
            let datos = respuesta;
            for (const dato of datos) {
                $("#todo").prepend(`
                                    <h2> Titulo: ${dato.title}</h2>
                                    <p>Completado: ${dato.completed}</p>
                `)
            }
        }
    })
});