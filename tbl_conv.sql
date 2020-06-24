-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2020 at 04:53 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `conv`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_conv`
--

CREATE TABLE `tbl_conv` (
  `id` int(11) NOT NULL,
  `name` mediumtext NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` bigint(10) DEFAULT NULL,
  `Websitetype` mediumtext NOT NULL,
  `WebpageRequired` int(5) NOT NULL,
  `Contentwriting` mediumtext NOT NULL,
  `WebsiteRequiredin` varchar(50) NOT NULL,
  `HostingServices` mediumtext NOT NULL,
  `LogoDesign` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_conv`
--

INSERT INTO `tbl_conv` (`id`, `name`, `email`, `phone`, `Websitetype`, `WebpageRequired`, `Contentwriting`, `WebsiteRequiredin`, `HostingServices`, `LogoDesign`) VALUES
(1, ' riz', 'riz@gmail.com', 1234567890, 'Basic', 1, 'required', '10-15days', 'required', 'required'),
(2, ' riz', 'riz@gmail.com', 9876543210, 'Basic', 1, 'required', '10-15days', 'required', 'required');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_conv`
--
ALTER TABLE `tbl_conv`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_conv`
--
ALTER TABLE `tbl_conv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
