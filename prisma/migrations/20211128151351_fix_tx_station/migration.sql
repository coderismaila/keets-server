-- DropForeignKey
ALTER TABLE "Station" DROP CONSTRAINT "Station_areaOfficeId_fkey";

-- AlterTable
ALTER TABLE "Station" ALTER COLUMN "areaOfficeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_areaOfficeId_fkey" FOREIGN KEY ("areaOfficeId") REFERENCES "AreaOffice"("id") ON DELETE SET NULL ON UPDATE CASCADE;
