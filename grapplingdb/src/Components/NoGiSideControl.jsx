import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Iframe from 'react-iframe';


function NoGiSideControl(props) {
    return (
        <div>
           <Card>
              
               <h3>Name: Kimura</h3>
                <h4>Type: Submission</h4>
                <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/p-6lmaseoGI"
                 title="YouTube video player" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowfullscreen>

                </iframe>
           </Card>
           
           <Card>
           <h3>Name: Arm Triangle</h3>
                <h4>Type: Choke</h4>
                <iframe width="560" 
                height="315" 
                src="https://www.youtube.com/embed/qIliKQiN2K8" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>

                </iframe>
           
           </Card>
        </div>
    );
}

export default NoGiSideControl;