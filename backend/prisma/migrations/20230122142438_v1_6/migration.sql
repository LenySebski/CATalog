/*
  Warnings:

  - A unique constraint covering the columns `[id,postedById]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Post_postedById_key";

-- CreateIndex
CREATE UNIQUE INDEX "Post_id_postedById_key" ON "Post"("id", "postedById");
