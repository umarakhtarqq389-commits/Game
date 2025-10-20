import React from "react";
import { FaWallet, FaArrowUp, FaArrowDown, FaHistory } from "react-icons/fa";
import "./Wallet.scss";

export default function Wallet() {
  return (
    <div className="wallet-page">
      {/* Wallet Header */}
      <div className="wallet-header">
        <FaWallet className="wallet-icon" />
        <h2>My Wallet</h2>
      </div>

      {/* Balance Section */}
      <div className="wallet-balance">
        <h3>Total Balance</h3>
        <p>$2,450.75</p>
      </div>

      {/* Action Buttons */}
      <div className="wallet-actions">
        <button className="deposit">
          <FaArrowDown /> Deposit
        </button>
        <button className="withdraw">
          <FaArrowUp /> Withdraw
        </button>
      </div>

      {/* Transaction History */}
      <div className="wallet-history">
        <h3>
          <FaHistory /> Recent Transactions
        </h3>
        <ul>
          <li className="deposit">
            <span>Deposit</span>
            <span>+ $500</span>
          </li>
          <li className="withdraw">
            <span>Withdraw</span>
            <span>- $200</span>
          </li>
          <li className="deposit">
            <span>Deposit</span>
            <span>+ $1000</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
