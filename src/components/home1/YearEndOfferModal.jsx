import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Gift, Diamond, Palette, Calendar, ArrowRight } from 'lucide-react';
import './YearEndOfferModal.css';

/**
 * Year-End Offer Modal
 * A conversion-optimized promotional popup applying UX principles:
 * - Aesthetic-Usability Effect: Beautiful design increases perceived value
 * - Von Restorff Effect: Stands out from the page
 * - Law of Scarcity: Limited-time offer creates urgency
 * - Color Psychology: Warm, festive colors for engagement
 * - Hick's Law: Single, clear CTA
 * - Fitts's Law: Large clickable CTA button
 * - Gestalt Principles: Visual hierarchy and grouping
 */
function YearEndOfferModal({ isOpen, onClose, onCTAClick }) {
  const modalRef = useRef(null);

  // Focus management for accessibility
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="year-end-offer-overlay" onClick={onClose}>
      <div 
        className="year-end-offer-container" 
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        {/* Close Button */}
        <button 
          className="year-end-offer-close" 
          onClick={onClose}
          aria-label="Close offer"
        >
          <X size={24} />
        </button>

        <div className="year-end-offer-content">
          {/* Einri Living Logo */}
          <div className="year-end-logo-container">
            <img 
              src="/home1/assets/img/preloader.png" 
              alt="Einri Living" 
              className="year-end-logo"
            />
          </div>

          {/* Main Heading */}
          <h2 className="year-end-heading">
            Your Dream Home Deserves a Grand Year-End Gift!
          </h2>

          {/* Subheading */}
          <p className="year-end-subheading">
            This season, let's wrap your 3BHK in warmth, art, and a little magic.
          </p>

          {/* Offer Section */}
          <div className="year-end-offer-box">
            <div className="year-end-offer-badge">Limited Time Offer</div>
            <h3 className="year-end-offer-title">
              Book your 3BHK Interior Design + Execution
            </h3>
            <p className="year-end-offer-subtitle">and unlock:</p>

            {/* Benefits List */}
            <div className="year-end-benefits">
              <div className="year-end-benefit-item">
                <Diamond className="benefit-icon" size={24} />
                <div className="benefit-content">
                  <span className="benefit-highlight">₹50,000 worth</span> of complimentary furnishings!
                </div>
              </div>

              <div className="year-end-benefit-item">
                <Palette className="benefit-icon" size={24} />
                <div className="benefit-content">
                  <span className="benefit-highlight">1 Room 3D Design</span> — on the house!
                </div>
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <p className="year-end-inspiration">
            A beautiful home isn't just designed… it's crafted with intention.
          </p>

          {/* Urgency Section */}
          <div className="year-end-urgency">
            <Calendar className="urgency-icon" size={20} />
            <span className="urgency-text">
              Offer valid till December 31st
            </span>
          </div>

          {/* CTA Button */}
          <button 
            className="year-end-cta-btn"
            onClick={onCTAClick}
          >
            <Gift size={20} />
            <span>Book My Year-End Consultation</span>
            <ArrowRight size={20} />
          </button>

          {/* Trust Badge */}
          <div className="year-end-trust-badge">
            <span>✨ Trusted by 100+ homeowners across India</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YearEndOfferModal;
