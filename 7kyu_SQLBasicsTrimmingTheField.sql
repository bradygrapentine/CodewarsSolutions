SELECT 
id,
name,
CASE
WHEN POSITION(',' IN characteristics) = 0 THEN characteristics 
ELSE LEFT(characteristics, POSITION(',' IN characteristics) - 1)
END AS characteristic
FROM monsters
ORDER BY id

-- https://www.codewars.com/kata/59401c25c15cbeb58d000028
