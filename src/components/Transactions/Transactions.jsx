import { useDispatch, useSelector } from "react-redux";
import TransactionsList from "./TransactionsList";
import { useEffect } from "react";
import { fetchTransactions } from "../../features/transaction/transactionSlice";

const Transactions = () => {
  const dispatch = useDispatch();
  const { transactions, isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  useEffect(() => {
    dispatch(fetchTransactions());
}, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError) {
    content = <p className="text-red-700">{error}</p>;
  }

  if (!isLoading && !isError && transactions?.length === 0) {
    content = <p>No transactions found! Please add one.</p>;
  }

  if (!isLoading && !isError && transactions?.length > 0) {
    content = transactions.map((transaction) => (
      <TransactionsList key={transaction.id} transaction={transaction} />
    ));
  }

  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          {content}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
