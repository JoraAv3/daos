import React, { useState } from "react";
import "./index.css";
import Button from "../Button";
import Block from "../Block";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(
    localStorage.getItem("referral_code")
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleApplyClick = async () => {
    const userId = localStorage.getItem("user_id");

    if (!userId) {
      console.error("User ID is not available");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/modal-status/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id: userId }),
        }
      );

      if (response.ok) {
        // Закрываем модалку и обновляем UI
        setModalOpen(false);
        setReferralCode(localStorage.getItem("referral_code"));
      } else {
        console.error("Failed to update modal status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <img src="../src/assets/image.png" className="logo" alt="Logo" />
            <div className="header-text">
              <div className="service-name">DAOS.SCIENCE</div>
              <div className="service-info">
                A Decentralized Patient <br /> Network for DeSci projects.
              </div>
            </div>
          </div>
          <div>
            {referralCode ? (
              <div className="referral-code-display">
                Ref Code: <strong>{referralCode}</strong>
              </div>
            ) : (
              <Button text="APPLY TO JOIN" onClick={handleOpenModal} />
            )}
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Block className="modal-header">
              <button className="close-button" onClick={handleCloseModal}>
                ×
              </button>
              <h2 className="modal-title">APPLY TO JOIN DAOS SCIENCE</h2>
            </Block>
            <Block className="modal-body">
              <h3 className="modal-subtitle">
                Get early access to the <br /> Decentralized Patient Passport
                <br />
              </h3>
              <p className="modal-description">
                Sell your health data. Participate in early DeSci experiments
                and earn.
              </p>
            </Block>
            <div className="ref-code-input">
              <label htmlFor="ref-code">REF CODE</label>
              <input
                id="ref-code"
                type="text"
                value={localStorage.getItem("referral_code") || "N/A"}
                readOnly
                placeholder="No referral code available"
              />
            </div>
            <button className="apply-button" onClick={handleApplyClick}>
              APPLY
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
