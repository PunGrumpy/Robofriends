import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchField: '',
    //     };
    // }

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [count, setCount] = useState(0);

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }));
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));

        console.log(count);
    }, [count]); // only run if count changes

    const onSearchChange = event => {
        setSearchField(event.target.value);
    };

    // const { robots, searchField } = this.state;
    const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
        <div className="tc">
            {' '}
            <h1 className="f1">Loading</h1>{' '}
        </div>
    ) : (
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <div className="pa3">
                <button className="" onClick={() => setCount(count + 1)}>
                    Click Me
                </button>
            </div>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filterRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;
