SELECT 
CASE 
    WHEN (SUM(number1) % 2 = 1) THEN MIN(number1)
    WHEN (SUM(number1) % 2 = 0) THEN MAX(number1)
END AS number1,
CASE
    WHEN (SUM(number2) % 2 = 1) THEN MIN(number2)
    WHEN (SUM(number2) % 2 = 0) THEN MAX(number2)
END AS number2
FROM numbers

-- https://www.codewars.com/kata/595a3ba3843b0cbf8e000004
