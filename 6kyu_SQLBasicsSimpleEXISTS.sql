SELECT d.id AS id, d.name as name
FROM departments AS d
JOIN sales AS s on s.department_id = d.id
WHERE EXISTS
(SELECT price FROM sales WHERE s.price > 98.00)
GROUP BY d.id
ORDER BY d.id; 

-- https://www.codewars.com/kata/58113a64e10b53ec36000293
