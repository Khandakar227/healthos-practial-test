import { HiBell } from 'react-icons/hi2'

function Notification({numOfNotification}:{numOfNotification:number}) {
  return (
    <button className="relative">
      <span className="absolute top-0 right-0 bg-red-600 font-lato w-4 h-4 rounded-full text-xs">
        {numOfNotification}
      </span>
      <HiBell className="w-8 h-8" />
    </button>
  );
}

export default Notification;
