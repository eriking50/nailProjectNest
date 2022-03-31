/*
  Warnings:

  - You are about to drop the column `type` on the `schedule` table. All the data in the column will be lost.
  - Added the required column `typeId` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `schedule` DROP COLUMN `type`,
    ADD COLUMN `typeId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Type` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Schedule` ADD CONSTRAINT `Schedule_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `Type`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
