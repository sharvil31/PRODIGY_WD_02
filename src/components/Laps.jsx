
const Laps = ({ laps }) => {

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className="w-[60%] md:w-[55%] mt-2 md:mt-2 bg-stone-900 p-3 rounded-md max-h-40 overflow-y-auto text-center">
      <ul>
      {
        laps.length > 0 ? (
        laps.map((lap, index) => (
          <li key={index} className="bg-gray-600 p-2 my-3 text-xl rounded-md text-white font-semibold">
            {`${index + 1}]`} {formatNumber(lap.minutes)} : {formatNumber(lap.seconds)} : {formatNumber(lap.miliseconds)}
          </li>
        ))
      ) : (
        <p>No laps recorded yet.</p>
      )
      }
    </ul>
    </div>
    );
  };

export default Laps;
