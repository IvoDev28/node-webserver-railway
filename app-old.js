const http = require('http');
http.createServer((req, res)=>{

    /* res.setHeader('Content-Disposition', 'attachment; filename="lista.csv"');
    res.writeHead(200,{'content-type': 'aplication/csv'});
    res.write('id, nombre\n');
    res.write('1, Fernando\n');
    res.write('2, Maria\n');
    res.write('3, Juan\n');
    res.write('4, Pedro\n');
    const persona = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 22
    }
    res.write(JSON.stringify(persona)); */
    res.write('hola mundo');
    res.end();
})
.listen( 8080 );

console.log('escuchando el puerto '+ 8080)