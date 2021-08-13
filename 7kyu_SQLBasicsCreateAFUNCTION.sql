CREATE OR REPLACE FUNCTION INCREMENT(i integer) RETURNS integer
LANGUAGE plpgsql 
AS $function$
BEGIN
RETURN i + 1;
END;
$function$
RETURNS NULL ON NULL INPUT;

-- https://www.codewars.com/kata/580fe518cefeff16d00000c0
