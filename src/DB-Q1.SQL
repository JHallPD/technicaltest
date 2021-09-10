/*
this should delete all duplicate users while keeping the user with the lowest id.
in case there are duplicate user_names with different passwords remove "and t1.User_password = t2.User_password"
*/
/* Q1 */
delete from users t1
where exists (select 1 from users t2
              where t1.User_name = t2.User_name and t1.User_password = t2.User_password
                and t1.User_ID < t2.User_ID)

/* Q2 */

/* A */
givenUser = 1
SELECT * from sessions
where user_id = givenUser

/* B */
/*
 I am assume that the group table contains more then an id and name here because otherwise there is nothing to connect a user to a group
*/
givenUserGroup = 1
SELECT * FROM scene WHERE scene_id IN
(SELECT scene_id FROM session WHERE user_id IN
                          (SELECT id FROM users WHERE group_id = givenUserGroup))
