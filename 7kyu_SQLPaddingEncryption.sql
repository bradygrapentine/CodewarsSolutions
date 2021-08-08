SELECT RPAD(md5, CHAR_LENGTH(sha256), '1') AS md5, LPAD(sha1, CHAR_LENGTH(sha256), '0') AS sha1, sha256
FROM encryption

-- https://www.codewars.com/kata/5943b797d8c9432eb7000066
