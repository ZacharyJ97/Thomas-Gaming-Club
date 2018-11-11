CREATE USER officer WITH PASSWORD = 'ps4Pro1894!';
ALTER ROLE db_datareader ADD MEMBER officer;
ALTER ROLE db_datawriter ADD MEMBER officer;