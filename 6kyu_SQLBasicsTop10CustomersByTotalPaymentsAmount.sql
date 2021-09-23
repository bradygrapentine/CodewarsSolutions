SELECT
c.customer_id, 
c.email,
COUNT(p) AS payments_count,
CAST(SUM(p.amount) AS FLOAT) AS total_amount
FROM customer AS c
JOIN payment AS p ON c.customer_id = p.customer_id
GROUP BY c.customer_id
ORDER BY total_amount DESC
LIMIT 10

-- https://www.codewars.com/kata/580d08b5c049aef8f900007c
