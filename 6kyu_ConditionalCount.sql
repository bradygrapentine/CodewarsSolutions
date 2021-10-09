SELECT EXTRACT(MONTH FROM payment_date) AS month,
COUNT(p) AS total_count,
SUM(amount) AS total_amount,
SUM(CASE WHEN p.staff_id = 1 THEN 1 ELSE 0 END) AS mike_count,
SUM(CASE WHEN p.staff_id = 1 THEN p.amount ELSE 0 END) AS mike_amount,
SUM(CASE WHEN p.staff_id = 2 THEN 1 ELSE 0 END) AS jon_count,
SUM(CASE WHEN p.staff_id = 2 THEN p.amount ELSE 0 END) AS jon_amount
FROM payment AS p
GROUP BY month
ORDER BY month

-- https://www.codewars.com/kata/5816a3ecf54413a113000074
