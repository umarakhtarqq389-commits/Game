import React from "react";
import "./Promo.scss";

export default function Promo() {
  const promos = [
    { id: 1, title: "Welcome Bonus", desc: "Get 100% bonus on your first deposit!" },
    { id: 2, title: "Weekly Cashback", desc: "Enjoy 10% cashback every week on losses." },
    { id: 3, title: "VIP Rewards", desc: "Exclusive offers for loyal players." },
    { id: 4, title: "Referral Bonus", desc: "Invite friends & earn up to $50." },
  ];

  return (
    <div className="promo-page">
      <h2 className="promo-title">Exclusive Promotions</h2>
      <div className="promo-list">
        {promos.map((promo) => (
          <div key={promo.id} className="promo-card">
            <h3>{promo.title}</h3>
            <p>{promo.desc}</p>
            <button>Claim Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
