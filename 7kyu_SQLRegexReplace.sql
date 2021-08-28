SELECT r.project,
r.commits,
r.contributors,
REGEXP_REPLACE(r.address, '[0-9]', '!', 'g') AS address
FROM repositories r

-- https://www.codewars.com/kata/5942b066db68b6f35f000084
