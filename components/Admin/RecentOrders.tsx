type orderType = {
  id: string;
  status: string;
  username: string;
  orderDate: string;
  total: number;
};

export default function RecentOrders({ orders=[] }: { orders?: orderType[] }) {
  return (
    <div className="bg-white p-4 rounded-md shadow font-lato grid items-center overflow-hidden">
      <div>
        <h2 className="font-bold py-4 text-xl"> Recent orders </h2>
        <hr />
      </div>
      <div className="py-4 overflow-auto">
        <table className="text-left w-max min-w-full">
          <thead>
            <tr className="py-4 border-b">
              <th className="py-2 px-4 font-bold">No.</th>
              <th className="py-2 px-4 font-bold">Status</th>
              <th className="py-2 px-4 font-bold">Customer</th>
              <th className="py-2 px-4 font-bold">Date</th>
              <th className="py-2 px-4 font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2 px-4">{order.id}</td>
                <td className="py-2 px-4"><Status status={order.status} /></td>
                <td className="py-2 px-4">{order.username}</td>
                <td className="py-2 px-4"> {order.orderDate}</td>
                <td className="py-2 px-4"> ৳ {order.total} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const Status = ({
  status,
}: {
  status: "pending" | "completed" | "hold" | "cancelled" | string;
}) => {
  const s = status.toLowerCase();
  return (
    <span
      className={`${
        s == "pending"
          ? "bg-blue-300 text-blue-800"
          : s == "completed"
          ? "bg-green-300 text-green-700"
          : s == "cancelled"
          ? "bg-red-300 text-red-600"
          : "bg-yellow-200 text-yellow-800"
      } p-1 rounded text-sm font-bold`}
    >
      {s}
    </span>
  );
};
