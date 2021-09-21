SELECT CASE 
            WHEN MOD(SUM(ASCII(l.letter)-96),26) >= 1 THEN CHR(CAST(MOD(SUM(ASCII(l.letter)-96),26) + 96 AS int)) 
            ELSE 'z'
       END AS letter
FROM letters AS l

-- https://www.codewars.com/kata/5d50e3914861a500121e1958
