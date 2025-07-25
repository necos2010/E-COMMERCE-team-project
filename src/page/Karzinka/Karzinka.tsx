import mockData from '../../Mockdata/data'
const Karzinka = () => {
  return (
    <>
      {mockData.map(item => (
        <div key={item.id}>{item.name} {item.image}</div>
      ))}
    </>
  );
};

export default Karzinka;
