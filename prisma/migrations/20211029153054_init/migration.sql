/*
  Warnings:

  - You are about to drop the column `birthdate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `officialEmail` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `personalEmail` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_id_officialEmail_username_staffId_idx";

-- DropIndex
DROP INDEX "User_officialEmail_key";

-- DropIndex
DROP INDEX "User_personalEmail_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "birthdate",
DROP COLUMN "officialEmail",
DROP COLUMN "personalEmail",
ADD COLUMN     "email" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_id_email_username_staffId_idx" ON "User"("id", "email", "username", "staffId");
