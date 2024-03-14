# Write your MySQL query statement below
SELECT name from Customer where coalesce(referee_id,'') != '2'