SELECT "people"."id", "people"."name", (COUNT("toys")) AS toy_count
FROM "people"
JOIN "toys" ON "people"."id" = "toys"."people_id"
GROUP BY "people"."id";
