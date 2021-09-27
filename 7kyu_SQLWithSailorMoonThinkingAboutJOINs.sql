SELECT ss.senshi_name AS sailor_senshi, 
ss.real_name_jpn AS real_name, 
c.name AS cat, 
s.school AS school
FROM sailorsenshi AS ss
LEFT JOIN cats AS c ON c.id = ss.cat_id
LEFT JOIN schools AS s ON s.id = ss.school_id

-- https://www.codewars.com/kata/5ab7a736edbcfc8e62000007
