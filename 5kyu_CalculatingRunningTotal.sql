SELECT p.created_at::DATE as date, 
COUNT(p.created_at),
SUM(COUNT(p.created_at)) OVER(ORDER BY p.created_at::DATE)::INT AS total
FROM posts AS p
GROUP BY p.created_at::DATE
ORDER BY date

-- https://www.codewars.com/kata/589cf45835f99b2909000115
