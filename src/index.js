import React, { Component } from 'react';
import { checkIfArrayIsAOB, checkIfObjectIsOOB, getFirstEle, getType, loopObject } from './util';

import PropTypes from 'prop-types';
import ValueViewer from './ValueViewer';

export default class WirecaseReactPiechart extends Component {
  static propTypes = {
    json: PropTypes.any.isRequired,
    tableProps: PropTypes.object,
    trProps: PropTypes.object,
    tdProps: PropTypes.object,
    thProps: PropTypes.object,
    tbodyProps: PropTypes.object,
    theadProps: PropTypes.object,
  };

  static styles = {
    td: {
      border: '1px solid #cccccc',
      textAlign: 'left',
      margin: 0,
      padding: '6px 13px',
    },
    th: {
      border: '1px solid #cccccc',
      textAlign: 'left',
      margin: 0,
      padding: '6px 13px',
      fontWeight: 'bold',
    },
  };
  static defaultProps = {};

  renderHeaderByKeys(keys, addExtra) {
    return (
      <thead {...this.props.theadProps}>
        <tr {...this.props.trProps}>
          {(() => {
            if (addExtra === 'addExtra') {
              return (
                <th {...this.props.thProps} style={this.constructor.styles.td}>
                  <span style={{ color: 'rgb(111, 11, 11)' }} />
                </th>
              );
            }
          })()}
          {keys.map((key, i) => {
            return (
              <th {...this.props.tdProps} key={i} style={this.constructor.styles.td}>
                <span style={{ color: 'rgb(111, 11, 11)' }}>{key}</span>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  objToTable(obj) {
    if (JSON.stringify(obj) === '{}') {
      return '{ }';
    } else {
      return (
        <table {...this.props.tableProps}>
          {this.renderHeaderByKeys(Object.keys(obj))}
          <tbody>
            <tr {...this.props.trProps}>
              {loopObject(obj, (v, key) => {
                return this.renderTd(v, key);
              })}
            </tr>
          </tbody>
        </table>
      );
    }
  }

  arrayToTable(obj) {
    if (getType(obj) === 'Array' && obj.length === 0) {
      return '[ ]';
    } else {
      return (
        <table {...this.props.tableProps}>
          <tbody>
            {loopObject(obj, (v, key) => {
              return (
                <tr key={key} {...this.props.trProps}>
                  <td {...this.props.tdProps} style={this.constructor.styles.td}>{`${key}`}</td>
                  {this.renderTd(v, key)}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }

  oobToTable(aob) {
    return (
      <table {...this.props.tableProps}>
        {this.renderHeaderByKeys(Object.keys(getFirstEle(aob)), 'addExtra')}
        <tbody>
          {loopObject(aob, (row, j) => {
            return (
              <tr {...this.props.trProps} key={j}>
                <td {...this.props.tdProps} style={this.constructor.styles.td}>
                  <ValueViewer value={j} />
                </td>
                {loopObject(getFirstEle(aob), (val, key) => {
                  return this.renderTd(row[key], key);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  renderTd(guess, index) {
    return (
      <td {...this.props.tdProps} key={index} style={this.constructor.styles.td}>
        {this.decideAndRender(guess)}
      </td>
    );
  }
  decideAndRender(guess) {
    if (getType(guess) === 'Array') {
      if (checkIfArrayIsAOB(guess)) {
        return this.aobToTable(guess);
      } else {
        return this.arrayToTable(guess);
      }
    }
    if (getType(guess) === 'Object') {
      if (checkIfObjectIsOOB(guess)) {
        return this.oobToTable(guess);
      } else {
        return this.objToTable(guess);
      }
    } else {
      return <ValueViewer value={guess} />;
    }
  }

  aobToTable(aob) {
    return (
      <table {...this.props.tableProps}>
        {this.renderHeaderByKeys(Object.keys(getFirstEle(aob)))}
        <tbody {...this.props.tbodyProps}>
          {loopObject(aob, (row, j) => {
            return (
              <tr {...this.props.trProps} key={j}>
                {loopObject(getFirstEle(aob), (val, key) => {
                  return this.renderTd(row[key], key);
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    return <div>{this.decideAndRender(this.props.json)}</div>;
  }
}
