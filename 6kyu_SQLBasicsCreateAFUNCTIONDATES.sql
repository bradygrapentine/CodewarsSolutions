CREATE OR REPLACE FUNCTION agecalculator(age date) RETURNS integer
LANGUAGE plpgsql 
AS $function$
BEGIN
RETURN EXTRACT(year FROM AGE(CURRENT_DATE, age));
END;
$function$
RETURNS NULL ON NULL INPUT;

-- https://www.codewars.com/kata/5811010104adbba24b0002fe
