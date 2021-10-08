SELECT s.transaction_date::DATE AS day,
  d.name AS department,
  COUNT(s.id) AS sale_count
  FROM department AS d
    JOIN sale s on d.id = s.department_id
  GROUP BY d.name, day
  ORDER BY day
  
  -- https://www.codewars.com/kata/582cba7d3be8ce3a8300007c
