/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `areaOfficeId` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_id_email_username_staffId_idx";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "areaOfficeId" TEXT NOT NULL,
ADD COLUMN     "designationId" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ALTER COLUMN "role" SET NOT NULL;

-- CreateTable
CREATE TABLE "AreaOffice" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nerc_code" TEXT NOT NULL,
    "kaedco_code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AreaOffice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Designation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Designation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AreaOffice_name_key" ON "AreaOffice"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AreaOffice_nerc_code_key" ON "AreaOffice"("nerc_code");

-- CreateIndex
CREATE UNIQUE INDEX "AreaOffice_kaedco_code_key" ON "AreaOffice"("kaedco_code");

-- CreateIndex
CREATE INDEX "AreaOffice_id_name_nerc_code_kaedco_code_idx" ON "AreaOffice"("id", "name", "nerc_code", "kaedco_code");

-- CreateIndex
CREATE UNIQUE INDEX "Designation_name_key" ON "Designation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- CreateIndex
CREATE INDEX "User_id_email_username_staffId_phoneNumber_idx" ON "User"("id", "email", "username", "staffId", "phoneNumber");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_areaOfficeId_fkey" FOREIGN KEY ("areaOfficeId") REFERENCES "AreaOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_designationId_fkey" FOREIGN KEY ("designationId") REFERENCES "Designation"("id") ON DELETE SET NULL ON UPDATE CASCADE;
