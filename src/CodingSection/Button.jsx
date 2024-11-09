function Button({ text, sectionId, onClick }) {
  return (
    <div className="button" id={sectionId} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
