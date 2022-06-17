import express from "express";
import EpisodeController from "../controllers/episodesController";
const router = express.Router();

router.get("/episodes", EpisodeController.getAllEpisodes);
router.get("/episodes/pagination/:currentPage", EpisodeController.getEpisodes);
router.get("/episodes/search/:idEpisode", EpisodeController.getOneEpisode);

export default router;
