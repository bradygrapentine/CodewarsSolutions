SELECT
SUBSTRING(r.project from 1 for r.commits) AS project,
SUBSTRING(r.address from (LENGTH(r.address)-(r.contributors)+1) for r.contributors) AS address
FROM repositories AS r

-- https://www.codewars.com/kata/5943a58f95d5f72cb900006a
