-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2022 at 09:53 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lam`
--

-- --------------------------------------------------------

--
-- Table structure for table `zolts`
--

CREATE TABLE `zolts` (
  `id` int(10) UNSIGNED NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `lastTime` text NOT NULL,
  `totalKm` int(11) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `type` int(2) NOT NULL,
  `place` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `zolts`
--

INSERT INTO `zolts` (`id`, `status`, `lastTime`, `totalKm`, `name`, `type`, `place`) VALUES
(33, '0', '20/6/2022', 0, 'MgS6Siq2', 1, 'Gamykla'),
(34, '0', '20/6/2022', 0, '63PqOrnB', 1, 'Gamykla'),
(35, '0', '20/6/2022', 23, 'YpC1Idou', 1, 'Gamykla'),
(36, '0', '20/6/2022', 1, 'zMfIE0UM', 1, 'Gamykla'),
(45, '0', '20/6/2022', 0, 'KN5viCw0', 1, 'Gamykla'),
(46, '0', '20/6/2022', 0, '1Jyt1s25', 1, 'Gamykla'),
(47, '0', '20/6/2022', 0, 'JkyAlNWl', 1, 'Gamykla'),
(62, '0', '20/6/2022', 0, 'nALTLX0R', 1, 'Gamykla');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `zolts`
--
ALTER TABLE `zolts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `zolts`
--
ALTER TABLE `zolts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
