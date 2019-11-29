import React from 'react';

import {connect} from 'react-redux';

import {set_dashboard_data} from "../../actions/charts";

import Chart, {
    ArgumentAxis,
    Label,
    Legend,
    Series,
    Tooltip,
    ValueAxis,
    Format,
    ConstantLine,
} from 'devextreme-react/chart';

import {charts}  from '../../actions/charts';



class General extends React.Component {

    static getDerivedStateFromProps(props, state) {
        if (!props.loaded)
            props.set_dashboard_data();

        return state;
    }

    render() {
        return (
            <Chart
                title="Grafiek"
                dataSource={this.props.content}
                id="chart">

                <ValueAxis
                    name="Value"
                    position="left"
                    tickInterval={10}
                    showZero={true}
                    valueMarginsEnabled={false}
                >
                    <Label format="decimal" />
                </ValueAxis>

                {/*<ArgumentAxis tickInterval={10} >*/}
                {/*    <Label format="decimal" />*/}
                {/*</ArgumentAxis>*/}

                <Series
                    type="line"
                    valueField="val"
                    argumentField="arg"
                />

                <Tooltip
                    enabled={true}
                    shared={true}
                >
                    <Format
                        type="largeNumber"
                        precision={1}
                    />
                </Tooltip>

                <Legend
                    visible={false}
                />

            </Chart>
        );
    }
}

const mapStateToProps = state => ({
    loaded: state.dashboard.charts.loaded,
    content: state.dashboard.charts.content,
});

const mapDispatchToProps = {
    set_dashboard_data,
};

export default connect(mapStateToProps, mapDispatchToProps)(General);
