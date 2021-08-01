export default function Button({
  name,
  col,
  type,
  onClick
}) {
  const handleClick = () => {
    onClick(name);
  }
  
  const className = [
    'App__Button',
    col ? 'col__' + col : '',
    type ? 'is--' + type : '',
  ];

  return (
    <div className={ className.join(' ').trim() }>
      <button onClick={handleClick}>{ name }</button>
    </div>
  );
}
