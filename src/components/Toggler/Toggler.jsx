import React from 'react';
import './toggler.css';
import { UNITS } from '../../core/utils';
import PropTypes from 'prop-types';

export class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onMeasureSystemChange(event.target.value);
    }

    render() {
        return (
            <div className="switch-container">
                <form>
                    <div className="switch-field">
                        <input type="radio"
                            id="switch_left"
                            name="switch_1"
                            value={UNITS.in}
                            checked={this.props.measureSystem === UNITS.in}
                            onChange={this.handleChange}/>
                        <label htmlFor="switch_left">IN</label>

                        <input type="radio"
                            id="switch_right"
                            name="switch_2"
                            value={UNITS.cm}
                            checked={this.props.measureSystem === UNITS.cm}
                            onChange={this.handleChange}/>
                        <label htmlFor="switch_right">CM</label>
                    </div>
                </form>
            </div>
        );
    }
}

Toggler.propTypes = {
    onMeasureSystemChange: PropTypes.func.isRequired
};
