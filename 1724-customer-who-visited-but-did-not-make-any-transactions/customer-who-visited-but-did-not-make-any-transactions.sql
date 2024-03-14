# Write your MySQL query statement below
SELECT customer_id, COUNT(Visits.visit_id) as 'count_no_trans' from Visits LEFT OUTER JOIN Transactions on Visits.visit_id = Transactions.visit_id 
WHERE transaction_id is NULL
GROUP BY customer_id