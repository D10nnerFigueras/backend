-- CreateTable
CREATE TABLE "professor" (
    "id" SERIAL NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "estatus" BOOLEAN NOT NULL DEFAULT false,
    "titulo" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);
