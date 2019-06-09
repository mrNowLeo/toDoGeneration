import React, {Component} from 'react';
import './Day.css';

class Day extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    };
    this.state = {
    	items: [
      	{
          name: 'Sleep',
          timeStart: '00:00',
          timeStop: '06:00'
        }, {
          name: 'Wash',
          timeStart: '06:00',
          timeStop: '06:10'
        }, {
          name: 'Breakfast',
          timeStart: '06:10',
          timeStop: '06:30'
        }, {
          name: 'Walk with a dog',
          timeStart: '06:30',
          timeStop: '07:00'
        }, {
          name: 'College',
          timeStart: '07:00',
          timeStop: '16:00'
        }, {
          name: 'Training',
          timeStart: '16:00',
          timeStop: '17:30'
        }, {
          name: 'Dinner',
          timeStart: '17:30',
          timeStop: '18:30'
        }, {
          name: 'Walk with a dog',
          timeStart: '18:30',
          timeStop: '19:00'
        }, {
          name: 'Read book',
          timeStart: '19:00',
          timeStop: '19:30'
        }, {
          name: 'Learn English',
          timeStart: '19:30',
          timeStop: '20:30'
        }, {
          name: 'Relax',
          timeStart: '20:30',
          timeStop: '21:00'
        }, {
          name: 'Drawing',
          timeStart: '21:00',
          timeStop: '22:00'
        }, {
          name: 'Sleep',
          timeStart: '22:00',
          timeStop: '24:00'
        }
      ],
      date: date.toLocaleString("ru", options)
    }
    this.countPercents();
  }

  countPercents() {
    const MINUTES_IN_PERCENT = 24 * 60 / 100;
    this.state.items.forEach((item) => {
      const timeStart = new Date('9.10.2014 ' + item.timeStart);
      const timeStartInMinutes = timeStart.getHours() * 60 + timeStart.getMinutes();
      const timeStop = new Date('9.10.2014 ' + item.timeStop);
      const timeStopInMinutes = timeStop.getHours() * 60 + timeStop.getMinutes();

      item.containerSize = (timeStopInMinutes - timeStartInMinutes) / MINUTES_IN_PERCENT;
    })
  }

  render() {
    return (
      <div className="Day_page">
        <h2 className="day_today">{this.state.date}</h2>
        <div className="Day_items-container">
          {this.state.items.map((item, key) => (
            <div style={{minHeight: item.containerSize + '%'}} key={key}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Day;