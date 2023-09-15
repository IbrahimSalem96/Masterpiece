const express = require('express')
const mongoose = require('mongoose')
const connectToDb = require('./config/connectToDb')
const { errorHandler, notFound } = require('./middlewares/error.js')
const cors = require('cors');
require('dotenv').config()


//Init App
const app = express()

app.use(cors());
app.use(express.json())


//connection to  Database
connectToDb()


//Router 
//Admin
app.use('/api/authAdmin/', require('./routes/authAdminRoute'))
app.use('/api/admin/', require('./routes/admim/admin'))
app.use('/api/admin/password/', require('./routes/admim/passwordRoute'))


//User
app.use('/api/auth/', require('./routes/authUserRoute'))
app.use('/api/users/', require('./routes/user/User'))


//Post 
app.use('/api/post/', require('./routes/postRoute'))


//Service Provider
app.use('/api/service-provider/', require('./routes/serviceProviderRoute'))


//Development
app.use('/api/development/', require('./routes/development/developmentRoute'))


//Agencies
app.use('/api/import-agencies/', require('./routes/agencies/importRoute'))
app.use('/api/maintenance/', require('./routes/agencies/maintenance'))


//Scrap
app.use('/api/scrap/next-auction/', require('./routes/scrap/nextAuctionRoute'))
app.use('/api/scrap/auction-service/', require('./routes/scrap/scrapAuctionRoute'))


//Shop 
app.use('/api/shop/car/', require('./routes/shops/carsRoute'))
app.use('/api/shop/buses/', require('./routes/shops/busesRoute'))
app.use('/api/shop/machines/', require('./routes/shops/machinesRoute'))
app.use('/api/shop/motorcycles/', require('./routes/shops/motorcyclesRoute'))
app.use('/api/shop/scrap/', require('./routes/shops/scrapRoute'))
app.use('/api/shop/spare-parts/', require('./routes/shops/sparePartsRoute'))
app.use('/api/shop/trucks/', require('./routes/shops/trucksRoute'))


//Services
app.use('/api/services/accidents/', require('./routes/Services/accidentsRoute'))
app.use('/api/services/before-buying/', require('./routes/Services/beforeBuyingRoute'))
app.use('/api/services/location-pieces/', require('./routes/Services/locationPiecesRoute'))
app.use('/api/services/maintenance-request/', require('./routes/Services/maintenanceRequestRoute'))
app.use('/api/services/rental/', require('./routes/Services/rentalRoute'))

//Book Cars
app.use('/api/book-cars/', require('./routes/bookCarsRoute'))


//Chart
app.use('/api/chart/', require('./routes/chartRoute'))


// Error Handler Middleware'
app.use(notFound)
app.use(errorHandler)


//Start Server
app.listen(process.env.PORT, () => {
  console.log('listening for requests on port', process.env.PORT)
})
