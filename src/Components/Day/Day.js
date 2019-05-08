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
  }
  render() {
    return (
      <div className="day_">
        <h2 className="day_today">{this.state.date}</h2>
        {this.state.items.map((item, key) => (
          <div key={key}>
            {item.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Day;