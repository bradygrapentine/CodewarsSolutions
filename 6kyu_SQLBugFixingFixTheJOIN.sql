SELECT j.job_title,
  CAST(ROUND(SUM(j.salary)/COUNT(p), 2) AS FLOAT) AS average_salary,
  COUNT(j.job_title) AS total_people,
  CAST(ROUND(SUM(j.salary), 2) AS FLOAT) AS total_salary
  FROM people AS p
  JOIN job AS j ON p.id = j.people_id
  GROUP BY j.job_title
  ORDER BY SUM(j.salary)/COUNT(p) DESC
  
  -- https://www.codewars.com/kata/580fb94e12b34dd1c40001f0
