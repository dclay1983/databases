set foreign_key_checks=0;
CREATE DATABASE IF NOT EXISTS chat;

USE chat;

/* Create other tables and define schemas for them here! */


CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,

  PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS rooms (
  id INT AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,

  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS messages (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  room_id INT NOT NULL,
  time DATETIME NOT NULL,
  text TEXT NOT NULL,

  PRIMARY KEY(id),
  INDEX (user_id),
  INDEX (room_id),

  FOREIGN KEY (user_id)
    REFERENCES users(id),

  FOREIGN KEY (room_id)
    REFERENCES rooms(id)
);



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