import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { editActive, removeTransaction } from "../../features/transaction/transactionSlice";

const TransactionsList = ({ transaction }) => {
  const dispatch = useDispatch();
  const { id, name, amount, type } = transaction || {};

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button onClick={handleEdit} className="link">
          <FaEdit />
        </button>
        <button onClick={handleDelete} className="link">
          <RiDeleteBin5Line />
        </button>
      </div>
    </li>
  );
};

export default TransactionsList;
