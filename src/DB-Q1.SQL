/*
this should delete all duplicate users while keeping the user with the lowest id.
in case there are duplicate user_names with different passwords remove "and t1.User_password = t2.User_password"
*/
delete from users t1
where exists (select 1 from users t2
              where t1.User_name = t2.User_name and t1.User_password = t2.User_password
                and t1.User_ID < t2.User_ID)

