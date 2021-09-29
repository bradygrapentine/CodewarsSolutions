SELECT id,
ASCII(SUBSTRING(name, 1, 1)) AS name, 
birthday, 
ASCII(SUBSTRING(race, 1, 1)) AS race
FROM demographics 

-- https://www.codewars.com/kata/594804a218e96caa8d00051b
