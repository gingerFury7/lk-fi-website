import React from 'react'
import { Chart } from "react-google-charts";

export const Stats = () => {
    return (
        <section className="section-header-2" style={{marginBottom: "-20px"}}><ul>
          <div  class="container ">
                 <h2 class="title">
                     <a name="myhistory" href="#0"><div class="stroke-text">Статистика</div></a>
                     <span class="text-theme">Моя</span> <span>Статистика</span>
                 </h2>
             </div>
        </ul>
         <ul  style={{
          width:"100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap"
        }}><div className="title-chart">
            <span class="text-theme"style={{
    position: "absolute",
    marginTop: "-4px"}}>Удар</span> 
          <Chart className="mt-4"
       width={"500px"}
       height={"350px"}
       chartType="LineChart"
        data={[
          [{ type: 'date',label:"Дата", id: 'Date' }, { type: 'number',label:"Удар", id: 'Won/Loss' }],
          [new Date(2021,10,14) ,33],
          [new Date(2021,10,15), 10],
          [new Date(2021,10,16), 23],
          [new Date(2021,10,17), 15],
          [new Date(2021,10,18), 25],
          [new Date(2021,10,19), 15],
          [new Date(2021,10,20), 31],
        ]}
        options={{
            chart: {
                subtitle: 'Оценка'
              },
        }}
        rootProps={{ 'data-testid': '2' }}
      />
        </div>
        <div className="title-chart" >
      <span class="text-theme" style={{
    position: "absolute",
    marginTop: "-4px"}}>Скорость</span>
      <Chart className="mt-4"
        width={"500px"}
        height={"350px"}
        chartType="LineChart"
        data={[
          [{ type: 'date',label:"Дата", id: 'Date' }, { type: 'number', label:"Скорость", id: 'Won/Loss' }],
          [new Date(2021,10,14) , 15],
          [new Date(2021,10,15), 21],
          [new Date(2021,10,16), 23],
          [new Date(2021,10,17), 17],
          [new Date(2021,10,18), 30],
          [new Date(2021,10,19), 29],
          [new Date(2021,10,20), 33],
        ]}
        options={{
            chart: {
                
                subtitle: 'Оценка',
                chartArea: { width: '50%' },
                colors: ['#ffab91'],

              },
        }}
        rootProps={{ 'data-testid': '2' }}
      /></div>
      <div className="title-chart" >
      <span class="text-theme" style={{
    position: "absolute",
    marginTop: "-4px"}}>Прыжок</span>
      <Chart className="mt-4"
        width={"500px"}
        height={"350px"}
        chartType="LineChart"
        data={[
          [{ type: 'date',label:"Дата", id: 'Date' }, { type: 'number',label:"Прыжок", id: 'Won/Loss' }],
          [new Date(2021,10,14) ,5],
          [new Date(2021,10,15),22],
          [new Date(2021,10,16), 22],
          [new Date(2021,10,17), 17],
          [new Date(2021,10,18), 18],
          [new Date(2021,10,19), 19],
          [new Date(2021,10,20), 21],
        ]}
        options={{
            chart: {
                
                subtitle: 'Оценка',
                chartArea: { width: '50%' }
              },
        }}
        rootProps={{ 'data-testid': '2' }}
      /></div>
      <div className="title-chart" >
      <span class="text-theme" style={{
        position: "absolute",
        marginTop: "-4px"}}>Реакция</span>
      <Chart className="mt-4"
       width={"500px"}
       height={"350px"}
       chartType="LineChart"
        data={[
          [{ type: 'date',label:"Дата", id: 'Date' }, { type: 'number',label:"Реакция", id: 'Won/Loss' }],
          [new Date(2021,10,14) , 10],
          [new Date(2021,10,15), 10],
          [new Date(2021,10,16), 10],
          [new Date(2021,10,17), 10],
          [new Date(2021,10,18), 18],
          [new Date(2021,10,19), 10],
          [new Date(2021,10,20), 11],
        ]}
        options={{
            chart: {
               
                subtitle: 'Оценка',
                chartArea: { width: '50%' }
              },
        }}
        rootProps={{ 'data-testid': '2' }}
      /></div></ul>
        </section>
    )
}
