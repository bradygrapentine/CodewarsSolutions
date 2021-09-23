SELECT people.*,
COUNT(sales.id) AS sale_count,
RANK() OVER (ORDER BY COUNT(sales.id) DESC) sale_rank
FROM people
JOIN sales ON sales.people_id=people.id
GROUP BY people.id
ORDER BY sale_count DESC

-- https://www.codewars.com/kata/58094559c47d323ebd000035
