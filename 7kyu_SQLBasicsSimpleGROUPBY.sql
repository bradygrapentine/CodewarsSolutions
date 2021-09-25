SELECT p.age, COUNT(p) AS people_count
FROM people AS p
GROUP BY p.age

-- https://www.codewars.com/kata/58111f4ee10b5301a7000175
