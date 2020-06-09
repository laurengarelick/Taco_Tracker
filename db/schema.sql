CREATE DATABASE taco_db;
USE taco_db;

CREATE TABLE `tacos` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `taco_type` VARCHAR( 255) NOT NULL,
  `devoured` BOOLEAN NOT NULL,
  `guac` BOOLEAN NOT NULL,

  PRIMARY KEY ( `id` ) 
);