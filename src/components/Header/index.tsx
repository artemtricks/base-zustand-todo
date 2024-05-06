import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import svgPlus from "../../assets/plus.svg";

const MainHeader = () => {
  return (
    <Header style={{ backgroundColor: "#b5b5b5", borderRadius: 10 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to={"/form"} style={{ marginRight: 10 }}>
          <Button style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 5 }}>Добавить</div>
            <img src={svgPlus} alt="" style={{ width: 15, height: 15 }} />
          </Button>
        </Link>
        <Link to={"/"}>
          <Button style={{ marginRight: 10 }}>Все задачи</Button>
        </Link>
        {/* <Link to={"/complited"}>
          <Button> Выполненные</Button>
        </Link> */}

        <h1
          style={{
            margin: "auto",
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          мои задачи
        </h1>
      </div>
    </Header>
  );
};

export default MainHeader;
