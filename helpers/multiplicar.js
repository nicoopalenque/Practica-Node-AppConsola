const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, hasta=10, option) => {

    try {
       
        let salida = '';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {

            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;


        }
        if (option){
            console.log(colors.green('========================='));
            console.log(colors.rainbow(`TABLA DEL ${base}`) );
            console.log(colors.green('========================='));
            console.log(consola);
        } 

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;

    }

}

module.exports = {
    crearArchivo: crearArchivo
};