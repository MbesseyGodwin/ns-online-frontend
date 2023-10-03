import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faCamera, faShare } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';

const actions = [
  { label: 'Print', icon: faPrint, action: () => window.print() },
  { label: 'Capture', icon: faCamera, action: captureScreenshot },
  { label: 'Share', icon: faShare, action: sharePage },
  // Add more actions as needed
];

function captureScreenshot() {
  html2canvas(document.body).then(canvas => {
    const screenshotDataUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = screenshotDataUrl;
    downloadLink.download = 'screenshot.png';
    downloadLink.click();
  });
}

function sharePage() {
  const alertTimeout = 3000;

  function closeAlert() {
    const alertElement = document.querySelector('.alert');
    if (alertElement) {
      alertElement.style.display = 'none';
    }
  }

  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this page!',
      url: window.location.href
    })
      .then(() => setTimeout(closeAlert, alertTimeout))
      .catch(error => {
        console.error('Error sharing:', error);
        setTimeout(closeAlert, alertTimeout);
      });
  } else {
    alert('Web Share API not supported');
    setTimeout(closeAlert, alertTimeout);
  }
}

function SpeedDial() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSpeedDial = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container py-3 px-1 d-inline speed-dial ${isOpen ? 'open' : ''} ${isOpen ? 'bg-secondary' : ''}`}>
      {isOpen &&
        actions.map((action, index) => (
          <button key={index} className="btn btn-primary mx-2 speed-dial-button" onClick={action.action}>
            <span className="speed-dial-icon">
              <FontAwesomeIcon icon={action.icon} />
            </span>{" "}
            <span className="speed-dial-label">{action.label}</span>
          </button>
        ))}

      <button className={`${isOpen ? ' btn bg-danger' : 'bg-primary p-3 rounded'}`} onClick={toggleSpeedDial}>
        <i className={`fas toggle-icon ${isOpen ? 'fa-times' : 'fa-plus fa-2xl'}`} />
        {isOpen ? ' Close' : ''}
      </button>
    </div>
  );
}

export default SpeedDial;
