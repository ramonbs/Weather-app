import React from "react";

export default class Card extends React.Component<any> {
  render() {
    const { data } = this.props;
    const { location, current } = data;

    return (
      <section className="text-center bg-white text-black w-max mx-auto rounded-lg p-7 shadow-lg">
        <div className='text-center'>
          <p className='text-2xl font-bold text-slate-700'> {location.name} </p>
          <span className='text-slate-400 font-medium text-sm'>{location.region}, {location.country}</span>
        </div>
        <div className='font-bold text-slate-700 flex justify-center mt-2'>
          <span className='text-7xl'>
            {current.temp_c}
          </span>
          <span className='text-3xl'>ºC</span>
        </div>
        <div className='text-center items-center flex flex-col justify-center font-bold text-slate-700 mt-2'>
          <img src={current.condition.icon}></img>
          <p>{current.condition.text}</p>
        </div>
      </section>
    );
  }
}
