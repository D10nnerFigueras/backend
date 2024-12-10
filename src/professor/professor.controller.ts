import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { professor } from "@prisma/client";

@Controller('professor')
export class ProfessorController {
    constructor (private readonly professorservice: ProfessorService) {}

    @Get()
    async getAllProfessors() {
        return this.professorservice.getAllProfessors()
    }

    @Get(':id')
    async getProfessorById(@Param('id') id: string) {

        const professorfound = await this.professorservice.getProfessorById(Number(id))

        if(!professorfound) throw new NotFoundException('Professor not found')

        return professorfound
    }
    
    @Post()
    async createProfessor(@Body() data: professor) {
        return this.professorservice.createProfessor(data)

    }
    
    @Put(':id')
    async updateProfessor(@Param('id') id: string, @Body() data: professor) {
        
        try {
            return await this.professorservice.updateProfessor(Number(id), data)
        } catch (error) {
            throw new NotFoundException('Professor does not exist')
        }
    }

    
    @Delete(':id')
    async deleteProfessor(@Param('id') id: string) {
        try {
            return await this.professorservice.deleteProfessor(Number(id))
        } catch (error) {
            throw new NotFoundException('Professor does not exist')
        }
    }
}