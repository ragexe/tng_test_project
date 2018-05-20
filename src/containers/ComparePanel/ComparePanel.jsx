import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculations } from '../../core/ui/calculations';
import { Header } from '../../components/Header/Header';
import { CompareWithItem } from '../../components/ComparePanel/CompareWithItem';
import './comparePanel.css';
import { Toggler } from '../../components/Toggler/Toggler';
import { bindActionCreators } from 'redux';
import  * as compareActions from '../ComparePanel/actions';

export class ComparePanel extends Component {
    constructor(props) {
        super(props);
        this.state = { domReady: false};
        this.handleMeasureSystemChange = this.handleMeasureSystemChange.bind(this);
    }

    componentDidMount() {
        this.setState({ domReady: true });
    }

    showCurrentMode(mode, product, item) {
        const
            width = this.comparePanelBody.offsetWidth,
            height = this.comparePanelBody.offsetHeight;
        return (
            <CompareWithItem
                key={item.id}
                product={product}
                item={item}
                calculations={ calculations(width, height) }
                bodySize = {{width, height}}
                measureSystem = {this.props.measureSystem}
            />);
    }

    handleMeasureSystemChange(value) {
        this.props.compareActions.changeMeasureSystem(value);
        this.props.compareActions.saveClientSideMeasureSystem();
    }

    render() {
        return (
            <div className="compare-panel">
                <Header mode={this.props.currentMode} productName={this.props.product.name} currentItems={this.props.currentItems} />
                <div className="compare-panel__body" ref={(body) => this.comparePanelBody = body}>
                    <Toggler measureSystem={this.props.measureSystem} onMeasureSystemChange={this.handleMeasureSystemChange}/>
                    {
                        this.state.domReady &&
                        this.showCurrentMode(this.props.currentMode, this.props.product, this.props.currentItems[0], this.props.measureSystem)
                    }
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        currentMode: state.ControlPanel.currentMode,
        currentItems: state.ControlPanel.currentItems,
        product: state.ComparePanel.product,
        measureSystem: state.ComparePanel.measureSystem
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        compareActions: bindActionCreators(compareActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComparePanel);
