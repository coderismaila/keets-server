-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Super', 'Admin', 'Mod', 'User');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT E'User';
