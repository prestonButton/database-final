
-- get all projects
select * from projects;

-- get all members
select * from gen_member;

-- get all exec members
select * from exec_board;

-- get all presidents
select * from president;

-- get all managing info
select * from manages;

-- get all issues
select * from issue;

-- get all gen members managed by presidents
SELECT DISTINCT mem.fname, mem.lname
FROM gen_member mem
INNER JOIN manages m ON mem.email = m.manage_email
INNER JOIN president p ON p.pres_email = m.exec_email
WHERE mem.email NOT IN (SELECT pres_email FROM president);

-- all members working on roommate-matcher
SELECT mem.fname, mem.lname
FROM gen_member mem
INNER JOIN projects p ON mem.project_repo = p.github_repo
WHERE p.proj_name = 'matcher';

-- all members working on market-place
SELECT mem.fname, mem.lname
FROM gen_member mem
INNER JOIN projects p ON mem.project_repo = p.github_repo
WHERE p.proj_name = 'market';

-- all exec members working on roommate-matcher
SELECT mem.fname, mem.lname
FROM gen_member mem
INNER JOIN exec_board e ON mem.email = e.exec_email
INNER JOIN projects p ON e.project_repo = p.github_repo
WHERE p.proj_name = 'matcher';

-- all exec members working on market-place
SELECT mem.fname, mem.lname
FROM gen_member mem
INNER JOIN exec_board e ON mem.email = e.exec_email
INNER JOIN projects p ON e.project_repo = p.github_repo
WHERE p.proj_name = 'market';

-- all issues for roommate-matcher
SELECT i.issue_number, i.issue_tag, i.comments, i.sprint_num, i.difficulty, i.is_started, i.is_complete
FROM issue i
INNER JOIN projects p ON i.project_repo = p.github_repo
WHERE p.proj_name = 'matcher';

-- all issues for market-place
SELECT i.issue_number, i.issue_tag, i.comments, i.sprint_num, i.difficulty, i.is_started, i.is_complete
FROM issue i
INNER JOIN projects p ON i.project_repo = p.github_repo
WHERE p.proj_name = 'market';


