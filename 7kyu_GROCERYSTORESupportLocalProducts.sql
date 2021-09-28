SELECT COUNT(p) AS products, p.country
FROM products AS p
WHERE p.country IN ('United States of America', 'Canada')
GROUP BY p.country
ORDER BY products DESC

-- https://www.codewars.com/kata/5a8ed96bfd8c066e7f00011a
