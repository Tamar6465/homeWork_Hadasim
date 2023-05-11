-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `Id` varchar(255) NOT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `Adress` varchar(255) DEFAULT NULL,
  `BirthDay` datetime DEFAULT NULL,
  `Phone` varchar(255) DEFAULT NULL,
  `MobilePhone` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES ('040000044','tr','er','ghf','2012-03-20 03:00:00','0586549795','0586549795','http://localhost:3604/11.jpg'),('213456987','tr','er','ghf','2003-08-20 04:00:00','0586549795','05856325252','http://localhost:3604/11.jpg'),('213895774','f','t','sasas','2012-04-20 03:00:00','058654654','0525858544','http://localhost:3604/22.jpg'),('654987321','mor','lev','gia telaviv israel','2005-06-20 21:00:00','02586354','0528854747','http://localhost:3604/11.jpg'),('987654321','tom','res','hazait jerusalem isreal','2012-04-20 05:00:00','0586549795','05856325252','http://localhost:3604/11.jpg');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sickemployee`
--

DROP TABLE IF EXISTS `sickemployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sickemployee` (
  `Id` mediumint NOT NULL AUTO_INCREMENT,
  `EmployeeId` varchar(255) DEFAULT NULL,
  `PositiveResultDate` datetime DEFAULT NULL,
  `RecoveryDate` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `EmployeeId` (`EmployeeId`),
  CONSTRAINT `sickemployee_ibfk_1` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sickemployee`
--

LOCK TABLES `sickemployee` WRITE;
/*!40000 ALTER TABLE `sickemployee` DISABLE KEYS */;
INSERT INTO `sickemployee` VALUES (1,'987654321','2001-03-20 05:00:00','2005-03-20 05:00:00');
/*!40000 ALTER TABLE `sickemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaccineemployee`
--

DROP TABLE IF EXISTS `vaccineemployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaccineemployee` (
  `Id` mediumint NOT NULL AUTO_INCREMENT,
  `EmployeeId` varchar(255) DEFAULT NULL,
  `VaccinationDate` datetime DEFAULT NULL,
  `Manufacturer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `EmployeeId` (`EmployeeId`),
  CONSTRAINT `vaccineemployee_ibfk_1` FOREIGN KEY (`EmployeeId`) REFERENCES `employee` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaccineemployee`
--

LOCK TABLES `vaccineemployee` WRITE;
/*!40000 ALTER TABLE `vaccineemployee` DISABLE KEYS */;
INSERT INTO `vaccineemployee` VALUES (1,'987654321','2005-03-20 05:00:00','phizer'),(2,'987654321','2008-03-20 05:00:00','moderna');
/*!40000 ALTER TABLE `vaccineemployee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-11 19:40:31
