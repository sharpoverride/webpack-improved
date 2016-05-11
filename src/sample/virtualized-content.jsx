import * as React from 'react';
import * as ReactServer from 'react-dom/server';

import {
    AutoSizer,
    VirtualScroll,
    CellMeasurer
} from 'react-virtualized';

export default class doSomething extends React.Component<any, any> {
    rowRenderer(data) {
        const {index, isScrolling} = data;

        if (isScrolling && false) {
            return (<div className="VirtualScroll__row">
                ...is scrooling..
            </div>);
        }

        return (<div className="VirtualScroll__row">
            A row {data.index}
        </div>);
    }

    noRowsRenderer() {
        return (<div className='no-rows VirtualScroll__row'>Empty</div>);
    }

    getRowHeight(data) {
        if (data.index % 3 === 0) {
            return 150;
        }
        return 25;
    }
    render() {

        const overscanRowCount = 0;
        const rowCount = 102;
        const scrollToIndex = undefined;
        const showScrollingPlaceholder = false;
        const useDynamicRowHeight = true;
        const virtualScrollHeight = 300;
        const virtualScrollRowHeight = 50;

        const columnCount = 1, height = 10;
        return (<div
            width="100%"
            >
            <AutoSizer disableHeight>
                {({ width }) => (
                    <VirtualScroll
                        height={virtualScrollHeight}
                        overscanRowCount={overscanRowCount}
                        noRowsRenderer={this.noRowsRenderer}
                        rowCount={rowCount}
                        rowHeight={this.getRowHeight}
                        rowRenderer={this.rowRenderer}
                        scrollToIndex={scrollToIndex}
                        width={width}
                        />) }
            </AutoSizer>
        </div>);
    }
}