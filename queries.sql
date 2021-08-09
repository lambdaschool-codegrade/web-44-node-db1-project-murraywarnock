-- Database Queries

-- Find all customers with postal code 1010
SELECT *
FROM CUSTOMERS
WHERE POSTALCODE ='1010';

-- Find the phone number for the supplier with the id 11
SELECT * 
FROM SUPPLIERS
WHERE SUPPLIERID = 11;

-- List first 10 orders placed, sorted descending by the order date
SELECT * 
FROM ORDERS
ORDER BY ORDERDATE DESC
LIMIT 10;

-- Find all customers that live in London, Madrid, or Brazil
SELECT * 
FROM CUSTOMERS
WHERE CITY LIKE '%LONDON%' 
OR CITY LIKE '%MADRID%'
OR COUNTRY LIKE '%BRAZIL%';

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO CUSTOMERS
(CUSTOMERNAME, CONTACTNAME, ADDRESS, CITY, POSTALCODE, COUNTRY)
VALUES ("The Shire", "Bilbo Baggins", "1 Hobbit-Hole", "Bag End", "111", "Middle Earth");

-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE CUSTOMERS
SET POSTALCODE = "11122"
WHERE CONTACTNAME = "Bilbo Baggins"

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted
SELECT COUNT ( DISTINCT CITY )
FROM CUSTOMERS;

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name
SELECT * FROM SUPPLIERS
WHERE length(SupplierName) > 20;

