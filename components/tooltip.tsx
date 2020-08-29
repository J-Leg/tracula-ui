import { TooltipProps, BoxSize, TooltipPayload } from 'recharts';
import React, { Component } from 'react';
import Styles from './tooltip.module.scss'

class CustomToolTip extends Component<TooltipProps, BoxSize> { 
  constructor(props: any) {
    super(props);
  }

  render() {
    if (this.props.active) {
      const { payload, label } = this.props

      // Sort in descending order
      const sortedPayload: TooltipPayload[] = payload.slice().sort((a, b) => {
        // Type assertion to keep compiler happy
        let aVal = a.value as number
        let bVal = b.value as number
        return bVal - aVal
      });

      return (
        <div className={Styles.tooltip}>
          <div>{label}</div>
          {
            sortedPayload.map((elem) => {
              return (<div className={Styles.element}
                           key={elem.name}>{elem.name + ': ' + elem.value} </div>) 
            })
          }
        </div>
      );
    }
    return null;
  }
}

export default CustomToolTip
