import { Module } from "@nestjs/common";
import { ProfessorController } from "./professor.controller";
import { ProfessorService } from "./professor.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [ProfessorController],
    providers: [ProfessorService],
    imports: [PrismaModule],
})
export class ProfessorModule {

}