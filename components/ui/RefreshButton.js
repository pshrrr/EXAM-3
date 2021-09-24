function RefreshButton() {
  return (
    <div>
      <button className="btn-2" onClick={() => location.reload()}>
        {" "}
        Refresh Page
      </button>
    </div>
  );
}

export default RefreshButton;
