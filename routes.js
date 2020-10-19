module.exports = (app) => {
    const crud = require("./crud_controller");
    app.route('/api/insert').post(crud.insertname); //ngePOST si crud.insertname dgn metode POST

}