
insert into projects values('matcher','roommate-matcher', 'Java, JavaScript, HTML, CSS', 'Two Semesters', 'Y', 'N');
insert into projects values('market','market-place', 'Java, JavaScript, HTML, CSS, React', 'Two Semesters', 'Y', 'N');

insert into gen_member values
    ('Holden','Cormier','hcormie2@villanova.edu','Holden-Cormier','Holden-Cormier','roommate-matcher',2024);

insert into gen_member values
    ('Preston','Button','pbutton@villanova.edu','p-button','Preston','roommate-matcher',2024);

insert into gen_member values
    ('Danial','Bekhit','dbekhit@villanova.edu','Danny-B','Dbekt','roommate-matcher',2024);

insert into gen_member values
    ('Diego','Messmacher','dmess@villanova.edu','Diego','diegomess','market-place',2024);

insert into gen_member values
    ('George','Small','gsmall@villanova.edu','Gsmall','george_small','roommate-matcher',2026);
    
insert into gen_member values
    ('Fatih','behil','fbeh@villanova.edu','Fatih2','fatih2','market-place',2026);
    
insert into gen_member values
    ('Jack','Johnston','jjohn@villanova.edu','Jack-John','Jack122','roommate-matcher',2024);
    
insert into gen_member values
    ('Charlie','Barski','cbarski@villanova.edu','chuck-b','chuck-b','market-place',2024);
    

insert into gen_member values
    ('Charlie','Barski','cbarski@villanova.edu','chuck-b','chuck-b','market-place',2024);
    
insert into gen_member values
    ('Jon','Facciunelli','jfac@villanova.edu','jon_fac','jon_fac2024','market-place',2024);
   
insert into gen_member values
    ('Chris','Mink','cmink3@villanova.edu','Chris_mink','Chris','roommate-matcher',2023);
    



insert into president values ('hcormie2@villanova.edu', 2, 'able to commit to main on the github repo');

insert into president values ('dbekhit@villanova.edu', 2, 'able to commit to main on the github repo');



insert into exec_board values ('hcormie2@villanova.edu', 'roommate-matcher', 2, 'President');

insert into exec_board values ('dbekhit@villanova.edu', 'roommate-matcher', 2, 'President');

insert into exec_board values('pbutton@villanova.edu', 'roommate-matcher', 2, 'VP');

insert into exec_board values('dmess@villanova.edu', 'market-place', 1, 'VP');

insert into exec_board values('jjohn@villanova.edu', 'roommate-matcher', 2, 'VP');

insert into exec_board values('cbarski@villanova.edu', 'market-place', 2, 'Finance Chair');

insert into exec_board values('jfac@villanova.edu', 'market-place', 2, 'Finance Chair');









insert into manages values ('pbutton@villanova.edu', 'dbekhit@villanova.edu', 2, 'President'); 

insert into manages values ('dmess@villanova.edu', 'hcormie2@villanova.edu', 2, 'President'); 

insert into manages values ('gsmall@villanova.edu', 'pbutton@villanova.edu', 2, 'VP'); 

insert into manages values ('dbekhit@villanova.edu', 'hcormie2@villanova.edu', 2, 'President'); 

insert into manages values ('fbeh@villanova.edu', 'dmess@villanova.edu', 1, 'VP');

insert into manages values ('jjohn@villanova.edu', 'hcormie2@villanova.edu', 2, 'President');

insert into manages values ('cbarksi@villanova.edu', 'dbekhit@villanova.edu', 2, 'President');

insert into manages values ('jfac@villanova.edu', 'dbekhit@villanova.edu', 2, 'President');


insert into manages values ('cmink3@villanova.edu', 'hcormie2@villanova.edu', 2, 'President');



insert into issue values(1, 'front-end, unit-tests, wiki', 'Class: A post request that takes a JSON: {"user_id" : "@G2rg34g324"} and returns the users current active listings in a JSON: {"user_id" : "@G2rg34g324" , "active listings" : [all info for active listing 1, all info for active listing 2....] }',
4,'easy','Y','N','hcormie2@villanova.edu','roommate-matcher');

insert into issue values(4, 'back-end, unit-tests', 'Class: ConpletedListingTest.java
create unit tests for each of the methods in the CompletedListing class. For information on Unit tests look in the UserTest.java file.',
1,'easy','Y','N','pbutton@villanova.edu','roommate-matcher');

insert into issue values(2, 'back-end, unit-tests, wiki', 'Class: CompletedListingServices.java
Method takes a HashMap<String, String> and a listing_id as inputs and updates the listing with that information',
3,'hard','Y','N','hcormie2@villanova.edu','roommate-matcher');

insert into issue values(5, 'front-end, unit-tests, wiki', 'Class: CompletedListingServices.java
Method takes a HashMap<String, String> and a listing_id as inputs and updates the listing with that information',
5,'easy','Y','N','dmess@villanova.edu','market-place');



INSERT INTO issue VALUES (3, 'front-end, UI design', 'Improve the user interface for the login page, make it more intuitive and user-friendly', 2, 'medium', 'Y', 'N', 'dbekhit@villanova.edu', 'roommate-matcher');

INSERT INTO issue VALUES (6, 'database, performance optimization', 'Optimize the database queries to reduce the load time on the homepage', 4, 'hard', 'Y', 'N', 'hcormie2@villanova.edu', 'roommate-matcher');

INSERT INTO issue VALUES (7, 'back-end, security', 'Implement a secure login system with password hashing and user authentication', 3, 'hard', 'Y', 'N', 'gsmall@villanova.edu', 'market-place');

INSERT INTO issue VALUES (8, 'front-end, mobile responsiveness', 'Make the website mobile responsive and ensure that it looks good on different devices and screen sizes', 2, 'medium', 'Y', 'N', 'jjohn@villanova.edu', 'roommate-matcher');

INSERT INTO issue VALUES (9, 'back-end, database design', 'Design and implement a new database schema to handle user profiles and preferences', 4, 'hard', 'Y', 'N', 'jfac@villanova.edu', 'market-place');

INSERT INTO issue VALUES (10, 'front-end, accessibility', 'Ensure that the website is accessible to users with disabilities and meets WCAG 2.1 guidelines', 3, 'medium', 'Y', 'N', 'hcormie2@villanova.edu', 'roommate-matcher');

INSERT INTO issue VALUES (11, 'back-end, API integration', 'Integrate a third-party API to display weather information on the homepage', 2, 'easy', 'Y', 'N', 'cbarski@villanova.edu', 'market-place');

INSERT INTO issue VALUES (12, 'front-end, UI/UX testing', 'Perform user testing on the website to identify and fix any usability issues', 3, 'medium', 'Y', 'N', 'dmess@villanova.edu', 'market-place');

INSERT INTO issue VALUES (13, 'back-end, performance optimization', 'Optimize the server-side code to reduce the response time for API requests', 4, 'hard', 'Y', 'N', 'jfac@villanova.edu', 'market-place');

INSERT INTO issue VALUES (14, 'front-end, feature implementation', 'Implement a new feature that allows users to search for products by category', 2, 'easy', 'Y', 'N', 'hcormie2@villanova.edu', 'roommate-matcher');
     


--DROP TABLE issue;
--DROP TABLE manages;
--DROP TABLE exec_board;
--DROP TABLE president;
--DROP TABLE gen_member;
--DROP TABLE projects;










