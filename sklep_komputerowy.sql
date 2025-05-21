-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 21 Maj 2025, 10:43
-- Wersja serwera: 10.4.24-MariaDB
-- Wersja PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `sklep_komputerowy`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `address` text NOT NULL,
  `products` text NOT NULL,
  `email` text NOT NULL,
  `telephone` text NOT NULL,
  `price` float NOT NULL,
  `deliveryType` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `orders`
--

INSERT INTO `orders` (`id`, `address`, `products`, `email`, `telephone`, `price`, `deliveryType`) VALUES
(4, 'Łączna łupinki', '[{\"id\":7,\"quantity\":4},{\"id\":6,\"quantity\":3},{\"id\":4,\"quantity\":3}]', '', '', 0, ''),
(5, 'Łączna łupinki', '[{\"id\":7,\"quantity\":7}]', '', '', 0, ''),
(6, 'Łączna łupinki', '[{\"id\":7,\"quantity\":7}]', '', '', 0, ''),
(7, 'Łączna łupinki', '[{\"id\":7,\"quantity\":7}]', '', '', 0, ''),
(9, '231 321  231', '[{\"id\":9,\"quantity\":3}]', '321', '', 0, ''),
(10, '231 321  231', '[{\"id\":9,\"quantity\":3}]', '321', '', 0, ''),
(11, '231 321  231', '[{\"id\":9,\"quantity\":3}]', '321', '', 0, ''),
(12, '321 321  321', '[{\"id\":4,\"quantity\":3}]', '23', '3223', 726.99, 'Kurier InPost');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `properties` text CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `price`, `properties`) VALUES
(3, 'szop23', 'https://i.imgur.com/hbyXKxI.png', 'szybki', 11, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Gaming\" }]'),
(4, 'eewaeaw', 'https://tems.pl/favicon.ico', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(6, '23', '23', 'description', 23, '[{\"text\":\"Przeznaczenie\",\"value\":\"32\"}]'),
(8, '32', '23', 'description', 0, '[{\"text\":\"321\",\"value\":\"123\"}]'),
(9, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(11, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(12, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(13, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(15, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(16, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(17, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(18, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(19, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(20, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(21, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(22, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(23, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(24, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(25, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(26, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(27, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(28, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(29, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(30, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(31, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(32, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(33, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(34, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(35, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(36, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(37, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(38, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(39, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(40, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(41, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(42, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(43, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(44, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(45, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(46, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(47, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(48, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(49, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(50, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(51, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(52, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(53, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(54, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(55, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(56, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(57, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(58, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(59, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(60, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(61, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(62, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(63, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(64, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(65, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(66, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(67, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(68, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(69, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(70, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(71, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(72, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(73, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(74, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(75, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(76, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(77, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(78, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(79, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(80, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(81, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(82, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(83, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(84, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(85, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]'),
(86, 'szop', 'https://cdn.x-kom.pl/i/setup/images/prod/big/product-medium,,2023/2/pr_2023_2_24_10_37_13_94_02.jpg', 'szybki', 240, '[{ \"text\": \"Przeznaczenie\", \"value\": \"Granie\" }]');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
