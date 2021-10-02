SELECT created_at::date AS day, description, COUNT(events)
FROM events
WHERE name = 'trained'
GROUP BY day, description
ORDER BY day

-- https://www.codewars.com/kata/5811597e9d278beb04000038
