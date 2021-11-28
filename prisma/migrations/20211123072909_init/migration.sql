-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_areaOfficeId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "areaOfficeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_areaOfficeId_fkey" FOREIGN KEY ("areaOfficeId") REFERENCES "AreaOffice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
