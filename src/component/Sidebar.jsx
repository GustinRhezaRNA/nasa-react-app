export default function Sidebar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
