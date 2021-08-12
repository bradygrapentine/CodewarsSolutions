WITH special_sales AS
    (SELECT department_id
    FROM sales
    WHERE price > 90)
    SELECT *
    FROM departments
    WHERE departments.id IN (SELECT department_id FROM special_sales)
    
-- https://www.codewars.com/kata/5811501c2d35672d4f000146 
