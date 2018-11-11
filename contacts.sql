CREATE TABLE [dbo].[contacts]
(
	[preferredContact] NVARCHAR(100) NULL , 
    [preferredTitle] NCHAR(10) NOT NULL, 
    [firstName] NCHAR(10) NOT NULL, 
    [lastName] NCHAR(10) NOT NULL, 
    [email] NCHAR(10) NOT NULL, 
    [phone] NCHAR(10) NULL, 
    [message] NCHAR(10) NULL, 
    PRIMARY KEY ([email])
)
