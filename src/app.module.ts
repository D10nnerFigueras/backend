import { Module } from '@nestjs/common'; 
import { ProfessorModule } from './professor/professor.module';

@Module({
  imports: [ProfessorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
