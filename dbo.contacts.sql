CREATE TABLE [dbo].[contacts] (
    [preferredContact] NVARCHAR (100) NULL,
    [preferredTitle]   NVARCHAR(100)     NOT NULL,
    [firstName]        NVARCHAR(100)     NOT NULL,
    [lastName]         NVARCHAR(100)     NOT NULL,
    [email]            NVARCHAR(100)     NOT NULL,
    [phone]            NVARCHAR(100)     NULL,
    [message]          NTEXT     NULL,
    PRIMARY KEY CLUSTERED ([email] ASC)
);

