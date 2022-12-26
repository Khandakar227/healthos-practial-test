/**
 * Fluctuation from previous year refers to the percentage of difference between previous month/year and current
 */
export default function AverageOrderValue({amount,fluctuationFromPrev, comparedTo}:{amount:number, comparedTo?:string, fluctuationFromPrev:number}) {
  return (
    <div className="bg-white p-4 rounded-md shadow font-lato grid items-center">
    <p className="py-4 text-gray-600"> Average order value </p>
    <div className="flex gap-4 justify-between items-baseline">
      <span className="text-2xl font-bolder py-4">TK {amount}</span>
      <div>
        <p className={`${fluctuationFromPrev > 0 ? "text-green-500" : fluctuationFromPrev<0 ? "text-red-500" : "text-gray-400"} py-4 text-right`}> {fluctuationFromPrev || 0}% </p>
        {comparedTo ? <p className="text-xs text-gray-600"> Compared to {comparedTo} </p> : ""}
      </div>
    </div>
  </div>
  )
}
