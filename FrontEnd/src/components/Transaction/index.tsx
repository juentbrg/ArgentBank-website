import './index.scss'

interface TransactionProps {
  type: string
  id: string
  amount: string
  status: string
}

const Transaction = ({ type, id, amount, status }: TransactionProps) => {
  return (
    <div className="transaction">
      <div className="transaction__left">
        <p className="transaction__type">
          Argent Bank {type} (x{id})
        </p>
        <p className="transaction__amount">${amount}</p>
        <p className="transaction__status">{status} Balance</p>
      </div>
      <div className="transaction__right">
        <button className="transaction__btn">View transactions</button>
      </div>
    </div>
  )
}

export default Transaction
