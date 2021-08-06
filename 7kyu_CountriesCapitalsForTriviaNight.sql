SELECT c.capital
FROM countries AS c
WHERE c.country LIKE 'E%' AND c.continent IN ('Africa', 'Afrika')
ORDER BY c.capital
LIMIT 3

-- https://www.codewars.com/kata/5e5f09dc0a17be0023920f6f
