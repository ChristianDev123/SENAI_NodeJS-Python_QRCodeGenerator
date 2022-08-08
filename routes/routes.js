const router = require('router');
const qrCodeController = require("../controllers/QRCodeController/");
const route = router();


route.get('/migration',() => {
    
})

route.get('/', qrCodeController.index);
route.post('/', qrCodeController.create);
route.put('/', qrCodeController.put);
route.delete('/', qrCodeController.delete);