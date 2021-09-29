SELECT p.name, 
p.weight,
p.price,
CAST(ROUND(CAST(p.price/(p.weight/1000) AS NUMERIC), 2) AS FLOAT) AS price_per_kg
FROM products AS p
ORDER BY price_per_kg, p.name

-- https://www.codewars.com/kata/5a8f00745084d718940000c5
