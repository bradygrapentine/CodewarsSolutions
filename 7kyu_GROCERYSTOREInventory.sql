SELECT p.id, p.name, p.stock
FROM products as p
WHERE p.producent = 'CompanyA' AND p.stock <= 2
ORDER BY p.id

-- https://www.codewars.com/kata/5a8eb3fb57c562110f0000a1
