import React, {Component} from 'react';
import View from '../View/View';

export class Component1 extends Component {
  render() {
    return(
      <div>
        <h3>Info</h3>
        <table width="100%" cellPadding="0" cellSpacing="0" className="tableInfo">
          <tr>
            <th>Tagnr</th><th>Ann</th><th>Lift</th><th>Ave</th><th>Tpl</th>
          </tr>
          <tr>
            <td>23</td>	<td>303</td>	<td>RC</td>	<td>67</td>	<td>4.3</td>
          </tr>
          <tr>
            <td>61</td>	<td>75</td>	<td>RC</td>	<td>67</td>	<td>4.3</td>
          </tr>
          <tr>
            <td>322</td>	<td>303</td>	<td>RC</td>	<td>67</td>	<td>4.3</td>
          </tr>
          <tr>
            <td>23</td>	<td>303</td>	<td>RC</td>	<td>67</td>	<td>4.3</td>
          </tr>
          <tr>
            <td>22</td>	<td>303</td>	<td>RC</td>	<td>67</td>	<td>4.3</td>
          </tr>
          <tr>
            <td>342</td>	<td>303</td>	<td>RC</td>	<td>67</td>	<td>4.3</td>
          </tr>
        </table>
      </div>
    )
  }
}