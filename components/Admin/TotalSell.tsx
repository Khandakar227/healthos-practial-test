/**
 * `amount` is the value of total sell
 * 
 * `profit` is a number compared to previous month/year in percentage
 * 
 * `comparedTo` refers to a Date in string. example: `December 2021`
 */
function TotalSell({amount, profit, comparedTo}:{amount:number, profit:number, comparedTo?:string}) {
  return (
    <div className="bg-white p-4 rounded-md shadow font-lato grid items-center">
      <p className="py-4 text-gray-600"> Total Sells </p>
      <div className="flex gap-4 justify-between items-baseline">
        <span className="text-2xl font-bolder py-4">TK {amount}</span>
        <div>
          <p className={`${profit > 0 ? "text-green-500" : profit<0 ? "text-red-500" : "text-gray-400"} py-4 text-right`}> {profit || 0}% </p>
          {comparedTo ? <p className="text-xs text-gray-600"> Compared to {comparedTo} </p> : ""}
          
        </div>
      </div>
    </div>
  );
}

export default TotalSell;
