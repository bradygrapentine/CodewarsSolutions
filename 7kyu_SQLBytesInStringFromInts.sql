SELECT LENGTH(CAST(n.number1 AS VARCHAR)) AS octnum1, LENGTH(CAST(n.number2 AS VARCHAR)) AS octnum2, LENGTH(CAST(n.number3 AS VARCHAR)) AS octnum3, LENGTH(CAST(n.number4 AS VARCHAR)) AS octnum4, LENGTH(CAST(n.number5 AS VARCHAR)) AS octnum5
FROM numbers AS n

-- https://www.codewars.com/kata/59491429952ac97ad9000106
