-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blogmee
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blogmee
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blogmee` DEFAULT CHARACTER SET utf8 ;
USE `blogmee` ;

-- -----------------------------------------------------
-- Table `blogmee`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogmee`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `img` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `blogmee`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogmee`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(1000) NOT NULL,
  `img` VARCHAR(250) NOT NULL,
  `date` DATETIME NULL,
  `uid` INT NOT NULL,
  `cat` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `uid_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `uid`
    FOREIGN KEY (`uid`)
    REFERENCES `blogmee`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

USE `blogmee` ;

-- -----------------------------------------------------
-- Placeholder table for view `blogmee`.`view1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogmee`.`view1` (`id` INT);

-- -----------------------------------------------------
-- View `blogmee`.`view1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `blogmee`.`view1`;
USE `blogmee`;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
