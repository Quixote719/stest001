import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterService extends Component {

  getService(){

      return (({data})=>(
                <div>
                  {data.map((item, i)=>(
                    <div key={i} className="FooterRow">
                        <Link to={item.link}>
                            {item.name}
                        </Link>
                      <hr className="SpLine"/>
                    </div>
                  ))}
                </div>
              )
      );

  }

  render(){
    const Service = this.getService();
    return(
      <div>
        <div className="FooterSubt">
          Service
          <hr className="SpLine"/>
        </div>
        <Service data={this.props.rows}/>
      </div>
    )
  }
}

export default FooterService;
