import { project } from "../entity/project.entity";

export interface iProjectRepository {
    registrar(data: project)
}