import "../../styles/loader.css";

const Loader = () => {
  return (
    <>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="message">Loading</p>
    </>
  );
};

export default Loader;
