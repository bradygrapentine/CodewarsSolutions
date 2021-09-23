SELECT p.id, p.name, p.isbn, p.company_id, c.name AS company_name, p.price 
FROM products AS p
JOIN companies AS c ON c.id = p.company_id

-- https://www.codewars.com/kata/5802e32dd8c944e562000020
