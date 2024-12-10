import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { professor } from "@prisma/client";

@Injectable()
export class ProfessorService {
    constructor(private prisma: PrismaService) {}

    getAllProfessors(): Promise<professor[]> {
        return this.prisma.professor.findMany();
    }

    getProfessorById(id: number): Promise<professor> {
        return this.prisma.professor.findUnique({
            where: {id}
        });
    }

    createProfessor(data: professor): Promise<professor> {
        return this.prisma.professor.create({
            data
        });
    }

    updateProfessor(id: number, data: professor): Promise<professor> {
        return this.prisma.professor.update({
            where: {id}, data
        });
    }

    deleteProfessor(id: number): Promise<professor> {
        return this.prisma.professor.delete({
            where: {id}
        });
    }


}