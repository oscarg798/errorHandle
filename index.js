module.exports = function(err) {
    var message;
    errJson = err.toJSON();
    console.log(errJson);
    switch (err.status) {
        case 400:
            message = 'Informacion  Invalida para el ' + errJson.model + ' , verifique Por Favor los siguientes atributos: ' + getPropertiesNames(errJson.invalidAttributes);
            return message;
        case 401:
            message = 'No Esta Autorizado Para Esta Accion';
            return message;
        case 403:
            message = 'Accion Prohibida';
            return message;
        case 404:
            message = 'El Recurso Solicitado No Ha Sido Encontrado';
            return message;
        case 500:
            if (errJson.raw) {
                message='Alguna de la información que esta tratando de ingresar ya existe en la base de datos, por favor verifique'
                

            } else {

                message = 'Error del sistema';
            }
            return message;
        case 503:
            message = 'Servicio no Disponible';
            return message;
        default:
            message = 'Error, comuniquese con el administrador del sistema';

            return message;
    }

};

function getPropertiesNames(obj) {
    var message = '';
    for (var key in obj) {
        message += key + ', ';

        // do some more stuff with obj[key]
    }
    return message;
}