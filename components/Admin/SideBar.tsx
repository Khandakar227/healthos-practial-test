type SideBarItem = {
  name: string;
  link?: string;
  items?: SideBarItem[];
};
const sidebarItems: SideBarItem[] = [
  { name: "Customers", link: "/admin/customers" },
  { name: "Orders", link: "/admin/orders" },
  { name: "Marketing", link: "/admin/ma" },
  { name: "Products", link: "/admin/customers" },
  { name: "Settings", link: "/admin/settings" },
  { name: "Inbox", link: "/admin/inbox" },
];

function SideBar() {
  return (
    <div className="w-60 bg-zinc-700 text-white shadow py-4 grid sticky top-0 h-screen">
      <div className="overflow-y-auto scrollbar">
        <div className="w-full py-8"></div>
        {sidebarItems.map((item, i) => (
          <div key={`item ${i} ${item.name}`} className="border-b">
            <button className="text-sm w-full py-4 pl-4 pr-2 text-left hover:bg-slate-800 transition-all">
              {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
