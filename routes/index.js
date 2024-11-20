import product from "./productRoutes.js"
import services from "./servicesRoute.js"


const Router = (server) => {
    server.get('/', (req, res) => {
        res.send("The Server is running properly")
    })

    server.use("/", product)
    server.use("/", services)
}

export default Router;