SELECT name, 
greeting, 
ARRAY_TO_STRING(regexp_matches(greeting, '#([\d]+)'), '') AS user_id 
FROM greetings;

-- https://www.codewars.com/kata/5c0ae69d5f72394e130025f6
