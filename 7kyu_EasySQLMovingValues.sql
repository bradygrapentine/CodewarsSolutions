SELECT 
LENGTH(m.name) AS id,
LENGTH(CAST(m.legs AS varchar)) AS name,
LENGTH(CAST(m.arms AS varchar)) AS legs,
LENGTH(m.characteristics) AS arms,
LENGTH(CAST(m.id AS varchar)) AS characteristics
FROM monsters AS m;

-- https://www.codewars.com/kata/594a389387a7c6a77a000005
