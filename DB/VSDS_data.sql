
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
    ('George','Small','gsmall@villanova.edu','Gsmall2','george_small','roommate-matcher',2026);
 


insert into president values ('hcormie2@villanova.edu', 2, 'able to commit to main on the github repo');

insert into president values ('dbekhit@villanova.edu', 2, 'able to commit to main on the github repo');



insert into exec_board values ('hcormie2@villanova.edu', 'roommate-matcher', 2, 'President');

insert into exec_board values ('dbekhit@villanova.edu', 'roommate-matcher', 2, 'President');

insert into exec_board values('pbutton@villanova.edu', 'roommate-matcher', 2, 'VP');

insert into exec_board values('dmess@villanova.edu', 'market-place', 1, 'VP');



insert into manages values ('pbutton@villanova.edu', 'dbekhit@villanova.edu', 2, 'President'); 

insert into manages values ('dmess@villanova.edu', 'hcormie2@villanova.edu', 2, 'President'); 

insert into manages values ('gsmall@villanova.edu', 'pbutton@villanova.edu', 2, 'VP'); 

insert into manages values ('dbekhit@villanova.edu', 'hcormie2@villanova.edu', 2, 'President'); 


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

--DROP TABLE issue;
--DROP TABLE manages;
--DROP TABLE exec_board;
--DROP TABLE president;
--DROP TABLE gen_member;
--DROP TABLE projects;










