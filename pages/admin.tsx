import { HiBars3BottomLeft } from "react-icons/hi2";
import Notification from "../components/Admin/Notification";
import AdminProfileButton from "../components/Admin/AdminProfileButton";
import SideBar from "../components/Admin/SideBar";
import { useEffect, useState } from "react";
import TotalSell from "../components/Admin/TotalSell";
import AverageOrderValue from "../components/Admin/AverageOrderValue";
import TotalOrders from "../components/Admin/TotalOrders";
import IncomeStatistics, {IncomeType} from "../components/Admin/IncomeStatistics";
import RecentReviews, {Review} from "../components/Admin/RecentReviews";
import useSWR from "swr/immutable";
import fetcher from "../lib/fetcher";
import Loader from "../components/common/Loader";
import RecentOrders from "../components/Admin/RecentOrders";

// Dummy data
const incomeData:IncomeType[] = Array.from({ length: 12 }, (item, i) => {
  return {month: new Date(0, i).toLocaleString("en-US", { month: "short" }), income: Math.floor(Math.random()*10000)};
});

const orders = [
  {id: "1", status: "pending", username: "John Doe", orderDate: "1-12-2022", total: 300},
  {id: "2", status: "completed", username: "Jane Doe", orderDate: "11-12-2022", total: 350},
  {id: "3", status: "cancelled", username: "Tony Mark", orderDate: "21-12-2022", total: 400},
  {id: "4", status: "hold", username: "Catherine", orderDate: "22-12-2022", total: 210},
]

function Admin() {
  //Dummy reviews
  const {data: products, error, isLoading} = useSWR('https://fakestoreapi.com/products?limit=4', fetcher);

  const [showSideBar, setShow] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) setShow(false);
  }, []);

  return (
    <>
      <div className="w-full min-w-screen min-h-screen bg-[#f5f7fa] flex">
        <div
          className={`top-0 right-0 fixed md:relative md:left-0 transition-all duration-500 ${
            showSideBar ? "w-60 translate-x-0" : "translate-x-60 md:-translate-x-60 w-0"
          } z-10`}
        >
          <SideBar />
        </div>
        {/* Admin navbar */}
        <div className="flex-auto">
          <div className="flex gap-4 p-4 shadow bg-black text-white justify-between sticky top-0">
            <button onClick={() => setShow(!showSideBar)}>
              <HiBars3BottomLeft className="w-8 h-8" />
            </button>
            <div className="flex justify-between items-center gap-8">
              <Notification numOfNotification={4} />
              <AdminProfileButton
                username="John Doe"
                email="johndoe84@gmail.com"
              />
            </div>
          </div>
          <div className="p-4 grid gap-4">
            <div className="grid lg:grid-cols-3 gap-4">
              <TotalSell amount={30000} profit={34} comparedTo={"December 2021"} />
              <AverageOrderValue amount={2508} comparedTo={"December 2021"} fluctuationFromPrev={-24} />
              <TotalOrders numberOfOrders={250} comparedTo={"December 2021"} profit={12} />
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <IncomeStatistics incomeData={incomeData} />
              {
                isLoading ? <Loader /> : ""
              }
              {
                products?.length ? 
                <RecentReviews
                  reviews={(products as Review[]).map((review:any) => ({productName: review.title, productImage: review.image, username: "Jhon Doe", rating: Math.random()*5}))}
                />
                : ""
              }
            </div>
            <RecentOrders orders={orders}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
