-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
CREATE DATABASE acquatec;

USE acquatec;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    cpf CHAR(11),
    tel CHAR(9),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DOUBLE,
	umidade DOUBLE,
	momento DATETIME,
	fk_signos INT
);

-- DROP DATABASE acquatec;

/* para sql server - remoto - produção

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DOUBLE,
	umidade DOUBLE,
	momento DATETIME,
	fk_aquario INT
);

*/