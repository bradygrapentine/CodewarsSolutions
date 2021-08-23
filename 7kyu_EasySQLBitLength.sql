SELECT 
d.id, 
BIT_LENGTH(d.name) AS name, 
d.birthday, 
BIT_LENGTH(d.race) AS race
from demographics AS d

-- https://www.codewars.com/kata/594900e16fd782a607000059
