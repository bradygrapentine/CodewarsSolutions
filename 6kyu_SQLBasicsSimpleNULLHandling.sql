SELECT 
e.id, 
COALESCE (
	NULLIF (e.name, ''),
  '[product name not found]'
) AS "name",
e.price, 
COALESCE (
	NULLIF (e.card_name, ''),
  '[card name not found]'
) AS "card_name", 
e.card_number, 
e.transaction_date
FROM eusales AS e
WHERE e.price > 50

-- https://www.codewars.com/kata/5811315e04adbbdb5000050e
