import './masterlist.css';

export const MasterList = ({ showMasterList, closeMasterList }) => {
  if (!showMasterList) return null;

  return (
    <div className="masterListOverlay" onClick={closeMasterList}>
      <div
        className="masterListContainer"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="title">
          <h2>BENIGNO AQUINO JR. HIGH SCHOOL</h2>
          <h2>SY 2025-2026</h2>
          <h2>SECTION 3 - MASTERLIST</h2>
        </div>

        <div className="studentList">
          <div className="maleStudents">
            <h2>BOYS</h2>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>9</p>
            <p>10</p>
          </div>

          <div className="femaleStudents">
            <h2>GIRLS</h2>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>9</p>
            <p>10</p>
          </div>
        </div>

        <div className="masterListBtns">
          <button>Print</button>
        </div>
      </div>
    </div>
  );
};
