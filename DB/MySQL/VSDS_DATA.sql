
USE VSDS;

INSERT INTO projects VALUES('matcher','roommate-matcher', 'Java, JavaScript, HTML, CSS', 'Two Semesters', 'Y', 'N');
INSERT INTO projects VALUES('market','market-place', 'Java, JavaScript, HTML, CSS, React', 'Two Semesters', 'Y', 'N');

INSERT INTO gen_member VALUES
    ('Holden','Cormier','hcormie2@villanova.edu','Holden-Cormier','Holden-Cormier','roommate-matcher',2024);

INSERT INTO gen_member VALUES
    ('Preston','Button','pbutton@villanova.edu','p-button','Preston','roommate-matcher',2024);

INSERT INTO gen_member VALUES
    ('Danial','Bekhit','dbekhit@villanova.edu','Danny-B','Dbekt','roommate-matcher',2024);

INSERT INTO gen_member VALUES
    ('Diego','Messmacher','dmess@villanova.edu','Diego','diegomess','market-place',2024);

INSERT INTO gen_member VALUES
    ('George','Small','gsmall@villanova.edu','Gsmall','george_small','roommate-matcher',2026);
    
INSERT INTO gen_member VALUES
    ('Fatih','behil','fbeh@villanova.edu','Fatih2','fatih2','market-place',2026);
    
INSERT INTO gen_member VALUES
    ('Jack','Johnston','jjohn@villanova.edu','Jack-John','Jack122','roommate-matcher',2024);
    
INSERT INTO gen_member VALUES
    ('Charlie','Barski','cbarski@villanova.edu','chuck-b','chuck-b','market-place',2024);
    
    
INSERT INTO gen_member VALUES
    ('Jon','Facciunelli','jfac@villanova.edu','jon_fac','jon_fac2024','market-place',2024);
   
INSERT INTO gen_member VALUES
    ('Chris','Mink','cmink3@villanova.edu','Chris_mink','Chris','roommate-matcher',2023);
    

INSERT INTO president VALUES ('hcormie2@villanova.edu', 2, 'able to commit to main on the github repo');

INSERT INTO president VALUES ('dbekhit@villanova.edu', 2, 'able to commit to main on the github repo');


INSERT INTO exec_board VALUES ('hcormie2@villanova.edu', 'roommate-matcher', 2, 'President');

INSERT INTO exec_board VALUES ('dbekhit@villanova.edu', 'roommate-matcher', 2, 'President');

INSERT INTO exec_board VALUES('pbutton@villanova.edu', 'roommate-matcher', 2, 'VP');

INSERT INTO exec_board VALUES('dmess@villanova.edu', 'market-place', 1, 'VP');

INSERT INTO exec_board VALUES('jjohn@villanova.edu', 'roommate-matcher', 2, 'VP');

INSERT INTO exec_board VALUES('cbarski@villanova.edu', 'market-place', 2, 'Finance Chair');

INSERT INTO exec_board VALUES('jfac@villanova.edu', 'market-place', 2, 'Finance Chair');


INSERT INTO manages VALUES ('pbutton@villanova.edu', 'dbekhit@villanova.edu', 2, 'President'); 

INSERT INTO manages VALUES ('dmess@villanova.edu', 'hcormie2@villanova.edu', 2, 'President'); 

INSERT INTO manages VALUES ('gsmall@villanova.edu', 'pbutton@villanova.edu', 2, 'VP'); 

INSERT INTO manages VALUES ('dbekhit@villanova.edu', 'hcormie2@villanova.edu', 2, 'President'); 

INSERT INTO manages VALUES ('fbeh@villanova.edu', 'dmess@villanova.edu', 1, 'VP');

INSERT INTO manages VALUES ('jjohn@villanova.edu', 'hcormie2@villanova.edu', 2, 'President');

INSERT INTO manages VALUES ('cbarski@villanova.edu', 'dbekhit@villanova.edu', 2, 'President');

INSERT INTO manages VALUES ('jfac@villanova.edu', 'dbekhit@villanova.edu', 2, 'President');

INSERT INTO manages VALUES ('cmink3@villanova.edu', 'hcormie2@villanova.edu', 2, 'President');



INSERT INTO issue VALUES(1, 'front-end, unit-tests, wiki', 'Class: A post request that takes a JSON: {"user_id" : "@G2rg34g324"} and returns the users current active listings in a JSON: {"user_id" : "@G2rg34g324" , "active listings" : [all info for active listing 1, all info for active listing 2....] }',
4,'easy','Y','N','hcormie2@villanova.edu','roommate-matcher');

INSERT INTO issue VALUES(4, 'back-end, unit-tests', 'Class: ConpletedListingTest.java
create unit tests for each of the methods in the CompletedListing class. For information on Unit tests look in the UserTest.java file.',
1,'easy','Y','N','pbutton@villanova.edu','roommate-matcher');

INSERT INTO issue VALUES(2, 'back-end, unit-tests, wiki', 'Class: CompletedListingServices.java
Method takes a HashMap<String, String> and a listing_id as inputs and updates the listing with that information',
3,'hard','Y','N','hcormie2@villanova.edu','roommate-matcher');

INSERT INTO issue VALUES(5, 'front-end, unit-tests, wiki', 'Class: CompletedListingServices.java
Method takes a HashMap<String, String> and a listing_id as inputs and updates the listing with that information',
5,'easy','Y','N','dmess@villanova.edu','market-place');

INSERT INTO issue VALUES (3, 'front-end, UI design', 'Improve the user interface for the login page, make it more intuitive and user-friendly', 2, 'medium', 'Y', 'N', 'dbekhit@villanova.edu', 'roommate-matcher');

INSERT INTO issue VALUES (6, 'database, performance', 'Optimize the database queries to reduce the load time on the homepage', 4, 'hard', 'Y', 'N', 'hcormie2@villanova.edu', 'roommate-matcher');

INSERT INTO issue VALUES (7, 'back-end, security', 'Implement a secure login system with password hashing and user authentication', 3, 'hard', 'Y', 'N', 'gsmall@villanova.edu', 'market-place');

INSERT INTO issue VALUES (8, 'front-end, mobile', 'Make the website mobile responsive and ensure that it looks good', 3, 'easy', 'Y', 'N', 'pbutton@villanova.edu', 'market-place');
