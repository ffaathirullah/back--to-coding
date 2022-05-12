import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Modal from "./Modal";
function Header() {
  const router = useRouter();

  return (
    <div className="sidebar">
      <Link href="/">
        <a className={router.pathname == "/" ? "active " : ""}>
          <Image
            style={{ marginRight: 20 }}
            src={router.pathname == "/" ? "/Home1.svg" : "/Home.svg"}
            height={16}
            width={19}
          />
          <p style={{ marginLeft: 5, paddingTop: 15, width: 20 }}>Home</p>
        </a>
      </Link>
      <Link href={`/goals/${1}`}>
        <a className={router.pathname == "/goals" ? "active " : ""}>
          <Image
            style={{ marginRight: 20 }}
            src={router.pathname == "/goals" ? "/goals1.svg" : "/goals.svg"}
            height={16}
            width={19}
          />
          <p style={{ marginLeft: 5, paddingTop: 15, width: 20 }}>Goals</p>
        </a>
      </Link>
      <Link href="/calendar">
        <a className={router.pathname == "/calendar" ? "active " : ""}>
          <Image
            style={{ marginRight: 20 }}
            src={
              router.pathname == "/calendar"
                ? "/calendar1.svg"
                : "/calendar.svg"
            }
            height={16}
            width={19}
          />
          <p style={{ marginLeft: 5, paddingTop: 15, width: 20 }}>Calendar</p>
        </a>
      </Link>

      <div style={{ posititon: "fixed", bottom: 10 }}>
        <Modal />
      </div>
    </div>
  );
}

export default Header;
