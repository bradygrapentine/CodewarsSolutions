SELECT r.project,
regexp_replace(r.address, '[A-Za-z]', '', 'g') AS numbers,
regexp_replace(r.address, '[\d]', '', 'g') AS letters
FROM repositories AS r

-- https://www.codewars.com/kata/594257d4db68b6e99200002c
