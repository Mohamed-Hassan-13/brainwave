import { notification1 } from "../assets";
import { notificationImages } from "../Constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        alt="image"
        width={62}
        height={62}
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="text-base font-semibold mb-1">{title}</h6>
        <div className="flex justify-between items-center">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, i) => (
              <li
                key={i}
                className="flex border-2 h-6 rounded-full w-6 bottom-n-12 overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt="notifiaction"
                />
              </li>
            ))}
          </ul>
          <div className="text-n-13 body-2">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
