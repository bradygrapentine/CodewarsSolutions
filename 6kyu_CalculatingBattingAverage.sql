SELECT player_name, games, RPAD(CAST(ROUND(hits::decimal/at_bats, 3) AS varchar), 5, '0') AS batting_average
FROM yankees
WHERE at_bats >= 100
ORDER BY batting_average DESC

-- https://www.codewars.com/kata/5994dafcbddc2f116d000024
