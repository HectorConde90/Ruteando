import routeDAO from '../../model/route/dao.js';



const updateOne = async (req, res, next) => {

    try {


        // Id de la ruta
        const idRoute = req.params.id;

        const routeBody = req.body
      

        // Elimino la ruta del usuario
        const route = await routeDAO.updateOne(idRoute, routeBody)
        // console.log(route)

         res.status(201).json({"message": "update successfully"});
        


    } catch (error) {
        next(error);
    }

}

export default updateOne;