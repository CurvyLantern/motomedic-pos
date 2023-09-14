-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2023 at 12:16 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `motomedic-posdb-v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `adminName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verification_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userDetailsId` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `adminName`, `email`, `email_verified_at`, `phone`, `verification_code`, `phone_verified_at`, `password`, `userDetailsId`, `status`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Claude Dickens', 'wiegand.kasandra@example.net', '2023-09-02 22:19:17', '+1-559-893-5041', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(2, 'Alycia Kuhic', 'bradtke.vinnie@example.net', '2023-09-02 22:19:17', '310-426-8455', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(3, 'Ludwig Grant', 'johnson.selmer@example.net', '2023-09-02 22:19:27', '+18322935365', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(4, 'Mr. Trevion Conroy', 'susana.lowe@example.org', '2023-09-02 22:19:27', '+1.364.969.5797', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(5, 'Tabitha Strosin', 'trace.johnston@example.net', '2023-09-02 22:21:55', '312.213.7125', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(6, 'Mateo Moore', 'yluettgen@example.net', '2023-09-02 22:21:55', '(279) 318-7641', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(7, 'modmin', 'modh1u@amar.com', NULL, '01655566688', NULL, NULL, '$2y$10$WL2FYZEsgsBAZGSiq6Isau6bjlosBcwl594ArnZS4zGk80/HmUJwq', NULL, 0, NULL, '2023-09-04 02:54:53', '2023-09-04 02:54:53'),
(10, 'modmin1', 'modh11u@amar.com', NULL, '0165556668', NULL, NULL, '$2y$10$59RCKZFW3ixdspuJ1Sgv5OyszrnCtEAQJfrDjJkzYonafoobxrcy.', NULL, 0, NULL, '2023-09-04 02:55:33', '2023-09-04 02:55:33'),
(11, 'modmin1', 'modh121u@amar.com', NULL, '016555666812', NULL, NULL, '$2y$10$qPRkvFzIMqXs6uPc6O5Oe.87Jkn5blS34DLnt1qE7kyOURFiHQ4iC', NULL, 0, NULL, '2023-09-04 02:57:53', '2023-09-04 02:57:53');

-- --------------------------------------------------------

--
-- Table structure for table `attribiutes`
--

CREATE TABLE `attribiutes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attribiuteImgId` bigint(20) UNSIGNED NOT NULL,
  `discount` double(8,2) DEFAULT NULL,
  `discountType` enum('fixed','percentage') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weight` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `brandName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brandName`, `slug`, `img`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Kirlin PLC', 'pacocha-group', 'https://via.placeholder.com/200x200.png/006655?text=nesciunt', 'Asperiores molestias aut voluptates nulla deleniti ut. Ea sapiente accusantium molestiae ea numquam. Dignissimos adipisci occaecati porro quos.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(2, 'Konopelski, Kautzer and Berge', 'marvin-stokes', 'https://via.placeholder.com/200x200.png/00ccee?text=magni', 'Voluptatem nostrum et aspernatur eos neque veniam. Dolores id explicabo et facilis. Labore sunt repellendus fuga rerum fugiat recusandae est. Tenetur ducimus assumenda qui incidunt veniam.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(3, 'Metz-Considine', 'schmeler-and-sons', 'https://via.placeholder.com/200x200.png/00cc22?text=ipsum', 'Et voluptatem ut quod recusandae. Nostrum ex voluptatem perferendis inventore aut consequatur a. Laborum dolorum aut non sunt et. Est commodi dolor harum alias ut harum ut. Esse ipsam tenetur non deleniti.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(4, 'Berge-Halvorson', 'schmidt-llc', 'https://via.placeholder.com/200x200.png/00ee66?text=dicta', 'Adipisci labore assumenda est ducimus culpa nesciunt. Sapiente sunt asperiores nihil ratione. Sed repellendus et voluptates deserunt.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(5, 'Fritsch Group', 'muller-llc', 'https://via.placeholder.com/200x200.png/0000ff?text=nulla', 'Molestiae sequi quia minus sunt tempore rerum dolorem. Aspernatur nulla tempore molestias adipisci rerum. Veniam omnis voluptates omnis in voluptate. Sed et assumenda cum similique molestiae totam iste. Asperiores porro temporibus et animi quos.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(6, 'Streich-Williamson', 'daugherty-lynch', 'https://via.placeholder.com/200x200.png/00bbcc?text=et', 'Reprehenderit soluta nostrum sed iure soluta. Sed id vero autem vitae doloribus qui. Nesciunt eos iure et. Dolorem praesentium id accusamus impedit molestiae cumque et expedita.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(7, 'Rau Inc', 'gibson-group', 'https://via.placeholder.com/200x200.png/00ee66?text=veritatis', 'Aut et repellendus porro quidem voluptate expedita sequi. Mollitia repudiandae totam commodi delectus necessitatibus omnis ea.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(8, 'Lakin and Sons', 'oreilly-runte-and-ward', 'https://via.placeholder.com/200x200.png/00aacc?text=laboriosam', 'Dignissimos quidem sit possimus aperiam deleniti. Magni molestiae odio et velit quos itaque. Ullam neque aperiam rerum at.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(9, 'Farrell, Volkman and Schiller', 'aufderhar-runolfsson-and-dubuque', 'https://via.placeholder.com/200x200.png/00ee66?text=eos', 'Et eum quo hic assumenda tempore ut. Est ut quod aut libero. Neque illum quidem facilis repellat.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(10, 'Balistreri Group', 'emard-inc', 'https://via.placeholder.com/200x200.png/00bb33?text=quam', 'Quibusdam ducimus unde voluptatum id nihil sit. Ullam ab voluptatibus voluptas sint. Mollitia voluptate culpa laudantium quod. Quia consequatur cupiditate molestiae enim perspiciatis.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(11, 'Wehner-Hamill', 'rau-ltd', 'https://via.placeholder.com/200x200.png/000033?text=quia', 'Aut repellendus eius et modi quibusdam officia soluta. Incidunt eos explicabo autem et eveniet. Tenetur vitae voluptatum culpa sit nobis.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(12, 'Klocko-Koepp', 'robel-plc', 'https://via.placeholder.com/200x200.png/0011aa?text=non', 'Similique officia ea molestias id tempora. Molestiae repellat et reiciendis non iure sed voluptates. Aperiam fugiat et id error numquam quidem. Possimus non et tempora id consequatur.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(13, 'Jacobson LLC', 'mayer-funk', 'https://via.placeholder.com/200x200.png/005599?text=ab', 'Voluptas eveniet aliquid repellat magnam et. Laboriosam nihil molestiae rerum cum fugit soluta tenetur. Possimus ea quae id error veritatis.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(14, 'Rutherford-Kulas', 'denesik-leffler-and-mccullough', 'https://via.placeholder.com/200x200.png/00aa11?text=impedit', 'Voluptas officiis qui impedit aut assumenda nobis. Sapiente recusandae dignissimos eos sunt pariatur maxime. Velit incidunt ad et ut. Autem porro rerum enim.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(15, 'Moen, Nolan and Huel', 'grant-ltd', 'https://via.placeholder.com/200x200.png/00bbcc?text=provident', 'Excepturi et placeat modi dolorum impedit placeat suscipit laborum. Modi at nihil aut sed alias. Aut aliquid mollitia non facilis qui voluptatem.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(16, 'Emard, Breitenberg and Donnelly', 'stamm-ltd', 'https://via.placeholder.com/200x200.png/001188?text=velit', 'Velit rem dolorum id molestiae. Cum voluptatibus quis ullam praesentium pariatur rem ut. Et illum repudiandae aut quia sed. Minus ut perspiciatis veritatis facilis.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(17, 'Halvorson, Streich and Bins', 'denesik-plc', 'https://via.placeholder.com/200x200.png/00bbcc?text=voluptas', 'Porro voluptas est quibusdam consectetur eveniet quia tempora. Quia quam ea rerum ut et qui. Quo ullam omnis consequatur aliquam placeat dolore hic. Voluptatem nam et numquam adipisci. Quos vel nihil quia deserunt earum optio suscipit.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(18, 'Jakubowski-Borer', 'roberts-group', 'https://via.placeholder.com/200x200.png/003399?text=dolorem', 'Aut consequuntur amet distinctio qui dignissimos quaerat qui. Atque sequi non sint facilis voluptatem quia non laboriosam.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(19, 'Berge and Sons', 'mitchell-and-sons', 'https://via.placeholder.com/200x200.png/0033bb?text=eius', 'Quod tenetur sequi debitis. Molestias excepturi necessitatibus ut et dolore. Accusamus sed sunt optio repellendus a iusto.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(20, 'Kohler Group', 'hamill-adams-and-parisian', 'https://via.placeholder.com/200x200.png/0033aa?text=enim', 'Error laborum recusandae perspiciatis harum aliquid repellat velit. Est repudiandae quo et omnis excepturi autem. Nisi cupiditate aspernatur fugiat vero deserunt reiciendis. Dolorum sequi odio molestiae at voluptas repudiandae ut.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(21, 'APi test Brand', 'api-test-brand', 'brand/2WicYchs9zIdpUkR5KnoFLYUS9kdqCksx4vl4hTf.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '2023-09-03 22:37:35', '2023-09-03 22:37:35');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `parentCategoryId` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `slug`, `description`, `img`, `parentCategoryId`, `created_at`, `updated_at`) VALUES
(1, 'aut', 'aut', 'Aperiam nobis ea odio beatae repudiandae id nobis nemo.', 'https://via.placeholder.com/200x200.png/00bbdd?text=accusantium', 4, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(2, 'omnis', 'omnis', 'Nesciunt eum molestiae ut in dolore.', 'https://via.placeholder.com/200x200.png/002211?text=libero', 1, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(3, 'dolor', 'dolor', 'Tenetur quis non voluptatem quo vitae.', 'https://via.placeholder.com/200x200.png/0044aa?text=perspiciatis', 3, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(4, 'qui', 'qui', 'Laboriosam molestias quisquam quibusdam distinctio.', 'https://via.placeholder.com/200x200.png/0066cc?text=cum', 5, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(5, 'quo', 'quo', 'Aut est laboriosam et consequatur.', 'https://via.placeholder.com/200x200.png/00ff22?text=nostrum', 4, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(6, 'repellendus', 'repellendus', 'Distinctio vitae qui sit nesciunt incidunt quos.', 'https://via.placeholder.com/200x200.png/00bbbb?text=quos', 2, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(7, 'aut', 'aut', 'Architecto voluptate rerum natus ut in minus sint.', 'https://via.placeholder.com/200x200.png/003388?text=natus', 1, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(8, 'ducimus', 'ducimus', 'Voluptas autem sit amet delectus odit omnis illo ratione.', 'https://via.placeholder.com/200x200.png/00ee77?text=fugit', 4, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(9, 'ad', 'ad', 'Natus dolor ipsam eos tempore esse in voluptatem.', 'https://via.placeholder.com/200x200.png/002233?text=quisquam', 1, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(10, 'reiciendis', 'reiciendis', 'Fugiat est molestiae possimus neque et accusantium earum.', 'https://via.placeholder.com/200x200.png/00ffcc?text=architecto', 3, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(11, 'dolorum', 'dolorum', 'Facere eum non veritatis quam et.', 'https://via.placeholder.com/200x200.png/0000bb?text=iste', 5, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(12, 'odit', 'odit', 'Consequatur perferendis ipsa a illo consequatur animi.', 'https://via.placeholder.com/200x200.png/00eecc?text=tenetur', 5, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(13, 'qui', 'qui', 'Rerum dolorem sit fugiat similique modi maxime.', 'https://via.placeholder.com/200x200.png/0022dd?text=qui', 2, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(14, 'molestiae', 'molestiae', 'Consectetur reiciendis architecto ipsa qui.', 'https://via.placeholder.com/200x200.png/009977?text=fugiat', 5, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(15, 'culpa', 'culpa', 'Tempora qui id aut sit consectetur odit et ut.', 'https://via.placeholder.com/200x200.png/002277?text=qui', 1, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(16, 'et', 'et', 'Eos autem sed hic pariatur beatae fugiat sed.', 'https://via.placeholder.com/200x200.png/00ff99?text=est', 4, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(17, 'aut', 'aut', 'Ipsum beatae aut voluptates est amet officia.', 'https://via.placeholder.com/200x200.png/0099dd?text=possimus', 5, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(18, 'voluptatem', 'voluptatem', 'Qui ad libero unde quas eveniet nemo.', 'https://via.placeholder.com/200x200.png/00aa77?text=aperiam', 2, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(19, 'odit', 'odit', 'Totam sit aut ea voluptate ut.', 'https://via.placeholder.com/200x200.png/005566?text=ut', 4, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(20, 'voluptatem', 'voluptatem', 'Fugit dolor rerum ab fugit.', 'https://via.placeholder.com/200x200.png/005522?text=voluptas', 2, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(21, 'Api test category', 'api-test-category', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'category/mVom4ho2WFDSGGpPN9U2dcO3GJpfe5etZHmga0u5.jpg', 2, '2023-09-03 22:34:10', '2023-09-03 22:34:10'),
(22, 'Api test category', 'api-test-category', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'category/1QnHCchpuJiRbkDViCBYEr1YJwSypBeVypRFVsli.jpg', NULL, '2023-09-03 22:34:54', '2023-09-03 22:34:54');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verification_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userDetailsId` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `bikeInfo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `customerName`, `email`, `email_verified_at`, `phone`, `verification_code`, `phone_verified_at`, `password`, `userDetailsId`, `status`, `bikeInfo`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Prof. Marina Legros PhD', 'gzieme@example.org', '2023-09-02 22:19:17', '(812) 997-3309', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(2, 'Chester Hegmann DDS', 'christy39@example.org', '2023-09-02 22:19:17', '1-317-459-1259', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(3, 'Hettie Schaden IV', 'wilfred.bechtelar@example.com', '2023-09-02 22:19:17', '830.688.7815', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(4, 'Jasmin Shanahan', 'mcclure.estevan@example.org', '2023-09-02 22:19:17', '630.729.6075', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(5, 'Reyna Kuhn', 'qdubuque@example.org', '2023-09-02 22:19:17', '+1.865.562.5086', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(6, 'Madisyn McDermott', 'trantow.lavon@example.net', '2023-09-02 22:19:17', '+1.971.528.9656', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(7, 'Sheila Dare', 'porter.kris@example.net', '2023-09-02 22:19:17', '901-791-4542', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(8, 'Miss Carmen Kiehn Jr.', 'craig.gutkowski@example.org', '2023-09-02 22:19:17', '1-415-270-7820', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(9, 'Oleta McKenzie', 'ruthie.schumm@example.com', '2023-09-02 22:19:17', '(409) 939-6796', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(10, 'Juston Ziemann', 'royce.bins@example.org', '2023-09-02 22:19:17', '+1-719-832-8405', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(11, 'Ms. Kathleen Wehner Sr.', 'jackeline30@example.com', '2023-09-02 22:19:27', '+1-458-508-8868', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(12, 'Dr. John Stokes I', 'janiya.kassulke@example.net', '2023-09-02 22:19:27', '1-817-519-9540', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(13, 'Cali D\'Amore', 'fanderson@example.net', '2023-09-02 22:19:27', '865-406-6511', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(14, 'Scotty Senger II', 'towne.tobin@example.org', '2023-09-02 22:19:27', '+13255711564', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(15, 'Isabella Morar', 'jovani82@example.com', '2023-09-02 22:19:27', '(567) 840-6051', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(16, 'Helmer O\'Conner', 'block.mikayla@example.org', '2023-09-02 22:19:27', '1-224-857-8583', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(17, 'Laurianne Murazik', 'axel.monahan@example.org', '2023-09-02 22:19:27', '480.734.4094', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(18, 'Dr. Shaylee Wyman', 'mmayert@example.org', '2023-09-02 22:19:27', '1-269-927-1271', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(19, 'Pattie D\'Amore', 'pbode@example.net', '2023-09-02 22:19:27', '(812) 918-5838', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(20, 'Josiah Willms', 'joana.raynor@example.com', '2023-09-02 22:19:27', '+17852520953', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:19:27', '2023-09-02 22:19:27'),
(21, 'Prof. Lonnie D\'Amore', 'jamir15@example.org', '2023-09-02 22:21:55', '(631) 613-4950', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(22, 'Rubie Renner', 'ivory29@example.com', '2023-09-02 22:21:55', '1-857-350-6328', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(23, 'Dr. Jordy Corkery', 'qgibson@example.com', '2023-09-02 22:21:55', '520.676.7318', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(24, 'Prof. Ryley Conroy II', 'cgerhold@example.org', '2023-09-02 22:21:55', '724.451.1986', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(25, 'Jacynthe King', 'gutmann.myrtis@example.com', '2023-09-02 22:21:55', '+1-831-583-5073', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(26, 'Keira Hansen', 'djacobs@example.com', '2023-09-02 22:21:55', '+1.310.913.6125', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(27, 'Mrs. Rebeka Kautzer DVM', 'bconroy@example.com', '2023-09-02 22:21:55', '+1 (870) 533-3267', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(28, 'Ulises Rodriguez III', 'gutmann.erwin@example.org', '2023-09-02 22:21:55', '580.902.5025', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(29, 'Marcella Mitchell II', 'karlee48@example.com', '2023-09-02 22:21:55', '(564) 632-9745', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 1, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55'),
(30, 'Floy Hegmann DVM', 'jacey.rath@example.org', '2023-09-02 22:21:55', '(332) 264-9179', NULL, NULL, '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', NULL, 0, NULL, NULL, '2023-09-02 22:21:55', '2023-09-02 22:21:55');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `media_images`
--

CREATE TABLE `media_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `imageName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagePath` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hostId` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `media_images`
--

INSERT INTO `media_images` (`id`, `imageName`, `imagePath`, `hostId`, `created_at`, `updated_at`) VALUES
(61, 'Screenshot (2).png', 'nasim/J1zWcJ1OjqmSHBb000D3WaPj5PjZ4lWOIfPaCqP0.png', 61, '2023-09-03 10:58:44', '2023-09-03 10:58:44'),
(62, 'Screenshot (2).png', 'nasim/8q97sMEsLW6Z6agBzDmkqZOcVRhLQOlzh4Tup7kT.png', 62, '2023-09-03 10:59:31', '2023-09-03 10:59:31'),
(69, 'cremeries-products-01.png', 'nasim/yjj2TCjJivrtzhAbnRDskY3fQmhBMORkhbbMieWb.png', 69, '2023-09-03 12:18:17', '2023-09-03 12:18:17'),
(70, 'bangachi-logo-01.jpg', 'products/prMNVuSALKYHCe9OCAcJ7DG3NRNxrOp72O34C7Xt.jpg', 70, '2023-09-03 12:22:40', '2023-09-03 12:22:40'),
(71, 'bangachi-logo-01.jpg', 'products/kT0vBxCWYsJ831tzfc5XkRGNISk4RkUhlwskQfb1.jpg', 71, '2023-09-03 12:24:04', '2023-09-03 12:24:04'),
(72, 'bangachi-logo-01.jpg', 'products/SvmS8fe94AiK0OCXx6OGLkz3YW3iKJuASxxuw7nv.jpg', 72, '2023-09-03 12:26:29', '2023-09-03 12:26:29'),
(73, 'bangachi-logo-01.jpg', 'products/LqW7TdW4s4z0UYXDum9xcKXmIfU6U3QO1I01wmBS.jpg', 73, '2023-09-03 12:31:35', '2023-09-03 12:31:35'),
(74, 'bangachi-logo-01.jpg', 'products/UVVdYsTdsiVoUPjwlQRENgePQEotVnPPvxE93KoZ.jpg', 74, '2023-09-03 12:32:19', '2023-09-03 12:32:19'),
(75, 'bangachi-logo-01.jpg', 'products/XtZfS2eMO4gwVZkaoeBTYmSdsx49hAqhWUcMuYJx.jpg', 76, '2023-09-03 12:34:00', '2023-09-03 12:34:00'),
(76, 'cremeries-products-01.png', 'products/yIndxAaFSVrYsmyFmynCUVf7Vkw1rLSsR0WMnQXJ.png', 76, '2023-09-03 12:34:00', '2023-09-03 12:34:00'),
(77, 'cremeries-products-02.png', 'products/FlY2c5tIQDLQbY7Dwf14SvopLRFBdsN58blKSxQx.png', 76, '2023-09-03 12:34:00', '2023-09-03 12:34:00'),
(78, 'bangachi-logo-01.jpg', 'products/hB59RX28fkg2xrfcTu5kyuIZj4EFlruf2YEN2RVf.jpg', 77, '2023-09-03 12:39:38', '2023-09-03 12:39:38'),
(79, 'bangachi-logo-01.jpg', 'products/TgptGc0FApAqk4IoAQTOFNqoPjbbHjXdQwu6OVQR.jpg', 78, '2023-09-03 12:39:57', '2023-09-03 12:39:57'),
(80, 'cremeries-products-01.png', 'products/7AcAN1FYFl6VvGeeQ57Ic03dMIt9hOqRb1MAUOhj.png', 78, '2023-09-03 12:39:57', '2023-09-03 12:39:57'),
(81, 'cremeries-products-02.png', 'products/jSgOWevvsjNcwU7hOH5USF3rae2w1brdPbCo1nmZ.png', 78, '2023-09-03 12:39:57', '2023-09-03 12:39:57'),
(82, 'bangachi-logo-01.jpg', 'products/lCyheMdWM7sKibWcT4XUjEoygPinSsY8VjmTMfLW.jpg', 79, '2023-09-03 12:41:01', '2023-09-03 12:41:01'),
(83, 'cremeries-products-01.png', 'products/imQSXrfmcFGExPtgR5WhpWTrC7HQmghJUWVnLgWf.png', 79, '2023-09-03 12:41:01', '2023-09-03 12:41:01'),
(84, 'cremeries-products-02.png', 'products/UXUjVBTuTjDppVMGTNpYJLGArFYLuKAer0N02Y0Z.png', 79, '2023-09-03 12:41:01', '2023-09-03 12:41:01'),
(85, 'bangachi-logo-01.jpg', 'products/7oNtBECMWtFCKewdZOlMED2hDrNeSvYypV1oB5u6.jpg', 80, '2023-09-03 12:41:11', '2023-09-03 12:41:11'),
(86, 'cremeries-products-01.png', 'products/9kFg4tCYlyIrggaxww51JFSHCfV9gDneDi63ppwU.png', 80, '2023-09-03 12:41:11', '2023-09-03 12:41:11'),
(87, 'cremeries-products-02.png', 'products/AM81NKyvGrcB4fOpoEnmaYuzIVYNe1bq491GECdE.png', 80, '2023-09-03 12:41:11', '2023-09-03 12:41:11'),
(88, 'bangachi-logo-01.jpg', 'products/lzZjrb8Lqpg8Otmg7um2lZGvKQB7nqp6NgInWl1e.jpg', 81, '2023-09-03 12:42:32', '2023-09-03 12:42:32'),
(89, 'cremeries-products-01.png', 'products/74CTDjtNcDgQRfES2N7mA4MMEdev1YdGsBBq2S6R.png', 81, '2023-09-03 12:42:32', '2023-09-03 12:42:32'),
(90, 'cremeries-products-02.png', 'products/gvSd5DQWNt0k3Md3X2DfC22h58RV4epDiloPbLhW.png', 81, '2023-09-03 12:42:32', '2023-09-03 12:42:32'),
(91, 'p3.jpg', 'products/j2oGVCHHLlHlBu6lLJmkuI7foGxwkJ8gTLL4gcLo.jpg', 82, '2023-09-04 03:50:21', '2023-09-04 03:50:21'),
(92, 'p4.png', 'products/STGDRX2HYbyORckJ8OKfgkecfmHVX5efA5L0GjQf.png', 82, '2023-09-04 03:50:21', '2023-09-04 03:50:21'),
(93, 'p5.png', 'products/9Hisi8kHH06Lq9N8ksh1HcCEHWF3LGF9euq8SdWc.png', 82, '2023-09-04 03:50:21', '2023-09-04 03:50:21'),
(94, 'p6.png', 'products/jvqjLyRy1K3Y4vi57R8r8otUY8DlGQZuuYcsUuk7.png', 82, '2023-09-04 03:50:21', '2023-09-04 03:50:21');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(212, '2023_09_02_163706_create_stuffs_table', 1),
(215, '2014_10_12_000000_create_users_table', 2),
(216, '2014_10_12_100000_create_password_reset_tokens_table', 2),
(217, '2019_08_19_000000_create_failed_jobs_table', 2),
(218, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(219, '2023_08_19_190910_create_service_categories_table', 2),
(220, '2023_08_19_205754_create_services_table', 2),
(221, '2023_08_20_080133_create_categories_table', 2),
(222, '2023_08_21_145627_create_brands_table', 2),
(223, '2023_08_21_161635_create_product_models_table', 2),
(224, '2023_08_25_172706_create_products_table', 2),
(225, '2023_08_26_143812_create_admins_table', 2),
(226, '2023_08_28_182300_create_orders_table', 2),
(227, '2023_08_28_183535_create_customers_table', 2),
(228, '2023_09_01_161924_create_user_details_table', 2),
(229, '2023_09_01_162431_create_queues_table', 2),
(230, '2023_09_03_032444_create_media_images_table', 2),
(231, '2023_09_03_032605_create_attribiutes_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customerId` bigint(20) UNSIGNED NOT NULL,
  `serviceId` bigint(20) UNSIGNED NOT NULL,
  `productId` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `subtotal` double(8,2) NOT NULL,
  `total` double(8,2) NOT NULL,
  `tax` double(8,2) DEFAULT NULL,
  `discount` double(8,2) DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extra` int(11) DEFAULT NULL,
  `serviceStatus` enum('Onhold','Processing','Completed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Onhold',
  `queue` int(11) NOT NULL,
  `orderCreator` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `productName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoryId` bigint(20) UNSIGNED DEFAULT NULL,
  `brandId` bigint(20) UNSIGNED DEFAULT NULL,
  `sku` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tags` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `material` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `compitibility` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `condition` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `weight` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` double(8,2) NOT NULL,
  `discount` double(8,2) DEFAULT NULL,
  `discountType` enum('fixed','percentage') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primaryImg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbImgId` bigint(20) UNSIGNED DEFAULT NULL,
  `shortDescriptions` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `availability` tinyint(1) NOT NULL DEFAULT 1,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longDescriptions` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `installationMethod` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `warranty` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manufacturerPartNumber` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` double(8,2) DEFAULT NULL,
  `reviewsId` bigint(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL,
  `productType` enum('simpleProduct','variationProduct') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'simpleProduct',
  `attributesData` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `attribiuteId` bigint(20) UNSIGNED DEFAULT NULL,
  `manufacturer` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `productCreator` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `productName`, `slug`, `categoryId`, `brandId`, `sku`, `model`, `color`, `tags`, `material`, `size`, `year`, `compitibility`, `condition`, `weight`, `quantity`, `price`, `discount`, `discountType`, `primaryImg`, `thumbImgId`, `shortDescriptions`, `availability`, `note`, `longDescriptions`, `installationMethod`, `warranty`, `manufacturerPartNumber`, `rating`, `reviewsId`, `status`, `productType`, `attributesData`, `attribiuteId`, `manufacturer`, `productCreator`, `created_at`, `updated_at`) VALUES
(2, 'necessitatibus recusandae sint', 'necessitatibus-recusandae-sint', 4, 3, NULL, 'et', 'FireBrick', 'id dolore neque', 'necessitatibus', 'inventore', 19800729, 'ad', 'repudiandae', '87.85', 4, 71.28, 43.00, 'fixed', 'https://via.placeholder.com/640x480.png/006633?text=est', NULL, 'Ducimus quibusdam recusandae sed quod eum.', 1, 'Illum eius veniam accusantium eveniet.', 'Qui ex minus accusamus incidunt autem quisquam ab. Animi corrupti architecto alias aut ea. Ut accusantium dolor deleniti consequatur eius voluptatem sit.', 'Ex veritatis similique recusandae quam minus.', 'Consequatur et aspernatur et reprehenderit ut sed.', NULL, 4.10, NULL, 0, 'variationProduct', NULL, NULL, 'Barrows-Goldner', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(3, 'itaque nesciunt dolor', 'itaque-nesciunt-dolor', 3, 3, NULL, 'et', 'Coral', 'quisquam quis ea', 'esse', 'dolorem', 19800513, 'ea', 'deserunt', '46.29', 40, 225.23, 23.00, 'percentage', 'https://via.placeholder.com/640x480.png/00bbff?text=minima', NULL, 'Tempora iusto et sint sint vel.', 0, 'Omnis quia et placeat et inventore veritatis est qui.', 'Dolore culpa qui debitis voluptate consequatur sint. Voluptatibus exercitationem ratione ipsum delectus.', 'Eos alias fuga commodi natus tempore quia.', 'Corporis expedita ut debitis possimus explicabo esse et.', NULL, 3.40, NULL, 0, 'variationProduct', NULL, NULL, 'Boyer and Sons', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(4, 'commodi voluptas rerum', 'commodi-voluptas-rerum', 2, 2, NULL, 'odit', 'LightGray', 'temporibus facere et', 'consequatur', 'non', 19780118, 'consectetur', 'dolorem', '41.13', 50, 86.05, 42.00, 'fixed', 'https://via.placeholder.com/640x480.png/0066bb?text=enim', NULL, 'Non soluta inventore ut consectetur ex aliquam quia.', 1, 'Numquam et non dolorem quidem.', 'Minus qui rerum rerum esse molestias non. Esse veniam dolorem aperiam cum ut iste qui adipisci. Quia cum nobis et impedit similique ipsum. Ut maiores adipisci omnis dolorum amet nemo.', 'Sint quam perferendis a quos optio.', 'Tenetur ut consequatur explicabo eaque tempora.', NULL, 5.00, NULL, 0, 'simpleProduct', NULL, NULL, 'Heathcote, Lehner and Heaney', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(5, 'nihil quo voluptatem', 'nihil-quo-voluptatem', 4, 3, NULL, 'velit', 'Sienna', 'sint aliquid est', 'recusandae', 'corrupti', 19740902, 'aspernatur', 'aperiam', '60.02', 85, 403.38, 36.00, 'fixed', 'https://via.placeholder.com/640x480.png/006611?text=magni', NULL, 'Pariatur blanditiis nam nostrum est et dolorum repudiandae et.', 1, 'Omnis eos autem minima.', 'Dolores soluta unde eum ut adipisci nam. Non nisi commodi laboriosam sapiente voluptatem velit. Minima adipisci rerum delectus enim autem iure. Omnis ut tempora est et est repudiandae.', 'Rerum voluptatem quis et voluptatem et eum ex.', 'Pariatur eos ea debitis voluptatem sunt voluptas quasi.', NULL, 4.20, NULL, 1, 'variationProduct', NULL, NULL, 'Gulgowski-Aufderhar', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(6, 'perspiciatis animi dolorum', 'perspiciatis-animi-dolorum', 8, 3, NULL, 'quas', 'Maroon', 'accusantium nam ab', 'cum', 'placeat', 19780120, 'sint', 'itaque', '14.3', 26, 465.86, 44.00, 'percentage', 'https://via.placeholder.com/640x480.png/001166?text=voluptatem', NULL, 'Autem est similique non similique eveniet molestias nemo.', 1, 'Esse esse nemo aliquam illum exercitationem.', 'Veritatis facilis nihil aliquid aut in architecto. Reiciendis dolorum et dolore velit aut blanditiis unde. Vel sed blanditiis sit optio porro unde sunt. Perspiciatis at sed voluptatum quaerat impedit atque.', 'A quo vel et tenetur placeat saepe placeat.', 'Eius doloribus delectus ex quod sunt unde.', NULL, 2.80, NULL, 0, 'variationProduct', NULL, NULL, 'Sanford PLC', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(7, 'soluta suscipit hic', 'soluta-suscipit-hic', 5, 4, NULL, 'recusandae', 'LightGray', 'et suscipit repellendus', 'est', 'minima', 19730914, 'est', 'optio', '85.61', 52, 234.53, 12.00, 'percentage', 'https://via.placeholder.com/640x480.png/00cccc?text=ipsum', NULL, 'Velit voluptatem rerum quis fugiat qui voluptates nobis.', 0, 'Distinctio molestias quis magni ducimus maxime non.', 'Expedita dolores voluptatem asperiores ut sint. Cum consectetur atque ut id occaecati. Et est voluptas dolores quo nobis aperiam.', 'Et debitis ex et eaque.', 'Aut sint et officia natus perferendis numquam a.', NULL, 3.10, NULL, 0, 'simpleProduct', NULL, NULL, 'Kuphal-Osinski', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(8, 'id aspernatur reprehenderit', 'id-aspernatur-reprehenderit', 5, 4, NULL, 'beatae', 'Green', 'tempore quasi minima', 'consectetur', 'necessitatibus', 20130130, 'quia', 'ea', '18.65', 55, 299.54, 5.00, 'fixed', 'https://via.placeholder.com/640x480.png/000033?text=iusto', NULL, 'Distinctio et animi vel consectetur et facere.', 1, 'Dolores dolores qui commodi et.', 'Sequi minima repellendus sunt quis necessitatibus nihil qui excepturi. Hic minima veritatis voluptatibus quia. Voluptates reprehenderit unde dolorem aut qui ex fugiat. Sed et sed et omnis tempora error.', 'Provident id consequatur aut id libero.', 'Sit laborum laudantium alias corrupti.', NULL, 0.20, NULL, 1, 'variationProduct', NULL, NULL, 'Watsica, Wunsch and Kunze', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(9, 'consequuntur est nisi', 'consequuntur-est-nisi', 9, 1, NULL, 'omnis', 'Darkorange', 'eum quis molestiae', 'soluta', 'eius', 20201223, 'alias', 'rerum', '59.89', 48, 153.44, 21.00, 'percentage', 'https://via.placeholder.com/640x480.png/005588?text=ducimus', NULL, 'Perferendis veritatis nisi nulla dolor earum repudiandae consequatur.', 1, 'Laboriosam nihil illo sit consequatur voluptatem commodi.', 'A tempora ad fuga doloremque velit dolorem illum. Non ullam excepturi molestias tempore voluptatem accusamus.', 'Delectus quos sit laborum sapiente.', 'Necessitatibus impedit natus repudiandae.', NULL, 4.80, NULL, 0, 'simpleProduct', NULL, NULL, 'Waelchi-Shanahan', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(10, 'delectus est eius', 'delectus-est-eius', 10, 3, NULL, 'assumenda', 'Salmon', 'fugit ut quisquam', 'eum', 'vero', 20040521, 'fugiat', 'inventore', '77.2', 40, 44.58, 50.00, 'percentage', 'https://via.placeholder.com/640x480.png/003366?text=maiores', NULL, 'Et suscipit eos ea dicta sunt.', 1, 'Quaerat cum eius quia aut.', 'Cum tempora id facere quasi atque qui dignissimos. Sint et consectetur omnis inventore totam natus rerum nemo. Vel laborum cupiditate qui velit voluptatibus nihil non.', 'Et optio mollitia cumque dolor corrupti aut.', 'Odio ullam architecto maiores voluptatem provident mollitia blanditiis.', NULL, 1.40, NULL, 1, 'simpleProduct', NULL, NULL, 'Mante and Sons', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(11, 'ut consequuntur perspiciatis', 'ut-consequuntur-perspiciatis', 6, 5, NULL, 'est', 'Navy', 'maxime sed sed', 'quaerat', 'veritatis', 19900202, 'quo', 'quia', '3.77', 68, 82.30, 20.00, 'fixed', 'https://via.placeholder.com/640x480.png/004488?text=odit', NULL, 'Nobis sit quidem ut.', 1, 'Dolorem voluptatem consequatur labore officiis aut.', 'Pariatur velit labore unde tenetur. Ut consequatur consectetur quos iure vero ipsum deserunt. Tempora et velit blanditiis amet rem. Adipisci et veritatis tenetur.', 'Laudantium alias error rerum et.', 'Ullam esse dolorum est qui omnis voluptas.', NULL, 2.50, NULL, 0, 'variationProduct', NULL, NULL, 'Crist Group', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(12, 'consequatur inventore aut', 'consequatur-inventore-aut', 4, 5, NULL, 'iure', 'Sienna', 'quia et aut', 'sequi', 'quia', 19910601, 'laboriosam', 'inventore', '19.03', 5, 152.01, 21.00, 'percentage', 'https://via.placeholder.com/640x480.png/0011bb?text=deleniti', NULL, 'Enim cumque consequatur aut nisi impedit est voluptatem.', 1, 'Rerum fugiat odit dicta.', 'Omnis quibusdam deserunt laboriosam totam. Totam quia iure praesentium qui quis esse. Consequatur nesciunt ea dolores et nisi recusandae qui.', 'Nesciunt exercitationem sed distinctio in qui veritatis.', 'Ut tenetur et quaerat.', NULL, 4.10, NULL, 0, 'variationProduct', NULL, NULL, 'Cassin-Hackett', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(13, 'beatae in tempore', 'beatae-in-tempore', 9, 4, NULL, 'minus', 'Sienna', 'voluptates facere repudiandae', 'mollitia', 'sunt', 20010829, 'voluptas', 'eius', '99.99', 73, 151.50, 36.00, 'fixed', 'https://via.placeholder.com/640x480.png/00ee33?text=quo', NULL, 'Quas provident eos magni consequatur quibusdam.', 0, 'Perspiciatis perferendis ut est possimus dolor.', 'Aut ut voluptatem qui aspernatur. Unde quo est recusandae voluptatem qui consectetur in. Quo voluptate voluptatum ab in.', 'Exercitationem et hic sit.', 'Earum voluptas tenetur veniam perferendis quis animi molestiae.', NULL, 3.00, NULL, 0, 'variationProduct', NULL, NULL, 'Mertz, Gusikowski and Anderson', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(14, 'tempore in aut', 'tempore-in-aut', 1, 5, NULL, 'ea', 'PaleTurquoise', 'delectus molestias omnis', 'sit', 'ipsa', 20211103, 'velit', 'et', '18.77', 99, 359.60, 27.00, 'percentage', 'https://via.placeholder.com/640x480.png/00dd33?text=officiis', NULL, 'Vero at rem pariatur enim et odio libero.', 1, 'Asperiores esse sit error et porro dolor nemo sed.', 'Id consectetur quisquam et quae odit. Numquam ab itaque in optio sit asperiores. Et quis beatae occaecati sed quas suscipit aspernatur odit. Quia temporibus est et sint possimus.', 'Nihil odio debitis magni saepe accusantium consequatur.', 'Velit excepturi eaque corrupti dolor.', NULL, 4.20, NULL, 1, 'simpleProduct', NULL, NULL, 'Wiegand-Hayes', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(15, 'voluptas expedita est', 'voluptas-expedita-est', 6, 5, NULL, 'libero', 'Ivory', 'repudiandae architecto qui', 'soluta', 'ea', 19941101, 'autem', 'ducimus', '63.26', 34, 11.13, 41.00, 'percentage', 'https://via.placeholder.com/640x480.png/0099ff?text=nisi', NULL, 'Magnam consequatur placeat cum temporibus animi aspernatur velit.', 1, 'Consectetur consequatur qui dolorem sint sunt distinctio quia.', 'Et modi dolores perspiciatis. Maiores id qui et temporibus pariatur sint. Iste atque tenetur qui. Rerum enim voluptate aliquid sed. Minus ad quam dolor saepe illum.', 'In aut aut asperiores autem cum praesentium.', 'Est aliquam sint non ipsam iure ipsa.', NULL, 1.80, NULL, 0, 'variationProduct', NULL, NULL, 'Feeney, Pacocha and Kilback', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(16, 'sunt aut omnis', 'sunt-aut-omnis', 3, 3, NULL, 'non', 'ForestGreen', 'dolorem quo non', 'aut', 'rerum', 20121118, 'iusto', 'ex', '93.07', 6, 256.86, 12.00, 'percentage', 'https://via.placeholder.com/640x480.png/005544?text=et', NULL, 'Occaecati neque dolores quos natus odit.', 1, 'Nulla libero voluptas ipsam voluptatem atque nostrum.', 'Qui quod dolorum rerum libero. Pariatur corporis aut nam adipisci. Voluptates sint hic iusto fuga ea autem.', 'Veritatis consequatur unde dolore delectus voluptatem.', 'Tempora voluptatem id voluptatem maiores.', NULL, 0.90, NULL, 0, 'simpleProduct', NULL, NULL, 'Berge, Gleichner and Collins', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(17, 'rerum ut sint', 'rerum-ut-sint', 3, 4, NULL, 'autem', 'LightGray', 'in tempora facere', 'aut', 'nemo', 19900829, 'illum', 'ab', '85.96', 38, 406.67, 48.00, 'fixed', 'https://via.placeholder.com/640x480.png/00ccdd?text=quia', NULL, 'Iste et rerum earum libero reiciendis magni blanditiis.', 1, 'Qui reprehenderit nobis velit ipsam autem sed rerum.', 'Laudantium vitae magnam omnis autem error. Reiciendis non rerum rerum qui voluptas. Odio eveniet iusto numquam eum quis corporis perspiciatis.', 'Voluptatem porro sapiente natus.', 'Porro quas qui illum provident impedit dolore.', NULL, 1.80, NULL, 0, 'simpleProduct', NULL, NULL, 'Smitham and Sons', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(18, 'cum enim eligendi', 'cum-enim-eligendi', 2, 4, NULL, 'tempore', 'WhiteSmoke', 'ea praesentium quidem', 'nihil', 'delectus', 19760216, 'ex', 'deleniti', '23.78', 58, 425.82, 44.00, 'fixed', 'https://via.placeholder.com/640x480.png/00aadd?text=cupiditate', NULL, 'Maiores molestias in repellat voluptas sit sit.', 0, 'Eos debitis alias corporis quos quo vitae.', 'Dignissimos error totam temporibus commodi eaque enim aut. Et ratione deserunt ducimus corrupti eum iusto facilis. Et culpa autem sapiente omnis similique autem quis deserunt.', 'Necessitatibus nemo vel vel.', 'Dolorem sapiente quisquam deleniti qui deleniti repellendus vel consequatur.', NULL, 4.10, NULL, 1, 'simpleProduct', NULL, NULL, 'Kuvalis-Williamson', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(19, 'ullam odio autem', 'ullam-odio-autem', 6, 2, NULL, 'quis', 'Gray', 'laudantium accusantium aspernatur', 'voluptas', 'repudiandae', 19820423, 'id', 'consequatur', '73.15', 74, 153.86, 27.00, 'percentage', 'https://via.placeholder.com/640x480.png/002299?text=ipsa', NULL, 'Aut facilis voluptas quo.', 0, 'Veritatis iure et odit et.', 'Sed culpa explicabo rerum sunt. Totam quam rerum minima velit ut soluta. Minus laudantium amet sapiente ut. Voluptatem nulla numquam reprehenderit.', 'Provident ut sunt consequatur et quod delectus.', 'Nulla sit voluptatum nesciunt aliquam consectetur.', NULL, 2.40, NULL, 0, 'variationProduct', NULL, NULL, 'Rowe Ltd', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(20, 'deleniti eius dignissimos', 'deleniti-eius-dignissimos', 8, 4, NULL, 'suscipit', 'YellowGreen', 'tenetur voluptatum dolorem', 'neque', 'qui', 20040531, 'tempore', 'eos', '75.32', 25, 397.30, 14.00, 'percentage', 'https://via.placeholder.com/640x480.png/000077?text=sint', NULL, 'Velit voluptatum numquam vel rerum dolorem voluptas omnis.', 0, 'Molestiae corporis ut voluptates voluptatem recusandae.', 'Voluptatum deserunt quo repellat vel nihil. Pariatur quia quo pariatur veritatis. Voluptatem amet architecto consequuntur rerum.', 'Est ab totam minima distinctio qui quaerat placeat.', 'Maiores consequatur qui quisquam illum voluptate nam non.', NULL, 1.00, NULL, 1, 'variationProduct', NULL, NULL, 'O\'Hara, Brakus and Simonis', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(21, 'labore tempore blanditiis', 'labore-tempore-blanditiis', 4, 2, NULL, 'enim', 'Gray', 'consectetur exercitationem ut', 'facere', 'cumque', 20191012, 'fugit', 'maiores', '91.59', 47, 97.43, 29.00, 'fixed', 'https://via.placeholder.com/640x480.png/007733?text=harum', NULL, 'Neque molestias id tenetur earum tempore in assumenda.', 0, 'Voluptates consequatur eos qui qui deleniti ut.', 'Dolorum ab facere quo est aspernatur accusamus autem. Omnis quibusdam sunt aut voluptatem ullam. A saepe est tenetur.', 'Laudantium modi cumque sed qui rerum incidunt ea ex.', 'Quia soluta ducimus dolorem aliquam atque.', NULL, 2.80, NULL, 1, 'simpleProduct', NULL, NULL, 'Kuphal, Wilkinson and Torphy', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(22, 'similique sit natus', 'similique-sit-natus', 2, 4, NULL, 'velit', 'DarkGray', 'architecto dicta illo', 'nemo', 'nisi', 20030101, 'velit', 'quam', '74.65', 83, 75.20, 39.00, 'percentage', 'https://via.placeholder.com/640x480.png/0088ee?text=quis', NULL, 'Voluptatem vitae et provident et asperiores voluptatem aut.', 0, 'Ut enim ea sed eaque.', 'Iusto aut unde tempora labore corporis eligendi ut. Et molestiae explicabo quia inventore nostrum officiis quia omnis. Nemo rerum accusamus sint ea est accusamus. Ea est porro ad aliquid.', 'Ducimus minus repudiandae tempora dignissimos magnam qui aut.', 'Est natus sed adipisci qui.', NULL, 5.00, NULL, 0, 'variationProduct', NULL, NULL, 'Reichert Ltd', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(23, 'non impedit odio', 'non-impedit-odio', 8, 3, NULL, 'aut', 'MediumOrchid', 'qui perferendis labore', 'rerum', 'nihil', 19740816, 'consectetur', 'ut', '44.5', 91, 30.61, 21.00, 'fixed', 'https://via.placeholder.com/640x480.png/00aadd?text=id', NULL, 'Id ipsam incidunt ducimus culpa autem earum non.', 0, 'Mollitia id molestiae qui illum corrupti qui dolorem.', 'Iusto in libero facilis ea. Repellat qui vel ea aut doloribus. Consequatur corporis sit tempore labore. Cum dolor fugiat error consequuntur velit. Natus qui tempora ducimus fugiat illo vel qui quia.', 'Praesentium in non ut.', 'Autem et et dolorum beatae nam.', NULL, 2.70, NULL, 1, 'simpleProduct', NULL, NULL, 'Walter-Harber', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(24, 'totam eum iure', 'totam-eum-iure', 8, 2, NULL, 'nesciunt', 'DeepSkyBlue', 'quisquam explicabo omnis', 'reiciendis', 'non', 20150106, 'doloremque', 'facere', '87.97', 63, 185.99, 0.00, 'fixed', 'https://via.placeholder.com/640x480.png/00aa44?text=animi', NULL, 'Aut eveniet est tenetur voluptas adipisci.', 0, 'Atque saepe eum qui.', 'Labore ut esse voluptas earum. Natus quia labore cupiditate natus. Accusamus voluptate aut ipsam et quas. Ut sequi perspiciatis tempora nihil. Dolorem consequatur sit totam consectetur repudiandae.', 'Tempora consequatur nesciunt id vel explicabo.', 'Vero odit eum maxime necessitatibus.', NULL, 3.40, NULL, 0, 'simpleProduct', NULL, NULL, 'Leannon Group', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(25, 'distinctio ab consectetur', 'distinctio-ab-consectetur', 5, 3, NULL, 'sed', 'SteelBlue', 'dolore voluptatem quam', 'nisi', 'voluptatem', 20001008, 'est', 'laudantium', '21.14', 79, 267.23, 46.00, 'fixed', 'https://via.placeholder.com/640x480.png/004466?text=nemo', NULL, 'Sint ipsa officia eum sed id ullam et.', 0, 'Provident nesciunt minus consequuntur enim aperiam.', 'Modi earum labore ullam expedita facilis. Officiis dolores qui blanditiis porro fuga. Vitae voluptas dolor neque in. Omnis ut adipisci a nobis voluptatum.', 'Cupiditate qui distinctio sit est dolorem et.', 'Dolores laborum rerum ratione explicabo omnis dolores.', NULL, 2.90, NULL, 1, 'variationProduct', NULL, NULL, 'Lebsack-Nicolas', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(26, 'vero adipisci quia', 'vero-adipisci-quia', 3, 1, NULL, 'dolorem', 'Blue', 'qui neque hic', 'nam', 'quia', 19760629, 'necessitatibus', 'beatae', '3.88', 24, 412.49, 27.00, 'fixed', 'https://via.placeholder.com/640x480.png/007799?text=velit', NULL, 'Adipisci facere incidunt commodi quisquam neque optio.', 1, 'Provident est quod sit.', 'Nemo saepe sit porro sed culpa. Eveniet praesentium voluptatem deleniti aut vitae provident ipsam laudantium.', 'Libero consequatur cum similique eveniet doloribus.', 'Quo facilis atque non rerum asperiores dolores maxime.', NULL, 2.40, NULL, 0, 'simpleProduct', NULL, NULL, 'Renner-Gusikowski', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(27, 'dolorem labore sed', 'dolorem-labore-sed', 3, 2, NULL, 'fugit', 'Khaki', 'et id veritatis', 'officiis', 'repellat', 19811018, 'dolores', 'quas', '0.41', 55, 32.91, 21.00, 'fixed', 'https://via.placeholder.com/640x480.png/005500?text=inventore', NULL, 'Consequatur labore ex earum quaerat autem in.', 1, 'Et quod sit asperiores similique aut asperiores omnis.', 'Consequuntur natus dolor recusandae omnis qui voluptas blanditiis. Architecto beatae expedita ab voluptatibus sed quis repudiandae. Est est doloremque eos ut explicabo quia.', 'Ex tenetur et velit ex praesentium.', 'Et saepe non et quasi non esse quia consequatur.', NULL, 3.90, NULL, 1, 'simpleProduct', NULL, NULL, 'Swaniawski, Konopelski and Jones', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(28, 'ducimus quia saepe', 'ducimus-quia-saepe', 8, 1, NULL, 'accusantium', 'Navy', 'vitae temporibus nihil', 'doloribus', 'eos', 19911030, 'rerum', 'sed', '54.53', 8, 143.66, 17.00, 'fixed', 'https://via.placeholder.com/640x480.png/00aacc?text=nesciunt', NULL, 'Earum maxime et ut illum cumque enim.', 0, 'Molestiae omnis dolor veniam molestiae.', 'Corporis eum consequatur veniam consequatur laboriosam. Nemo quae nihil deleniti tempora dolores accusamus. Dolor ducimus reprehenderit alias sunt dolores. Atque dignissimos corrupti quia quo.', 'Sed molestias repudiandae fuga sunt voluptatum temporibus omnis consequatur.', 'Sunt quia quia qui.', NULL, 3.10, NULL, 0, 'simpleProduct', NULL, NULL, 'Sanford LLC', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(29, 'deserunt aut qui', 'deserunt-aut-qui', 4, 3, NULL, 'iure', 'GoldenRod', 'in illo ea', 'exercitationem', 'deserunt', 19950328, 'vero', 'quidem', '58.2', 13, 93.86, 37.00, 'percentage', 'https://via.placeholder.com/640x480.png/00aa99?text=iure', NULL, 'Et minus autem in eos id dolor.', 1, 'Minima laudantium numquam quis nisi natus consequatur quis repudiandae.', 'Dolorem dignissimos sed et debitis assumenda dolorem. Nemo sed qui in adipisci et esse. At ab voluptatibus nihil consequatur eos. Hic possimus aut hic dolor maiores distinctio. Earum voluptas asperiores quos nostrum neque illum.', 'Enim et libero delectus aut.', 'Ipsam ut laborum libero deleniti sit quis dolores omnis.', NULL, 3.00, NULL, 1, 'simpleProduct', NULL, NULL, 'Powlowski Inc', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(30, 'dolore quia quis', 'dolore-quia-quis', 3, 1, NULL, 'animi', 'PaleGoldenRod', 'tempore earum delectus', 'dolor', 'quidem', 20061229, 'nisi', 'et', '11.2', 6, 454.95, 42.00, 'percentage', 'https://via.placeholder.com/640x480.png/0088aa?text=quo', NULL, 'A quis eius aut commodi consequuntur.', 1, 'Rerum rerum incidunt enim in similique.', 'Quia libero eius id neque eos ab. Cupiditate in illum illo sit doloribus. Tempora fugit perferendis aperiam sed perferendis qui.', 'Laborum sit et voluptas amet repudiandae dignissimos et.', 'Earum et qui tempore est iste sint quibusdam minima.', NULL, 3.90, NULL, 1, 'simpleProduct', NULL, NULL, 'Abshire, Flatley and Fay', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(31, 'itaque possimus quisquam', 'itaque-possimus-quisquam', 1, 4, NULL, 'incidunt', 'Aqua', 'et doloribus omnis', 'alias', 'et', 20040424, 'omnis', 'fugit', '55.87', 1, 111.49, 27.00, 'percentage', 'https://via.placeholder.com/640x480.png/003322?text=magnam', NULL, 'Ad qui alias corporis nemo in.', 0, 'Iusto dicta et voluptate quaerat aut animi.', 'Vitae eaque aut sunt qui distinctio quia vitae aliquam. Illum ratione corporis aut atque error officia illo. Ab explicabo nostrum odit sit a dolorem. Omnis aut atque esse quo doloribus qui labore aut.', 'Debitis rerum et eius laborum.', 'Magni autem eligendi porro nobis itaque.', NULL, 2.80, NULL, 1, 'variationProduct', NULL, NULL, 'Gorczany-Langworth', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(32, 'eum itaque numquam', 'eum-itaque-numquam', 1, 5, NULL, 'ipsa', 'MediumSlateBlue', 'quisquam voluptatem in', 'ea', 'laboriosam', 20010404, 'suscipit', 'voluptates', '86.45', 94, 305.04, 28.00, 'percentage', 'https://via.placeholder.com/640x480.png/00aa77?text=iste', NULL, 'Ut tempora consequatur illo sunt.', 1, 'A culpa delectus eum dignissimos.', 'Nostrum ut laborum tenetur maxime qui ea. Quibusdam ut qui optio quisquam distinctio quas. Incidunt eaque facere ut aut magnam unde.', 'Fugit voluptas amet quaerat laudantium voluptas tenetur omnis.', 'Deserunt mollitia et adipisci corporis voluptatem perspiciatis.', NULL, 4.20, NULL, 0, 'variationProduct', NULL, NULL, 'Doyle Group', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(33, 'voluptas inventore in', 'voluptas-inventore-in', 3, 2, NULL, 'maiores', 'FireBrick', 'et dolore illum', 'sint', 'enim', 20101213, 'sed', 'accusamus', '71.98', 96, 495.37, 18.00, 'percentage', 'https://via.placeholder.com/640x480.png/003388?text=id', NULL, 'Nulla voluptatem doloremque sequi.', 1, 'Debitis tempora eaque reprehenderit veritatis sapiente animi.', 'Tempore minima cumque qui cumque harum consectetur. Expedita similique adipisci qui. Voluptas repellendus odio odit autem aut.', 'Et eos maxime exercitationem consequatur eligendi repellendus sint.', 'Velit dolorem nulla quos hic excepturi aliquid.', NULL, 1.40, NULL, 1, 'variationProduct', NULL, NULL, 'Stroman-Sipes', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(34, 'eligendi itaque expedita', 'eligendi-itaque-expedita', 10, 3, NULL, 'qui', 'Maroon', 'sapiente ea numquam', 'enim', 'corporis', 19891008, 'nesciunt', 'beatae', '81.55', 91, 348.87, 34.00, 'percentage', 'https://via.placeholder.com/640x480.png/004488?text=sapiente', NULL, 'Delectus autem non vero nulla sed sint architecto.', 0, 'Soluta odit impedit sequi non quisquam.', 'Officiis assumenda blanditiis saepe. Et cum quos cumque libero possimus. Illo enim ex magni ut illum dolor sed commodi.', 'Est reprehenderit modi rerum totam at voluptate.', 'Ab laborum molestiae molestiae ut nihil consectetur vitae error.', NULL, 2.10, NULL, 0, 'variationProduct', NULL, NULL, 'Hahn-Hilpert', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(35, 'et quia eos', 'et-quia-eos', 3, 4, NULL, 'sunt', 'DarkViolet', 'atque hic quis', 'labore', 'quae', 20090314, 'saepe', 'suscipit', '43.61', 1, 495.36, 2.00, 'fixed', 'https://via.placeholder.com/640x480.png/00eeaa?text=maiores', NULL, 'Expedita nesciunt vero dignissimos.', 0, 'Delectus eos animi impedit architecto cum aut.', 'Inventore ab ipsum rem ea. Quo et temporibus maxime nobis sed ipsa nulla. Repudiandae eaque ducimus sed quia nihil. Sed praesentium consequatur optio perspiciatis est voluptas. Temporibus error facilis eum sapiente eos possimus.', 'Repellat repellat impedit totam provident.', 'Repellendus odio et nemo et.', NULL, 1.20, NULL, 0, 'variationProduct', NULL, NULL, 'Cruickshank, Parker and Ruecker', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(36, 'debitis aut esse', 'debitis-aut-esse', 4, 2, NULL, 'in', 'Sienna', 'dolor eaque cupiditate', 'consequuntur', 'perspiciatis', 19880711, 'dolorem', 'et', '46.63', 46, 399.09, 17.00, 'fixed', 'https://via.placeholder.com/640x480.png/00ddbb?text=dignissimos', NULL, 'Omnis quaerat exercitationem quis voluptatum rerum quae voluptatem.', 1, 'Laboriosam et et ex cum eius.', 'Voluptatibus iusto accusamus nisi rerum dolor qui illum quis. Reprehenderit voluptas cupiditate distinctio vero distinctio. Aut dolorem quia accusamus tempora deserunt voluptates.', 'Harum dolores laborum esse sint.', 'Ea ut optio blanditiis nulla.', NULL, 0.60, NULL, 0, 'variationProduct', NULL, NULL, 'Lindgren, Friesen and Bosco', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(37, 'id voluptate distinctio', 'id-voluptate-distinctio', 9, 1, NULL, 'quas', 'AntiqueWhite', 'quisquam esse repudiandae', 'sit', 'qui', 20180811, 'non', 'libero', '58.74', 66, 227.72, 35.00, 'percentage', 'https://via.placeholder.com/640x480.png/002222?text=et', NULL, 'Rerum mollitia vitae tempore consequatur.', 0, 'Quidem perspiciatis voluptate mollitia eveniet praesentium.', 'Provident dolore incidunt cumque porro. Dolores velit adipisci officia sit. Quas officia eum neque nesciunt autem officia. Omnis ab ratione voluptas dolorum consequatur est quos.', 'Rerum adipisci natus eius placeat qui.', 'Quidem eius perspiciatis minima aliquid consequuntur sed.', NULL, 2.10, NULL, 1, 'variationProduct', NULL, NULL, 'Kling, Stark and Larson', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(38, 'ut at quam', 'ut-at-quam', 8, 3, NULL, 'temporibus', 'LightSteelBlue', 'dolore cumque similique', 'est', 'ea', 20170319, 'doloremque', 'sit', '25.75', 59, 172.93, 11.00, 'fixed', 'https://via.placeholder.com/640x480.png/00aa88?text=impedit', NULL, 'Quis eius rerum molestiae et dignissimos laboriosam.', 0, 'Accusantium dolorem omnis dignissimos quas cumque.', 'Aspernatur quam ad inventore qui culpa. Alias exercitationem rerum qui distinctio expedita numquam. Quidem assumenda numquam iste et. Impedit aperiam aut eos harum fuga necessitatibus quos.', 'Iure aut earum hic deserunt eum voluptates atque.', 'Repellendus repellendus est ut dolor quia at fugiat.', NULL, 1.20, NULL, 0, 'variationProduct', NULL, NULL, 'Botsford Group', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(39, 'aut maxime blanditiis', 'aut-maxime-blanditiis', 4, 2, NULL, 'molestiae', 'DarkSalmon', 'maxime magnam qui', 'vitae', 'officia', 20171201, 'ipsum', 'quisquam', '19.92', 46, 235.38, 37.00, 'percentage', 'https://via.placeholder.com/640x480.png/00ee99?text=vitae', NULL, 'Dolorem sint sequi quisquam.', 0, 'Totam provident tenetur laborum dignissimos corporis asperiores qui.', 'Molestiae incidunt sunt quaerat qui a. Quia rem velit cumque suscipit. Non illo qui numquam aut.', 'Error sint illum maiores est et nam commodi.', 'Asperiores consequatur quae et fugiat tempora ut.', NULL, 3.10, NULL, 1, 'simpleProduct', NULL, NULL, 'Wisozk-Cronin', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(40, 'quaerat et ratione', 'quaerat-et-ratione', 7, 3, NULL, 'a', 'Yellow', 'omnis et laudantium', 'sit', 'ad', 20150111, 'eos', 'expedita', '72.9', 39, 486.77, 35.00, 'fixed', 'https://via.placeholder.com/640x480.png/0099ff?text=dignissimos', NULL, 'Quas cupiditate qui ut enim non alias et.', 1, 'Voluptate excepturi qui sint non sunt qui ipsam.', 'Et quasi sint accusantium. Debitis et dignissimos rerum perferendis veritatis placeat eaque. Id labore et nulla velit qui vel nemo. Incidunt distinctio officiis sit consequatur ducimus atque.', 'Est ex vitae eaque ea.', 'Dolorem voluptates est sunt officia occaecati voluptates.', NULL, 2.60, NULL, 1, 'variationProduct', NULL, NULL, 'Gulgowski Ltd', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(41, 'vero illum est', 'vero-illum-est', 5, 1, NULL, 'temporibus', 'Chartreuse', 'vitae omnis maiores', 'id', 'ipsam', 20180208, 'optio', 'omnis', '5.9', 61, 156.28, 22.00, 'percentage', 'https://via.placeholder.com/640x480.png/0044ee?text=aliquid', NULL, 'Odio cumque dolore aliquid est.', 1, 'At vel delectus nobis labore blanditiis ullam.', 'Quia optio amet sint. Nihil quo consectetur hic repellat et. Dolore porro sit voluptas. Deleniti sed amet sit veniam in quis ad.', 'Laborum voluptas amet voluptas voluptas.', 'Sit fuga blanditiis praesentium est.', NULL, 4.10, NULL, 1, 'variationProduct', NULL, NULL, 'Rolfson, Monahan and Kirlin', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(42, 'iure sunt dolor', 'iure-sunt-dolor', 9, 2, NULL, 'possimus', 'MediumSeaGreen', 'sint occaecati expedita', 'consequuntur', 'illum', 19970725, 'nemo', 'a', '44.87', 51, 340.67, 25.00, 'percentage', 'https://via.placeholder.com/640x480.png/001166?text=aut', NULL, 'Ut rerum ab magnam sunt molestiae minus quis.', 1, 'Iste vel laboriosam quaerat maxime omnis excepturi quae.', 'Expedita est mollitia odio nesciunt. Aspernatur assumenda modi ut optio. Ratione sapiente quis reprehenderit.', 'Impedit eligendi saepe eaque quis omnis.', 'Ipsum dolorum quae quasi dicta ea et natus.', NULL, 2.10, NULL, 0, 'variationProduct', NULL, NULL, 'Marvin-Graham', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(43, 'cum aspernatur deserunt', 'cum-aspernatur-deserunt', 8, 3, NULL, 'totam', 'Chartreuse', 'neque laudantium qui', 'ad', 'expedita', 19950613, 'eius', 'et', '4.88', 25, 284.91, 10.00, 'fixed', 'https://via.placeholder.com/640x480.png/005566?text=similique', NULL, 'Sed quasi modi et saepe rerum ducimus.', 1, 'Minus et expedita aspernatur provident et non.', 'Adipisci consequatur delectus iusto accusantium accusamus praesentium. Et temporibus vel veritatis non sit veritatis in. Aut dolore nulla ea consectetur rerum. Dolores officiis laudantium hic ipsum aut est iste.', 'Consequuntur nisi voluptatem in et sint nihil.', 'Laborum nihil sunt hic nihil iste ea placeat.', NULL, 0.50, NULL, 0, 'simpleProduct', NULL, NULL, 'Shields Inc', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(44, 'hic perspiciatis molestiae', 'hic-perspiciatis-molestiae', 6, 1, NULL, 'at', 'Linen', 'libero aut ut', 'incidunt', 'animi', 20151008, 'accusamus', 'earum', '85.05', 45, 293.25, 36.00, 'percentage', 'https://via.placeholder.com/640x480.png/000033?text=et', NULL, 'Ducimus vel explicabo quos vitae.', 0, 'Explicabo at non ullam sit exercitationem maxime eum.', 'Aliquid qui culpa eveniet. Sequi maiores at similique cum quia delectus perspiciatis. Impedit architecto voluptatem excepturi non quis in est explicabo.', 'Perferendis perferendis voluptas deleniti dolorum architecto sunt ea et.', 'Aperiam nesciunt ipsam laborum ipsum tempore sequi.', NULL, 2.60, NULL, 1, 'variationProduct', NULL, NULL, 'Gibson, Quigley and Jenkins', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(45, 'quos quo aspernatur', 'quos-quo-aspernatur', 4, 2, NULL, 'autem', 'BlueViolet', 'itaque ut nihil', 'id', 'molestiae', 20100815, 'praesentium', 'eos', '49.09', 29, 17.24, 15.00, 'percentage', 'https://via.placeholder.com/640x480.png/003311?text=commodi', NULL, 'Consectetur quia quo eos excepturi quia est molestiae.', 1, 'Vel iste ratione itaque dolore.', 'Aliquam quia autem totam vitae necessitatibus velit unde. Accusamus officia aut deleniti iusto reiciendis qui. Non veritatis qui quas eligendi.', 'Vero consequuntur ex sed praesentium soluta soluta aut.', 'Mollitia quam odio natus eum eos aut harum.', NULL, 2.20, NULL, 0, 'simpleProduct', NULL, NULL, 'Gottlieb-Gerhold', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(46, 'sed rem doloremque', 'sed-rem-doloremque', 6, 5, NULL, 'facilis', 'DarkCyan', 'vitae quo explicabo', 'omnis', 'ratione', 19791222, 'blanditiis', 'cumque', '9.99', 92, 332.69, 32.00, 'fixed', 'https://via.placeholder.com/640x480.png/008888?text=et', NULL, 'Ipsa officiis voluptatem rem a quia iste mollitia corrupti.', 1, 'Aut qui accusamus iure consequuntur nam.', 'Ducimus sit quia distinctio necessitatibus doloribus autem est. Sunt saepe nulla ab unde odio. Architecto est eligendi consequatur hic cum delectus.', 'Libero sit minus laboriosam assumenda voluptates maiores eum.', 'Rerum rerum aut sit esse incidunt voluptatem perferendis.', NULL, 1.90, NULL, 1, 'variationProduct', NULL, NULL, 'Little, Waelchi and Fritsch', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(47, 'corrupti iusto ipsa', 'corrupti-iusto-ipsa', 10, 2, NULL, 'expedita', 'SpringGreen', 'in commodi quis', 'id', 'harum', 19701006, 'et', 'ut', '94.72', 54, 324.68, 31.00, 'fixed', 'https://via.placeholder.com/640x480.png/00eeee?text=fugiat', NULL, 'Delectus sed aspernatur ducimus sint dolore eligendi quas.', 0, 'Ab veritatis quas atque optio.', 'Est ut sed nulla dolores dignissimos fugit illo. Enim excepturi deserunt illum. Dolorem sint repellendus qui earum. Eligendi aperiam et vero aliquam sit similique. Et eius voluptates quos ut explicabo enim.', 'Sed quam placeat ducimus praesentium odit aut.', 'Ducimus et delectus ipsa incidunt natus.', NULL, 4.00, NULL, 1, 'variationProduct', NULL, NULL, 'Haley PLC', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(48, 'sint voluptatem esse', 'sint-voluptatem-esse', 6, 5, NULL, 'eveniet', 'SkyBlue', 'accusamus qui omnis', 'iusto', 'exercitationem', 20100712, 'rerum', 'qui', '19.41', 62, 322.09, 14.00, 'percentage', 'https://via.placeholder.com/640x480.png/00ee33?text=assumenda', NULL, 'Rem aut voluptatem molestias asperiores consequuntur in sequi.', 1, 'Asperiores reprehenderit est qui consequatur.', 'Et nihil repudiandae sunt et qui ullam. Recusandae ut cum fuga perferendis. Quis blanditiis magni est sit eum id iusto.', 'Nesciunt fuga nisi adipisci nulla pariatur.', 'Quia dolores adipisci aut quaerat.', NULL, 4.20, NULL, 0, 'variationProduct', NULL, NULL, 'Becker, D\'Amore and O\'Keefe', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(49, 'minima maxime animi', 'minima-maxime-animi', 9, 1, NULL, 'blanditiis', 'Moccasin', 'accusantium saepe deserunt', 'culpa', 'hic', 19800308, 'optio', 'eveniet', '28.98', 84, 103.15, 43.00, 'percentage', 'https://via.placeholder.com/640x480.png/00bb55?text=numquam', NULL, 'Labore voluptas non ad exercitationem aut nihil itaque.', 0, 'Amet maiores deleniti beatae in quam commodi eos eius.', 'Repellendus aliquid et saepe totam qui. Molestiae necessitatibus debitis debitis. Et tempore facilis voluptates cum amet maxime labore ex. Veritatis et dolor rerum sit aliquid consequuntur numquam.', 'Harum quae velit et eos recusandae.', 'Ut similique nesciunt fugiat vero sequi est voluptas.', NULL, 3.30, NULL, 1, 'variationProduct', NULL, NULL, 'Pollich-Bartell', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(50, 'nihil quos et', 'nihil-quos-et', 9, 5, NULL, 'fugit', 'Thistle', 'enim ea dolores', 'quia', 'voluptate', 19800523, 'qui', 'impedit', '45.76', 43, 456.30, 5.00, 'fixed', 'https://via.placeholder.com/640x480.png/000088?text=et', NULL, 'Earum impedit et molestiae nisi.', 1, 'Reiciendis quo et perferendis explicabo iste.', 'Molestiae rerum sit maiores rem dolorem voluptas quae. Consequatur dicta exercitationem ipsum ut quibusdam et incidunt. Ullam aut voluptas exercitationem debitis eum ducimus omnis atque. Qui incidunt aspernatur reprehenderit blanditiis.', 'Enim facere quasi dolorem laudantium ab architecto delectus.', 'Ea rerum ipsa eum dolor consequatur.', NULL, 1.20, NULL, 1, 'simpleProduct', NULL, NULL, 'Lowe-Pacocha', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(51, 'laudantium suscipit velit', 'laudantium-suscipit-velit', 5, 2, NULL, 'quo', 'FloralWhite', 'amet quia eum', 'quis', 'in', 19981114, 'eveniet', 'quis', '32.27', 14, 352.51, 2.00, 'percentage', 'https://via.placeholder.com/640x480.png/00ccbb?text=voluptate', NULL, 'Error eos nemo optio vero non eius.', 1, 'Est amet itaque ut sed deserunt.', 'Sint expedita itaque et et ea. Facere similique sequi non modi libero qui. Qui doloremque libero enim ullam.', 'Ab ullam consequatur accusamus expedita itaque officiis cumque.', 'Est explicabo et quis eveniet doloribus dolore.', NULL, 0.70, NULL, 0, 'variationProduct', NULL, NULL, 'Schinner Inc', NULL, '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(52, 'This is firts product API Test', 'this-is-firts-product-api-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2001, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/9cxaIIOMsCoWtGGdj33mAXE4w7Hcx3CseJYFKG0n.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 06:28:24', '2023-09-03 06:28:24'),
(53, 'This is firts product API Test', 'this-is-firts-product-api-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2001, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/oM8pTeWSTZ2hqERTKnOe7PTbEGNuenffB6Jt7aFs.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 06:30:19', '2023-09-03 06:30:19'),
(54, 'This is thumbImg product API Test', 'this-is-thumbimg-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2001, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/YGLHnwCzGj2JTW2Ev1aG7Sd6neYe1aFmYfBr5y9w.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:23:11', '2023-09-03 10:23:11'),
(55, 'This is thumbImg product API Test', 'this-is-thumbimg-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2001, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/PqfCTeAHgWCZlI5TNr70wPAr46puH7brCWwcaz2J.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:29:46', '2023-09-03 10:29:46'),
(56, 'This is thumbImg product API Test', 'this-is-thumbimg-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2001, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/yNh9zH1n5DW5gg0bN4tyO16BaOQVqzRCvM0SMN3I.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:30:28', '2023-09-03 10:30:28'),
(57, 'This is thumbImg product API Test', 'this-is-thumbimg-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2001, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/kDVIhgLqNfJhtCGyiDi9iJAoyTFvbXJfr81Am0nC.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:32:30', '2023-09-03 10:32:30'),
(58, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/s5CXRGq6zlIJnpheySrxQRt4wW1eXGgKPJqtsHME.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:53:52', '2023-09-03 10:53:52'),
(59, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/TKdgLBXju8HnYk1eKoXC10Nu0NhjcndpYbTDJ0qk.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:54:34', '2023-09-03 10:54:34'),
(60, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/dX2EYMVREIzOKJT3ehSdS4cJ0uS38VpjND84A3og.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:58:12', '2023-09-03 10:58:12'),
(61, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/gAGt8vVsHyBER7eFWW9l5kx5ZwHPLLBNCaERbxGv.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:58:44', '2023-09-03 10:58:44'),
(62, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/kFLbUTgFmDQVsMdeAKBJ0deNrHaxKrlk8QQkQMe6.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 10:59:31', '2023-09-03 10:59:31'),
(63, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/9kPDpVeNjgzsx6HFDii7SweO2LDtQ5Nb5jGGvh5i.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:02:03', '2023-09-03 12:02:03'),
(64, 'This is firts product API Test', 'this-is-firts-product-api-test', 12, 5, NULL, 'Nasim model', 'Nasim color', NULL, 'Nasim material', '2', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/fgZj8MIsHQw4VGnLiUUrQ5Bvax2HJy5Txpurk7Wc.png', NULL, 'asdfgdfgasdfghasedgasdasd asdas da ads a', 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:05:36', '2023-09-03 12:05:36'),
(65, 'This is multiple  product API Test', 'this-is-multiple-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/kJgJYjqTE1iAq5rkWSdwsThxCSIr3b1R5ZL3KmzV.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:07:58', '2023-09-03 12:07:58'),
(66, 'This is multiple  product API Test', 'this-is-multiple-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/xmMBM4fc6yFkCzkWKFnRfHPqjuO4u7i30m4SCQZ8.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:10:36', '2023-09-03 12:10:36'),
(67, 'This is multiple  product API Test', 'this-is-multiple-product-api-test', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/NNrIsyEMTHQnSleBYwBWU1qz5vNOazc4rzS1L22n.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:12:35', '2023-09-03 12:12:35'),
(68, 'This is firts product API Test', 'this-is-firts-product-api-test', 2, 2, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/ALMjwzysi4eeOcfLhILs1dMFiB7UdTA0AxZwBhVk.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:17:57', '2023-09-03 12:17:57'),
(69, 'This is firts product API Test', 'this-is-firts-product-api-test', 2, 2, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/2H7ptqoyxdsqCGc5CYmIG1e3lcZ0rnkTHyWU9tIl.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:18:17', '2023-09-03 12:18:17'),
(70, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/NIxDree1tCGxcJZxSpuJrX8CeN6ClbWFYK0Mjnq4.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:22:40', '2023-09-03 12:22:40'),
(71, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/SpbLGYQE7U00G5c7lcsjjMC6yhT919p9vNo4SgnD.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:24:04', '2023-09-03 12:24:04'),
(72, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/3G9d85uqbb9y8vGHkEGuBC8Awjq8jhY8Ybr8P9gO.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:26:29', '2023-09-03 12:26:29'),
(73, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/tqsL720tq2pNdVEWpmHyjFPzhHhLDor56YZb2JR2.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:31:35', '2023-09-03 12:31:35'),
(74, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/PF12ZhXfhxixZC4CbMIT8GBd1kIGVuQfiEW6azp9.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:32:19', '2023-09-03 12:32:19'),
(75, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/ordQG1v7bowCrN7oOxMe6DUcXAA4y6Pqbc9wQ9PF.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:33:25', '2023-09-03 12:33:25'),
(76, 'This is firts product API Test final', 'this-is-firts-product-api-test-final', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/0ArJYa8Fs8tBjV4ivADBIMzshbJ4FmGVGjZNectL.png', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:34:00', '2023-09-03 12:34:00'),
(77, 'This is firts product API Test final test', 'this-is-firts-product-api-test-final-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/pWCrbstydDGOvdOJL4QDVpnDABhaDMHYYupO5T3g.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:39:38', '2023-09-03 12:39:38'),
(78, 'This is firts product API Test final test', 'this-is-firts-product-api-test-final-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/YC7ubiP0xnAv1Fz9CmW8uR2CSyc75So9XGhcOlT2.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:39:57', '2023-09-03 12:39:57');
INSERT INTO `products` (`id`, `productName`, `slug`, `categoryId`, `brandId`, `sku`, `model`, `color`, `tags`, `material`, `size`, `year`, `compitibility`, `condition`, `weight`, `quantity`, `price`, `discount`, `discountType`, `primaryImg`, `thumbImgId`, `shortDescriptions`, `availability`, `note`, `longDescriptions`, `installationMethod`, `warranty`, `manufacturerPartNumber`, `rating`, `reviewsId`, `status`, `productType`, `attributesData`, `attribiuteId`, `manufacturer`, `productCreator`, `created_at`, `updated_at`) VALUES
(79, 'This is firts product API Test final test', 'this-is-firts-product-api-test-final-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/LnNERPOst7cAmy2nIcG8gU9BT2fRXniTuqGMSUlY.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:41:01', '2023-09-03 12:41:01'),
(80, 'This is firts product API Test final test', 'this-is-firts-product-api-test-final-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/ejvrobkbhWJN9yELkCYAcNO7rneuxq9Z57OxD34J.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:41:11', '2023-09-03 12:41:11'),
(81, 'This is firts product API Test final test', 'this-is-firts-product-api-test-final-test', 5, 5, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/tQuoZup2P4zU0m45DW5dIvFUfuUgSaU6VvtoK2nr.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-03 12:42:32', '2023-09-03 12:42:32'),
(82, 'This is firts product store', 'this-is-firts-product-store', 6, 6, NULL, 'dvglcgk', 'kfgkgh', NULL, 'ckhftkhfgh', 'XL', 2022, 'sgafgdfg', 'sagdasg', '56', 100, 2000.00, 45.00, NULL, 'products/HV3EYo2HtvhpuMS8R1nXsSwqAU6OyirDEe4c2MK3.jpg', NULL, 'asdfgdfgasdfghasedg', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 'simpleProduct', NULL, NULL, NULL, NULL, '2023-09-04 03:50:21', '2023-09-04 03:50:21');

-- --------------------------------------------------------

--
-- Table structure for table `product_models`
--

CREATE TABLE `product_models` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `modelName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `queues`
--

CREATE TABLE `queues` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `arriveDateTime` datetime DEFAULT NULL,
  `departDateTime` datetime DEFAULT NULL,
  `orderId` bigint(20) UNSIGNED DEFAULT NULL,
  `serviceId` bigint(20) UNSIGNED DEFAULT NULL,
  `staffId` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `serviceName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `durationHours` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `featured` tinyint(1) NOT NULL DEFAULT 1,
  `serviceCreator` bigint(20) DEFAULT NULL,
  `note` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `serviceName`, `slug`, `description`, `img`, `price`, `durationHours`, `status`, `featured`, `serviceCreator`, `note`, `created_at`, `updated_at`) VALUES
(1, 'sapiente voluptas in', 'sapiente-voluptas-in', 'Unde laboriosam eligendi rem est quod nulla reiciendis. Quisquam inventore odit quo et fugit. Non maxime est beatae.', 'https://via.placeholder.com/200x200.png/0022aa?text=id', 1594.21, 4, 0, 0, NULL, 'Sit minus officia natus voluptatem ut sed.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(2, 'et rerum occaecati', 'et-rerum-occaecati', 'Distinctio voluptas illum dolorem et aut. Nesciunt adipisci recusandae dolores ex id magni voluptatem reiciendis. Facere suscipit assumenda vel cupiditate optio aliquam voluptatum id.', 'https://via.placeholder.com/200x200.png/008811?text=molestiae', 940.77, 1, 0, 1, NULL, 'Natus ab non et fugit beatae asperiores sunt.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(3, 'saepe reiciendis quisquam', 'saepe-reiciendis-quisquam', 'Sint et eum officiis voluptas porro dolores. Ea laborum voluptatem odit quis delectus et recusandae qui. Consequatur vitae aliquam officiis nostrum. Tempora soluta velit dolor nesciunt.', 'https://via.placeholder.com/200x200.png/001177?text=sequi', 898.98, 4, 0, 1, NULL, 'Sit totam laboriosam quidem nam magni repellendus alias consequatur.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(4, 'quae dolores fugit', 'quae-dolores-fugit', 'Magni facilis velit earum amet explicabo exercitationem distinctio. Voluptas totam inventore totam eligendi ipsa suscipit. Officia consequatur nobis sit similique ipsam accusantium iusto. Libero magni eos quibusdam et voluptas est.', 'https://via.placeholder.com/200x200.png/001188?text=incidunt', 1645.49, 5, 0, 1, NULL, 'Consequatur quis facilis ut natus libero ullam.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(5, 'quas eveniet enim', 'quas-eveniet-enim', 'Suscipit provident alias adipisci aperiam facere architecto et. Laborum dolore tempora voluptates expedita. Voluptatem in voluptas ut corporis dolorem illum. Et vel et ut cupiditate error.', 'https://via.placeholder.com/200x200.png/000033?text=hic', 1161.33, 3, 0, 1, NULL, 'Saepe tenetur corrupti atque officia veniam fuga eligendi.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(6, 'at sint repudiandae', 'at-sint-repudiandae', 'Commodi recusandae ut doloribus. Quam laborum aliquam non. Dolorem in aliquam vel velit vel. Ipsum blanditiis in aliquam veritatis laudantium aut in.', 'https://via.placeholder.com/200x200.png/00bbbb?text=ut', 1960.03, 6, 0, 1, NULL, 'Voluptatibus ratione nemo dicta at at quisquam maiores.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(7, 'cum consequuntur nam', 'cum-consequuntur-nam', 'Accusantium quia magni est aut eum atque voluptatem eveniet. Velit natus odio ut. Facilis rerum dolorem ut dolorem nesciunt. Et blanditiis alias deleniti quidem consectetur molestiae.', 'https://via.placeholder.com/200x200.png/0088ff?text=ducimus', 1868.76, 8, 0, 1, NULL, 'Molestiae vero vel eos nostrum tempora voluptas officiis fugit.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(8, 'voluptas eos iure', 'voluptas-eos-iure', 'Accusantium sit non molestiae. Consequatur quia quas reprehenderit mollitia. Voluptatum id nisi impedit similique aut dolores facere. At laborum soluta error reiciendis commodi magnam.', 'https://via.placeholder.com/200x200.png/0011ff?text=qui', 1497.28, 6, 0, 1, NULL, 'Eum aspernatur quia eaque pariatur neque.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(9, 'dolor quia impedit', 'dolor-quia-impedit', 'Hic rerum neque quibusdam rerum. Provident corporis neque consequuntur vitae ut sed rerum et. Consectetur placeat fugit nobis consectetur ab.', 'https://via.placeholder.com/200x200.png/0088cc?text=enim', 658.24, 8, 1, 0, NULL, 'Rerum at voluptas porro minus voluptas a.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(10, 'iusto tenetur laboriosam', 'iusto-tenetur-laboriosam', 'Neque et et non enim quasi iusto voluptatem. Vel nihil magni distinctio mollitia cum a molestiae. Quia voluptatem recusandae voluptas amet similique odit dolores.', 'https://via.placeholder.com/200x200.png/00ddaa?text=sit', 1463.63, 1, 1, 0, NULL, 'Quasi doloribus delectus maiores.', '2023-09-02 22:19:17', '2023-09-02 22:19:17'),
(11, 'aut minus facere', 'aut-minus-facere', 'Eius voluptates facere rem reiciendis omnis qui. Nulla suscipit assumenda et sunt. Illo aut distinctio rem hic eveniet animi.', 'https://via.placeholder.com/200x200.png/00cc22?text=esse', 856.18, 3, 0, 0, NULL, 'Et maxime voluptatem perferendis dolor.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(12, 'porro labore quidem', 'porro-labore-quidem', 'Quis quo omnis debitis voluptatem dolorum et assumenda. Distinctio consectetur veritatis et aut provident architecto sunt. Nemo repellendus fugiat corporis sit veniam.', 'https://via.placeholder.com/200x200.png/0066ee?text=molestias', 1845.84, 4, 0, 1, NULL, 'Sed id inventore praesentium aspernatur.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(13, 'corporis excepturi praesentium', 'corporis-excepturi-praesentium', 'Voluptatem tempore ducimus quis tenetur reprehenderit. Et expedita omnis deleniti eos. Doloribus voluptas nam omnis nesciunt. Similique explicabo adipisci libero dolor ut corporis corporis. Ullam incidunt porro rerum.', 'https://via.placeholder.com/200x200.png/0011bb?text=quis', 1661.44, 2, 0, 0, NULL, 'Necessitatibus qui ipsum aut earum id nihil porro omnis.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(14, 'officia ipsam possimus', 'officia-ipsam-possimus', 'Culpa repudiandae consectetur quia beatae facilis in. Quia accusantium laudantium unde sunt facere mollitia doloremque.', 'https://via.placeholder.com/200x200.png/00aa44?text=voluptas', 1753.15, 3, 1, 1, NULL, 'Similique minus ut excepturi omnis et omnis consequatur.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(15, 'et non non', 'et-non-non', 'Ea in ut aut et qui. Facilis voluptate voluptatibus reprehenderit aliquam consequatur.', 'https://via.placeholder.com/200x200.png/0077dd?text=commodi', 1734.84, 4, 1, 0, NULL, 'Quod non qui eius.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(16, 'voluptatem ipsum a', 'voluptatem-ipsum-a', 'Aut aut nostrum dolor distinctio dolor explicabo. Natus in officiis fugit et voluptates quasi incidunt explicabo. Ipsam ipsam consectetur architecto. Corporis voluptate animi commodi voluptatem sunt aperiam. Ipsam enim odit cum et.', 'https://via.placeholder.com/200x200.png/00aa44?text=omnis', 644.06, 4, 0, 1, NULL, 'Saepe repellendus quisquam eos sed est quasi eligendi.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(17, 'sed vitae odit', 'sed-vitae-odit', 'Suscipit est dolorum nesciunt autem. Quam minima architecto doloremque velit qui voluptates repellat.', 'https://via.placeholder.com/200x200.png/00aa88?text=molestiae', 700.76, 2, 1, 0, NULL, 'Expedita voluptatibus et maxime aut vel sunt quis cum.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(18, 'maiores quibusdam vero', 'maiores-quibusdam-vero', 'Qui ipsa sit a at. Aut harum et occaecati dolorem facere saepe. Ab eos fugiat error laborum earum blanditiis. Dolores est culpa cumque reprehenderit quaerat impedit.', 'https://via.placeholder.com/200x200.png/0033cc?text=tenetur', 1203.10, 8, 0, 1, NULL, 'Nisi exercitationem voluptatem ut mollitia.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(19, 'et expedita repudiandae', 'et-expedita-repudiandae', 'Aspernatur error expedita minima in. Quibusdam eos pariatur praesentium eaque quia autem ut dolorem. Sunt ut facere est enim minus. Autem omnis quis asperiores debitis. Illum maxime doloribus ab dolores.', 'https://via.placeholder.com/200x200.png/00ee33?text=sint', 1605.25, 3, 1, 0, NULL, 'Ut quidem dolores optio voluptas nulla et assumenda.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(20, 'velit similique nemo', 'velit-similique-nemo', 'Rerum dolorum nobis magnam voluptatem minus ipsa qui. Doloremque qui eum blanditiis aut. Facere autem magnam veniam expedita.', 'https://via.placeholder.com/200x200.png/005544?text=beatae', 615.77, 4, 1, 1, NULL, 'Odio sed dolore id aspernatur et dolores.', '2023-09-02 22:21:56', '2023-09-02 22:21:56'),
(21, 'test service form i', 'test service form i', 'test service form i', 'C:\\xampp\\tmp\\phpFA16.tmp', 200.00, 5, 1, 1, NULL, NULL, '2023-09-03 01:38:27', '2023-09-03 01:38:27'),
(22, 'test service form iiii', 'test service form iiii', 'test service form iiii', 'C:\\xampp\\tmp\\phpF183.tmp', 200.00, 5, 1, 1, NULL, NULL, '2023-09-03 02:05:42', '2023-09-03 02:05:42'),
(23, 'this is slug test %% / ? %', 'this-is-slug-test', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'C:\\xampp\\tmp\\php403B.tmp', 200.00, 5, 1, 1, NULL, NULL, '2023-09-03 03:01:06', '2023-09-03 03:01:06');

-- --------------------------------------------------------

--
-- Table structure for table `service_categories`
--

CREATE TABLE `service_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoryName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `parentCategoryId` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `userDetailsId` bigint(20) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `userType` enum('admin','staff','customer') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'customer',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `birthdate` date DEFAULT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `postCode` int(11) NOT NULL,
  `street` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `SpecialInstructions` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'bangladesh',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_phone_unique` (`phone`),
  ADD UNIQUE KEY `admins_email_unique` (`email`),
  ADD UNIQUE KEY `admins_verification_code_unique` (`verification_code`),
  ADD KEY `admins_userdetailsid_foreign` (`userDetailsId`);

--
-- Indexes for table `attribiutes`
--
ALTER TABLE `attribiutes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `attribiutes_productid_foreign` (`productId`),
  ADD KEY `attribiutes_attribiuteimgid_foreign` (`attribiuteImgId`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_phone_unique` (`phone`),
  ADD UNIQUE KEY `customers_email_unique` (`email`),
  ADD UNIQUE KEY `customers_verification_code_unique` (`verification_code`),
  ADD KEY `customers_userdetailsid_foreign` (`userDetailsId`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `media_images`
--
ALTER TABLE `media_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orders_customerid_foreign` (`customerId`),
  ADD KEY `orders_serviceid_foreign` (`serviceId`),
  ADD KEY `orders_productid_foreign` (`productId`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_categoryid_foreign` (`categoryId`),
  ADD KEY `products_brandid_foreign` (`brandId`),
  ADD KEY `products_thumbimgid_foreign` (`thumbImgId`),
  ADD KEY `products_attribiuteid_foreign` (`attribiuteId`);

--
-- Indexes for table `product_models`
--
ALTER TABLE `product_models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `queues`
--
ALTER TABLE `queues`
  ADD PRIMARY KEY (`id`),
  ADD KEY `queues_orderid_foreign` (`orderId`),
  ADD KEY `queues_serviceid_foreign` (`serviceId`),
  ADD KEY `queues_staffid_foreign` (`staffId`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_categories`
--
ALTER TABLE `service_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_phone_unique` (`phone`),
  ADD KEY `users_userdetailsid_foreign` (`userDetailsId`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `attribiutes`
--
ALTER TABLE `attribiutes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `media_images`
--
ALTER TABLE `media_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `product_models`
--
ALTER TABLE `product_models`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `queues`
--
ALTER TABLE `queues`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `service_categories`
--
ALTER TABLE `service_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admins`
--
ALTER TABLE `admins`
  ADD CONSTRAINT `admins_userdetailsid_foreign` FOREIGN KEY (`userDetailsId`) REFERENCES `user_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `attribiutes`
--
ALTER TABLE `attribiutes`
  ADD CONSTRAINT `attribiutes_attribiuteimgid_foreign` FOREIGN KEY (`attribiuteImgId`) REFERENCES `media_images` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `attribiutes_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_userdetailsid_foreign` FOREIGN KEY (`userDetailsId`) REFERENCES `user_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_customerid_foreign` FOREIGN KEY (`customerId`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_productid_foreign` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_serviceid_foreign` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_attribiuteid_foreign` FOREIGN KEY (`attribiuteId`) REFERENCES `attribiutes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_brandid_foreign` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_categoryid_foreign` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_thumbimgid_foreign` FOREIGN KEY (`thumbImgId`) REFERENCES `media_images` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `queues`
--
ALTER TABLE `queues`
  ADD CONSTRAINT `queues_orderid_foreign` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `queues_serviceid_foreign` FOREIGN KEY (`serviceId`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `queues_staffid_foreign` FOREIGN KEY (`staffId`) REFERENCES `staffs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_userdetailsid_foreign` FOREIGN KEY (`userDetailsId`) REFERENCES `user-details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
