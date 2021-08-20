SELECT *
FROM departments AS d
WHERE d.id IN (SELECT s.department_id 
                        FROM sales AS s
                        WHERE s.price > 98.00) 
                        
-- https://www.codewars.com/kata/58113c03009b4fcc66000d29 
