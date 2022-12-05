import React from 'react';

export default class Form extends React.Component<any> {

  render() {
    const { onSubmit, handleChange, city } = this.props;

    return (
      <section className='flex justify-center flex-col'>
        <form onSubmit={onSubmit} className="text-center  justify-center items-center flex flex-col w-1/2 m-auto gap-3">
          <input 
            type="text" 
            name="city"
            value={city}
            placeholder="City..."
            onChange={handleChange}
            className="p-3 w-full bg-white text-black rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent focus:bg-gray-100 md:w-1/3"
          />
          <button 
          type="submit" 
          className="border bg-blue-600 text-white border-black rounded-lg w-full text-center font-bold m-auto my-5 p-2 hover:bg-blue-500 md:w-1/3">
            Get Weather
          </button>
        </form>
      </section>
    )
  }
}