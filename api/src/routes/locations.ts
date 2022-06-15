import express from "express";
import LocationController from "../controllers/locationController";
const router = express.Router();

router.get("/locations/:pageLocation", LocationController.getAllLocations); //locaciones por pagina
router.get("/locations/search/:name", LocationController.getLocation);

export default router;
