import express from "express";
import CharacterController from "../controllers/charactersController";
const router = express.Router();

router.get("/characters", CharacterController.getAllCharacters);
router.get("/character/:idCharacter", CharacterController.getSearchCharacter);

export default router;
