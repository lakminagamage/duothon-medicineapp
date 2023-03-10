-- MySQL Script generated by MySQL Workbench
-- Fri Feb 24 11:53:46 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tck_medmate
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tck_medmate
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tck_medmate` DEFAULT CHARACTER SET utf8 ;
USE `tck_medmate` ;

-- -----------------------------------------------------
-- Table `tck_medmate`.`owner`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`owner` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`owner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `nic` VARCHAR(12) NOT NULL,
  `telephone` VARCHAR(25) NULL,
  `pharmacistID` VARCHAR(30) NOT NULL,
  `isapproved` TINYINT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `tck_medmate`.`locations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`locations` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`locations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `district` VARCHAR(50) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `tck_medmate`.`pharmacy`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`pharmacy` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`pharmacy` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `addressNo` VARCHAR(45) NULL,
  `addressStreet` VARCHAR(100) NULL,
  `location` INT NULL,
  `postalCode` INT NULL,
  `telephoneNo` VARCHAR(25) NULL,
  `ownerID` INT NULL,
  `brNo` VARCHAR(30) NULL,
  `discount` INT NULL,
  `isapproved` TINYINT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `pharmacy_owner_foreign_idx` (`ownerID` ASC) VISIBLE,
  INDEX `pahrmacy_district_foreign_idx` (`location` ASC) VISIBLE,
  CONSTRAINT `pharmacy_owner_foreign`
    FOREIGN KEY (`ownerID`)
    REFERENCES `tck_medmate`.`owner` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `pahrmacy_district_foreign`
    FOREIGN KEY (`location`)
    REFERENCES `tck_medmate`.`locations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `tck_medmate`.`med_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`med_category` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`med_category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`));


-- -----------------------------------------------------
-- Table `tck_medmate`.`medicine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`medicine` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`medicine` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL,
  `medical_name` VARCHAR(100) NULL,
  `brand` VARCHAR(50) NULL,
  `size` VARCHAR(20) NULL,
  `catID` INT NULL,
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `medicine_category_foreign_idx` (`catID` ASC) VISIBLE,
  CONSTRAINT `medicine_category_foreign`
    FOREIGN KEY (`catID`)
    REFERENCES `tck_medmate`.`med_category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `tck_medmate`.`availability`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`availability` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`availability` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `medID` INT NULL,
  `pharmacyID` INT NULL,
  `price` DOUBLE NULL,
  `stock` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `ava_medicine_foreign_idx` (`medID` ASC) VISIBLE,
  INDEX `ava_pharmacy_foriegn_idx` (`pharmacyID` ASC) VISIBLE,
  CONSTRAINT `ava_medicine_foreign`
    FOREIGN KEY (`medID`)
    REFERENCES `tck_medmate`.`medicine` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ava_pharmacy_foriegn`
    FOREIGN KEY (`pharmacyID`)
    REFERENCES `tck_medmate`.`pharmacy` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `tck_medmate`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tck_medmate`.`users` ;

CREATE TABLE IF NOT EXISTS `tck_medmate`.`users` (
  `create_time` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` TIMESTAMP NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `uid` INT NULL,
  `usertype` TINYINT NULL,
  PRIMARY KEY (`id`),
  INDEX `users_owner_foreign_idx` (`uid` ASC) VISIBLE,
  CONSTRAINT `users_owner_foreign`
    FOREIGN KEY (`uid`)
    REFERENCES `tck_medmate`.`owner` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
