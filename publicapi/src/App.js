import React from "react";
import axios from "axios";
import Traffic from "./Traffic";

class App extends React.Component {
  state = {
    isLoading: true,
    data: [],
  };

  getTraffic() {
    const url = `http://data.ex.co.kr/openapi/safeDriving/forecast?key=8894401377&type=json`;
    console.log(url);
    axios.get(url).then((Response) => {
      const data = Response.data.list;
      console.log(data);

      this.setState({
        isLoading: false,
        data: data,
      });
    });
  }
  componentDidMount() {
    this.getTraffic();
  }
  render() {
    const { isLoading, data } = this.state;

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="trafficInfo">
            {data.map((d, cnt) => {
              return (
                <Traffic
                  sdate={data[cnt].sdate}
                  stime={data[cnt].stime}
                  cjunkook={data[cnt].cjunkook}
                  cjibangDir={data[cnt].cjibangDir}
                  cseoulDir={data[cnt].cseoulDir}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default App;
