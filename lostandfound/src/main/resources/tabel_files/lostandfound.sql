/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50556
Source Host           : localhost:3306
Source Database       : lostandfound

Target Server Type    : MYSQL
Target Server Version : 50556
File Encoding         : 65001

Date: 2017-12-10 08:13:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for find_info
-- ----------------------------
DROP TABLE IF EXISTS `find_info`;
CREATE TABLE `find_info` (
  `find_id` int(11) NOT NULL AUTO_INCREMENT,
  `find_name` varchar(40) DEFAULT NULL,
  `find_trait` varchar(50) DEFAULT NULL,
  `find_place` varchar(100) DEFAULT NULL,
  `find_time` datetime DEFAULT NULL,
  `finder_name` varchar(20) DEFAULT NULL,
  `finder_contact` varchar(30) DEFAULT NULL,
  `store_place` varchar(30) DEFAULT NULL,
  `store_date` datetime DEFAULT NULL,
  `hasReturn` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`find_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of find_info
-- ----------------------------
INSERT INTO `find_info` VALUES ('1', '钥匙', '古铜色', '北操', '2015-05-18 15:37:47', 'ggbang', '12636123782', null, '2016-02-18 15:38:14', '0');
INSERT INTO `find_info` VALUES ('2', '手机', '黑莓', '北教', '2017-10-31 00:00:00', '超强', '15725467890', '18#A712', '2017-12-01 20:10:49', '0');
INSERT INTO `find_info` VALUES ('3', '手提包', '粉色', '南苑', '2017-08-09 00:00:00', 'wzhx', '15676589090', '6栋503', '2017-12-02 12:05:31', '1');
INSERT INTO `find_info` VALUES ('4', '手提包', '白色', '广金', '2017-07-09 00:00:00', 'wzh', '15678790890', '5b655', '2017-12-02 12:18:58', '0');
INSERT INTO `find_info` VALUES ('5', '萨摩耶', '犬', '7栋教学楼', '2017-09-09 00:00:00', 'wzhx', '15816960462', '', '2017-12-02 22:16:15', '0');
INSERT INTO `find_info` VALUES ('6', 'aaa', '', 'aaa', '2017-10-10 00:00:00', 'wzhx', '15816960462', '', '2017-12-03 00:15:42', '0');
INSERT INTO `find_info` VALUES ('7', 'U盘', '金士顿，红色', '1栋教学3楼', '2017-10-10 00:00:00', 'wzhx', '15816960462', '', '2017-12-10 07:41:58', '0');
INSERT INTO `find_info` VALUES ('9', '手链', '', '2教', '2017-12-01 00:00:00', 'hhxx', '', '', '2017-12-10 07:59:10', '0');
INSERT INTO `find_info` VALUES ('10', '白痴', '人', '17#A711', '2017-10-10 00:00:00', 'hhxx', '15816960462', '', '2017-12-10 08:07:55', '0');

-- ----------------------------
-- Table structure for lost_info
-- ----------------------------
DROP TABLE IF EXISTS `lost_info`;
CREATE TABLE `lost_info` (
  `lost_id` int(11) NOT NULL AUTO_INCREMENT,
  `lost_name` varchar(40) DEFAULT NULL,
  `lost_trait` varchar(30) DEFAULT NULL,
  `lost_place` varchar(100) DEFAULT NULL,
  `lost_time` datetime DEFAULT NULL,
  `losser_name` varchar(20) DEFAULT NULL,
  `losser_contact` varchar(30) DEFAULT NULL,
  `post_date` datetime DEFAULT NULL,
  `hasFound` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`lost_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lost_info
-- ----------------------------
INSERT INTO `lost_info` VALUES ('1', '鼠标', '无线', '北教D503', '2015-06-10 00:00:00', 'wzhx', '18826078352', '2015-06-12 00:00:00', '0');
INSERT INTO `lost_info` VALUES ('2', '饭卡', '帅照', '饭堂', '2016-07-08 00:00:00', 'wzhx', '18826078352', '2017-08-08 00:00:00', '0');
INSERT INTO `lost_info` VALUES ('4', '教科书', '理工类，黑色封面', '7栋602', '2017-10-10 00:00:00', '黄泽轩', '18816978462', '2017-11-19 00:00:00', '0');
INSERT INTO `lost_info` VALUES ('5', '波波', '犬，白色，萨摩', '17B611', '2017-06-06 00:00:00', '蔡基魃', '13347651476', '2017-11-18 18:04:21', '0');
INSERT INTO `lost_info` VALUES ('6', 'acassa', 'sadasd', 'ascdad', '2017-07-29 00:00:00', 'sddadd', 'qq:2661504653', '2017-11-18 18:07:51', '1');
INSERT INTO `lost_info` VALUES ('7', 'dacascfa', 'asdasdc', 'asfda', '2017-08-07 00:00:00', 'scsd', '2407660352@qq.com', '2017-11-18 18:09:09', '1');
INSERT INTO `lost_info` VALUES ('8', '', '', '', null, '', '', '2017-11-30 23:56:34', '1');
INSERT INTO `lost_info` VALUES ('9', '孙道存', '', 'sada', '2017-08-09 00:00:00', '林君', '15816960462', '2017-12-02 20:04:17', '0');
INSERT INTO `lost_info` VALUES ('10', 'adsa', '无', 'adsas', '2017-08-07 00:00:00', 'wzhx', '15816960462', '2017-12-02 22:29:46', '0');
INSERT INTO `lost_info` VALUES ('11', '笔记本', '黑色', '图书馆附近', '2017-11-11 00:00:00', 'hhxx', '15816960462', '2017-12-10 00:00:00', '0');
INSERT INTO `lost_info` VALUES ('12', 'bbb', '', '圣埃蒂安', '2017-12-03 00:00:00', 'hhxx', '15816960462', '2017-12-10 00:00:00', '0');

-- ----------------------------
-- Table structure for nav_man
-- ----------------------------
DROP TABLE IF EXISTS `nav_man`;
CREATE TABLE `nav_man` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(30) DEFAULT NULL,
  `state` char(10) NOT NULL DEFAULT '',
  `iconCls` varchar(20) DEFAULT NULL,
  `url` varchar(50) DEFAULT NULL,
  `pid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of nav_man
-- ----------------------------
INSERT INTO `nav_man` VALUES ('1', '管理员模块', 'closed', null, null, '0');
INSERT INTO `nav_man` VALUES ('2', '管理员管理', 'open', null, 'man_table1.jsp', '1');
INSERT INTO `nav_man` VALUES ('3', '用户模块', 'closed', null, null, '0');
INSERT INTO `nav_man` VALUES ('4', '用户管理', 'open', null, 'man_table2.jsp', '3');
INSERT INTO `nav_man` VALUES ('5', '信息模块', 'closed', null, null, '0');
INSERT INTO `nav_man` VALUES ('6', '失物信息', 'open', null, 'lost_table.jsp', '5');
INSERT INTO `nav_man` VALUES ('7', '招领信息', 'open', null, 'found_table.jsp', '5');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `password` varchar(25) NOT NULL,
  `QQ` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `user_role` int(1) DEFAULT '2',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'admin', 'admin', '473365292', 'admin@ls.com', '18826078352', '1');
INSERT INTO `user_info` VALUES ('2', 'wjcx', 'wjcx', '22362313122', '212321312@qq.com', '1823748827', '1');
INSERT INTO `user_info` VALUES ('3', 'aaabbb', 'aaabbb', '', 'ab@ls.com', '12347272922', '1');
INSERT INTO `user_info` VALUES ('16', 'xxxxx', 'xxxxxx', '2345668767', '1565468@126.com', '', '1');
INSERT INTO `user_info` VALUES ('17', 'sssss', 'ssssss', null, null, null, '1');
INSERT INTO `user_info` VALUES ('18', 'dddd', 'dddddd', null, null, null, '1');
INSERT INTO `user_info` VALUES ('19', 'asasas', 'asasas', null, null, null, '1');
INSERT INTO `user_info` VALUES ('20', 'asdadsa', 'asdassd', null, null, null, '1');
INSERT INTO `user_info` VALUES ('21', 'asda', 'asdasf', null, null, null, '1');
INSERT INTO `user_info` VALUES ('22', 'asffasf', 'asdasfas', null, null, null, '1');
INSERT INTO `user_info` VALUES ('23', 'wzhx', 'wzh123', '2592861470', '2592861470@qq.com', '15816960462', '2');
INSERT INTO `user_info` VALUES ('24', 'hhxz', 'hhx123', null, null, null, '1');
INSERT INTO `user_info` VALUES ('25', 'hhxx', 'hhx123', '2407660352', '2407660352@qq.com', '15816960462', '2');
INSERT INTO `user_info` VALUES ('26', 'Zive', '666666', null, null, null, '1');
