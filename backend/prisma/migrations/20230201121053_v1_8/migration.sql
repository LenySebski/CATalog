/*
  Warnings:

  - You are about to drop the column `imagesURL` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "imagesURL",
ADD COLUMN     "imageURL" TEXT;
