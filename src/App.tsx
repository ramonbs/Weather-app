import React from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import { fetchData } from "./service/api";

const INITIAL_STATE = {
  location: {
    city: "",
    region: "",
    country: "",
  },
  current: {
    temp_c: 0,
    condition: {
      text: "Partly cloudy",
      icon: "https://cdn.weatherapi.com/weather/64x64/night/116.png",
    },
  },
};

class App extends React.Component<any> {
  state = {
    city: "",
    data: { ...INITIAL_STATE },
    savedDatas: [],
  };

  saveOnLocalStorage = (data: any) => {
    localStorage.setItem("weather", JSON.stringify(data));
  };

  onSubmit = (e: Event) => {
    const { city, savedDatas } = this.state;

    e.preventDefault();

    fetchData(city).then((data) => {
      this.setState({ 
        data,
        savedDatas: [...savedDatas, data],
        
      });
      this.saveOnLocalStorage(savedDatas);

    });
    this.state.city = "";
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { data, city } = this.state;
    return (
      <div className="App flex justify-center flex-col w-full h-screen">
        <h1 className="text-6xl text-center m-10 text-black font-mono">
          Weather App
        </h1>
        <Form
          onSubmit={this.onSubmit}
          handleChange={this.handleChange}
          city={city}
        />
        <Card data={data} />
      </div>
    );
  }
}

export default App;
