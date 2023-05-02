CREATE TABLE projects (
  proj_name    VARCHAR2(50) NOT NULL, 
  github_repo  VARCHAR2(50) NOT NULL,
  languages    VARCHAR2(50) NOT NULL,
  timeline     VARCHAR2(50),
  is_started   CHAR(1),
  is_complete  CHAR(1),
  PRIMARY KEY (github_repo)
);

CREATE TABLE gen_member (
  fname          VARCHAR2(15) NOT NULL, 
  lname          VARCHAR2(15) NOT NULL,
  email          VARCHAR2(50) NOT NULL,
  github_user    VARCHAR2(50),
  discord_user   VARCHAR2(50),
  project_repo   VARCHAR2(50),
  class_year     NUMBER(4),
  PRIMARY KEY (email),
  FOREIGN KEY (project_repo) REFERENCES projects(github_repo)
);

CREATE TABLE president (
  pres_email         VARCHAR2(50) NOT NULL,
  term_number        NUMBER(2) NOT NULL,
  special_privileges VARCHAR2(100) NOT NULL,
  PRIMARY KEY (pres_email, term_number),
  FOREIGN KEY (pres_email) REFERENCES gen_member(email)
);

CREATE TABLE exec_board (
  exec_email   VARCHAR2(50) NOT NULL,
  project_repo VARCHAR2(50),
  term_num     NUMBER(2) NOT NULL,
  pos          VARCHAR2(15) NOT NULL,
  PRIMARY KEY (exec_email, term_num, pos),
  FOREIGN KEY (exec_email) REFERENCES gen_member(email),
  FOREIGN KEY (project_repo) REFERENCES projects(github_repo)
);

CREATE TABLE manages (
  manage_email VARCHAR2(50) NOT NULL,
  exec_email   VARCHAR2(50) NOT NULL,
  term_num     NUMBER(2) NOT NULL,
  pos          VARCHAR2(15) NOT NULL,
  PRIMARY KEY (manage_email, exec_email),
  FOREIGN KEY (manage_email) REFERENCES gen_member(email),
  FOREIGN KEY (exec_email, term_num, pos) REFERENCES exec_board(exec_email, term_num, pos)
);

CREATE TABLE issue (
  issue_number NUMBER(20) PRIMARY KEY,
  issue_tag    VARCHAR2(30),
  comments     VARCHAR2(255),
  sprint_num   NUMBER(5),
  difficulty   VARCHAR2(10),
  is_started   CHAR(1),
  is_complete  CHAR(1),
  mem_email    VARCHAR2(50),
  project_repo VARCHAR2(50),
  FOREIGN KEY (mem_email) REFERENCES gen_member(email),
  FOREIGN KEY (project_repo) REFERENCES projects(github_repo)
);
