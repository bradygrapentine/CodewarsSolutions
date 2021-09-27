SELECT f.name, SUM(f.won) AS won, SUM(f.lost) AS lost
FROM fighters AS f
JOIN winning_moves AS w ON f.move_id = w.id
WHERE w.move != 'Hadoken' AND w.move != 'Shouoken' AND w.move != 'Kikoken' 
GROUP BY f.name
ORDER BY SUM(f.won) DESC
LIMIT 6

-- https://www.codewars.com/kata/5ac698cdd325ad18a3000170
