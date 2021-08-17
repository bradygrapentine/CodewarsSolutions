SELECT 
LENGTH(demographics.race) + BIT_LENGTH(demographics.name) AS calculation
FROM demographics

-- https://www.codewars.com/kata/594901ba44645fd7bd00005f
