import teamMemberController from "../../controller/teamMember.controller";
import { Router } from "express";

export const teamMemberRouter = Router();

teamMemberRouter.post("/create", teamMemberController.createTeamMember);
teamMemberRouter.post(
  "/remove/by-member-id/:memberId",
  teamMemberController.removeTeamMember,
);
teamMemberRouter.post(
  "/update/by-member-id/:memberId",
  teamMemberController.updateTeamMember,
);

teamMemberRouter.get(
  "/by-team-id/:teamId",
  teamMemberController.getTeamMembersByTeam,
);
