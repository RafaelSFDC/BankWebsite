import styles from "../style";
import { clients } from "./../constants/index";

const Clients = () => (
  <section className={` ${styles.flexCenter}my-4 `}>
    <div className={` ${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
        >
          <img
            src={client.logo}
            alt="cllient"
            className="sm:w-[192] w-[100px] objeect-contain "
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
