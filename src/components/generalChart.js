import React from 'react';

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

import {chartData}  from '../actions/chartData';



class App extends React.Component {
    render() {
        return (
            <Chart
                title="Grafiek"
                dataSource={chartData}
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


export default App;
