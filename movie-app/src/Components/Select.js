import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


export class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defVal: '1',

        }
    }

    handleFilter = (e) => {
        e.preventDefault()
        if (e.target.value === 'popular' || 'now_playing' || 'top_rated' || 'upcoming') {
            this.props.history.push(`/q/${e.target.value}`);
        }
    }



    render() {
        return (
            <div className="GenreSelect">
                <div className="select-wrapper">
                    <form onChange={(e) => this.handleFilter(e)}>
                        <select name="genres" id="genres" value={this.state.defVal} onChange={(e) => { this.setState({ defVal: e.target.value }) }}>
                            <option disabled value="1">Select Filter &nbsp;&nbsp;</option>
                            <option value="popular">Popular</option>
                            <option value="now_playing">Now Playing</option>
                            <option value="top_rated">Top Rated</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Select);