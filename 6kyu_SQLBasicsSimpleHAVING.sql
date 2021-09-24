SELECT age, COUNT(people) AS total_people
FROM people
GROUP BY age
HAVING COUNT(people) > 9

-- https://www.codewars.com/kata/58164ddf890632ce00000220
