CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE Messages (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT DEFAULT NULL REFERENCES User '(id)',
  room_id BIGINT DEFAULT NULL REFERENCES Room '(id)',
  time DATETIME DEFAULT NULL,
  text TEXT DEFAULT NULL
);

CREATE TABLE Users (
  id BIGINT DEFAULT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) DEFAULT NULL
);


CREATE TABLE Room (
  id BIGINT AUTO_INCREMENT,
  name VARCHAR(20) DEFAULT NULL,
  UNIQUE '(id)'
)




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/* Drop tables to reset
  DROP [TEMPORARY] TABLE [IF EXISTS] table_name [, table_name] ...
  [RESTRICT | CASCADE]*/


--   CREATE TABLE 'Messages' (
-- 'id' INTEGER DEFAULT NULL PRIMARY KEY AUTOINCREMENT,
-- 'user id' INTEGER DEFAULT NULL REFERENCES 'User' ('id'),
-- 'room id' INTEGER DEFAULT NULL REFERENCES 'Room' ('id'),
-- 'time' DATETIME DEFAULT NULL,
-- 'text' MEDIUMTEXT DEFAULT NULL
-- );

-- CREATE TABLE 'User' (
-- 'id' INTEGER DEFAULT NULL PRIMARY KEY AUTOINCREMENT,
-- 'name' VARCHAR(20) DEFAULT NULL
-- );

-- CREATE TABLE 'Room' (
-- 'id' INTEGER DEFAULT NULL AUTOINCREMENT,
-- 'name' VARCHAR(20) DEFAULT NULL,
-- UNIQUE (id)
-- );